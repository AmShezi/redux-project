import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./store/actions";
import "./App.css";
import { toast } from "react-hot-toast";

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log({ data });
  useEffect(() => {
    setTimeout(() => {
      dispatch(getData());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {data.status === "loading" ? (
        <div id="loader"></div>
      ) : data.status === "failed" ? (
        toast.error(data.error)
      ) : (
        <>
          <ol>
            {data.items.map(({ id, name, salary }, index) => (
              <div key={index}>
                <li>{name}</li>
                <p>{salary}</p>
              </div>
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default Users;
