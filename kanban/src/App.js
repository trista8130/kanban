import React, { useState } from 'react';
import './App.css';

import Column from './components/Column';
import columnsData from './contants';

function App(){
	const [columns, setColumns] = useState(columnsData);

	const handleAddCard = (userInput,index) => {
		const newColumns = [...columns];
		newColumns[index].card.push({title:userInput});
		setColumns(newColumns);
	}

	const handleMoveCard =(i,index,moveIndex) => {
		const newColumns = [...columns];
		const moveCard = newColumns[index].card.splice(i,1);
		newColumns[moveIndex].card.push(moveCard[0]);
		setColumns(newColumns);
	}

	const handleDelete = (i,index) => {
		const newColumns = [...columns];
		newColumns[index].card.splice(i,1);
		setColumns(newColumns);
	}

	return(

		<div className="App">
			<Column 
			columns={columns}
			addCardToColumn={handleAddCard}
			handleMoveCard={handleMoveCard}
			handleDelete={handleDelete} />
		</div>
	)
}

export default App;