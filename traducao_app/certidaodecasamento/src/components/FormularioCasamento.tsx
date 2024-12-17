import React, { useState } from 'react';
import axios from 'axios';

const FormularioCasamento: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeNoivo: '',
    nomeNoiva: '',
    dataNascimentoNoivo: '',
    dataNascimentoNoiva: '',
    nomePaiNoivo: '',
    nomePaiNoiva: '',
    nomeMaeNoivo: '',
    nomeMaeNoiva: '',
    endereco: '',
    cidade: '',
    estado: '',
    pais: '',
    dataCasamento: '',
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlertMessage(null);
    setAlertType(null);

    try {
      await axios.post('https://suaempresa.com/api/certidao-casamento', formData);
      setAlertMessage('Formulário enviado com sucesso!');
      setAlertType('success');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setAlertMessage(`Erro: ${error.message}`);
        setAlertType('error');
      } else {
        setAlertMessage('Ocorreu um erro desconhecido.');
        setAlertType('error');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nomeNoivo">Nome do Noivo</label>
          <input
            type="text"
            id="nomeNoivo"
            name="nomeNoivo"
            value={formData.nomeNoivo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataNascimentoNoivo">Data de Nascimento (Noivo)</label>
          <input
            type="date"
            id="dataNascimentoNoivo"
            name="dataNascimentoNoivo"
            value={formData.dataNascimentoNoivo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomeNoiva">Nome da Noiva</label>
          <input
            type="text"
            id="nomeNoiva"
            name="nomeNoiva"
            value={formData.nomeNoiva}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataNascimentoNoiva">Data de Nascimento (Noiva)</label>
          <input
            type="date"
            id="dataNascimentoNoiva"
            name="dataNascimentoNoiva"
            value={formData.dataNascimentoNoiva}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomePaiNoivo">Nome do Pai do Noivo</label>
          <input
            type="text"
            id="nomePaiNoivo"
            name="nomePaiNoivo"
            value={formData.nomePaiNoivo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomePaiNoiva">Nome do Pai da Noiva</label>
          <input
            type="text"
            id="nomePaiNoiva"
            name="nomePaiNoiva"
            value={formData.nomePaiNoiva}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomeMaeNoivo">Nome da Mãe do Noivo</label>
          <input
            type="text"
            id="nomeMaeNoivo"
            name="nomeMaeNoivo"
            value={formData.nomeMaeNoivo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nomeMaeNoiva">Nome da Mãe da Noiva</label>
          <input
            type="text"
            id="nomeMaeNoiva"
            name="nomeMaeNoiva"
            value={formData.nomeMaeNoiva}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pais">País</label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dataCasamento">Data do Casamento</label>
          <input
            type="date"
            id="dataCasamento"
            name="dataCasamento"
            value={formData.dataCasamento}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar Formulário</button>
        {alertMessage && (
          <div className={`alert ${alertType}`}>{alertMessage}</div>
        )}
      </form>
    </div>
  );
};

export default FormularioCasamento;
