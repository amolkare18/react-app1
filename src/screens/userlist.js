import React from 'react'

function userlist() {
    const data = [
      { same: 'amol', age: "19", mail: "ak" },
      { same: 'naitik', age: "19", mail: "na" },
    ];
  
    // Return an array of JSX elements representing user information
    return data.map(({ same, age, mail }) => (
      <div >  // Add a unique key for each user
        <h1>{same}</h1>  // Display the user's "same" property as the name
        <p>Age: {age}</p>
        <p>Email: {mail}</p>
      </div>
    ));
  }
  
  export default userlist;
  