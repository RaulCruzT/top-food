import { Logo, Links } from '../../components';
import './footer.css';

const Footer = () => {
    return (
        <div className='top-food__footer section__padding'>
            <div className='top-food__footer-container'>
                <div className="top-food__footer-content">
                    <Logo color='#FFFFFF' />
                    <div className="top-food__footer-content__links">
                        <Links />
                    </div>
                    <div className="top-food__gooter-content-copyright">
                        Develop by Raúl Cruz
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;