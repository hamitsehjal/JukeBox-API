const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// getting all the albums
module.exports.getAllAblums = (async (req, res, next) => {
    try {

        const albums = await prisma.album.findMany();

        res.json({ message: albums })
    } catch (err) {
        next(err)
    }


})

// get a single album
module.exports.getAlbum = (async (req, res, next) => {

    try {
        const album = await prisma.album.findUnique({
            where: {
                id: req.params.id
            }
        })

        res.json({ message: album })
    } catch (err) {
        next(err)
    }

})

// creating a new album

module.exports.createAlbum = (async (req, res, next) => {
    try {

        const album = await prisma.album.create({
            data: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                releaseDate: new Date(req.body.releaseDate),
                // MOST IMPORTANT
                artists: { create: req.body.artists }
            }
        })
        res.json({ message: album })
    } catch (err) {
        next(err)
    }
})

// updating an existing album
module.exports.updateAlbum = (async (req, res, next) => {
    try {
        if (req.body.releaseDate)
            req.body.releaseDate = new Date(req.body.releaseDate)

        const album = await prisma.album.update({
            where: {
                id: req.params.id
            },
            data: req.body
        })

        res.json({ message: album })
    } catch (err) {
        next(err)
    }
})

// to retrieve the list of music albums sorted by release date in ascending order

module.exports.getAlbumsByReleaseDate = (async (req, res, next) => {
    try {
        const albums = await prisma.album.findMany({
            orderBy: {
                releaseDate: 'asc'
            }
        })

        res.status(200).json({ message: albums })
    } catch (err) {
        next(err)
    }

})

// to retrieve a list of music albums by a specific musician sorted by price in ascending order

module.exports.getAlbumByArtist = (async (req, res, next) => {
    try {
        const albums = await prisma.album.findMany({
            orderBy: {
                price: 'asc'
            },
            include: {
                artists: true
            }
        })




        res.status(200).json({ message: albums })
    } catch (err) {
        next(err)
    }
})