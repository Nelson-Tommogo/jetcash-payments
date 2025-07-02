import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Reviews.css';

const reviews = [
  {
    name: 'AviatorKing254',
    avatar: '',
    review: 'Won big today! Fast payouts and great support. Highly recommend for Aviator fans.',
    result: 'Cashed out at 125.5x',
  },
  {
    name: 'LuckyFlyer',
    avatar: '',
    review: 'Smooth experience, got my winnings instantly after sending proof. Will play again!',
    result: 'Cashed out at 89.2x',
  },
  {
    name: 'MillyAviator',
    avatar: '',
    review: 'Love the quick payments. The support team is always helpful!',
    result: 'Cashed out at 153.0x',
  },
  {
    name: 'PilotJoe',
    avatar: '',
    review: 'Best Aviator payouts in Kenya. Sent proof via WhatsApp and got paid in minutes.',
    result: 'Cashed out at 110.7x',
  },
  {
    name: 'SkyQueen',
    avatar: '',
    review: 'Aviator is my favorite! Got my cashout super fast.',
    result: 'Cashed out at 99.8x',
  },
  {
    name: 'FlyGuy',
    avatar: '',
    review: 'No delays, no stress. Sent proof and got paid. 5 stars!',
    result: 'Cashed out at 181.3x',
  },
  {
    name: 'BettyWings',
    avatar: '',
    review: 'I trust this site for Aviator. Always paid out quickly.',
    result: 'Cashed out at 207.4x',
  },
  {
    name: 'Captain254',
    avatar: '',
    review: 'Great experience, easy to send proof and get my winnings.',
    result: 'Cashed out at 133.2x',
  },
  {
    name: 'AviatorPro',
    avatar: '',
    review: 'Support is always available. Fastest payouts for Aviator.',
    result: 'Cashed out at 154.1x',
  },
  {
    name: 'MosesJet',
    avatar: '',
    review: 'I recommend to all Aviator players. Got my money in minutes.',
    result: 'Cashed out at 406.9x',
  },
  {
    name: 'NjeriPilot',
    avatar: '',
    review: 'Best Aviator site in Kenya. Quick and reliable payments.',
    result: 'Cashed out at 140.0x',
  },
  {
    name: 'LuckyBird',
    avatar: '',
    review: 'Sent proof on Telegram, got paid instantly. Love it!',
    result: 'Cashed out at 155.0x',
  },
];

function Reviews() {
  return (
    <div className="reviews-section">
      <h2 className="reviews-title">What Aviator Players Say</h2>
      <div className="reviews-list">
        {reviews.map((r, idx) => (
          <div className="review-card" key={idx}>
            <div className="review-avatar">
              {r.avatar ? (
                <img src={r.avatar} alt={r.name} />
              ) : (
                <FaUserCircle size={40} color="#bbb" />
              )}
            </div>
            <div className="review-content">
              <div className="review-name">{r.name}</div>
              <div className="review-result">{r.result}</div>
              <div className="review-text">"{r.review}"</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews; 