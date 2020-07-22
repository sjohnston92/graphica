import React from 'react';
import ProfileCollectionFeed from './ProfileCollectionFeed';
import { AuthConsumer } from '../../providers/AuthProvider';



const CollectionTab = ({user}) => (
  <>
    <ProfileCollectionFeed user={user}/>
  </>
)

const ConnectedCollectionTab = (props) => (
  <AuthConsumer>
    {
      values => <CollectionTab {...props} {...values} />
    }
  </AuthConsumer>
  
)



export default ConnectedCollectionTab;