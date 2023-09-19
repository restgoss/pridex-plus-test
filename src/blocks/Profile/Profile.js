import './Profile.css';
import Info from './Info/Info';
import Rate from './Rate/Rate';
import ProfileButton from './ProfileButton';
import Scoreboard from './Scoreboard/Scoreboard';
export default function Profile({ onRateItemClick }) {
    return (
        <>
            <div className='profile'>
                <Info name='Дмитрий глебов' post='Веб-разработчик' avatar='https://64.media.tumblr.com/ec02f377317b8f227b96d00a6527e957/0f110a6e303f6c37-3a/s540x810/5f8970a75d891490805fa003db67ae00f01bf2da.gifv' />
                <ProfileButton button='К анкете' />
                
            </div>
            <Rate onRateItemClick={onRateItemClick} />
            <Scoreboard />
            
        </>
    )
}