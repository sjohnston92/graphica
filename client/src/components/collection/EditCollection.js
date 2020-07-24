import React, { useState } from 'react'
import CollectionForm from './CollectionForm'
import { AuthConsumer } from '../../providers/AuthProvider'

const EditCollection = (props) => {
  const [ editing, setEditing ] = useState()
  
  const handleRes = (res) => {
    setEditing(false)
    props.handleRes(res)
  }

  const deleteCollection = () => {
    props.deleteCollection(props.collection.id)
  }

  return (
    <>
      {props.authenticated && props.user.id === props.collection.user_id || 1 &&
        <>
          { editing 
            ? <CollectionForm handleRes={handleRes} collection={props.collection} />
            : 
              <>
                <button onClick={()=>setEditing(true)}>Edit Collection</button> 
                <button onClick={deleteCollection}>Delete Collection</button>
              </>
          }      
        </>
      }
    </>
  )
}

  const ConnectedEditCollection = (props) => (
    <AuthConsumer>
        {(value) => <EditCollection {...props} {...value} />}
    </AuthConsumer>
  );
export default ConnectedEditCollection
