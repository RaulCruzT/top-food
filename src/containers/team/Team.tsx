import './team.css';
import chef from '../../assets/chef-1.png';

const Team = () => {
    return (
        <div className='top-food__team'>
            <div className='top-food__team-content'>
                <img src={chef} alt="Chef Aoki" />
                <div className="top-food__team-content__message">
                    <div className="top-food__team-content__message-title">Quality cooks</div>
                    <div className="top-food__team-content__message-text">"As a kitchen team we always keep our goal in mind, to satisfy the customer and provide a great experience. That is why we have been awarded several times." H, Aoki.</div>
                </div>
            </div>
        </div>
    )
}

export default Team;