import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function AdminLogout() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <nav>
      {auth ? (
        <>
          <button className="button-prime" onClick={logout}>
            Log out
          </button>
        </>
      ) : (
        <Link to="/login">You have to be Logged in</Link>
      )}
    </nav>
  );
}

export default AdminLogout;
