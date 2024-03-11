import style from './ProductList.module.css'
import { IProduct } from '../../models/IProduct';
import { Product } from './Product';


type ProductListProps ={
    products: IProduct[];
}

export const ProductList = ({products}: ProductListProps) =>{
    
    return(
        <section className={style.productList}>
            {products.map((product:IProduct)=>{
                return <Product {...product}/>
            })}
        </section>
    )
}