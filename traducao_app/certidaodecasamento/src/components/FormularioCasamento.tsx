import React, { useState } from "react";

const FormularioCasamento = () => {
  const [formData, setFormData] = useState({
    nomeNoivo: "",
    nomeNoiva: "",
    localCasamento: "",
    dataCasamento: "",
    dataNascimentoNoivo: "",
    dataNascimentoNoiva: "",
    paiNoivoNome: "",
    paiNoivoRg: "",
    maeNoivoNome: "",
    maeNoivoRg: "",
    paiNoivaNome: "",
    paiNoivaRg: "",
    maeNoivaNome: "",
    maeNoivaRg: "",
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
          <label>Nasc. do Noivo:</label>
          <input
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
          <label>Nasc. da Noiva:</label>
          <input
            type="date"
            name="dataNascimentoNoiva"
            value={formData.dataNascimentoNoiva}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Nome e RG dos pais do Noivo */}
      <div className="form-row">
        <div className="form-group pai-noivo">
          <label>Nome do Pai do Noivo:</label>
          <input
            type="text"
            name="paiNoivoNome"
            value={formData.paiNoivoNome}
            onChange={handleChange}
            placeholder="Nome do Pai do Noivo"
            required
          />
        </div>
        <div className="form-group pai-noivo-rg">
          <label>RG do Pai do Noivo:</label>
          <input
            type="text"
            name="paiNoivoRg"
            value={formData.paiNoivoRg}
            onChange={handleChange}
            placeholder="RG do Pai do Noivo"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group mae-noivo">
          <label>Nome da Mãe do Noivo:</label>
          <input
            type="text"
            name="maeNoivoNome"
            value={formData.maeNoivoNome}
            onChange={handleChange}
            placeholder="Nome da Mãe do Noivo"
            required
          />
        </div>
        <div className="form-group mae-noivo-rg">
          <label>RG da Mãe do Noivo:</label>
          <input
            type="text"
            name="maeNoivoRg"
            value={formData.maeNoivoRg}
            onChange={handleChange}
            placeholder="RG da Mãe do Noivo"
            required
          />
        </div>
      </div>

      {/* Nome e RG dos pais da Noiva */}
      <div className="form-row">
        <div className="form-group pai-noiva">
          <label>Nome do Pai da Noiva:</label>
          <input
            type="text"
            name="paiNoivaNome"
            value={formData.paiNoivaNome}
            onChange={handleChange}
            placeholder="Nome do Pai da Noiva"
            required
          />
        </div>
        <div className="form-group pai-noiva-rg">
          <label>RG do Pai da Noiva:</label>
          <input
            type="text"
            name="paiNoivaRg"
            value={formData.paiNoivaRg}
            onChange={handleChange}
            placeholder="RG do Pai da Noiva"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group mae-noiva">
          <label>Nome da Mãe da Noiva:</label>
          <input
            type="text"
            name="maeNoivaNome"
            value={formData.maeNoivaNome}
            onChange={handleChange}
            placeholder="Nome da Mãe da Noiva"
            required
          />
        </div>
        <div className="form-group mae-noiva-rg">
          <label>RG da Mãe da Noiva:</label>
          <input
            type="text"
            name="maeNoivaRg"
            value={formData.maeNoivaRg}
            onChange={handleChange}
            placeholder="RG da Mãe da Noiva"
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
