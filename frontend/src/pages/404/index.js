import React from "react";

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import "./styles.css";
import "../../global.css";

export default () => {
  return (
    <div className="container">
      <div className="content">
        <h1>404</h1>
        <Link className="back-link" to="/">
          <FaHome height={16} color="#E02041" />
          Início
        </Link>
      </div>
    </div>
  );
};
