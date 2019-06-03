import React, { useState, useEffect } from "react";

const Card = ({ user }) => (
  <div className="col-md-4">
    <div className="card my-2">
      <img src={user.avatar} className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">
          {user.first_name} {user.last_name}
          <br />
          <small className="text-muted">{user.email}</small>
        </h5>
        <a
          href="https://www.linkedin.com/in/taufan-fadhilah-iskandar-13a3a6a1/"
          className="btn btn-primary"
        >
          Contact me!
        </a>
      </div>
    </div>
  </div>
);

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(response => response.json())
      .then(res => setUsers(res.data));
  }, [page]);

  return (
    <>
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
      <div className="col-md-12 text-right m-3">
        {page > 1 ? (
          <button
            className="btn btn-success mr-3"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
        ) : null}
        <button
          className="btn btn-success"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Users;
