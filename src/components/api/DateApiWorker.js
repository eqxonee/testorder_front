import axios from "axios";


class DateApiWorker {

    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8040/date"
        });
    }

    async getDate(){
        return await this.#axios.get("/get");
    }

}

export default DateApiWorker