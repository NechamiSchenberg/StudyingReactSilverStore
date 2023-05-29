import { makeAutoObservable } from 'mobx'
class cartStore {
    cart = []
    sum = 0;
    constructor() {
        makeAutoObservable(this);
    }

    add = product => {
        this.cart.push(product);
        this.sum += product.Price
    }

    remove = product => {
        this.cart = this.cart.filter(p => p.Id !== product.Id);
        this.sum = 0;
        this.sum.valueOf = this.cart.map(c => this.sum += c.Price)
    }
}

export const CartStore = new cartStore();