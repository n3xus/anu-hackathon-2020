import React, { useState, createContext } from "react";

const UserContext = createContext({});
const UserProvider = (props) => {
  // Context state
  const [user, setUser] = useState({
    AboutMe: "",
    Address: "",
    City: "",
    Country: "",
    DoB: "",
    Email: "",
    FirstName: "Ryan",
    Gender: "",
    LastName: "",
    UserName: "",
    Zip: "",
    loggedIn: true,
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
