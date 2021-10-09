
//CREATE/POST
(req, res, next) => {
    res.status(201).json({
    id: "35465465465465"
    })
}

//READ/GET
(req, res) => {
    res.status(200).json({
    name: "friodolin",
    avatar: "www.google.de"
    })
}