import axios from "axios";

class OrderApiWorker {
#axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/orders"
        });
    }

    async getOrders(){
        return await this.#axios.get("/get-all");
    }

}

export default OrderApiWorker;