import React, { useState } from "react";
import axios from "axios";

const ClientArea: React.FC = () => {
    const [message, setMessage] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        if (file) formData.append("file", file);

        await axios.post("http://localhost:5000/api/documents/upload", formData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
    };

    return (
        <div>
            <h1>Área do Cliente</h1>
            <form onSubmit={handleFileUpload}>
                <textarea
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ClientArea;
