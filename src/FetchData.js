import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const Result = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(Result);
      setData(Result.data);
    }
    getUsers();
    console.log(Data);
  }, []);
  return (
    <div>
      <ul className="data">
        {Data.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
