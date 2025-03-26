import React, { useState } from "react";
import axios from "axios";

interface CartItem {
    id: string;
    name: string;
    price: number; // preço em ienes
    quantity: number;
}

const CartPage = () => {
    // Dados do carrinho (com setCart para atualizar o estado)
    const [cart, setCart] = useState<CartItem[]>([
        { id: "1", name: "Produto A", price: 1500, quantity: 2 },
        { id: "2", name: "Produto B", price: 2000, quantity: 1 },
    ]);

    // Função para calcular o total
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Função para atualizar a quantidade de um item no carrinho
    const updateQuantity = (id: string, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    // Função para remover um item do carrinho
    const removeItem = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Função para redirecionar ao Stripe Checkout
    const handleCheckout = async () => {
        try {
            // Enviar os dados do carrinho para o backend
            const response = await axios.post("http://localhost:5000/api/checkout", {
                items: cart,
                total: calculateTotal(),
            });

            // Redireciona para a URL do Stripe
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Erro ao iniciar pagamento:", error);
        }
    };

    return (
        <div>
            <h1>Carrinho de Compras</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ¥{item.price / 100} x {item.quantity} = ¥
                        {(item.price * item.quantity) / 100}
                        <div>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                Aumentar Quantidade
                            </button>
                            <button
                                onClick={() =>
                                    item.quantity > 1
                                        ? updateQuantity(item.id, item.quantity - 1)
                                        : null
                                }
                            >
                                Diminuir Quantidade
                            </button>
                            <button onClick={() => removeItem(item.id)}>Remover</button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2>Total: ¥{calculateTotal() / 100}</h2>

            <button onClick={handleCheckout}>Ir para o pagamento</button>
        </div>
    );
};

export default CartPage;
