import '../assets/css/website.css'
import style from './ProductPage.module.css'
import { Link } from "react-router-dom"
import { useState, useEffect, type ReactNode } from 'react';
import testPicture from '../assets/images/testBild.jpg'
import { IProduct } from '../models/IProduct'
import axios from 'axios';

type ProductResponseType ={
    statusCode: number;
    sucess: boolean;
    message: string;
    data: IProduct;
}


export const ProductPage =()=>{
    const [product, setProduct] = useState<IProduct>();
    
    useEffect(()=>{

        let id: string = window.location.pathname;

        const getOneProduct = async(id: string)=>{
            try{
                let response = await axios.get<ProductResponseType>(`http://localhost:3003/api${id}/`);
                if(Object.keys(response.data.data).length !== 0){
                    setProduct(response.data.data);
                }
            }catch(error){
                throw error;
            }
        }

        getOneProduct(id);
    }, [])

    console.log(product)

    let content: ReactNode;

    if(product){
        content = (
        <div>
            <h2>{product.produkt}</h2>
            <div className={style.infoCard}>
                <img src={testPicture} alt={product.produkt}/>
                <div className={style.info}>
                    <p>{product.beskrivning}</p>
                    <p>Lagersaldo: {product.lagerSaldo} av 5000st</p>
                    <p>Pris: {product.pris}kr</p>
                </div>
            </div>
        </div> 
        )
    }else{
        content = <div className={style.error}><strong>Det gick tyvärr inte att hitta din produkt.</strong></div> 
    }
    
    
    return (
        <div className={style.productPage}>
            {content}
            <div>    
                <Link to={'/'}><button>Till startsida</button></Link>
            </div>
        </div>
    )
}
