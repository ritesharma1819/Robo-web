// here creating a file of cardlist for storing the robot card in one place 

import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i} 
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default Cardlist;