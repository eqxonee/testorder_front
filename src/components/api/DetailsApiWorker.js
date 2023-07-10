import axios from "axios";

class DetailsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/ordersDetails"
        });
    }

    async getOrdersDetails(){
        return await this.#axios.get("/get-all");
    }
}

export default DetailsApiWorker