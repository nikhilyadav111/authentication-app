import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return (
      <h1 className="display-1 my-5 text-center text-secondary">Loading...</h1>
    );
  }

  return (
    <div>
      <h1 className="my-5 text-center">Home</h1>
      <Link to={"/auth/settings"} className="m-3 btn btn-primary rounded-0">
        Settings
      </Link>
      <Link to={"/auth/dashboard"} className="m-3 btn btn-primary rounded-0">
        Dashboard
      </Link>
    </div>
  );
};

export default Home;
