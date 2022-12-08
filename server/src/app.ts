import express from 'express';
import {getAllProducts} from "./db/products.dal";
import {connect} from "./db/db-connection";

const app = express();
const port = 3001;


const init = async () => {
    app.listen(port, () => console.log(`server running in port ${port}`));
    await connect();
}

app.get('/products', async (req, res) => {
    const products = await getAllProducts();
    res.send(`products: ${products}`);
});

init();


