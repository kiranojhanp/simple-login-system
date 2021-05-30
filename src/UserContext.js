import React, { useState, createContext } from "react";

export const UserContext = createContext();

const userData = [
  {
    id: 1,
    full_name: "Kiran Ojha",
    email: "kiran@gmail.com",
    password: "123456789abc",
    avatar: "https://i.imgur.com/uKlMTbx.jpg",
  },
  {
    id: 2,
    full_name: "Kamal Ojha",
    email: "kamal@gmail.com",
    password: "123456789abc",
    avatar: "https://i.imgur.com/uKlMTbx.jpg",
  },
];

var users = localStorage.getItem("userList")
  ? JSON.parse(localStorage.getItem("userList"))
  : userData;

export const UserProvider = (props) => {
  const [userList, setUserList] = useState(users);
  return (
    <UserContext.Provider value={[userList, setUserList]}>
      {props.children}
    </UserContext.Provider>
  );
};
