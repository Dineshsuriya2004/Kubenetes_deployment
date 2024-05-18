const {categories, category, products} = require('./routes/products');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.options("*", cors({
    origin: 'https://127.0.0.1:3000',
}));

app.use('/products/categories', categories);
app.use('/products/category', category);
app.use('/products', products);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
