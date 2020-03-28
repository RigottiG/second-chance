import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

import Heroes from "../../assets/heroes.png";
import Logo from "../../assets/logo.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";
import api from "../../services/api";

export default () => {
  const [id, setId] = useState("");

  const history = useHistory();

  async function hundleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
      setTimeout(
        toast.success(`Bem Vindo ${response.data.name}`, {
          position: toast.POSITION.TOP_RIGHT
        }),
        3000
      );
    } catch (error) {
      toast.error("Erro ao se logar!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="login-containner">
        <section className="form">
          <img src={Logo} alt="logo" />

          <form onSubmit={hundleLogin}>
            <h1>Faça seu Login</h1>
            <input
              type="text"
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <button className="button" type="submit">
              Entrar
            </button>
            <Link className="back-link" to="/register">
              <FaSignInAlt height={16} color="#E02041" />
              Não tenho Cadastro
            </Link>
          </form>
        </section>
        <img src={Heroes} alt="heroes" />
      </div>
    </>
  );
};
