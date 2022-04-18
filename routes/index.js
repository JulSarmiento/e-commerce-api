// aqui importo el controlador y exporto el router
const express = require('express');
const router = express.Router();

// Import controller functions
const productsController = require('../controllers/products.controller');

const cartController = require('../controllers/cart.controller')

// Import Multer middleware
const multerMiddleware = require('../middlewares/multer');

const productExist = require('../middlewares/productMiddleware');


/**
 * This list all the products
 */
router.get('/productos', productsController.getAll); 
/**
 * This return a random product
 */
router.get('/producto-random', productsController.getRandom);

/**
 * This return a product by id
 */
router.get('/productos/:id', productExist ,productsController.getById);

/**
 * This save a new product 
 */
router.post('/productos', multerMiddleware.single('thumbnail') ,productsController.save);

/**
 * This update an existent product 
 */
router.put('/productos/:id',[productExist, multerMiddleware.single('thumbnail')], productsController.update);

/**
 * This delete an existent product by its id 
 */
router.delete('/productos/:id', productExist, productsController.deleteById);


//____________________________________________________________-

/**
 * This list all the products in the specific cart
 */
router.get('/carrito/:id/productos', cartController.getById); 

/**
 * This save a new product and return the id
 */
router.post('/carrito', cartController.save);
 
/**
 * Post a product in the specific cart
 */
router.post('/carrito/:id/productos', cartController.saveCartItem);
 
/**
 * This delete an existent cart (also empty the cart)
 */
router.delete('/carrito/:id', productExist, cartController.deleteById);

/**
 * This delete an existent product in the cart.
 */
router.delete('/carrito/:id/productos/:id__prod', cartController.deleteById);



module.exports = router;