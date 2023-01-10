const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// getting all the albums
export const getAllAblums = (async (req, res, next) => {
    const albums = await prisma.album.findMany();

    res.json({ message: albums })

})

// get a single album
export const getAlbum = (async (req, res, next) => {
    const album = await prisma.album.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.json({ message: album })
})

// creating a new album

export const createAlbum = (async (req, res, next) => {
    const album = await prisma.album.create({
        data: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            releaseDate: req.body.releaseDate,
            artist: {
                create: {
                    name: req.body.artist
                }
            }
        }
    })
    res.json({ message: album })
})

// updating an existing album
export const updateAlbum = (async (req, res, next) => {
    const album = prisma.album.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })

    res.json({ message: album })
})