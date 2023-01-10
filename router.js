const express = require('express')
const { getAllAblums, getAlbum, createAlbum, updateAlbum } = require('./handlers/albums')
const router = express.Router()




// Album
router.get('/albums', getAllAblums)
router.get('/album/:id', getAlbum)
router.post('/album', createAlbum)
router.put('/album/:id', updateAlbum)
// router.delete('/album:id', (req, res, next) => {

// })
// Artist

router.get('/artists', (req, res, next) => {

})
router.get('/artist:id', (req, res, next) => {

})
router.post('/artist', (req, res, next) => {

})
router.put('/artist:id', (req, res, next) => {

})
// router.delete('/artist:id', (req, res, next) => {

// })

module.exports = router