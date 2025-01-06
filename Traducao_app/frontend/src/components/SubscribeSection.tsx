import React from 'react';

const SubscribeSection: React.FC = () => {
    return (
        <>
            <div className="container subscribeSection justify-content-center text-center p-5">
                <div className="inscribeSectionTitle">
                    <h2 className="mb-4">"Cadastre-se agora para enviar seus documentos com segurança e receber traduções rápidas e precisas diretamente no seu e-mail!"</h2>
                    <p className="mb-4">
                        Receba informações exclusivas, ofertas especiais e as últimas notícias diretamente na sua caixa de entrada.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form className="d-flex flex-column flex-md-row align-items-center gap-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Digite seu e-mail"
                                aria-label="Email"
                                required
                            />
                            <button type="submit" className="btn btn-primary px-4">
                                Inscreva-se
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubscribeSection;
