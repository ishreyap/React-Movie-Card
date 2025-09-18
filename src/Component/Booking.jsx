import React, { useState } from "react";

export default function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [appoDate, setAppoDate] = useState("");
  const [appoTime, setAppoTime] = useState("");
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    else if (name.length < 8)
      newErrors.name = "First name must be at least 8 characters";

    if (!phoneNo.trim()) newErrors.phoneNo = "Enter valid Phone Number";
    else if (phoneNo.length !== 10)
      newErrors.phoneNo = "Phone Number must be contain 10 digit";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email address";

    if (!appoDate.trim()) newErrors.appoDate = "Appoient Date is Required";
    else if (new Date(appoDate) < new Date())
      newErrors.appoDate = "Appointment date cannot be in the past";
    else if (new Date(appoDate) < new Date())
      newErrors.appoDate = "Appointment date cannot be in the past";

     if (!appoTime) newErrors.appoTime = "Appointment time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    storeDataToObject();
    alert("Booking Successful!!!");
    setShow(false);
  };

  const storeDataToObject = () => {
    const bookingData = { name, email, phoneNo, appoDate, appoTime};
    setData(bookingData);
    localStorage.setItem("Form Data", JSON.stringify(bookingData));
  };

  const display = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name: </label>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />
        <br />
        <label>Email: </label>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />
        <br />
        <label>Phone Number: </label>
        <input
          type="text"
          placeholder="Enter Your Phone Number"
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        {errors.phoneNo && <p style={{ color: "red" }}>{errors.phoneNo}</p>}
        <br />
        <br />
        <label>Appointment Date: </label>
        <input
          type="date"
          placeholder="Enter Your Phone Number"
          onChange={(e) => setAppoDate(e.target.value)}
        />
        {errors.appoDate && <p style={{ color: "red" }}>{errors.appoDate}</p>}
        <br />
        <br />
        <label>Appointment Time: </label>
        <input
          type="time"
          placeholder="Enter Your Phone Number"
          onChange={(e) => setAppoTime(e.target.value)}
        />
        {errors.appoTime && <p style={{ color: "red" }}>{errors.appoTime}</p>}
        <br />
        <br />
        <button type="submit" style={{ backgroundColor: "green" }}>
          Submit
        </button>{" "}
        <button onClick={display} style={{ backgroundColor: "red" }}>
          Show Data
        </button>
        {show && data && (
          <pre
            style={{
              marginTop: "1rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </form>
    </div>
  );
}
