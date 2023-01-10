import { IoMailSharp, IoCallSharp, IoLocationSharp } from "react-icons/io5";
import './contactcard.css';

interface Props {
    icon: 'email' | 'phone' | 'location';
    text: string; 
}

const ContactCard = ({ icon, text }: Props) => {
    const iconSelected = () => {
        if (icon === 'email') {
            return <IoMailSharp size={40} />;
        }

        if (icon === 'phone') {
            return <IoCallSharp size={40} />;
        }

        if (icon === 'location') {
            return <IoLocationSharp size={40} />;
        }
    }

    return (
        <div className="top-food__contactCard">
            <div className="top-food__contactCard-icon">
                {iconSelected()}
            </div>
            <div className="top-food__contactCard-text">{text}</div>
        </div>
    )
}

export default ContactCard;