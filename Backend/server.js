require('dotenv').config();
const express = require('express');

const app = express();
app.listen(process.env.PORT, () => 
console.log(`server listening on port ${process.env.PORT}`));

app.post('/players', (req, res)=>{res.status(201).json({
    id: "35465465465465"
})});
app.get('/players/:id', (req, res)=>{res.status(200).json({
    name: "friodolin",
    avatar: "www.google.de"
})});

app.post('/games', (req, res)=>{res.status(201).json({
    id: "777sss777ss8s88",
})});
app.get('/games/:id', (req, res)=>{res.status(200).json({
    player: {
        id: "5454564236544651",
        name: "walter",
        avatar: "www.google.de",
    },
    size: {
        x: 4,
        y: 5,
    }
})});
app.patch('/games/:id', (req, res)=>{res.status(204).send()});

