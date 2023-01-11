import { IoRestaurant } from 'react-icons/io5';
import './logo.css';

interface Props {
    color: string;
}

const Logo = ({ color }: Props) => {
    return (
        <a className='top-food__logo' href='#'>
            <IoRestaurant size={28} fill={color} />
            <div className="top-food__logo-text">Top Food</div>
        </a>
    )
}

export default Logo;