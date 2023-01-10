import { IoRibbonSharp } from "react-icons/io5";
import './award.css';

interface Props {
    title: string;
    text: string;
}

const Award = ({ title, text }: Props) => {
    return (
        <div className='top-food__award'>
            <div className="top-food__award-icon">
                <IoRibbonSharp size={40} />
            </div>
            <div className="top-food__award-content">
                <div className="top-food__award-content__title">{title}</div>
                <div className="top-food__award-content__text">{text}</div>
            </div>
        </div>
    )
}

export default Award;