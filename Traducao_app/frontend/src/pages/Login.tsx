import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ email: "", senha: "" });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

            const response = await axios.post(`${apiUrl}/auth/login`, {
                email: formData.email,
                senha: formData.senha,
            });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("clienteId", response.data.clienteId);
                window.location.href = "/client-area";
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Erro ao fazer login. Tente novamente.");
            } else {
                setError("Ocorreu um erro desconhecido.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-4 col-sm-6 col-10" style={{ maxWidth: "400px" }}>
                <h1 className="text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="p-4 bg-white text-dark rounded shadow">
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
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
