import './styles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [userdetails, setUserdetails] = useState({ firstname: "", lastname: "", username: "", email: "", contact: "", postalcode: "" });
  const handlechange = (event) => {
    setUserdetails({ ...userdetails, [event.target.name]: event.target.value });

  }

  const changehandler = () => {
    if (userdetails.firstname.indexOf(" ") > 0 || userdetails.firstname.length == 0) {
      alert("Enter valid first name!");
      return;
    }
    else if (userdetails.lastname.indexOf(" ") > 0 || userdetails.lastname.length == 0) {
      alert("Enter valid last name!");
    }
    else if (! /[^0-9a-zA-Z]/.test((userdetails.username)) || userdetails.username.length == 0) {
      alert("Enter valid username!");
    }
    else if (!  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userdetails.email) || userdetails.email.length == 0) {
      alert("Enter valid email!");
    }
    else if (!(userdetails.contact.match('[0-9]{10}')) || userdetails.contact.length != 10) {
      alert("Enter valid contact!");
    }
    else if (userdetails.postalcode.length != 6) {
      alert("Enter valid postal code!");
    }
    else {
      alert("Submitted");
    }
  }
  return (
    <div className="container">
      <h1>Survey From</h1>
      <hr />
      <div className="form row g-3">
        <h5>Personal Details</h5>
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" onChange={handlechange} value={userdetails.firstname} name="firstname" id="first-name" placeholder="First Name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" onChange={handlechange} value={userdetails.lastname} name="lastname" id="lastname" placeholder="Last Name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input type="text" className="form-control" onChange={handlechange} value={userdetails.username} name="username" id="username" aria-describedby="inputGroupPrepend2" placeholder="user1234" />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" onChange={handlechange} id="email" value={userdetails.email} name="email" placeholder="user@email.com" />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Contact No
          </label>
          <input type="text" className="form-control" onChange={handlechange} id="contact" value={userdetails.contact} name="contact" placeholder="xxx-xxx-xxxx" />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault05" className="form-label">
            Poctal Code / Zip
          </label>
          <input type="text" className="form-control" onChange={handlechange} id="postal-code" value={userdetails.postalcode} name="postalcode" placeholder="xx-xx-xx" />
        </div>
        <div className="col-md-12">
          <h5>Would you recommend Newton School to a friend?</h5>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              {' '}
              Default radio{' '}
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {' '}
              Default checked radio{' '}
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              {' '}
              Default checked radio{' '}
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <h5>
            Languages and Frameworks known <small>(Check all that apply)</small>
          </h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              C
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              C++
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Java
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Python
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Javascript
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              React
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Angular
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Django
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Spring
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Android
            </label>
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={changehandler}  >
            Submit form
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
