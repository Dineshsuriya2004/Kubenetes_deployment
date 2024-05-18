const express = require('express');

const category = express.Router();
const categories = express.Router();
const products = express.Router();

const categories_data = ["floor tiles", "Bathroom Tiles", "Wall Tiles", "Living Room Tiles"];
const products_data = require('../data');

products.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(products_data);
});

products.get('/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const prod = products_data.find(c => c.id === parseInt(req.params.id));
  if (!prod) return res.status(404).send('The prod with the given ID was not found.');

  const index = products_data.indexOf(prod)
  products_data.splice(index, 1);

  res.send(prod);
});

categories.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(categories_data);
});

category.get('/:type', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const category_prod = products_data.filter(c => c.category === req.params.type);
  if (!category_prod) return res.status(404).send('The prod with the given ID was not found.');

  res.send(category_prod);
});


module.exports = {
  products,
  category,
  categories,
};
