import { React, createContext } from "react"

import { makeAutoObservable } from "mobx"
import axios from "axios"

class silverStore {
    silver = []
    constructor() {
        makeAutoObservable(this);
        axios.get('/silver.json')
            .then(({ data }) => {
                this.silver = data;
            })
    }

    getProductById = id => {
        return this.silver.find(s => s.Id == id)
    }

    getProductsByCategory = categoryID => {
        if (categoryID == 0)
            return this.silver
        return this.silver.filter(p => p.category == categoryID);
    }
}

export const SilverStore = new silverStore();

