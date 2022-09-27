import React, { useState } from 'react';

const SingUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  const changeHandler = (event) => {
    if (event.target.value === event.target.isAccepted) {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };

  return (
    <form>
      <h2>SingUp</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>I accept terms of policy</label>
        <input
          type="checkbox"
          name="isAccepted"
          value={data.isAccepted}
          onChange={changeHandler}
        />
      </div>
      <div>
        <a href="#">Login</a>
        <button type="submit">Sing Up</button>
      </div>
    </form>
  );
};

export default SingUp;
