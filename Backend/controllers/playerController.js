
//CREATE/POST
const create = (req, res, next) => {
    res.status(201).json({
    id: "35465465465465"
    })
}

//READ/GET
const read = (req, res) => {
    res.status(200).json({
    name: "friodolin",
    avatar: "www.google.de"
    })
}

module.exports = {create, read};