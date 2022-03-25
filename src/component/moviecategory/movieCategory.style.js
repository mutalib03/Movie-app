import styled from "styled-components"

export const GridContainer = styled.div`
  max-width: 1000px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(200px, 350px);
    color:red;
   padding: 10px;
    gap: 10px;
   margin: 0px auto;
  
`

export const GridItem = styled.div`

background-image: url(${(props =>props.poster)});
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`

export const CategoryTitle =  styled.p `
font-size:30px;
text-align:center;
margin-top: 100px;
text-transform:uppercase;
color:red;
`