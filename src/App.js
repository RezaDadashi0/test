import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import "./App.css";
import UpdateUser from "./Pages/UpdateUser";

const apiEndPoint = "https://6249e521fd7e30c51c085463.mockapi.io/api/info";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: users } = await axios.get(apiEndPoint);
        setUsers(users);
      } catch (error) {
        alert(
          "مشکلی در دریافت اطلاعات به وجود آمده است. لطفا دوباره تلاش کنید"
        );
      }
    }
    fetchData();
  }, []);

  const handleAddNewUser = async (newUser) => {
    const orginalUsers = [...users];

    try {
      const { data: user } = await axios.post(apiEndPoint, newUser);
      setUsers([...orginalUsers, user]);
    } catch (error) {
      console.log(error);
      setUsers(orginalUsers);
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    const orginalUsers = [...users];
    try {
      const {data} = await axios.put(`${apiEndPoint}/${user.id}`, updatedUser);
      const uUser = orginalUsers.filter(u => u.id === data.id)[0];
      const indexof = orginalUsers.indexOf(uUser);
      users[indexof] = {...updatedUser}
      setUsers(users);
      
    } catch (error) {
      console.log(error);
      setUsers(orginalUsers);
    }
  };

  return (
    <div className="homa">
      <Switch>
        <Route
          path="/home/:id"
          render={(props) => (
            <UpdateUser
              user={user}
              onUpdateUser={handleUpdateUser}
              {...props}
            />
          )}
        />
        <Route
          path="/home"
          render={(props) => (
            <Home
              {...{ users, setUser }}
              onAddNewUser={handleAddNewUser}
              {...props}
            />
          )}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
