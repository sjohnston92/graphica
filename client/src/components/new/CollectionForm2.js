import React, { useState } from 'react';
import axios from "axios";
import { AuthConsumer, } from "../../providers/AuthProvider";
import styled  from 'styled-components';

class CollectionForm extends React.Component {

  state = { 
    formValues: {title: "", description: "", user_id: "", },
  };

  

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`api/users/${this.props.auth.user.id}/collections/`, this.state.formValues )

    .then(res => {
      console.log(this.props.auth)
        const  { collections } = this.state
        // this.setState({ collections: [...collections, res.data] })
      .catch(console.log)
    }
    )
    }

  handleChange = (event) => this.setState({ 
    formValues: { 
      ...this.state.formValues,
        [event.target.name]: event.target.value 
    }
  });

  render(){
    return (
     <>
      <CollectionStyleForm onSubmit={this.handleSubmit}>
        <lable>
          Title:
          <input 
            name="title"
            type="text"
            value={this.state.formValues.title}
            onChange={this.handleChange}
            required
          />
        </lable>

        <lable>
          Description
          <input 
            name="description"
            type="text"
            value={this.state.formValues.description}
            onChange={this.handleChange}
            required
          />
        </lable>
        <button>Submit</button>
      </CollectionStyleForm>
     </>
    )
  }
} 


const CollectionStyleForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ConnectedCollectionForm = (props) => (
  <AuthConsumer>
    { auth => 
      <CollectionForm { ...props } auth={auth} />
      }
  </AuthConsumer>


)

export default ConnectedCollectionForm;