import express, {Request, Response} from 'express';
import {checkout, getAllProducts} from './db/store.dal';
import {connect} from './db/db-connection';
import bodyParser from 'body-parser';

const port = 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const init = async () => {
    app.listen(port, () => console.log(`server running in port ${port}`));
    await connect();
}

app.get('/products', async (req: Request, res:Response) => {
    const products = await getAllProducts();
    res.send(products);
});

app.post('/checkout', async (req: Request, res:Response) => {
    const order = await checkout(req.body);
    res.send(order);
});

init();


