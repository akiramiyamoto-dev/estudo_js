// import React, { useState } from "react";
// import axios from "axios";

// const ClientArea: React.FC = () => {
//     const [message, setMessage] = useState<string>(""); // Estado para mensagem do cliente
//     const [file, setFile] = useState<File | null>(null); // Estado para arquivo
//     const [feedback, setFeedback] = useState<string>(""); // Estado para mensagens de sucesso ou erro
//     const [loading, setLoading] = useState<boolean>(false); // Estado para indicar carregamento

//     const handleFileUpload = async (e: React.FormEvent) => {
//         console.log("este é o teste de async")
//         e.preventDefault();
//         setFeedback(""); // Limpa mensagens anteriores
//         setLoading(true); // Define estado de carregamento

//         if (!file) {
//             setFeedback("Por favor, selecione um arquivo antes de enviar.");
//             setLoading(false);
//             return;
//         }

//         try {
//             const formData = new FormData();
//             formData.append("file", file);
//             console.log("Arquivo a ser enviado", file);

//             formData.append("message", message); // Inclui a mensagem no envio
//             // Log para verificar o conteúdo do FormData
//             console.log("FormData", formData);

//             //****************************************************************** */
//             // Adicione o clienteId ao FormData
//             const clienteId = localStorage.getItem("clienteId"); // Supondo que o clienteId esteja armazenado no localStorage
//             if (!clienteId) {
//                 setFeedback("Cliente não autenticado.");
//                 setLoading(false);
//                 return;
//             }
//             formData.append("clienteId", clienteId);
//             /**************************************************************************************** */

//             const token = localStorage.getItem("token")

//             if (!token) {
//                 setFeedback("Token de autenticação não encontrado.");
//                 setLoading(false);
//                 return;
//             }

//             // Faz a requisição para o back-end
//             const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dsppglfxs/upload`;

//             const response = await axios.post(cloudinaryUrl, formData, {
//                 headers: {
//                     "Content-type": "multipart/form-data",
//                     Authorization: `Bearer ${localStorage.getItem("token")}`
//                 },
//             }); console.log("teste de axios post")
//             console.log("Resposta do Cloudinary:", response.data);

//             if (response.data.secure_url) {
//                 setFeedback("Documento enviado com sucesso!");
//                 console.log("URL do arquivo:", response.data.secure_url);
//             } else {
//                 setFeedback("Erro ao enviar o documento.");
//             }
//         } catch (error) {
//             console.error("Erro no upload:", error);
//             setFeedback("Erro ao enviar o documento. Tente novamente.");
//         } finally {
//             setLoading(false); // Finaliza o estado de carregamento
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h1 className="text-center">Área do Cliente</h1>
//             <p className="text-center">
//                 Aqui você pode enviar seus documentos e mensagens para tradução.
//             </p>

//             <form className="mt-4" onSubmit={handleFileUpload}>
//                 <div className="mb-3">
//                     <label htmlFor="message" className="form-label">
//                         Mensagem
//                     </label>
//                     <textarea
//                         id="message"
//                         className="form-control"
//                         placeholder="Escreva uma mensagem (opcional)"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         rows={4}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="file" className="form-label">
//                         Escolha o arquivo para envio
//                     </label>
//                     {/* <input
//                         id="fileInput"
//                         type="file"
//                         className="form-control"
//                         onChange={(e) => {
//                             const selectedFile = e.target.files ? e.target.files[0] : null;
//                             setFile(selectedFile);
//                             console.log("Arquivo selecionado:", selectedFile); // Verifica o arquivo selecionado
//                         }}
//                     /> */}

//                     <input
//                         id="fileInput"
//                         type="file"
//                         className="form-control"
//                         onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
//                     />
//                 </div>

//                 {feedback && (
//                     <div
//                         className={`alert ${feedback.includes("sucesso") ? "alert-success" : "alert-danger"
//                             }`}
//                         role="alert"
//                     >
//                         {feedback}
//                     </div>
//                 )}

//                 <button
//                     type="submit"
//                     className="btn btn-primary w-100"
//                     disabled={loading}
//                 >
//                     {loading ? "Enviando..." : "Enviar"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ClientArea;


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

        // 🔐 Recupera clienteId e token do localStorage
        const clienteId = localStorage.getItem("clienteId");
        const token = localStorage.getItem("token");

        if (!clienteId) {
            setFeedback("Cliente não autenticado.");
            setLoading(false);
            return;
        }

        if (!token) {
            setFeedback("Token de autenticação não encontrado.");
            setLoading(false);
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "uploadTraducao"); // Nome do preset no Cloudinary
            formData.append("folder", `clientes/${clienteId}`); // Salva arquivos por cliente
            formData.append("context", `clienteId=${clienteId}|mensagem=${message}`);

            // 🚀 Substitua "seu-cloud-name" pelo nome do seu Cloudinary
            const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dsppglfxs/upload`;

            const response = await axios.post(cloudinaryUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Resposta do Cloudinary:", response.data);

            if (response.data.secure_url) {
                setFeedback("Documento enviado com sucesso!");
                console.log("URL do arquivo:", response.data.secure_url);
            } else {
                setFeedback("Erro ao enviar o documento.");
            }
        } catch (error) {
            console.error("Erro no upload:", error);
            setFeedback("Erro ao enviar o documento. Tente novamente.");
        } finally {
            setLoading(false);
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
                    {/* <input
                        id="fileInput"
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                            const selectedFile = e.target.files ? e.target.files[0] : null;
                            setFile(selectedFile);
                            console.log("Arquivo selecionado:", selectedFile); // Verifica o arquivo selecionado
                        }}
                    /> */}

                    <input
                        id="fileInput"
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
