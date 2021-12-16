import styled from 'styled-components'

const Img = styled.div`
  width: 320px;
  height: ${props => props.height};
  background-image: url('${props => props.backgroundImage}');
  background-position: center;
  background-size: cover;
  border-radius: 20px 20px 0 0;
`

export default Img