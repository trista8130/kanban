import React from 'react';

export default function Card({cards,handleMoveCard,handleDelete,index}){
	return(
		<div>
			{cards.map((cardsValue,i) => (
				<div className="card">
					{index !==0 &&
					<div>
						<button onClick={() => handleMoveCard(i,index,index-1)}>
							Prev
						</button>
					</div>
					}
					<div>
						{cardsValue.title}
					</div>
					<div className="delete">
						<button 
							className="delete"
							onClick={() => handleDelete(i,index)}>
							Delete
						</button>
					</div>
					{index !==3 &&
					<div>
						<button onClick={() => handleMoveCard(i,index,index+1)}>
							Next
						</button>
					</div>
					}
				</div>

			))}
		</div>
	)
}