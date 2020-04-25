import React from 'react';
import Card from '../Card'

export default function Column({columns,handleAddCard,addCardToColumn,handleMoveCard,handleDelete}) {
	handleAddCard = (index) => {
		const userInput = window.prompt();
		if(userInput){
			addCardToColumn(userInput,index);
		}
	}
	
	
	return(
		<div className="container">
			{columns.map((colValue,index) => (
				<div className="column">
					<div className="header" style={{backgroundColor:colValue.color}}>
						{colValue.title}
					</div>
					<div className="list">
						<Card 
							cards={colValue.card}
							handleMoveCard={handleMoveCard}
							handleDelete={handleDelete}
							index={index}
						/>
					</div>
					<div className="footer">
						<button onClick={() => handleAddCard(index)}>+ Add a card</button>
					</div>
				</div>
			))}
		</div>
	)
}