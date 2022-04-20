// aqui van las funciones y el res y req

const Container = require('../classes/container.class');
const db = 'carts';

const cart = new Container(db);

const product = new Container('products');

// add new cart of products
exports.save = async function(req, res) {

  const productsArray = req.body.products;

  const productList = await product.getAll();

  const productId = productList.find(id => product.id === id);
 
  if(productId){

    productsArray.push(productId)
    res.json(await cart.save(req.body));

  }


  
}

// save an item in an existen cart (like an update) PENDIENTE
exports.saveCartItem = async function(req, res) {

  console.log('body',req.body);

}

// return one cart by its id
exports.getById = async function(req, res){
  return res.json(req.body.products);
}

// delete all products in the cart
exports.deleteById = async function(req, res){
  const {id} = req.params;  
  res.json(await cart.deleteById(id));
}

// delete an existen  product in the cart by its id 
exports.deleteById = async function(req, res){
  const {id} = req.params;  
  res.json(await cart.deleteById(id));
}







