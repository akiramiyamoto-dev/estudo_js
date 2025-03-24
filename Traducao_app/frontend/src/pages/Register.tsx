import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmsenha: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (formData.senha !== formData.confirmsenha) {
            setError("As senhas não coincidem!");
            return;
        }

        try {
            //Variavel de ambiente para a URL da API
            const apiURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

            const response = await axios.post(`${apiURL}/auth/register`, {
                nome: formData.nome,
                email: formData.email,
                telefone: formData.telefone,
                senha: formData.senha,
            });

            if (response.status === 201) {
                setSuccess("Cadastro realizado com sucesso!");
                setFormData({
                    nome: "",
                    email: "",
                    telefone: "",
                    senha: "",
                    confirmsenha: "",
                });
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Erro ao realizar cadastro. Tente novamente.");
            } else {
                setError("Ocorreu um erro desconhecido.");
            }
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4 col-sm-6 col-10" style={{ maxWidth: "400px" }}>
                <h1 className="text-center mb-4">Cadastro</h1>
                <form onSubmit={handleSubmit} className="p-4 bg-white text-dark rounded shadow">
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            className="form-control"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            className="form-control"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            className="form-control"
                            value={formData.senha}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmsenha" className="form-label">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmsenha"
                            name="confirmsenha"
                            className="form-control"
                            value={formData.confirmsenha}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    <button type="submit" className="btn btn-primary w-100">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
