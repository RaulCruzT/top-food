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
            <div className='top-food__menu-container'>
                <div className='top-food__menu-container__title'>Menu</div>
                <div className="top-food__menu-container__cards">
                    <div className='top-food__menu-container__cards-content'>
                        <div className='top-food__menu-container__cards-content__card'>
                            <img src={menu4} alt="menu-4" />
                            <div className='top-food__menu-container__cards-content__card-title'>Pasta</div>
                            <div className='top-food__menu-container__cards-content__card-text'>Our pride. We are known for having the best pastas.</div>
                        </div>
                        <div className='top-food__menu-container__cards-content__card'>
                            <img src={menu6} alt="menu-6" />
                            <div className='top-food__menu-container__cards-content__card-title'>Pizza</div>
                            <div className='top-food__menu-container__cards-content__card-text'>6 varieties of pizza. Our specialty is Neapolitan.</div>
                        </div>
                        <div className='top-food__menu-container__cards-content__card'>
                            <img src={menu1} alt="menu-1" />
                            <div className='top-food__menu-container__cards-content__card-title'>Pancakes</div>
                            <div className='top-food__menu-container__cards-content__card-text'>3 options for you to treat yourself.</div>
                        </div>
                        <div className='top-food__menu-container__cards-content__card'>
                            <img src={menu3} alt="menu-3" />
                            <div className='top-food__menu-container__cards-content__card-title'>Burgers</div>
                            <div className='top-food__menu-container__cards-content__card-text'>Burgers for all types of diet.</div>
                        </div>
                        <div className='top-food__menu-container__cards-content__card'>
                            <img src={menu5} alt="menu-5" />
                            <div className='top-food__menu-container__cards-content__card-title'>Ramen</div>
                            <div className='top-food__menu-container__cards-content__card-text'>The chef's favourite. We have 12 types of aggregates.</div>
                        </div>
                        <div className='top-food__menu-container__cards-content__card'>
                            <img src={menu2} alt="menu-2" />
                            <div className='top-food__menu-container__cards-content__card-title'>Fruit salads</div>
                            <div className='top-food__menu-container__cards-content__card-text'>You can choose the fruits you want.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;