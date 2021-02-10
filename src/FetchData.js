import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const Result = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(Result);
      setData(Result.data);
    }
    getUsers();
  });
  return (
    <div>
      <ul className="data">
        {Data.map((user) => (
          <li key={user.id}> {user.phone}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
