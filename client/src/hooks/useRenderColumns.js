import React, { useState, useEffect, useLayoutEffect } from 'react';

const useRenderColumns = (input = []) => {

  const [ columnArrays, setColumnArrays ] = useState([[], [], []]);
  const [ columnArrays2, setColumnArrays2 ] = useState([[], []]);

  // const [ columnCount, setColumnCount ] = useState(3)
  const column_arrays = [[], [], []];
  const column_height = [0,0,0];
  const column_arrays2 = [[], []];
  const column_height2 = [0,0];
  const offset = 0.15
  // let column_height = new Array(columnCount).fill(0);
  // let column_arrays = new Array(columnCount).fill().map(() => []);

  const renderColumns = (input) => {
     
    
    if (input.length > 2){
      sortMany(input)
    } else if (input.length === 2) {
      if (input[0].ratio < input[1].ratio) {
        column_arrays[0].push(input[0])
        column_arrays[1].push(input[1])
      } else {
        column_arrays[0].push(input[1])
        column_arrays[1].push(input[0])
      }
    } else {
      input.forEach(listItem => column_arrays[0].push(listItem))
    }
    setColumnArrays(column_arrays)

    if (input.length > 1){
      sortMany2(input)
    } else {
      input.forEach(listItem => column_arrays2[0].push(listItem))
    }
    setColumnArrays2(column_arrays2)


  }
  
  const assignColumns = (listItem) => {
    const shortColumnIndex = column_height.indexOf(Math.min(...column_height));
    column_arrays[shortColumnIndex].push(listItem)
    column_height[shortColumnIndex] += 1/listItem.ratio + offset
    setColumnArrays(column_arrays)
  }
  const assignColumns2 = (listItem) => {
    const shortColumnIndex = column_height2.indexOf(Math.min(...column_height2));
    column_arrays2[shortColumnIndex].push(listItem)
    column_height2[shortColumnIndex] += 1/listItem.ratio + .1
    setColumnArrays2(column_arrays2)
  }
  
  const sortMany = (input) => {
    let last3 = [];
    let i = 1;

    input.forEach((listItem) => {
      if (i + 2 < input.length) {
        assignColumns(listItem)
      } else if (i + 2 === input.length) {
        last3.push(listItem)
      } else if (i + 1 === input.length) {
        last3.push(listItem)
      } else {
        last3.push(listItem)
        last3.sort((a,b) => a.ratio - b.ratio )
        last3.forEach((listItem) => {
          assignColumns(listItem)
        })
      }
      i ++ 
    })
  }

  const sortMany2 = (input) => {
    let last2 = [];
    let i = 1;

    input.forEach((listItem) => {
      if (i + 1 < input.length){
        assignColumns2(listItem)
      } else if ( i + 1 === input.length){
        last2.push(listItem)
      } else {
        last2.push(listItem)
        last2.sort((a,b) => a.ratio - b.ratio )
        last2.forEach((listItem) => {
          assignColumns2(listItem)
        })
      }
      i++
    })
  }

  return { columnArrays2, columnArrays, renderColumns }
}




export default useRenderColumns