import React from "react";
import { Link } from "react-router-dom";

export default function Table({ users, setUser }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-center" scope="col">
            شناسه
          </th>
          <th className="text-center" scope="col">
            نام
          </th>
          <th className="text-center" scope="col">
            نام خانوادگی
          </th>
          <th className="text-center" scope="col">
            شماره همراه
          </th>
          <th className="text-center" scope="col">
            عملیات
          </th>
        </tr>
      </thead>
      {
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th className="text-center" scope="row">
                {user.id}
              </th>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.lastname}</td>
              <td className="text-center">{user.phoneNumer}</td>
              <td className="text-center">
                <Link to={`/home/${user.id}`}>
                  <button
                    className="btn btn-outline-primary px-5"
                    onClick={() => setUser(user)}
                  >
                    ویرایش
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
}
