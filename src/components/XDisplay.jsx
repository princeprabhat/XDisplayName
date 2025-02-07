import React, { useState } from "react";

const XDisplay = () => {
  const [fullName, setFullName] = useState("");
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const handleForm = (e) => {
    e.preventDefault();

    setFullName(
      e.target["first-name"].value + " " + e.target["last-name"].value
    );
  };
  return (
    <div style={{ margin: "20px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleForm}>
        <label>First Name: </label>
        <input
          type="text"
          name="first-name"
          required
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="last-name"
          required
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default XDisplay;
