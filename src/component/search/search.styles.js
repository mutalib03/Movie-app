import styled from "styled-components"

export const SearchForm = styled.form `
width: 100%;
 height: 50px;
text-align: center;
`

export const Input = styled.input `
 width: 600px;
  height: 48px;
  box-sizing: border-box;
  border: 2px solid red;
  
  font-size: 16px;
  background-color: white;
  margin:0px auto;
  
`
export const ButtonSearch = styled.button`
  background-color: red; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

export const MovieCard = styled.div`
margin: 30px auto;
width: 850px;
height:500px;
display:flex;
background-color:red;
padding:20px
`
export const MovieImage = styled.img`
width:50%;
height:auto;

`

export const MovieDetails = styled.div`
width:50%;
height:inherit;
padding: 10px
`

export const MovieTitle =  styled.p`
font-size:30px;
color:white;
margin-bottom: 20px;
text-align: center;
font-weight:bold;
text-transform:uppercase
`
export const MovieDetail =  styled.p`
font-size:20px;
color:white;
margin-bottom: 20px;
text-align: center;

`
