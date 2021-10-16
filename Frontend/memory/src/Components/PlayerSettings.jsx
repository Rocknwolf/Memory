import React, {useState} from 'react'
import Button from './Button.jsx'
import { createPlayer } from '../Lib/Api';

const avatars = ["https://i.pravatar.cc/150?img=0", "https://i.pravatar.cc/150?img=5", "https://i.pravatar.cc/150?img=8", "https://i.pravatar.cc/150?img=7", "https://i.pravatar.cc/150?img=11", "https://i.pravatar.cc/150?img=13", "https://i.pravatar.cc/150?img=50", "https://i.pravatar.cc/150?img=17"];

function PlayerSettings() {
    const [avatar, setAvatar] = useState(avatars[0]);
    const [name, setName] = useState("Gordon Shumway");

    const handleSelectAvatar = (newAvatar) => {
        setAvatar(newAvatar);
    }
    const handleChangeName = (event) => {
        setName(event.currentTarget.value);
    }
    const savePlayer = () => {
        createPlayer({name, avatar})
    }

    return (
        <div>
            <h2>Player settings</h2>
            <label htmlFor="name" >Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={handleChangeName} />

            <img src={avatar} alt="avatar" />
            {avatars.map((avatar, index) => <img src={avatar} alt="avatar" key={index} onClick={ () => handleSelectAvatar(avatar) } />)}

            <Button handleClick={savePlayer} title="save Player" />
        </div>
    )
}

export default PlayerSettings
