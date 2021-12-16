import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 50px;
  align-items: center;
  padding-bottom: 100px;
  padding-top: 50px;

  @media (max-width: 970px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px){
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding-bottom: 50px;
  }
`

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  Grid,
  GridItem
}