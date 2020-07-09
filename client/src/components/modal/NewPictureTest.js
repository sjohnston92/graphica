import React from 'react'

const NewPictureTest = () => (
  <>
  <h1>New Picture</h1>
  <hr />
  <h2>Name</h2>
    <input type="form"></input>
  <h2>Info</h2>
    <input type="textarea" placeholder="Give some context about your picture..."></input>
  <h2>Collection</h2>
  <div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Collections</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
  </div>
  <h2>Description</h2>
  <input type="textarea" placeholder="Describe your picture..."></input>
  </>
)

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

export default NewPictureTest;
