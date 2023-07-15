import axios from "axios";

class DetailsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/ordersDetails"
        });
    }

    async ordersDetailsAddNew(orderDetails) {
        return await this.#axios.post("/add-new-order-details", orderDetails);
    }

    async ordersDetailsDeleteById(id) {
        return await this.#axios.delete(`/deleteById/${id}`);
    }



}

export default DetailsApiWorker;