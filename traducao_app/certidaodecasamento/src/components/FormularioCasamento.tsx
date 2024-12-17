// Dentro de FormularioCasamento.tsx
const [formData, setFormData] = useState({
  nomeNoivo: "",
  nomeNoiva: "",
  dataNascimentoNoivo: "",
  dataNascimentoNoiva: "",
  nomePaiNoivo: "",
  nomePaiNoiva: "",
  nomeMaeNoivo: "",
  nomeMaeNoiva: "",
  endereco: "",
  cidade: "",
  estado: "",
  pais: "",
  dataCasamento: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Dados enviados:', formData);

  try {
    await axios.post('https://suaempresa.com/api/certidao-casamento', formData);
    alert('Formulário enviado com sucesso!');
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(`Erro: ${error.message}`);
    } else {
      alert('Ocorreu um erro desconhecido.');
    }
  }
};

// JSX do formulário atualizado para incluir os campos de data de nascimento ao lado dos nomes
return (
  <div>
    <h1>Formulário de Certidão de Casamento</h1>
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

      {/* Restante dos campos... */}
      
      <button type="submit">Enviar Formulário</button>
    </form>
  </div>
);
