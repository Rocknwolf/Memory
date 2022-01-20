import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GameContext} from '../../Context/GameContext.jsx'
import CardComponent from '../CardComponent.jsx'

function Game() {
    const {size, drawnCards} = useContext(GameContext);

    const testArr = Array(size.y).fill([...Array(size.x).fill()]);

    console.log({drawnCards});

    return (
        <div className='gameComponent'>
            <h1>Memory</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae asperiores error magni facere dolore. Neque veniam animi iusto at perspiciatis aut omnis, alias minima vitae. In iusto facere tempora?</p>
            <br />
            <br />
            <p>turn: num</p>
            <p>score: num</p>
            <br />
            <div> 
                {testArr.map((row, rowIndex) => 
                    <div key={rowIndex}>
                        {row.map((column, columnIndex) => 
                            <CardComponent index={rowIndex * size.x + columnIndex} key={columnIndex}/>
                        )}
                    </div>
                )} 
                
            </div>
            <br />
                <p>user: 1</p>
                <p>user: 2</p>
            <br />
            <Link to="/" >Home</Link>

        </div>
    )
}

export default Game
