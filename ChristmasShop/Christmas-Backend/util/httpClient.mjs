/* import * as fs from 'node:fs';
import data from '../config/mock-data.json'

const response = {
    status: 'Not found',
    statusCode: 404,
    data: null,
    error: null,
}

const getData = (endpoint, query = null)=>{
    const path = data;
    console.log(path);
}

/* const appRouter = (app, fs) =>{
    const path = './data/mock-data.json';

    app.get('/api/products', (req, res) =>{
        fs.readFile(path, 'utf8', (error, data)=>{
            if(error){
                throw error;
            }

            res.send(JSON.parse(data));
        })
    })
} */ 