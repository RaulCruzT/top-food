import './navbar.css';

const Navbar = () => {
    return (
        <div className='top-food__navbar section__padding'>
            <div className='top-food__navbar-container'>
                <div className='top-food__navbar-container__logo'>
                    <img src="../../../public/IoRestaurant.svg" alt="Logo" />
                    <div className="top-food__navbar-container__logo-text">Top Food</div>
                </div>
                <div className='top-food__navbar-container__links'>
                    <p><a href="#">Awards</a></p>
                    <p><a href="#">Menu</a></p>
                    <p><a href="#">Team</a></p>
                    <p><a href="#">Enjoy</a></p>
                    <p><a href="#">Contact</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;