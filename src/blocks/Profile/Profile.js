import './Profile.css';
import Info from './Info/Info';
import ProfileButton from './ProfileButton';
import Scoreboard from './Scoreboard/Scoreboard';
export default function Profile() {
    return (
        <>
            <div className='profile'>
                <Info />
                <ProfileButton />
                
            </div>
            <Scoreboard />
        </>
    )
}