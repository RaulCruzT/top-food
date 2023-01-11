import { Links, Logo } from '../../components';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='top-food__navbar section__padding'>
            <div className='top-food__navbar-container'>
                <Logo color='#000000' />
                <div className='top-food__navbar-container__links'>
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Navbar;