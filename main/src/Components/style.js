import styled from "styled-components";
export const StyleGameCont = styled.div`
box-sizing: border-box;
width: 98%;
height: auto;
margin: 1%;
/* background-color: rgb(151,180,255); */
text-align: center;
padding: 2% 10% 2% 10%;
`
export const StyleSubGameCont = styled.div`
box-sizing: border-box !important;
margin: 0%;
padding: 1%;
width:30%;
/* background-color:rgb(52,80,161); */
background-color: #77787a;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
border-radius: 15px;
height: 98%;
display: grid;
grid-template-rows: 110px 110px 110px;
grid-template-columns: 33% 33% 33%;
text-align: center;
margin: auto;
font-size: 75px;
font-weight: 600;
color: #333333;

`
export const StyleBoxes = styled.div`
border-bottom:8px solid #5a5b5c;
border-right: 8px solid #5a5b5c;
width: 100%;
height: 100px;
`
export const StyleBoxesWithBottomBorder = styled.div`
border-right:8px solid #5a5b5c;
width: 100%;
height: 100px;
`
export const StyleBoxesWithBorderRight = styled.div`
border-bottom: 8px solid #5a5b5c;
width: 100%;
height: 100px;
`
export const StyleBoxWithNoBorder = styled.div`
border:none;
width: 100%;
height: 100px;
`