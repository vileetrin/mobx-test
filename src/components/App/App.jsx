import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from '../ProductList/ProductList.jsx';
import CartPage from '../CartPage/CartPage.jsx';
import { observer } from 'mobx-react-lite';
import { cartStore } from '../../store/cartStore.js';
import css from "./App.module.css"

const App = observer(() => {
    return (
        <Router>
            <nav className={css.navigation}>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>

            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
});

export default App;