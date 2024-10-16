import React from 'react';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../../store/cartStore.js';
import css from './CartPage.module.css'

const CartPage = observer(() => {

    const handleCheckout = () => {
        const orderDetails = cartStore.cart.map(
            (item) => `Name: ${item.name}, Price: $${item.price}, Quantity: ${item.amount}`
        ).join('\n');

        alert(`Order details:\n${orderDetails}\nTotal Price: $${cartStore.totalPriceWithDiscount.toFixed(2)}`);
    };

    return (
        <div className={css.container}>
            <h1>Your Cart</h1>
            {cartStore.cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className={css.list}>
                    {cartStore.cart.map((product, index) => (
                        <li key={index} className={css.item}>
                            <img src={product.image} alt={product.name} className={css.img}/>
                            <h3 onDoubleClick={() => cartStore.changeName(index)}>{product.name}</h3>
                            <div className={css.amountContainer}>
                                <p>Кількість</p>
                                <div className={css.btnContainer}>
                                    <button onClick={() => cartStore.decrease(index)} className={css.btn}>-</button>
                                    <p>{product.amount}</p>
                                    <button onClick={() => cartStore.increase(index)} className={css.btn}>+</button>
                                </div>
                            </div>
                            <p>Price: {product.price}$</p>
                            <button onClick={() => cartStore.removeFromCart(product.id)} className={css.button}>Видалити
                                з кошика
                            </button>
                        </li>
                    ))}

                </ul>
            )}
            <h2>Total Price: ${cartStore.totalPriceWithDiscount.toFixed(2)}</h2>
            <p>Discount applied: {cartStore.discount * 100}%</p>
            <button onClick={handleCheckout} disabled={cartStore.cart.length === 0} className={css.button}>Оформити замовлення</button>
        </div>
    );
});

export default CartPage;