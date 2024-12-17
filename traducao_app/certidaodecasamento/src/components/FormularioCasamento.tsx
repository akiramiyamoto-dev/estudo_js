import React, { useState } from "react";
import "../styles/App.css"; // Importando o CSS

const FormularioCasamento: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeNoivo: "",
    dataNascimentoNoivo: "",
    nomeNoiva: "",
    dataNascimentoNoiva: "",
    dataCasamento: "",
    localCasamento: "",
    testemunhas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData); // Simulando envio
    alert("Dados enviados! Confira no console.");
  };

  return (
    <div className="form-container">

      <form onSubmit={handleSubmit}>
        {/* Nome do Noivo e Data de Nascimento do Noivo */}
        <div className="form-row">
          <div className="form-group nome-noivo">
            <label>Nome do Noivo:</label>
            <input
              type="text"
              name="nomeNoivo"
              value={formData.nomeNoivo}
              onChange={handleChange}
              placeholder="Digite o nome do noivo"
              required
            />
          </div>
          <div className="form-group data-nascimento-noivo">
            <label className="dataNascimento">Nascimento:</label>
            <input
              className="dataNascInput"
              type="date"
              name="dataNascimentoNoivo"
              value={formData.dataNascimentoNoivo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Nome da Noiva e Data de Nascimento da Noiva */}
        <div className="form-row">
          <div className="form-group nome-noiva">
            <label>Nome da Noiva:</label>
            <input
              type="text"
              name="nomeNoiva"
              value={formData.nomeNoiva}
              onChange={handleChange}
              placeholder="Digite o nome da noiva"
              required
            />
          </div>
          <div className="form-group data-nascimento-noiva">
            <label className="dataNascimento">Nascimento:</label>
            <input
              className="dataNascInput"
              type="date"
              name="dataNascimentoNoiva"
              value={formData.dataNascimentoNoiva}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Local do Casamento e Data do Casamento */}
        <div className="form-row">
          <div className="form-group">
            <label>Local do Casamento:</label>
            <input
              type="text"
              name="localCasamento"
              value={formData.localCasamento}
              onChange={handleChange}
              placeholder="Digite o local do casamento"
              required
            />
          </div>
          <div className="form-group data-casamento">
            <label>Data do Casamento:</label>
            <input
              className="dataNascInput"
              type="date"
              name="dataCasamento"
              value={formData.dataCasamento}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Campo para Testemunhas */}
        <div className="form-group">
          <label>Testemunhas:</label>
          <textarea
            name="testemunhas"
            rows={3}
            value={formData.testemunhas}
            onChange={handleChange}
            placeholder="Digite os nomes das testemunhas"
          ></textarea>
        </div>

        <button type="submit">Enviar Dados</button>
      </form>











    </div>
  );
};

export default FormularioCasamento;
