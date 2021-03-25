import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [profile, setProfile] = useState(
    'https://disaster-analytics.com/wp-content/uploads/2014/05/blank-profile-picture-973460_640.png',
  );

  const imageHandler = (e) => {
    //e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
       if (reader.readyState === 2) {
        setProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="page">
      <div className="container">
        <h1 className="heading">Add your Image</h1>
        <div className="img-holder">
          <img src={profile} alt="" id="img" className="img" />
        </div>
        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={imageHandler}
        />
        <div className="label">
          <label htmlFor="input" className="image-upload">
            <i className="material-icons">add_photo_alternate</i>
            Choose your photo
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
