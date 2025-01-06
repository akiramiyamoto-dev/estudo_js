import React from "react";

const Login: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export default Login;
