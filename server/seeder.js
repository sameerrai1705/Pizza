const dotenv = require('dotenv');
const connectDb = require('./config/config');
const Pizza = require('./models/pizzaModel');
const pizzas = require('./data/Dummy');
const path = require('path');

dotenv.config({path: path.resolve(__dirname , './.env')});
connectDb();

const importData = async () => {
    try{
        await Pizza.deleteMany();
        const data = pizzas.map(pizza => { return {...pizza }});
        await Pizza.insertMany(data);
        console.log('data imported');
        process.exit();
    }
    catch (error) {
        console.log(`error ${error}`);
        process.exit(1);
    }
}

const dataDestroy = () => {}

if(process.argv[2] === 'd') dataDestroy();
else importData();