import React from 'react';

const ProfileNavbar = ({ changeTab, isCurrentUser }) => (
  <div>
    <button onClick={() => changeTab("recent")}>
      recent
    </button>
    <button onClick={() => changeTab("collections")}>
      collection
    </button>
    {/* <button onClick={() => changeTab("favorites")}>
      favorites
    </button>  */}
    { isCurrentUser &&
      <button onClick={() => changeTab("settings")}> 
        settings
      </button>
    }
  </div>
)

export default ProfileNavbar;