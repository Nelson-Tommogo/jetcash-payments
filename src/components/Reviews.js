import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Reviews.css';

const reviews = [
  // Original reviews (unchanged)
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
  {
    name: 'BotMasterKE',
    avatar: '',
    review: 'My custom bot hit 500x twice this week! Instant payouts after sending screenshots.',
    result: 'Cashed out at 500x (2x)',
  },
  {
    name: 'AutoPilotPro',
    avatar: '',
    review: 'Using my automated strategy - 300x cashout with zero manual input. Telegram support is quick!',
    result: 'Cashed out at 300.7x',
  },
  {
    name: 'AlgorithmKing',
    avatar: '',
    review: 'Coded my own bot and it crushed the game. Got paid within 5 minutes of submitting proof.',
    result: 'Cashed out at 427.3x',
  },
  {
    name: 'RoboBetter',
    avatar: '',
    review: 'Automated system never sleeps! 4 cashouts above 200x while I was at work.',
    result: '4 cashouts 200x+',
  },
  {
    name: 'AI_Aviator',
    avatar: '',
    review: 'Machine learning bot adapted perfectly. Withdrawals processed faster than manual players!',
    result: 'Cashed out at 350.2x',
  },
  {
    name: 'ScriptLord',
    avatar: '',
    review: 'Precision bot timing gave me 3 consecutive 100x+ wins. Support didn\'t question my method!',
    result: '3x 100x+ wins',
  },
  {
    name: 'BinaryPilot',
    avatar: '',
    review: 'Binary strategy bot works wonders. 15 successful cashouts this week alone!',
    result: '15 cashouts 50x-200x',
  },
  {
    name: 'QuantFlyer',
    avatar: '',
    review: 'Quantitative analysis bot found perfect patterns. 600x mega win paid instantly!',
    result: 'Cashed out at 600x',
  },
  {
    name: 'BotFatherKE',
    avatar: '',
    review: 'My bot army dominates Aviator 24/7. Never had payment issues despite multiple accounts.',
    result: 'Daily 100x+ wins',
  },
  {
    name: 'AutoCashoutPro',
    avatar: '',
    review: 'Set my bot to auto-cashout at 150x - works like a charm every time. Fastest payouts!',
    result: 'Daily 150x cashouts',
  },
  {
    name: 'PythonPilot',
    avatar: '',
    review: 'Python script never misses the optimal exit point. 400x withdrawal processed in 2 minutes!',
    result: 'Cashed out at 400x',
  },
  {
    name: 'SmartContractor',
    avatar: '',
    review: 'Blockchain-based bot executes perfect timing. Support actually complimented my strategy!',
    result: 'Cashed out at 380.5x',
  },
  {
    name: 'NeuralNetFlyer',
    avatar: '',
    review: 'Neural network predicts multipliers with scary accuracy. 250x win while I was sleeping!',
    result: 'Cashed out at 250x',
  },
  {
    name: 'API_King',
    avatar: '',
    review: 'Direct API integration gives me microsecond advantage. 700x mega win paid no questions!',
    result: 'Cashed out at 700x',
  },
  {
    name: 'BotSquadLeader',
    avatar: '',
    review: 'Running 5 bots simultaneously - all hitting 100x+ daily. Payouts faster than single players!',
    result: '5x 100x daily',
  },
  {
    name: 'AutoAviatorX',
    avatar: '',
    review: 'Fully automated system makes money while I focus on my day job. 200x standard cashout!',
    result: 'Daily 200x wins',
  },
  {
    name: 'CodeCrusher',
    avatar: '',
    review: 'My C++ bot processes game data faster than anyone. 300x wins look easy!',
    result: 'Cashed out at 300x',
  },
  {
    name: 'PatternFinder',
    avatar: '',
    review: 'Bot detects subtle patterns humans miss. 450x win shocked even the support team!',
    result: 'Cashed out at 450x',
  },
  {
    name: 'InstantCashout',
    avatar: '',
    review: 'Bot set to instant 50x cashout - small but consistent wins add up fast!',
    result: '50+ daily 50x wins',
  },
  {
    name: 'AviatorHacker',
    avatar: '',
    review: 'Not hacking - just superior algorithms! 800x personal best paid immediately.',
    result: 'Cashed out at 800x',
  },
  {
    name: 'BotOrNot',
    avatar: '',
    review: 'They say bots don\'t work - my 175x daily average says otherwise! Instant M-Pesa payouts.',
    result: 'Daily 175x avg',
  },
  {
    name: 'ScalperPro',
    avatar: '',
    review: 'High-frequency bot makes 100s of micro-bets. 10+ cashouts daily at 30x-100x!',
    result: '10+ daily cashouts',
  },
  {
    name: 'ThePredictor',
    avatar: '',
    review: 'Predictive analytics bot is 85% accurate. 350x win while eating dinner!',
    result: 'Cashed out at 350x',
  },
  {
    name: 'NoSleepBot',
    avatar: '',
    review: '24/7 operation means I win while the world sleeps. 200x at 3AM paid by 3:05AM!',
    result: 'Cashed out at 200x',
  },
  {
    name: 'EdgeFinder',
    avatar: '',
    review: 'Found a 2% edge with my bot - now printing money daily. 400x weekends special!',
    result: 'Daily 100x-400x',
  },
  {
    name: 'BotMillionaire',
    avatar: '',
    review: 'Turned 10K into 1M in 3 months with my custom bot. Withdrawals always smooth!',
    result: '1,000x ROI',
  },
  {
    name: 'AviatorSniper',
    avatar: '',
    review: 'Bot snipes only the juiciest multipliers. 550x personal record today!',
    result: 'Cashed out at 550x',
  },
  {
    name: 'TheArchitect',
    avatar: '',
    review: 'Designed the perfect betting architecture. 250x like clockwork every evening!',
    result: 'Daily 250x wins',
  },
  {
    name: 'MachineMind',
    avatar: '',
    review: 'My bot thinks 10 moves ahead. 600x win had support asking for tips!',
    result: 'Cashed out at 600x',
  },
  {
    name: 'FrequencyTrader',
    avatar: '',
    review: 'High-frequency betting bot dominates. 15 cashouts yesterday between 50x-300x!',
    result: '15 cashouts daily',
  },
  {
    name: 'TheProfessor',
    avatar: '',
    review: 'Math PhD turned Aviator bot genius. 700x theoretical maximum achieved!',
    result: 'Cashed out at 700x',
  },
  {
    name: 'DarkPool',
    avatar: '',
    review: 'My bot operates under the radar. Consistent 150x wins without raising flags!',
    result: 'Daily 150x wins',
  },
  {
    name: 'TheEngineer',
    avatar: '',
    review: 'Engineered the perfect exit strategy. 300x feels like guaranteed income now!',
    result: 'Daily 300x wins',
  },
  {
    name: 'BotOverlord',
    avatar: '',
    review: 'Command an army of 20 bots. Small consistent wins beat manual players any day!',
    result: '50+ daily cashouts',
  },
  {
    name: 'TheStatistician',
    avatar: '',
    review: 'Statistical arbitrage bot finds mispriced multipliers. 400x win proved my models right!',
    result: 'Cashed out at 400x',
  },
  {
    name: 'SilentWinner',
    avatar: '',
    review: 'Bot runs silently in background. Woke up to 3 approved withdrawals (200x, 150x, 300x)!',
    result: '3x 150x+ wins',
  },
  {
    name: 'TheQuant',
    avatar: '',
    review: 'Quantum computing-inspired algorithm crushed it today. 500x and counting!',
    result: 'Cashed out at 500x',
  },
  {
    name: 'BlackBox',
    avatar: '',
    review: 'Nobody knows my bots strategy - not even me! But 200x daily wins speak for themselves.',
    result: 'Daily 200x wins',
  },
  {
    name: 'TheOracle',
    avatar: '',
    review: 'My bot predicts crashes before they happen. 350x cashout right before a 1.01x crash!',
    result: 'Cashed out at 350x',
  },
  {
    name: 'BotWhisperer',
    avatar: '',
    review: 'I speak machine language - and my bots whisper sweet 250x wins to me daily!',
    result: 'Daily 250x wins',
  },
  {
    name: 'TheSystem',
    avatar: '',
    review: 'Not a bot - a complete system. 300x wins are systematic, not luck!',
    result: 'Daily 300x wins',
  },
  {
    name: 'InvisibleHand',
    avatar: '',
    review: 'My bot is the invisible hand guiding my profits. 400x without touching keyboard!',
    result: 'Cashed out at 400x',
  },
  {
    name: 'TheExecutioner',
    avatar: '',
    review: 'Perfect execution beats gut feeling. 250x executed at precisely the right millisecond!',
    result: 'Cashed out at 250x',
  },
  {
    name: 'BotTycoon',
    avatar: '',
    review: 'From 10K to 1M in 6 months with bot empire. Withdrawals processed like clockwork!',
    result: '100x ROI',
  },
  {
    name: 'TheStrategist',
    avatar: '',
    review: 'War-gamed every scenario. My bot adapts in real-time - 300x today in volatile conditions!',
    result: 'Cashed out at 300x',
  },
  {
    name: 'MoneyTree',
    avatar: '',
    review: 'Bot tends my money tree. Just harvested another 200x win!',
    result: 'Cashed out at 200x',
  },
  {
    name: 'TheClockwork',
    avatar: '',
    review: 'Like clockwork - 150x at noon, 200x at 4PM, 250x at 8PM. All automated!',
    result: '3x daily cashouts',
  },
  {
    name: 'BotVantage',
    avatar: '',
    review: 'Microsecond advantage = massive profits. 500x win today proves the edge is real!',
    result: 'Cashed out at 500x',
  },
  {
    name: 'TheConductor',
    avatar: '',
    review: 'Orchestrating multiple bots in harmony. 10 cashouts yesterday between 100x-400x!',
    result: '10x 100x+ wins',
  },
  {
    name: 'ProfitPilot',
    avatar: '',
    review: 'Set autopilot to profit mode. 300x achieved while I was at the beach!',
    result: 'Cashed out at 300x',
  },
  {
    name: 'TheMaestro',
    avatar: '',
    review: 'Conducting the perfect betting symphony. 400x crescendo today!',
    result: 'Cashed out at 400x',
  },
  {
    name: 'AutoMillionaire',
    avatar: '',
    review: 'Automated my way to first million. 250x daily wins build up fast!',
    result: 'Daily 250x wins',
  },
  {
    name: 'TheVisionary',
    avatar: '',
    review: 'Saw the patterns others missed. Bot executes my vision for consistent 200x wins!',
    result: 'Daily 200x wins',
  },
  {
    name: 'BotGenius',
    avatar: '',
    review: 'They said it could n0t be done. 600x win and instant payout proves them wrong!',
    result: 'Cashed out at 600x',
  },
  {
    name: 'ThePioneer',
    avatar: '',
    review: 'Pioneered new bot techniques. 700x win today pushes boundaries again!',
    result: 'Cashed out at 700x',
  },
  {
    name: 'FutureOfBetting',
    avatar: '',
    review: 'This is the future - bots outperform humans 100:1. My 300x daily average proves it!',
    result: 'Daily 300x avg',
  },
  {
    name: 'TheLegend',
    avatar: '',
    review: 'Legendary bot status achieved. 1000x mega win paid without hesitation!',
    result: 'Cashed out at 1000x',
  }
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