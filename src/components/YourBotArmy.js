import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeBotFromArmy, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => removeBotFromArmy(bot)}
            handleDischarge={() => dischargeBot(bot.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;