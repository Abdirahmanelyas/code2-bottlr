import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ addBotToArmy }) => {
  const [bots, setBots] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://https://bot-battlr-json-server-rho.vercel.app/bots')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBots(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} handleClick={() => addBotToArmy(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;