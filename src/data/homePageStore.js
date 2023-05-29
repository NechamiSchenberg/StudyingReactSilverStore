import { makeAutoObservable } from "mobx"
import axios from "axios"

class homePageStore {
    categories = []
    constructor() {
        makeAutoObservable(this);
        axios.get('./silverHomePage.json')
            .then(({ data }) => {
                this.categories = data;
            });
    }

}

export const HomePageStore=new homePageStore();