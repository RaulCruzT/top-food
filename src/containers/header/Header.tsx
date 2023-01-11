import './header.css';

import header from '../../assets/header.png';

const Header = () => {
    return (
        <div className='top-food__header section__padding' id='header'>
            <div className="top-food__header-container">
                <div className="top-food__header-container__message">
                    <div className="top-food__header-container_message-title">Our food is wonderful!</div>
                    <div className="top-food__header-container_message-text">Live a great experience trying our food. You will definitely want to return to enjoy it again.</div>
                </div>
                <div className="top-food__header-container__image">
                    <img src={header} alt="header" />
                </div>
            </div>
        </div>
    )
}

export default Header;