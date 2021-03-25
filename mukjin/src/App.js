import React, { useState } from 'react';
import qrcode from './mukjin_qr.png';
import './App.css';
const App = () => {
  const [profile, setProfile] = useState(
    'https://disaster-analytics.com/wp-content/uploads/2014/05/blank-profile-picture-973460_640.png',
  );

  const [info, setInfo] = useState({
    name: '김도토',
    dep: '도토리묵포장학과',
    idnumber: '20182142',
  });

  const changeValue = (e2) => {
    setInfo({ ...info, [e2.target.name]: e2.target.value });
  };
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
    <div>
      <div className="page">
        <div className="container">
          <div className="img-holder">
            <img src={profile} alt="" id="img" className="img" />
            <img src={qrcode} alt="" id="qr" className="img" />
          </div>

          <input
            type="file"
            name="image-upload"
            id="input"
            accept="image/*"
            onChange={imageHandler}
          />
          <div className="profile-info-container">
            <h1>{info.name}</h1>
            <h2>{info.dep}</h2>
            <h2>{info.idnumber}</h2>
          </div>
        </div>
        <div className="container2">
          {' '}
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <i className="material-icons">add_photo_alternate</i>
              사진선택
            </label>
          </div>
          <form onChange={changeValue}>
            <label className="label">
              이름&emsp;
              <input type="text" name="name" />
            </label>
            <br />
            <label className="label">
              학과&emsp; <input type="text" name="dep" />
            </label>
            <br />
            <label className="label">
              학번&emsp;
              <input type="text" name="idnumber" className="input" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
