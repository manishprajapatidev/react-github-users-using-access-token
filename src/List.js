import React, { useState, useEffect } from "react";

import "./styles.css";

function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://api.github.com/users?access_token=4649679485d50ff656b763a14c2401cc83df582b"
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    }

    getUsers()
      .then(jsonResult => {
        setUsers(jsonResult);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div className="App">
      <ul style={{ display: "inline" }}>
        {users.map((value, index) => {
          return <li key={index}>{value.login}</li>;
        })}
      </ul>
    </div>
  );
}

module.exports = List;
