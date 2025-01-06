import React from 'react'
import Hero from '../assets/images/Hero.png'

const HeroSection: React.FC = () => {
    return (

        < div className="container heroContainer" >
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
                                    <button className="btn btn-primary p-2" type="submit">Começar</button>
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
    )
}

export default HeroSection;


