import React from 'react'; 
import './card.styles.css'; 

export const Card = (cards) => (
    <div className='card-container'> 
        <img alt="monster" src={`https://robohash.org/${cards.monster.id}?set=set2&size=180x180`}/>
        <h2> {cards.monster.name} </h2>
        <p>{cards.monster.company.catchPhrase} </p>
    </div> 
);