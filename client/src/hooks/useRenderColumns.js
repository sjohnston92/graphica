import React, { useState } from 'react';

const useRenderColumns = (input = []) => {
  const [ columnArrays, setColumnArrays ] = useState([[], [], []]);
  const column_arrays = [[], [], []];
  const column_height = [0,0,0];
  const offset = 0.15

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
    } else input.forEach(listItem => column_arrays[0].push(listItem));
  }
  
  const assignColumns = (listItem) => {
    if (column_height[0] <= column_height[1] && column_height[0] <= column_height[2]) {
      column_arrays[0].push(listItem);
      column_height[0] = column_height[0] + 1/listItem.ratio + offset
    } else if (column_height[1] <= column_height[0] && column_height[1] <= column_height[2]) {
      column_arrays[1].push(listItem);
      column_height[1] = column_height[1] + 1/listItem.ratio + offset
    } else {
      column_arrays[2].push(listItem);
      column_height[2] = column_height[2] + 1/listItem.ratio + offset
    }
    setColumnArrays(column_arrays)
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

  return { columnArrays, renderColumns }
}

export default useRenderColumns