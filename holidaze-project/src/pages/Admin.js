import React from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import AdminLogout from "../components/admin/AdminLogout";
import TabComp from "../components/TabComp";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ListMessages from "../components/admin/ListMessage";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }
  return (
    <>
      <Hero hero="hotelsHero">
        <Banner>
          {auth ? (
            <>
              <h1>Admin</h1>

              <TabComp />
            </>
          ) : (
            <>
              <div className="admin-alert">
                <h3>You need to be logged in as admin</h3>
              </div>
            </>
          )}
        </Banner>
      </Hero>

      <Footer />
    </>
  );
}

export default Admin;
