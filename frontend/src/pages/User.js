import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { UserContext } from '../contexts/user'

import Container from '../Components/Container'
import Img from '../Components/Img'

const User = () => {
    const { slug } = useParams()
    const { getUser } = useContext(UserContext)
    
    const[user, setUser] = useState(null)
    
    useEffect(() => {
        getUser(slug)
        .then(response => setUser(response))
    },[])

    if(!user){
        return <p>Loading...</p>
    }

    return (
        <Container>
            <Img height="500px" backgroundImage={user.profile_picture} />
            <h2>{user.name}</h2>
            <p>From : {user.city}</p>
            <p>Password : {user.password}</p>
        </Container>
    );
};

export default User