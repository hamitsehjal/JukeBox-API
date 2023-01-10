const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()


// get all the artists

module.exports.getAllArtists = (async (req, res, next) => {
    try {
        const artists = await prisma.artist.findMany()

        res.status(200).json({ message: artists })
    } catch (err) {
        next(err)
    }
})

// get one artist

module.exports.getOneArtist = (async (req, res, next) => {
    try {
        const artist = await prisma.artist.findOne({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json({ message: artist })
    } catch (err) {
        next(err)
    }
})


// create a new artist

module.exports.createArtist = (async (req, res, next) => {
    try {
        const artist = await prisma.artist.create({
            data: {
                name: req.body.name,
                type: req.body.type,
                album: {
                    create: {
                        name: req.body.album,
                        price: req.body.albumPrice,
                        description: req.body.albumDesc,
                        releaseDate: new Date(req.body.albumDate)
                    }
                }
            }
        })

        res.status(200).json({ message: artist })
    } catch (err) {

    }
})


// update an existing artist

module.exports.updateArtist = (async (req, res, next) => {
    try {
        const artist = await prisma.artist.update({
            where: {
                id: req.params.id
            },
            data: req.body
        })
        res.status(200).json({ message: artist })

    } catch (err) {
        next(err)
    }
})