import './Team.css';

const users = {
    id_01 : {
        name: 'Brayan Javier',
        lastName : 'Martínez',
        description: 'Docente',
        image : "https://placeimg.com/300/300/people"    
    },
    id_02: {
        name: 'Francy',
        lastName : 'Alvarado Duarte',
        description: 'Estudiate',
        image : "https://placeimg.com/300/300/woman"
    },
    id_03: {
        name: 'Julián Camilo',
        lastName : 'Plazas',
        description: 'Tutor',
        image : "https://placeimg.com/300/300/men"
    },
    id_04: {
        name: 'John Rober',
        lastName : 'Gomez',
        description: 'Tutor',
        image : "https://placeimg.com/300/300/men"
    },
    id_05: {
        name: 'Sergio',
        lastName : 'Salazar',
        description: 'Tutor',
        image : "https://placeimg.com/300/300/men"
    }
}

const UserAvatar = (props) => {
    return (
        <div className='user-avatar'>
            <img className="user-avatar__imagen" src={props.user.image} alt={props.user.name} />
        </div>
    );
}

const UserInfo = (props) => {
    return (
        <div className='user-info'>
            <h2 className='user-info__name'>{props.user.name} {props.user.lastName}</h2>
            <p className='user-info__description'>{props.user.description}</p>
        </div>
    );
}

const UserCard = (props) => {
    return (
        <div className='user-card'>
            <UserAvatar user={props.user}/>
            <UserInfo user={props.user}/>
        </div>
    );
}

function Team() {
    return (
        <div className="card-container">
            <UserCard user={users.id_01}/>
            <UserCard user={users.id_02}/>
            <UserCard user={users.id_03}/>
            {/* <UserCard user={users.id_04}/> */}
            {/* <UserCard user={users.id_05}/> */}    
        </div> 
    );
}


export default Team;