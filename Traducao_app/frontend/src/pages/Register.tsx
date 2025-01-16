import React, { useState } from "react";
import axios from "axios";
import "./Register.module.css"; // Estilos específicos para a página

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
            const response = await axios.post("http://localhost:5000/api/auth/register", {
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
        <div className="registerContainer">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">telefone</label>
                    <input
                        type="telefone"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmsenha">Confirmar Senha</label>
                    <input
                        type="password"
                        id="confirmsenha"
                        name="confirmsenha"
                        value={formData.confirmsenha}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit" className="btn btn-primary">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Register;
