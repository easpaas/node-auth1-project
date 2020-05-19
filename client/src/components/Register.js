import React, { useState, useEffect } from 'react';

const Register = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .post('http://localhost:5000/api/auth/register', data)
  //     .then(user => {
  //       console.log(user)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  return (
    <div className="Register">
      <h2>Register below</h2>
      <form>
        <input placeholder="username" type="text" />
        <input placeholder="password" type="text" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;