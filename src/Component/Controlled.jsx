import React, { useState } from 'react';

export default function Controlled() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "First name is required";
    else if (name.length < 3) newErrors.name = "First name must be at least 3 characters";

    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 8) newErrors.password = "Password must be at least 8 characters";

    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm password is required";
    else if (confirmPassword !== password) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    storeDataToObject();
    alert("Form Submitted Successfully!!!");
    setShow(false);
  };

  const storeDataToObject = () => {
    const formData = { name, lastName, email, password, confirmPassword };
    setData(formData);
    localStorage.setItem("Form Data", JSON.stringify(formData));
  };

  const display = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:  </label>
        <input
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
        <br /><br />

        <label>Last Name: </label>
        <input
          type='text'
          placeholder='Enter Your Last Name'
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p style={{color:'red'}}>{errors.lastName}</p>}
        <br /><br />

        <label>Email:  </label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
        <br /><br />

        <label>Password: </label>
        <input
          type='password'
          placeholder='Enter Your Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
        <br /><br />

        <label>Confirm Password</label>
        <input
          type='password'
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}
        <br /><br />

        <button type="submit" style={{ backgroundColor: 'green' }}>Submit</button>{" "}
        <button onClick={display} style={{ backgroundColor: 'red' }}>Show Data</button>

        {show && data && (
          <pre style={{ marginTop: "1rem", fontWeight:'bold', fontFamily:'sans-serif' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </form>
    </div>
  );
}