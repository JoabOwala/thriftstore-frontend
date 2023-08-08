import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`http://127.0.0.1:3001/auth/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.errors);
      } else {
        // Only attempt to parse JSON if the response content is not empty
        if (response.headers.get('content-length') !== '0') {
          const responseData = await response.json();
          handleLogin(responseData.admin);
          navigate('/my-account');
        } else {
          console.log('Empty response from server');
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (admin) => {
    // Handle successful login
    // You can perform any necessary actions here, such as storing tokens in local storage, updating state, etc.
    navigate('/admin'); // Redirect to the admin or desired page after login
  };

  return (
    <div className="admin_login">
      <div className="container my-5">
        <div className="col-md-8 mx-auto login h-100">
          <div
            className="card shadow px-3 py-5"
            style={{ width: '600px', backgroundColor: '#E8F9FD' }}
          >
            <h2 className="card-title text-center">Login</h2>
            <form onSubmit={handleSubmit} className="vstack gap-2">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                {isLoading ? 'Logging In...' : 'Log In'}
              </button>
              {errors && <div className="text-danger">{errors}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

