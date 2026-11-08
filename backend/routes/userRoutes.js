import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.listUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router