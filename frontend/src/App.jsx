import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import NavigationBar from '@/components/navbar/NavigationBar.jsx';
import HomePage from '@/pages/HomePage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import { AuthProvider } from '@/components/contexts/AuthContext.jsx';
import Footer from '@/components/footer/Footer.jsx';
import './App.css';
import AboutUsPage from '@/pages/AboutUsPage.jsx';
import ProgramsPage from '@/pages/ProgramsPage.jsx';
import MembershipPage from '@/pages/MembershipPage.jsx';
import EventsPage from '@/pages/EventsPage.jsx';
import SponsorsPage from '@/pages/SponsorsPage.jsx';
import ScholarshipPage from '@/pages/ScholarshipPage.jsx';
import PaymentForm from '@/components/stripe/PaymentForm.jsx';
import PaymentSuccess from '@/components/stripe/PaymentSuccess.jsx';
import PaymentFailure from '@/components/stripe/PaymentFail.jsx';
import CheckoutForm from '@/components/forms/checkout/CheckoutForm.jsx';
import Stripe from '@/components/stripe/Stripe.jsx';

// Load your Stripe publishable key
const stripePromise = loadStripe(
  'pk_test_51PFnMI01foXv66KIhbVeWG24hWrFBnmaiIVcJkEp93TFWYqngYdLp84GGxdeEAbDEHIJwd69vGz4Lhys2K2mcftV00EVE4CCOc',
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-wrapper">
          <NavigationBar />
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/sponsors" element={<SponsorsPage />} />
              <Route path="/scholarship" element={<ScholarshipPage />} />
              <Route
                path="/payment"
                element={
                  <Elements stripe={stripePromise}>
                    {/*<PaymentForm />*/}
                    <Stripe />
                    {/*<CheckoutForm />*/}
                  </Elements>
                }
              />
              {/*<Route path="/payment-success" element={<PaymentSuccess />} />*/}
              {/*<Route path="/payment-failure" element={<PaymentFailure />} />*/}
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
