import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Table, Container, Row, Col } from "react-bootstrap";

// Carregar a chave pública do Stripe do arquivo .env (com VITE_)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Cart = () => {
    const [items] = useState([
        { id: 1, name: "Produto A", price: 2000 }, // preço em centavos (ex: 2000 = 20.00)
        { id: 2, name: "Produto B", price: 3000 },
        { id: 3, name: "Produto C", price: 1500 },
    ]);

    const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

    // Função para redirecionar para o Stripe Checkout
    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Enviar dados do carrinho para o backend (a rota para criação de sessão Stripe)
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productName: items.map(item => item.name).join(", "),
                amount: totalAmount,
            }),
        });

        const session = await response.json();

        // Redirecionar o usuário para o Stripe Checkout
        const { error } = await stripe!.redirectToCheckout({
            sessionId: session.url,
        });

        if (error) {
            console.log("Erro no Stripe Checkout:", error.message);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <h2>Seu Carrinho</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{(item.price / 100).toFixed(2)} ¥</td> {/* Exibindo preço em ienes */}
                                    <td>
                                        <Button variant="danger" size="sm">
                                            Remover
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <h3>Total: {(totalAmount / 100).toFixed(2)} ¥</h3>
                    <Button
                        variant="success"
                        size="lg"
                        onClick={handleCheckout}
                        className="mt-4"
                    >
                        Finalizar Compra
                    </Button>
                </Col>
                <Col md={4}>
                    <h4>Detalhes do Pedido</h4>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                {item.name} - {(item.price / 100).toFixed(2)} ¥
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <h5>Total: {(totalAmount / 100).toFixed(2)} ¥</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
