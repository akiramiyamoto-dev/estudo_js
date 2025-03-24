import { Link } from 'react-router-dom';
const Footer = () => {
  return (


    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
        <li className="nav-item"><Link to="/quemsomos" className="nav-link px-2 text-body-secondary">Quem somos</Link></li>
        <li className="nav-item"><Link to="/login" className="nav-link px-2 text-body-secondary">Login</Link></li>
        <li className="nav-item"><Link to="/register" className="nav-link px-2 text-body-secondary">Cadastrar</Link></li>
      </ul>
      <p className="text-center text-body-secondary">Miyamoto Akiko Traduções© 2024 Company, Inc</p>
    </footer>


  );
};

export default Footer;
