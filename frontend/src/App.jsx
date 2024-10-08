import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Checkout from '@/components/stripe/Checkout.jsx';

import NewsPage from "@/pages/NewsPage.jsx";


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
              <Route path="/news" element={<NewsPage/>}/>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/payment"
                element={
                    <Checkout />
                }
              />

            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
