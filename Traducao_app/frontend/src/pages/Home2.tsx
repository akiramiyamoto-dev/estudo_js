import React from 'react';
import SocialMedia from '../components/SocialMedia';
import InscribeSection from '../components/SubscribeSection';
import HeroSection from '../components/HeroSection';
const Home2: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <div className="container servicesSection cinza p-4">
                <div className="row">
                    <div className="col-12 colEnvolveTodos justify-content-center">
                        <div className="row align-items-center">
                            {/* left services title */}
                            <div className="col-12 col-md-12 col-lg-4 leftServices">
                                <div className="titleServices"><h1>Porque contratar nossos serviços ?</h1>
                                    <p>"Escolha nossos serviços de tradução para <strong>garantir</strong> precisão, rapidez e segurança em cada documento, seja para negócios ou para comunicação pessoal. Com a nossa expertise, sua mensagem sempre será entendida do jeito certo."</p>
                                </div>
                            </div>
                            {/* right services cards */}
                            <div className="col-md-8 rightServices">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row rowCards g-4">
                                            {/**Cards Columns*/}
                                            <div className="col-md-4">
                                                <div className="cardWrapper justify-content-center">
                                                    <div className="card" style={{ width: '256px' }}>
                                                        <img src="" className="card-img-top" alt="Hero2" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Tradução Técnica e Especializada</h5>
                                                            <p className="card-text">Traduza documentos técnicos, acadêmicos e corporativos com precisão. Confie em nossos serviços de tradução especializados para atender às suas necessidades específicas.</p>
                                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="cardWrapper justify-content-center">
                                                    <div className="card" style={{ width: '256px' }}>
                                                        <img src="" className="card-img-top" alt="Hero2" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Tradução Simples e Ágil</h5>
                                                            <p className="card-text">Seus documentos precisam de uma tradução simples e sem complicação? Oferecemos traduções rápidas, claras e com a qualidade que você merece, diretamente do Brasil para o Japão."</p>
                                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*fim col */}
                                            <div className="col-md-4">
                                                <div className="cardWrapper justify-content-center">
                                                    <div className="card" style={{ width: '256px' }}>
                                                        <img src="" className="card-img-top" alt="Hero2" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Tradução Juramentada para o Japão </h5>
                                                            <p className="card-text">Precisa traduzir seus documentos com validade legal no Japão? Nossos tradutores oferecem traduções juramentadas rápidas e confiáveis para você.</p>
                                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*fim col */}
                                        </div>{/* row dos cards */}
                                    </div>{/*fim col-12 que envolve todos */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            <SocialMedia />
            {/* Inscribe */}
            <InscribeSection />

        </>
    );
};

export default Home2;
