import { useEffect, useState } from "react";

function UsersSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => setUsers(users.results));
  }, []);
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user) => {
            const { name, email, picture } = user;
            return (
              <li class={user.gender === "male" ? "bg-blue" : "bg-pink"}>
                <img src={picture.large} alt="name" />
                <h3>{`${name.title} ${name.first} ${name.last}`}</h3>
                <p>Email: {email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
