import { ProductList } from "../features/products/ProductList"
import { useOutletContext } from "react-router-dom"
import '../assets/css/website.css'
import style from './Home.module.css'
import { IProduct } from "../models/IProduct"


export const Home =()=>{
    const products:IProduct[] = useOutletContext();

    return(
        <div className={style.homePage}>
            <h2>Produkter</h2>
            < ProductList products = {products}/>
        </div>    
    )
}