import React from 'react';
import {useEffect, useState} from "@types/react";
import DetailsApiWorker from "../api/DetailsApiWorker";
import {Alert} from "antd";


const OrderDetails = () => {

    let [ordersDetails,setOrdersDetails] = useState([]);
    let [hasApiError, setHasApiError] = useState(false);
    let detailsApiWorker = new DetailsApiWorker();

    const loadOrdersDetails = () => {
        detailsApiWorker.getOrdersDetails().then(
            response => {
                setOrdersDetails(response.data)
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }

    useEffect(() => {
        loadOrdersDetails();
    }, []);

    return (
        <div>

            <h1>Детали Заказа покупателей</h1>
            {
                hasApiError == true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <OrderDetails ordersDetails={ordersDetails}/>
            }

        </div>
    );
};

export default OrderDetails;