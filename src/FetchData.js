import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const Result = await axios("https://covid19.mathdro.id/api/confirmed");
      console.log(Result);
      setData(Result.data);
    }
    getUsers();
    console.log(Data);
  }, [setData]);
  return (
    <div>
      <ul className="data">
        {Data.map((cases) => (
          <li key={cases.uid}> {cases.provinceState}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
