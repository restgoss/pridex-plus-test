import './Profile.css';
import Info from './Info/Info';
import Rate from './Rate/Rate';
import ProfileButton from './ProfileButton';
import Scoreboard from './Scoreboard/Scoreboard';
export default function Profile() {
    return (
        <>
            <div className='profile'>
                <Info />
                <ProfileButton />
                
            </div>
            <Rate />
            <Scoreboard />
            
        </>
    )
}