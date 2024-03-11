import {Outlet} from "react-router-dom"
import Header from "../components/Header";
import { ReactNode, useEffect, useState } from "react";
import { IDataProduct, IProduct } from "../models/IProduct";
import axios from "axios";
import '../assets/css/website.css'

type ProductResponseType ={
    statusCode: number;
    sucess: boolean;
    message: string;
    data: IDataProduct;
}


export const Root =()=>{
    const [error, setError]= useState<string>();
    const [products, setProducts] = useState<IProduct[]>([]);


    useEffect(()=>{
        const getAllProducts = async()=>{
            try{
                let response = await axios.get<ProductResponseType>(`http://localhost:3003/api/products/list/`);
                setProducts(response.data.data.products);
            }catch(error){
                if(error instanceof Error){
                    setError(error.message);
                }
            }
        }

    getAllProducts();
    
    },[]);

    let content: ReactNode | null;

    if(products){
        content = <Outlet context={products}/>
    }else if(error){
        content = <div>Det gick tyvärr inte att ladda produkterna.</div> 
    }

    return(
        <div>
            <Header/>
            {content}
        </div>
    )
}