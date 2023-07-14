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

    async ordersAddNew(order) {
        return await this.#axios.post("/add-new", order);
    }

    async orderUpdateById(id, order) {
        return await this.#axios.put("/updateById", order);
    }

    async orderDeleteById(id) {
        return await this.#axios.delete(`/deleteById/${id}`);
    }


}

export default OrderApiWorker;