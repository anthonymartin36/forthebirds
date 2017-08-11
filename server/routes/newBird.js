var express = require('express')
var router = express.Router()

var birdsDb = require('../db/birds')

router.get('/', (req, res) =>{
  let db = req.app.get('db')
  birdsDb.getBirds(db)
    .then(birds => {
      res.json(birds)
    })
    .catch(function(err){
      res.status(500).send(err.message)
    })

  // birdsDb.getBirds(db).then(birds => res.json(birds))
})

router.post('/', (req, res) => {
  let db = req.app.get('db')
  console.log(req.body);
  birdsDb.insertBird(req.body, db)
    .then(bird => {
      res.json(bird)
    })
    .catch(function(err){
      res.status(500).send(err.message)
    })
})

router.post('/:id', (req, res) => {
  let db = req.app.get('db')
  var editaBird = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    country_id: req.body.country_id
  }
  console.log(editaBird);
  birdsDb.editBird(editaBird, db)
    .then()
    .catch(function(err){
      res.status(500).send(err.message)
    })
})


module.exports = router
