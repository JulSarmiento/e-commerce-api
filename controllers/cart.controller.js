// aqui van las funciones y el res y req

const Container = require('../classes/container.class');
const db = 'carts';

const cart = new Container(db);

// add new cart of products
exports.save = async function(req, res) {
    console.log(req.body)
}

// save an item in an existen cart (like an update)
exports.saveCartItem = async function(req, res) {

}

// return one cart by its id
exports.getById = async function(req, res){
  return res.json(req.cart);
}

// delete all products in the cart
exports.deleteAll = async function(req, res) {
  res.json(await cart.deleteAll());
}

// delete an existen  product in the cart by its id 
exports.deleteById = async function(req, res){
  const {id} = req.params;  
  res.json(await cart.deleteById(id));
}







