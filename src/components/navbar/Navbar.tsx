import { useState } from 'react';
import { Links, Logo } from '../../components';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='top-food__navbar section__padding'>
            <div className='top-food__navbar-container'>
                <Logo color='#000000' />
                <div className='top-food__navbar-container__links'>
                    <Links />
                </div>
                <div className="top-food__navbar-container__menu">
                    {toggleMenu
                        ? <IoCloseSharp color="#000000" size={28} onClick={() => setToggleMenu(false)} />
                        : <IoMenuSharp color="#000000" size={28} onClick={() => setToggleMenu(true)} />
                    }
                </div>
            </div>
            <div className="top-food__navbar-menu" style={{height: toggleMenu ? '100vh': 0}}>
                {toggleMenu &&
                    <Links close={() => setToggleMenu(false)} />
                }
            </div>
        </div>
    )
}

export default Navbar;