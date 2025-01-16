import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard: React.FC = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            const response = await axios.get("http://localhost:5000/api/clients", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setClients(response.data);
        };
        fetchClients();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Clientes Cadastrados</h2>
            <ul>
                {clients.map((client: any) => (
                    <li key={client.id}>{client.name} - {client.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
