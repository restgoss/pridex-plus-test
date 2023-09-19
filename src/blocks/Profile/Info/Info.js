import './Info.css';

export default function Info({name, post, avatar}) {
    return(
        <>
            <img className='profile__avatar' alt='' src={avatar}></img>
            <h2 className='profile__name'>{name}</h2>
            <p className='profile__post'>{post}</p>
        </>
    )
}