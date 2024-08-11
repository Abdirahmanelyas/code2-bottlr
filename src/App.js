import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './styles.css'; 

const App = () => {
  const [army, setArmy] = useState([]);

  const addBotToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };
    
  const dischargeBot = (id) => {
    fetch(`https://https://bot-battlr-json-server-rho.vercel.app/bots/${id}`,{ method: 'DELETE' })
      .then(() => {
        setArmy(army.filter(b => b.id !== id));
      });
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot} />
      <BotCollection addBotToArmy={addBotToArmy} />
    </div>
  );
};

export default App;