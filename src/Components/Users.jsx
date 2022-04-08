import React from "react";
import Table from "./Table";

const Users = ({ users, setUser }) => {
  return (
    <div className="row shadow rounded">
      <div className="col mt-4">
        <h6 className="titr text-right mb-4">لیست کاربران</h6>
        <Table {...{ users, setUser }} />
      </div>
    </div>
  );
};

export default Users;
