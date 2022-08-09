import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import { createStore } from 'vuex';
import BaseBadge from './components/ui/BaseBadge.vue';

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            products: [{
                    id: 'p1',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    title: 'Book Collection',
                    description: 'A collection of must-read books. All-time classics included!',
                    price: 99.99,
                },
                {
                    id: 'p2',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 129.99,
                },
                {
                    id: 'p3',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Food Box',
                    description: 'May be partially expired when it arrives but at least it is cheap!',
                    price: 6.99,
                },
            ],
            cart: { items: [], total: 0, qty: 0 },
        }
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        getCartTotal(_, getters) {
            return getters.getCart.total.toFixed(2);
        },
        getProducts(state) {
            console.log(state.products);
            return state.products;
        },
        // itemTotal(state, getters) {
        //     return (this.price * this.qty).toFixed(2);
        // },
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
    mutations: {
        addProductToCart(state, payLoad) { //payLoad.productData
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.productId === payLoad.productData.id
            );

            if (productInCartIndex >= 0) {
                state.cart.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: payLoad.productData.id,
                    title: payLoad.productData.title,
                    image: payLoad.productData.image,
                    price: payLoad.productData.price,
                    qty: 1,
                };
                state.cart.items.push(newItem);
            }
            state.cart.qty++;
            state.cart.total += payLoad.productData.price;
        },

        removeProductFromCart(state, payload) {
            const productInCartIndex = state.cart.items.findIndex(
                (cartItem) => cartItem.productId === payload.prodId
            );
            const prodData = state.cart.items[productInCartIndex];
            state.cart.items.splice(productInCartIndex, 1);
            state.cart.qty -= prodData.qty;
            state.cart.total -= prodData.price * prodData.qty;
        },
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
    actions: {
        addProductToCart(context, payLoad) {
            context.commit('addProductToCart', payLoad);
        },

        removeProductFromCart(context, payLoad) {
            context.commit('removeProductFromCart', payLoad);
        },
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },
});

const app = createApp(App)

app.use(store);
app.use(router);


app.component('base-badge', BaseBadge);

app.mount('#app');