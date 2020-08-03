import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Favorite = (props) => {
  const [ picture, setPicture ] = useState(null)

  useEffect(() => {
    axios.get(`/api/pictures/${props.fav.picture_id}`)
      .then( res => setPicture(res.data))
      .catch(console.log)
  }, [])

  return <> {picture && <img src={picture.url}/> } </>

  console.log(picture)
}

export default Favorite