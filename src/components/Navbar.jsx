import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="navbar bg-dark shadow-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-0 h1 text-light">
          Auth App
        </Link>
        <span className="float-end">
          {user ? (
            <button
              className="btn btn-sm btn-danger mx-1"
              onClick={handleLogOut}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/register" className="btn btn-sm btn-primary mx-1">
                Register
              </Link>
              <Link to={"/login"} className="btn btn-sm btn-primary mx-1">
                Sign In
              </Link>
            </>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
