import { makeAutoObservable } from 'mobx';

class CartStore {
    products = [
        {
            id: 1,
            name: 'Shopping bag',
            price: 200,
            amount: 1,
            image: '/img/bag.jpg',
        },
        {
            id: 2,
            name: 'Baking forms',
            price: 850,
            amount: 1,
            image: '/img/baking-forms.jpg'
        },
        {
            id: 3,
            name: 'Curlers',
            price: 100,
            amount: 1,
            image: '/img/curlers.jpg'
        },
        {
            id: 4,
            name: 'Scrunchy',
            price: 300,
            amount: 1,
            image: '/img/scrunchy.jpg'
        },
    ];
    cart = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(id) {
        const productInCart = this.cart.find(product => product.id === id);
        if (productInCart) {
            alert('Цей товар уже є в кошику');
        } else {
            const product = this.products.find(product => product.id === id);
            this.cart.push(product);
        }
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
    }

    get totalItems() {
        return this.cart.reduce((sum, product) => sum + product.amount, 0);
    }

    get totalPrice() {
        return this.cart.reduce((sum, product) => sum + product.price * product.amount, 0);
    }

    get discount() {
        const totalItems = this.totalItems;

        if (totalItems >= 3 && totalItems < 10) {
            return 0.07;
        } else if (totalItems >= 10) {
            return 0.10;
        }
        return 0;
    }

    get totalPriceWithDiscount() {
        const discount = this.discount;
        const totalPrice = this.totalPrice;
        return totalPrice - totalPrice * discount;
    }

    increase (index){
        this.cart[index].amount +=1
    }

    decrease (index){
        if(this.cart[index].amount >0){
            this.cart[index].amount -= 1
        }
    }

    changeName(index){
            this.cart[index].name = prompt('Enter new name', this.cart[index].name) || this.cart[index].name;
    }
}

export const cartStore = new CartStore();
