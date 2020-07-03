import React, { Component } from 'react';
import axios from 'axios';

const PictureContext = React.createContext();

export const PictureConsumer = PictureContext.Consumer;

class PictureProvider extends Component {

    state = { pictures: [] }


    componentDidMount() {
      //ask rails for all pictures
      axios.get("/api/pictures")
        .then( res => {
          this.setState({ pictures: res.data})
          
        })
        .catch( err => {
          console.log(err)
        })
    }

    render() {
      return(
          <PictureContext.Provider value={{
              ...this.state, 
          }} >
              
              { this.props.children }</PictureContext.Provider>


          
      )
  }





}

export default PictureProvider