import React from 'react';
import styled from 'styled-components';


const ProfileNavbar = ({ changeTab, isCurrentUser }) => (
  <NavBar>
    <RecentTab onClick={() => changeTab("recent")}>
      recent
    </RecentTab>
    <CollectionTab onClick={() => changeTab("collections")}>
      collection
    </CollectionTab>
    {/* <button onClick={() => changeTab("favorites")}>
      favorites
    </button>  */}
    { isCurrentUser &&
      <SettingsTab onClick={() => changeTab("settings")}> 
        settings
      </SettingsTab>
    }
  </NavBar>
)

const NavBar = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const RecentTab = styled.div`
    color: black;
    cursor: pointer;
    display: inline;
    margin-left: 4rem;
`
const CollectionTab = styled.div`
    color: black;
    cursor: pointer;
    display: inline;
    margin-left: 4rem;
`
const SettingsTab = styled.div`
    color: black;
    cursor: pointer;
    display: inline;
    margin-left: 60rem;
`



export default ProfileNavbar;