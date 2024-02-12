import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"Regresa - página no encontrada"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Página no encontrada</h2>
        <Link to="/" className="pnf-btn">
          Regresar
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;