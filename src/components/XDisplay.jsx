import React, { useState } from "react";

const XDisplay = () => {
  const [fullName, setFullName] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    console.log();
    setFullName(
      e.target["first-name"].value + " " + e.target["last-name"].value
    );
  };
  return (
    <div style={{ margin: "20px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleForm}>
        <label>First Name: </label>
        <input type="text" name="first-name" required />
        <br />
        <label>Last Name: </label>
        <input type="text" name="last-name" required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default XDisplay;
