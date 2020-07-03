import React from 'react';
import styled from 'styled-components';
import img from '../../img/whitemtn.jpg';


  const Feed = () => (
    <>
   
     WHERe IS THIS TEXT?? 
    <StyledImage src={img} />
    {/* <img src={"https://res.cloudinary.com/graphica/image/upload/v1593188743/white-mountain_eschby.jpg"}
/> */}
    </>
  
  )

  const FeedStyle = styled.div`
    

  `

const StyledImage = styled.img`
 
  border-radius: 25%;
  height: 200px;
  width: 500px;
  border: 1px solid #ccc;
  padding: 5px;

`
export default Feed