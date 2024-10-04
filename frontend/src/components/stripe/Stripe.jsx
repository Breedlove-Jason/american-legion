import { useState, useEffect } from 'react';
import { API_URL } from '@/config/index.js';

export default function Stripe() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if redirected back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready.",
      );
    }
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch(
        `${API_URL}/stripe/create-checkout-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Include credentials if using authentication
          // credentials: 'include',
        },
      );
      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setMessage('Failed to initiate checkout session.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during checkout.');
    }
  };

  return (
    <section>
      {message ? (
        <p>{message}</p>
      ) : (
        <>
          <div className="product">
            <img
              src="https://i.imgur.com/EHyR2nP.png"
              alt="The cover of Stubborn Attachments"
            />
            <div className="description">
              <h3>Stubborn Attachments</h3>
              <h5>$20.00</h5>
            </div>
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      )}
    </section>
  );
}
