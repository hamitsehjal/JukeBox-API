const express = require('express')
const { getAllAblums, getAlbum, createAlbum, updateAlbum, getAlbumsByReleaseDate, getAlbumByArtist } = require('./handlers/albums')
const { getAllArtists, getOneArtist, createArtist, updateArtist } = require('./handlers/artists')
const router = express.Router()



// Album
router.get('/albums', getAllAblums)
router.get('/album/:id', getAlbum)
router.post('/album', createAlbum)
router.put('/album/:id', updateAlbum)
// router.delete('/album:id', (req, res, next) => {

// })
// Artist

router.get('/artists', getAllArtists)
router.get('/artist/:id', getOneArtist)
router.post('/artist', createArtist)
router.put('/artist/:id', updateArtist)
// router.delete('/artist:id', (req, res, next) => {

// })

// other functionalities

// to retrieve the list of music albums sorted by release date in ascending order
router.get("/albumsByRelease", getAlbumsByReleaseDate)

// to retrieve a list of music albums by a specific musician sorted by price in ascending order
router.get("/albumsByArtist", getAlbumByArtist)

module.exports = router