import React from "react";
import { useParams } from "react-router";
function User() {
  const { id } = useParams();
  return <div className="text-2xl flex justify-center bg-gray-500 p-4 text-white">User: {id}</div>

}

export default User;
