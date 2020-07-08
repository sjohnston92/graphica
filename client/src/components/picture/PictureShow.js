import React from 'react';
import styled from 'styled-components'

const PictureShow = (props) => {
 const id = props.id
 const url = props.url
  return (
    <>

<UserInfoDiv>
 Hello User Info
</UserInfoDiv>
<PictureDiv>
 {`Hello Picture ${id}`}
 <StyledImg src={url} />
</PictureDiv>
<PictureInfoDiv>
  Hello Picture Info
</PictureInfoDiv>
<PictureCollectionDiv>
  Hello Picture Collection
</PictureCollectionDiv>
<PictureDescriptionDiv>
  Hello Picture Description
</PictureDescriptionDiv>
<CommentsDiv>
  Hello Comments
</CommentsDiv>

    </>

  )
}
export default PictureShow

const UserInfoDiv = styled.div`
  
`
const PictureDiv = styled.div`

`
const StyledImg = styled.img`
height: 300px;
`
const PictureInfoDiv = styled.div`

`
const PictureCollectionDiv = styled.div`

`
const PictureDescriptionDiv = styled.div`

`
const CommentsDiv = styled.div`

`







