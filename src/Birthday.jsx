import React from "react";
import { users } from "./data.js";
import "./Birthday.css";
import { useState } from "react";

function Birthday() {
  const [matchingUsers, setMatchingUsers] = useState([]);
  function selectDate(selectedDate) {
    const matchingUsers = users.filter((user) => user.date === selectedDate);
    setMatchingUsers(matchingUsers);
  }
  return (
    <div className="App">
      <div className="getdate">
        <p id="dark">BIRTH DAY FINDER</p>
        <p>SELECT THE DATE:</p>
        <input
          type="date"
          id="date"
          onChange={(event) => selectDate(event.target.value)}
        />
        {matchingUsers.length > 0 ? (
          <p>
            {matchingUsers.map((user) => (
              <li key={user.name}>
                {user.name} is the person who born on this date!!!
              </li>
            ))}
          </p>
        ) : (
          <p>There are no users who have birthday on this date.</p>
        )}
      </div>
    </div>
  );
}

export default Birthday;
