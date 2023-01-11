import { Award } from '../../components';
import './awards.css';

const Awards = () => {
    return (
        <div className='top-food__awards section__padding' id='awards'>
            <div className='top-food__awards-container'>
                <div className="top-food__awards-container__title">Awards</div>
                <div className="top-food__awards-container__content">
                    <div className="top-food__awards-container__content-grid">
                        <Award title="The World's 50 Best Restaurants" text="We are proud to be part of the 50 best restaurants in the world for the 4th time." />
                        <Award title="Pasta Chef of the Year Winner" text="Chef Aoki was chosen as the best pasta chef of the year 2022 in North America." />
                        <Award title="Restaurant & Bar Design Awards" text="The design of our restaurant stands out as one of the 30 best in the country." />
                        <Award title="Restaurant Atmosphere Awards" text="We are part of the top 10 in the music category." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards;