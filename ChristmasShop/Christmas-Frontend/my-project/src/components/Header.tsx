import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header =()=>{

    return(
        <Link to='/' className={style.link}>
            <header className ={style.header} >      
                <h1>Vinterbutiken</h1>
                <p>Ett stort utval av krimskrams för jul och nyår</p>
            </header>
        </Link>
    )
}

export default Header;