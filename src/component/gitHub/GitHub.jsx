import React, { useEffect, useState } from "react";
import { data } from "react-router";
import { useLoaderData } from "react-router";

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/omku415")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="text-center p-4 mb-2 text-3xl m-4 bg-gray-600 text-white">
      <p className="mb-2">GitHub Followers : {data.followers}</p>
      <img
        src={data.avatar_url}
        alt="github pic "
        width={300}
        className="mx-auto block"
      ></img>
    </div>
  );
}

export default GitHub;

export const gitHubInfo = async () => {
  const response = await fetch("https://api.github.com/users/omku415");
  return response.json();
};
