import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.css";
import "../../global.css";
import Logo from "../../assets/logo.svg";

import api from "../../services/api";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await api.post("ongs", {
        name,
        email,
        whatsapp,
        city,
        uf
      });

      alert(`Seu ID de Acesso:${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Ocorreu um erro durante o cadastro!");
      history.push("/");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={Logo} alt="main-logo" />
          <h1>Cadastro</h1>
          <p>
            Faça já o se cadastro, entre na plataforma e ajude pessoas a
            encontrarem os casos da sua ONG!
          </p>
          <Link className="back-link" to="/">
            <FaArrowLeft height={16} color="#E02041" />
            Não tenho Cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="form-inputs">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              style={{ width: 80 }}
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};
