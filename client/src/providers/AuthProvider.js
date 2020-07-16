import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push('/login');
      })
      .catch( res => {
        console.log(res);
      })
  }

  updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, user)
      .then( res => this.setState({ user: res.data }))
      .catch(console.log)
  }
  
  updateUserProfileImage = (id, user) => {
    let data = new FormData()
    data.append('file', user.file)
    axios.put(`/api/users/${id}/profile_image`, data)
      .then( res => this.setState({ user: res.data }))
      .catch(console.log)
  }

  updateUserBannerImage = (id, user) => {
    let data = new FormData()
    data.append('file', user.file)
    axios.put(`/api/users/${id}/banner_image`, data)
      .then( res => this.setState({ user: res.data }))
      .catch(console.log)
  }
  
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
        updateUser: this.updateUser,
        updateUserProfileImage: this.updateUserProfileImage,
        updateUserBannerImage: this.updateUserBannerImage,
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};

export default AuthProvider;