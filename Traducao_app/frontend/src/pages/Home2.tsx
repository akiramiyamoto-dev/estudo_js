import Hero from '../assets/images/Hero.png'
import React from 'react';


const Home2: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="container heroContainer">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-8 leftHeroTitle order-1 order-md-0">
                                <div className="titleHero">
                                    <h1 className='h1 p-3'>
                                        Precisa de Tradução?
                                    </h1>
                                    <p className='h4 p-4'>"Envie seus documentos com segurança e receba traduções precisas e rápidas."</p>
                                    <div className="buttonWrapper p-4">
                                        <button className="btn btn-primary p-2" type="submit">GET STARTED</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 rightHeroTitle p-0 order-0 order-md-1">
                                <div className="imgHero"><img src={Hero} alt="" className='responsive-img w-100' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Services Section */}
            <div className="container servicesSection cinza p-4">
                <div className="row">
                    <div className="col-12 colEnvolveTodos justify-content-center">
                        <div className="row align-items-center">
                            {/* left services title */}
                            <div className="col-12 col-md-12 col-lg-4 leftServices">
                                <div className="titleServices"><h1>Why do we help with legalization?</h1>
                                    <p>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
                                </div>
                            </div>
                            {/* right services cards */}
                            <div className="col-md-8 rightServices">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row rowCards g-4">
                                            {/**Colunas de cards */}
                                            <div className="col-md-4">
                                                <div className="cardWrapper justify-content-center">
                                                    <div className="card" style={{ width: '256px' }}>
                                                        <img src="" className="card-img-top" alt="Hero2" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Traduções de Documentos</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                            <h5 className="card-title">Traduções de Documentos</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                            <h5 className="card-title">Traduções de Documentos</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                            <h5 className="card-title">Traduções de Documentos</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                            <h5 className="card-title">Traduções de Documentos</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                                                            <h5 className="card-title">Traduções de Documentos</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

        </>
    );
};

export default Home2;
