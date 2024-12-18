import React, { useState } from "react";

const FormularioCasamento = () => {
  const [formData, setFormData] = useState({
    nomeConjugue1: "",
    nomeConjugue2: "",
    localCasamento: "",
    dataCasamento: "",
    dataNascimentoConjugue1: "",
    dataNascimentoConjugue2: "",
    paiConjugue1Nome: "",
    paiConjugue1Rg: "",
    maeConjugue1Nome: "",
    maeConjugue1Rg: "",
    paiConjugue2Nome: "",
    paiConjugue2Rg: "",
    maeConjugue2Nome: "",
    maeConjugue2Rg: "",
    testemunha1Nome: "",
    testemunha1Rg: "",
    testemunha2Nome: "",
    testemunha2Rg: "",
    informacoesAdicionais: "", // Novo campo para informações adicionais
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar os dados do formulário (pode ser ajustado para envio real)
    console.log("Dados Enviados:", formData);
  };

  return (

    <form onSubmit={handleSubmit}>
      {/* Nome do Noivo e Data de Nascimento do Noivo */}
      <h1>Formulário de Certidão de Casamento</h1>
      <p>Informe os dados conforme a certidão para tradução.</p>
      <br />
      <div className="form-row">
        <div className="form-group nome-conjugue1">
          <label>Nome do cônjugue 1:</label>
          <input
            type="text"
            name="nomeConjugue1"
            value={formData.nomeConjugue1}
            onChange={handleChange}
            placeholder="Digite o nome do cônjugue 1"
            required
          />
        </div>
        <div className="form-group data-nascimento-conjugue1">
          <label>Nasc. do Cônjugue 1:</label>
          <input
            type="date"
            name="dataNascimentoConjugue1"
            value={formData.dataNascimentoConjugue1}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Nome da Noiva e Data de Nascimento da Noiva */}
      <div className="form-row">
        <div className="form-group nome-conjugue2">
          <label>Nome do cônjugue 2:</label>
          <input
            type="text"
            name="nomeConjugue2"
            value={formData.nomeConjugue2}
            onChange={handleChange}
            placeholder="Digite o nome do cônjugue 2"
            required
          />
        </div>
        <div className="form-group data-nascimento-conjugue2">
          <label>Nasc. da Cônjugue 2:</label>
          <input
            type="date"
            name="dataNascimentoConjugue2"
            value={formData.dataNascimentoConjugue2}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Nome e RG dos pais do Noivo */}
      <div className="form-row">
        <div className="form-group pai-Conjugue1">
          <label>Nome do Pai do Conjugue1:</label>
          <input
            type="text"
            name="paiConjugue1Nome"
            value={formData.paiConjugue1Nome}
            onChange={handleChange}
            placeholder="Nome do Pai do Conjugue1"
            required
          />
        </div>
        <div className="form-group pai-conjugue1-rg">
          <label>RG do Pai do Conjugue1:</label>
          <input
            type="text"
            name="paiConjugue1Rg"
            value={formData.paiConjugue1Rg}
            onChange={handleChange}
            placeholder="RG do Pai do Cônjugue 1"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group mae-conjugue1">
          <label>Nome da Mãe do Cônjugue 1:</label>
          <input
            type="text"
            name="maeConjugue1Nome"
            value={formData.maeConjugue1Nome}
            onChange={handleChange}
            placeholder="Nome da Mãe do Cônjugue 1"
            required
          />
        </div>
        <div className="form-group mae-conjugue1-rg">
          <label>RG da Mãe do Cônjugue 1:</label>
          <input
            type="text"
            name="maeConjugue1Rg"
            value={formData.maeConjugue1Rg}
            onChange={handleChange}
            placeholder="RG da Mãe do Cônjugue 1"
            required
          />
        </div>
      </div>

      {/* Nome e RG dos pais da Noiva */}
      <div className="form-row">
        <div className="form-group pai-conjugue2">
          <label>Nome do Pai da Conjugue 2:</label>
          <input
            type="text"
            name="paiConjugue2Nome"
            value={formData.paiConjugue2Nome}
            onChange={handleChange}
            placeholder="Nome do Pai da Cônjugue 2"
            required
          />
        </div>
        <div className="form-group pai-Conjugue2-rg">
          <label>RG do Pai do Cônjugue 2:</label>
          <input
            type="text"
            name="paiConjugue2Rg"
            value={formData.paiConjugue2Rg}
            onChange={handleChange}
            placeholder="RG do Pai do Cônjugue 2"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group mae-Conjugue2">
          <label>Nome da Mãe da Cônjugue 2:</label>
          <input
            type="text"
            name="maeConjugue2Nome"
            value={formData.maeConjugue2Nome}
            onChange={handleChange}
            placeholder="Nome da Mãe da Cônjugue 2"
            required
          />
        </div>
        <div className="form-group mae-Conjugue2-rg">
          <label>RG da Mãe do Cônjugue 2:</label>
          <input
            type="text"
            name="maeConjugue2Rg"
            value={formData.maeConjugue2Rg}
            onChange={handleChange}
            placeholder="RG da Mãe do Cônjugue 2"
            required
          />
        </div>
      </div>

      {/* Local do Casamento e Data do Casamento */}
      <div className="form-row">
        <div className="form-group local-casamento">
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
            type="date"
            name="dataCasamento"
            value={formData.dataCasamento}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Testemunhas */}
      <div className="form-row">
        <div className="form-group testemunha1-nome">
          <label>Nome da Testemunha 1:</label>
          <input
            type="text"
            name="testemunha1Nome"
            value={formData.testemunha1Nome}
            onChange={handleChange}
            placeholder="Nome da testemunha 1"
            required
          />
        </div>
        <div className="form-group testemunha1-rg">
          <label>RG da Testemunha 1:</label>
          <input
            type="text"
            name="testemunha1Rg"
            value={formData.testemunha1Rg}
            onChange={handleChange}
            placeholder="RG da testemunha 1"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group testemunha2-nome">
          <label>Nome da Testemunha 2:</label>
          <input
            type="text"
            name="testemunha2Nome"
            value={formData.testemunha2Nome}
            onChange={handleChange}
            placeholder="Nome da testemunha 2"
            required
          />
        </div>
        <div className="form-group testemunha2-rg">
          <label>RG da Testemunha 2:</label>
          <input
            type="text"
            name="testemunha2Rg"
            value={formData.testemunha2Rg}
            onChange={handleChange}
            placeholder="RG da testemunha 2"
            required
          />
        </div>
      </div>

      {/* Campo para Informações Adicionais */}
      <div className="form-row">
        <div className="form-group informacoes-adicionais">
          <label>Informações Adicionais (caso o casamento tenha sido averbado):</label>
          <textarea
            name="informacoesAdicionais"
            value={formData.informacoesAdicionais}
            onChange={handleChange}
            placeholder="Digite informações adicionais..."
          />
        </div>
      </div>

      <button type="submit">Enviar Dados</button>
    </form>
  );
};

export default FormularioCasamento;
