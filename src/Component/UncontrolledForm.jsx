import React, { useRef } from 'react';

export default function UnControlledForm() {
    const userefname = useRef();
    const email = useRef();
    const username = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.current.value.includes('@')) {
            alert('Email must contain @');
            return;
        }
        if(username.current.value.length < 8){
            alert("Username must be at least 8 charaters long");
            return;
        }
        console.log("Name:", userefname.current.value);
        console.log("Email:", email.current.value);
        console.log("Username:", username.current.value);
        console.log("Password:", password.current.value);

        alert("Form submitted successfully!");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    ref={userefname}
                    type="text"
                    placeholder="Enter your name"
                /><br /><br />

                <label>Email: </label>
                <input
                    ref={email}
                    type="text"
                    placeholder="Enter your email"
                /><br /><br />

                <label>Username: </label>
                <input
                    ref={username}
                    type="text"
                    placeholder="Enter Your User Name"
                /><br /><br />

                <label>Password: </label>
                <input
                    ref={password}
                    type="password"
                    placeholder="Enter Your Password"
                /><br /><br />

                <button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>
                    Submit
                </button>
            </form>
        </div>
    );
}