// import {createContext, useEffect, useState} from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({children}) {
//   const [user,setUser] = useState(null);
//   const [ready,setReady] = useState(false);
//   useEffect(() => {
//     if (!user) {
//       axios.get('/profile').then(({data}) => {
//         setUser(data);
//         setReady(true);
//       });
//     }
//   }, []);
//   return (
//     <UserContext.Provider value={{user,setUser,ready}}>
//       {children}
//     </UserContext.Provider>
//   );
// }
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/api/profile', {
      withCredentials: true, // Include credentials for session management
    })
    .then(({ data }) => {
      setUser(data);
      setReady(true);
    })
    .catch(error => {
      console.error("Failed to fetch user profile", error);
      setReady(true); // Set ready to true to avoid blocking UI due to loading state
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
