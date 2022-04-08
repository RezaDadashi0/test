import React from "react";
import Header from "../Components/Header";
import NewUser from "../Components/NewUser";
import Users from "../Components/Users";

export default function Home({ users, onAddNewUser, setUser }) {
  return (
    <>
      <div className="container pt-2">
        <Header />
        <NewUser onAddNewUser={onAddNewUser} id={users.length + 1} />
        <Users {...{ users, setUser }} />
      </div>
    </>
  );
}
