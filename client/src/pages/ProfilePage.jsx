// import {useContext, useState} from "react";
// import {UserContext} from "../UserContext.jsx";
// import {Link, Navigate, useParams} from "react-router-dom";
// import axios from "axios";
// import PlacesPage from "./PlacesPage";
// import AccountNav from "../AccountNav";

// export default function ProfilePage() {
//   const [redirect,setRedirect] = useState(null);
//   const {ready,user,setUser} = useContext(UserContext);
//   let {subpage} = useParams();
//   if (subpage === undefined) {
//     subpage = 'profile';
//   }

//   async function logout() {
//     await axios.post('/logout');
//     setRedirect('/');
//     setUser(null);
//   }

//   if (!ready) {
//     return 'Loading...';
//   }

//   if (ready && !user && !redirect) {
//     return <Navigate to={'/login'} />
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />
//   }
//   return (
//     <div>
//       <AccountNav />
//       {subpage === 'profile' && (
//         <div className="text-center max-w-lg mx-auto">
//           Logged in as {user.name} ({user.email})<br />
//           <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
//         </div>
//       )}
//       {subpage === 'places' && (
//         <PlacesPage />
//       )}
//     </div>
//   );
// }

import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  
  if (subpage === undefined) {
    subpage = 'profile';
  }

  // Logout function
  async function logout() {
    try {
      // Update with full URL and ensure credentials are sent
      await axios.post('http://localhost:4000/api/logout', {}, {
        withCredentials: true, // Send cookies
      });
      setRedirect('/');
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  }

  // Loading state
  if (!ready) {
    return 'Loading...';
  }

  // Redirect if not logged in
  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  );
}
