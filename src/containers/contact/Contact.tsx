import { ContactCard } from '../../components';
import './contact.css';

const Contact = () => {
    return (
        <div className='top-food__contact section__padding'>
            <div className="top-food__contact-content">
                <ContactCard icon='email' text='topfood@restaurant.com' />
                <ContactCard icon='phone' text='+1-212-456-7890' />
                <ContactCard icon='location' text='772 Madison Avenue, New York' />
            </div>
        </div>
    )
}

export default Contact;