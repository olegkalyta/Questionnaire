import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (req: object, res: object, next: func): void => res.render('index', { title: 'Express' }))

module.exports = router
