import React from 'react';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../../store/cartStore.js';
import css from './ProductList.module.css';

const ProductList = observer(() => {
    return (
        <div className={css.container}>
            <h1>Товари</h1>
                <ul className={css.list}>
                    {cartStore.products.map((product, index) => (
                        <li key={index} className={css.item}>
                            <img src={product.image} alt={product.name} className={css.img}/>
                            <div className={css.content}>
                                <h3>{product.name}</h3>
                                <p>Price: {product.price}$</p>
                                <button onClick={() => cartStore.addToCart(product.id)} className={css.btn}>Додати в кошик</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    );
});

export default ProductList;