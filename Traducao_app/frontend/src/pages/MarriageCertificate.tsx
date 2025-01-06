import React from "react";

const MarriageCertificate: React.FC = () => {
    return (
        <div>
            <h1>Certidão de Casamento</h1>
            <form>
                <h3>Dados do Registro</h3>
                <input type="text" placeholder="Número do Registro" />
                <input type="date" placeholder="Data do Registro" />
                <h3>Dados do Casal</h3>
                <input type="text" placeholder="Nome do Marido" />
                <input type="date" placeholder="Data de Nascimento do Marido" />
                <input type="text" placeholder="Nome da Esposa" />
                <input type="date" placeholder="Data de Nascimento da Esposa" />
                <h3>Dados dos Pais</h3>
                <input type="text" placeholder="Nome do Pai do Marido" />
                <input type="text" placeholder="Nome da Mãe do Marido" />
                <input type="text" placeholder="Nome do Pai da Esposa" />
                <input type="text" placeholder="Nome da Mãe da Esposa" />
                <h3>Averbações</h3>
                <textarea placeholder="Detalhes adicionais"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default MarriageCertificate;
