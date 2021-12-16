import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../contexts/user'

import Container from '../Components/Container'
import { Grid, GridItem } from '../Components/Grid'
import UserCard from '../Components/Home/UserCard'

const Home = () => {
    const { getUsers } = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
        .then(response => setUsers(response))
    }, [])

    return (
        <Container>
            <h1>Users</h1>
            <Grid>
                {users.map(user => (
                    <GridItem  key={user.slug}>
                        <Link to={`/users/${user.slug}`}>
                            <UserCard user={user} />
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}

export default Home;