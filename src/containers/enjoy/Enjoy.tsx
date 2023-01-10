import './enjoy.css';

import restaurant1 from '../../assets/restaurant-1.jpg';
import restaurant2 from '../../assets/restaurant-2.jpg';
import restaurant3 from '../../assets/restaurant-3.jpg';
import restaurant4 from '../../assets/restaurant-4.jpg';
import restaurant5 from '../../assets/restaurant-5.jpg';
import restaurant6 from '../../assets/restaurant-6.jpg';

const Enjoy = () => {
    return (
        <div className='top-food__enjoy section__padding' id='enjoy'>
            <div className='top-food__enjoy-container'>
                <div className='top-food__enjoy-container__title'>Enjoy a great atmosphere!</div>
                <div className="top-food__enjoy-container__images">
                    <div className='top-food__enjoy-container__images-content'>
                        <img src={restaurant1} alt="restaurant-1" />
                        <img src={restaurant2} alt="restaurant-2" />
                        <img src={restaurant3} alt="restaurant-3" />
                        <img src={restaurant4} alt="restaurant-4" />
                        <img src={restaurant5} alt="restaurant-5" />
                        <img src={restaurant6} alt="restaurant-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enjoy;