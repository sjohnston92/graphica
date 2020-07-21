import React, { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import CollectionForm from '../new/CollectionForm'
import AddCollectionToPicture from '../new/AddCollectionToPicture';
import axios from 'axios'
const AddCollectionButton = (props) => {
  const [ toggleForm, setToggleForm ] = useState(false)
  const [ toggleNew, setToggleNew ] = useState(false)

  const handleClick = () => {
    setToggleForm(!toggleForm)
  }

  const handleCollectionId = (incomingId) => {
    axios.post(`/api/collection_pictures`, {picture_id: props.image.id, collection_id: incomingId})
    .then(res => {
      props.refreshCollectionState(res.data)
    })
    .catch(console.log)
  }

  return (
    <>  
      { props.authenticated && 
        <> 
          { 
            (props.user.id === props.userId) &&
            <>
                <button onClick={handleClick}>{ toggleForm ? <> Close </> : <> Add collection </> }</button>
                { toggleForm && 
                  <>
                    { !toggleNew &&  <AddCollectionToPicture handleCollectionId={handleCollectionId}/> }  
                    <button onClick={()=>setToggleNew(!toggleNew)}>
                      { toggleNew ? <> Choose Existing </> : <> Create New </>}                    
                    </button>
                    { toggleNew && <CollectionForm /> }
                  </>
                }
            </>
          }
        </>
      }
    </>
  )
}

const ConnectedAddCollectionButton = (props) => (
  <AuthConsumer>
    {(value) => <AddCollectionButton {...props} {...value} />}
  </AuthConsumer>
);

export default ConnectedAddCollectionButton