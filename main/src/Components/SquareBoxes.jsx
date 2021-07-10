import React from 'react'
import {
    StyleBoxes,
    StyleBoxesWithBottomBorder,
    StyleBoxesWithBorderRight,
    StyleBoxWithNoBorder
}
    from "./style.js"
export const SquareBoxes = ({ state, handleUserClick, index }) => {
    if(index === 2 || index === 5 ) {
        return <StyleBoxesWithBottomBorder onClick={ () => handleUserClick(index)}>{state}</StyleBoxesWithBottomBorder>
    }
    else if(index === 6 || index === 7) {
        return  <StyleBoxesWithBorderRight onClick={ () => handleUserClick(index)}>{state}</StyleBoxesWithBorderRight>
    }
    else if(index === 8 ) {
        return <StyleBoxWithNoBorder onClick={ () => handleUserClick(index)}>{state}</StyleBoxWithNoBorder>
    }
    else {
        return <StyleBoxes onClick={ () => handleUserClick(index)}>{state}</StyleBoxes>
    }
}