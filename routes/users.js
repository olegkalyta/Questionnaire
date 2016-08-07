import express from 'express'

const router = express.Router()

/* GET users listing. */
router.get('/', (req: object, res: object, next: func): void => res.send('respond with a resource'))

module.exports = router
