import React, {/*useState,*/ useContext} from 'react'
// import Button from './Button.jsx'
// import { createPlayer, createGame } from '../Lib/Api';
import { GameContext } from '../Context/GameContext.jsx';

const avatars = ["https://i.pravatar.cc/150?img=0", "https://i.pravatar.cc/150?img=5", "https://i.pravatar.cc/150?img=8", "https://i.pravatar.cc/150?img=7", "https://i.pravatar.cc/150?img=11", "https://i.pravatar.cc/150?img=13", "https://i.pravatar.cc/150?img=50", "https://i.pravatar.cc/150?img=17"];

function PlayerSettings() {
    const {avatar, setAvatar, name, setName} = useContext(GameContext);
    // const playerId = 5555555;

    // const [avatar, setAvatar] = useState(avatars[0]);
    // const [name, setName] = useState("Gordon Shumway");

    const handleSelectAvatar = (newAvatar) => {
        setAvatar(newAvatar);
    }
    const handleChangeName = (event) => {
        setName(event.currentTarget.value);
    }
    // const savePlayer = () => {
    //     createPlayer({name, avatar})
    //     createGame({playerId, size})
    //     console.log("saved");
    //     alert("Hello");
    // }

    return (
        <div className='playerSettings'>
            <h2>Player settings</h2>
            <label htmlFor="name" >Name:</label>
            <input className='playerInput' type="text" name="name" id="name" value={name} onChange={handleChangeName} />
            <div className="avatarBox">
                <img className='avatar' src={avatar} alt="avatar" />
                {avatars.map((avatar, index) => <img className='avatarList' src={avatar} alt="avatar" key={index} onClick={ () => handleSelectAvatar(avatar) } />)}
            </div>
            {/* <Button handleClick={savePlayer} title="save Player" /> */}
        </div>
    )
}

export default PlayerSettings
