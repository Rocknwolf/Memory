//CREATE/POST
(req, res) => {
    res.status(201).json({
    id: "777sss777ss8s88",
    })
}

//READ/GET
(req, res) => {
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
(req, res) => {
    res.status(204).send()
}