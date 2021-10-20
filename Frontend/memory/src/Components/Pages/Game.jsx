import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GameContext} from '../../Context/GameContext.jsx'

function Game() {
    const {size} = useContext(GameContext);

    const testArr = Array(size.y).fill([...Array(size.x).fill("M")]);
    console.log(testArr);
    // const testArr = [...Array(size.x)].fill();

    //Card-Component erstellen, die Componente soll klickbar sein. Umgedreht/nicht-umgedreht state.

    return (
        <div>
            <h1>Memory</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae asperiores error magni facere dolore. Neque veniam animi iusto at perspiciatis aut omnis, alias minima vitae. In iusto facere tempora?</p>
            <br />
            <br />
            <p>turn: num</p>
            <p>score: num</p>
            <br />
            <div> {testArr.map((row, rowIndex) => <div key={rowIndex} >{row.map((column, columnIndex) => <div key={columnIndex}>{column}</div>)}</div>)} </div>
            <br />
            <p>user: 1</p>
            <p>user: 2</p>
            <br />
            <Link to="/" >Home</Link>

        </div>
    )
}

export default Game
