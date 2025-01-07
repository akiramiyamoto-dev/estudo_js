import React, { useState } from "react";
import axios from "axios";

const ClientArea: React.FC = () => {
    const [message, setMessage] = useState<string>(""); // Estado para mensagem do cliente
    const [file, setFile] = useState<File | null>(null); // Estado para arquivo
    const [feedback, setFeedback] = useState<string>(""); // Estado para mensagens de sucesso ou erro
    const [loading, setLoading] = useState<boolean>(false); // Estado para indicar carregamento

    const handleFileUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        setFeedback(""); // Limpa mensagens anteriores
        setLoading(true); // Define estado de carregamento

        if (!file) {
            setFeedback("Por favor, selecione um arquivo antes de enviar.");
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);
            console.log("Arquivo a ser enviado", file);
            console.log("FormData", formData);

            formData.append("message", message); // Inclui a mensagem no envio

            // Faz a requisição para o back-end
            await axios.post("http://localhost:5000/api/clients/documents/upload", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            });

            setFeedback("Documento enviado com sucesso!");
            setMessage(""); // Reseta o campo de mensagem
            setFile(null); // Reseta o arquivo selecionado
        } catch (error) {
            console.error("Erro no upload:", error);
            setFeedback("Erro ao enviar o documento. Tente novamente.");
        } finally {
            setLoading(false); // Finaliza o estado de carregamento
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Área do Cliente</h1>
            <p className="text-center">
                Aqui você pode enviar seus documentos e mensagens para tradução.
            </p>

            <form className="mt-4" onSubmit={handleFileUpload}>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        className="form-control"
                        placeholder="Escreva uma mensagem (opcional)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="file" className="form-label">
                        Escolha o arquivo para envio
                    </label>
                    <input
                        id="file"
                        type="file"
                        className="form-control"
                        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    />
                </div>

                {feedback && (
                    <div
                        className={`alert ${feedback.includes("sucesso") ? "alert-success" : "alert-danger"
                            }`}
                        role="alert"
                    >
                        {feedback}
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    );
};

export default ClientArea;
