import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export  function AuthProvider({ children }) {


  const nav = useNavigate(); 
  const [currentUser, setCurrentUser] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onChange, setonChange] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    if (token && userId) {
      setIsLoggedIn(true);
      fetchUserById(userId);
    }
  }, []);


  const login = (user) => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
            
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          handleLogin(response);
          Swal.fire('Success', response.success, 'success');
          nav("/")
          setonChange(!onChange)

        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      });
  };
  // registration
  const register = (user) => {
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.errors) {
          Swal.fire('Error', response.errors, 'error');
        } else if (response.success) {
          nav('/login');
          Swal.fire('Success', response.success, 'success');
          setonChange(!onChange);
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };
  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUsername(data.username);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("userId", data.user_id);
  };
  // Fetching current user
//   useEffect(() => {
//     fetch('/current_user', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         console.log(response)
//         if (response.user) {
//           set_currentUser(response.user);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching current user:', error);
//       });
//   }, [onChange]);
//     useEffect(() => {
//     fetch('/current_user', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.user) {
//           set_currentUser(response.user);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching current user:', error);
//       });
//   }, [onChange]);
   // Fetch current user
  const fetchCurrentUser = () => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    if (!token || !userId) return;
    fetch(`/users/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.email) {
          setCurrentUser(data);
          console.log(currentUser)
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
  };
   
    // Fetch user by ID
  const fetchUserById = (userId) => {
    const token = sessionStorage.getItem("token");
    if (!token) return;
    fetch(`/users/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user by ID:", error);
      });
  };

  

  // Logging out
  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    nav("/");
    // fetch('/logout', {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((res) => res.json())
    //   .then((response) => {
    //     if (response.error) {
    //       Swal.fire('Error', response.error, 'error');
    //     } else if (response.success) {
    //       nav('/sign-in');
    //       Swal.fire('Success', response.success, 'success');
    //       setonChange(!onChange);
    //     } else {
    //       Swal.fire('Error', 'Something went wrong', 'error');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error logging out the user:', error);
    //   });
  };


  const contextData = {
    login,   
    logout,
    register,
    isLoggedIn,
    fetchCurrentUser,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}