//CREATE/POST
const create = (req, res) => {
    res.status(201).json({
    id: "777sss777ss8s88",
    })
}

//READ/GET
const read = (req, res) => {
    res.status(200).json({
        player: {
            id: "5454564236544651",
            name: "walter",
            avatar: "www.google.de",
        },
        size: {
            x: 4,
            y: 5,
        }
    })
}

//UPDATE/PATCH
const update = (req, res) => {
    res.status(204).send()
}

module.exports = {create, read, update};