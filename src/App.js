import React from 'react';
import Navbar from './components/Navbar.js';
import StripeLikePage from './StripeLikePage.js';
import Footer from './components/Footer.js';
import Reviews from './components/Reviews.js';
import './App.css';
import { FaWhatsapp,} from 'react-icons/fa';

const whatsappNumber = '254759735505';
const whatsappMessage = encodeURIComponent("Hi, I've made a payment. Here's my proof:");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


function FloatingContactIcons() {
  return (
    <div className="floating-contact-icons">
      <div className="floating-contact-heading">Send Payment Proof</div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" title="Send proof via WhatsApp">
        <FaWhatsapp size={40} color="#25D366" style={{ marginBottom: '10px' }} />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-layout">
        <section className="main-section">
          <StripeLikePage />
        </section>
        <section className="reviews-section-wrapper">
          <Reviews />
        </section>
      </main>
      <FloatingContactIcons />
      <Footer />
    </div>
  );
}

export default App;
