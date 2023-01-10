import './menu.css';

import menu1 from '../../assets/menu-1.jpg';
import menu2 from '../../assets/menu-2.jpg';
import menu3 from '../../assets/menu-3.jpg';
import menu4 from '../../assets/menu-4.jpg';
import menu5 from '../../assets/menu-5.jpg';
import menu6 from '../../assets/menu-6.jpg';

const Menu = () => {
    return (
        <div className='top-food__menu section__padding' id='menu'>
            <div className='top-food__menu-title'>Menu</div>
            <div className="top-food__menu-cards">
                <div className='top-foog__menu-cards__content'>
                    <div className='top-foog__menu-cards__content-card'>
                        <img src={menu4} alt="menu-4" />
                        <div className='top-foog__menu-cards__content-card__title'>Pasta</div>
                        <div className='top-foog__menu-cards__content-card__text'>Our pride. We are known for having the best pastas.</div>
                    </div>
                    <div className='top-foog__menu-cards__content-card'>
                        <img src={menu6} alt="menu-6" />
                        <div className='top-foog__menu-cards__content-card__title'>Pizza</div>
                        <div className='top-foog__menu-cards__content-card__text'>6 varieties of pizza. Our specialty is Neapolitan.</div>
                    </div>
                    <div className='top-foog__menu-cards__content-card'>
                        <img src={menu1} alt="menu-1" />
                        <div className='top-foog__menu-cards__content-card__title'>Pancakes</div>
                        <div className='top-foog__menu-cards__content-card__text'>3 options for you to treat yourself.</div>
                    </div>
                    <div className='top-foog__menu-cards__content-card'>
                        <img src={menu3} alt="menu-3" />
                        <div className='top-foog__menu-cards__content-card__title'>Burgers</div>
                        <div className='top-foog__menu-cards__content-card__text'>Burgers for all types of diet.</div>
                    </div>
                    <div className='top-foog__menu-cards__content-card'>
                        <img src={menu5} alt="menu-5" />
                        <div className='top-foog__menu-cards__content-card__title'>Ramen</div>
                        <div className='top-foog__menu-cards__content-card__text'>The chef's favourite. We have 12 types of aggregates.</div>
                    </div>
                    <div className='top-foog__menu-cards__content-card'>
                        <img src={menu2} alt="menu-2" />
                        <div className='top-foog__menu-cards__content-card__title'>Fruit salads</div>
                        <div className='top-foog__menu-cards__content-card__text'>You can choose the fruits you want.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;