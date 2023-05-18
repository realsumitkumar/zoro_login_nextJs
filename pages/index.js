import { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  // State variables to store the form input values and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Event handler for username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the login API endpoint with the entered username and password
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      // Handle the response from the API
      if (response.status === 200) {
        setErrorMessage('Login successful!');
      } else {
        setErrorMessage('Authentication failed.');
      }
    } catch (error) {
      // Handle any error that occurred during the API call
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={`row justify-content-center align-items-center ${styles.row}`}>
        <div className={`col-md-6 ${styles.card}`}>
          <div className="card-body">
            <div className="text-center">
              <img src="zoro.jpg" alt="Zoro" /> {/* Display the image */}
            </div>
            <h2 className={`card-title text-center ${styles.title}`}>
              <b>Login</b>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className={`form-label ${styles.label}`}>
                  Username
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.input}`}
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className={`form-label ${styles.label}`}>
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${styles.input}`}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {errorMessage && (
                <div
                  className={`alert ${errorMessage === 'Login successful!' ? 'alert-success' : 'alert-danger'
                    } ${styles.error}`}
                >
                  {errorMessage}
                </div>
              )}
              <button type="submit" className={`btn btn-primary btn-block ${styles.button}`}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
