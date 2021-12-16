import React from 'react';
import styled from 'styled-components';

import Img from '../Img';

const Container = styled.div`
    border: solid #333 1px;
    border-radius: 20px;
`

const Info = styled.div`
  text-align: center;
`

const UserCard = ({ user }) => {
    return (
        <Container>
            <Img height="350px" backgroundImage={user.profile_picture}/>
            <Info>
                <h2>{user.name}</h2>
            </Info>
        </Container>
    )
}

export default UserCard