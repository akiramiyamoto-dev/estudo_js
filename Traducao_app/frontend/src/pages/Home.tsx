import React from 'react';
import styles from '../pages/home.module.css'
import { FaPhoneVolume } from 'react-icons/fa';
import { GiPapers } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";

const Home: React.FC = () => {
    return (
        <>
            <div className="container px-4 py-5 my-5 text-center">
                <div className="row justify-content-center align-items-center mx-auto g-4 py-5 row-cols-1 row-cols-md-3 row-cols-lg-4 ">
                    {/*Seção de features - explicação dos serviços prestados */}
                    <div className="feature col px-4 py-5">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <GiPapers style={{ fontSize: '4rem' }} />
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Documentos</h3>
                        <p>Realizamos traduções de documentos com precisão e atenção aos detalhes, garantindo que todos os aspectos legais e técnicos sejam corretamente traduzidos.</p>
                    </div>
                    <div className="feature col px-4 py-5">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <FaPeopleArrows style={{ fontSize: '4rem' }} />
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Presencial</h3>
                        <p>Proporcionamos tradução presencial de alta qualidade, assegurando a compreensão precisa e fluída em interações face a face, com total profissionalismo.</p>
                    </div>
                    <div className="feature col px-4 py-5">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                            <FaPhoneVolume style={{ fontSize: '4rem' }} />
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Telefone </h3>
                        <p> Serviços de tradução por telefone com precisão e agilidade, garantindo comunicação clara e eficiente em tempo real, em qualquer situação.</p>
                    </div>
                </div >

            </div>
            <div className={`${styles.containerValores} containerValores`} >
                <h2 className="display-6 text-center fw-bold mb-4" style={{}}>Nossos Preços</h2>

                <div className="row justify-content-center px-3 py-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-1 g-4"  >
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/*Plano Básico*/}
                        <div className="col-12 co-md-6 col-lg-4">
                            <div className="card text-center shadow-sm">
                                <div className="card-header text-white fw-bold" style={{ backgroundColor: "#94005B" }}>Traduções de Documentos</div>
                                <div className="card-body">
                                    <h3 className="card-title">￥1.000/lado</h3>
                                    <p className="card-text"></p>
                                    <ul className="list-unstyled text-start">
                                        <li>✔ Certidão de Nascimento</li>
                                        <li>✔ Certidão de Casamento</li>
                                        <li>✔ Prontuário de CNH</li>
                                    </ul>
                                    <a href="#" className={`${styles.btnColor} btn btnColor `}>Assinar</a>
                                </div>
                            </div>
                        </div>

                        {/*Plano Intermediário*/}
                        <div className="col">
                            <div className="card text-center shadow-lg border-danger">
                                <div className="card-header text-white fw-bold" style={{ backgroundColor: "#C7007B" }}>Tradução Presencial </div>
                                <div className="card-body">
                                    <h3 className="card-title">￥1.500/hora</h3>
                                    <p className="card-text"></p>
                                    <ul className="list-unstyled text-start">
                                        <li>✔ Hospitais e Clínicas</li>
                                        <li>✔ Órgãos Públicos</li>
                                        <li>✔ Escolas</li>
                                        <li>✔ Escritório de Advocacia</li>
                                        <li>✔ Escritório de Advocacia</li>
                                        <li>✔ Escritório de Advocacia</li>
                                        <li>✔ Escritório de Advocacia</li>

                                    </ul>
                                    <a href="#" className={`${styles.btnColor} btn btnColor `}>Assinar</a>
                                </div>
                            </div>
                        </div>
                        {/*Plano Intermediário*/}
                        <div className="col">
                            <div className="card text-center shadow-sm">
                                <div className="card-header text-white fw-bold" style={{ backgroundColor: "#94005B" }}>Tradução por Telefone</div>
                                <div className="card-body">
                                    <h3 className="card-title">￥1.500/hora</h3>
                                    <p className="card-text"></p>
                                    <ul className="list-unstyled text-start">
                                        <li>✔ 200GB de Armazenamento</li>
                                        <li>✔ Suporte Dedicado</li>
                                        <li>✔ Servidor VPS incluso</li>
                                    </ul>
                                    <a href="#" className={`${styles.btnColor} btn btnColor `}>Assinar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container-contato">
                <div className="row-contato">
                    <h1>Contato</h1>
                    <p>Entre em contato agora mesmo.</p>

                </div>
            </div>



        </>
    );
};

export default Home;






