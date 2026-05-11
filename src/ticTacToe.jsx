//Tic- Tac -Toe

import { useState } from 'react';
import Cells from './cells';

function Square() {

	const [value, setValue] = useState(["", "", "", "", "","","","",""]);

	function clickHandeling() {
		setValue("X");
	}

	return (<button onClick={clickHandeling()} className="square">{value}</button>);
}

export function Board() {
	return (
		<>
			<div className="board-row">
				<square />;
				<square />;
				<square />;

			</div>
			<div className="board-row">
				<square />;
				<square />;
				<square />;

			</div>
			<div className="board-row">
				<square />;
				<square />;
				<square />;
			</div>
		</>

	);
}


// Building my own idea!

export function Game(){

const [Cells, setCells] = useState(['', '', '', '', '', '' , '', '', ''])
const [turn, setTurn] = useState("X")
	return (
<div className="container">
	<div className="gameboard">
	{Cells.map((Cells, index) => (
		<Cells turn={turn} setTurn={setTurn} key={index}/>
	))}

	</div>
</div>

	);
	}




//Just for trying

/* export default function board() {
return (<>
<div className= "board-row">
<button className="square">1</button>;
<button className="square">2</button>;
<button className="square">3</button>;
</div>
<div className= "board-row">
<button className="square">4</button>;
<button className="square">5</button>;
<button className="square">6</button>;
</div>
<div className= "board-row">
<button className="square">7</button>;
<button className="square">8</button>;
<button className="square">9</button>;
</div>
</>
);}
Function Square () {
Return  <button className="square">{value}</button>;
};
Export default function Board ({value}){
	Return (
<>
<div className="board-row">
<Square value ="1" />
<Square value ="2" />
<Square value ="3" />
<div/>

<div className="board-row">
<Square value ="4" />
<Square value ="5" />
<Square value ="6" />
<div/>
<div className="board-row">
<Square value ="7"/>
<Square value ="8" />
<Square value ="9" />
<div/>
<>);}


*/

