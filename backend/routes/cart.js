import express from 'express'
import { add, getCart, remove, updateQuantity } from '../controllers/cart.js'
import { checkSession } from '../middlewares/checkSession.js';

const router = express.Router();

// add to cart

router.post('/add', checkSession, add)

//get data

router.get('/getCart', checkSession, getCart)

//remove item from cart

router.patch('/remove', checkSession,  remove)

//update quantity of cart item

router.patch('/update-quantity', checkSession, updateQuantity)


export default router;