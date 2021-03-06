import axios from 'axios';

// GET /players/:id
// POST /players/

// GET /games/:id
// PATCH /games/:id
// POST /games/

const HOST = "http://localhost:3030";

export const getPlayer = (playerId) => {
    return axios.get(`${HOST}/players/${playerId}`)
    //.then((response) => console.log(response))
    .then((response) => response.data)
};

export const createPlayer = ({name, avatar}) => {
    return axios.post(`${HOST}/players/`, {name, avatar})
    .then((response) => response.data)
};

export const getGame = (gameId) => {
    return axios.get(`${HOST}/games/${gameId}`)
    .then((response) => response.data)
};

export const joinGame = ({playerId, gameId}) => {
    return axios.patch(`${HOST}/games/${gameId}`, {playerId})
    .then((response) => response.data)
};

export const createGame = ({playerId, size}) => {
    return axios.post(`${HOST}/games/`, {
        playerId, 
        size
    })
    .then((response) => response.data)
};

