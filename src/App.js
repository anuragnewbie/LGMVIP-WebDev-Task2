/*
NAME - ANURAG CHATTERJEE
TASK 2 PROJECT
REACT WEB APPLICATION
*/

import React, { useState } from 'react';
import './App.css';

const App = ()=>{
  // here we are using state variable as the data is an array of objects.
  const [users, setUser] = useState([]);
  /*here we are using async and await so as to run the program code even
   while the data is being fetched from the server.*/
  const lgmUsers = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=1");
    let result = await response.json();
    result = result.data;
    setUser(result);
  };

  return(
    /*since we can only return 1 html element so we are enclosing all the html
     elements inside React.Fragement to return all of them in a combined manner.*/
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
          <div className="container py-2">
            <a href="/" className="navbar-brand mb-0 h1">LGM</a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button type="submit" onClick={lgmUsers} className="btn btn-md">Get Users</button>
              </li>
            </ul>
          </div>
        </nav>
	    </header>

      <section id="userCard">
        <h2 className="text-center headline">LetsGrowMore User Details</h2>
		    <div className="container">  
          <div className="row">
            {
              /*here we are using map function to traverse each element (user details)
               contained in users, and display them one by one.*/
              users.map((user)=>{
                return(
                  <div className="col-md-4 col-sm-12" key={user.id}>
                    <div className="card-deck mb-5">
                      <div className="card">
                        <img className="card-img-top" src={user.avatar} alt=""/>
                        <div className="card-body">
                          <h3 className="card-title"><i className="fas fa-id-card"></i> {user.id}</h3>
                          <p className="card-text"><i className="fas fa-file-signature"></i> {user.first_name} {user.last_name}</p>
                          <p className="card-text"><i className="fas fa-envelope"></i> {user.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </React.Fragment>      
  ); 
}

export default App;
