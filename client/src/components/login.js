import React from 'react';
import '../App.css';

import Link from 'react-router-dom';

const Login = () => {
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
    <div className="login-container">
      <h2>Please login in</h2>
      <form>
        <input placeholder="username" type="text" />
        <input type="text" placeholder="password" />
        <button type="submit">login</button>
      </form>
      
    </div>
  );
}

export default Login;