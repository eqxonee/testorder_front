import React, {useEffect, useState} from 'react';
import OrderApiWorker from "../api/OrderApiWorker";
// import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Alert} from "antd";
import OrdersList from "./OrdersList";
import DateApiWorker from "../api/DateApiWorker";

const Orders = () => {

    let [orders,setOrders] = useState([]);
    let [hasApiError, setHasApiError] = useState(false);
    let orderApiWorker = new OrderApiWorker();


    let dateApiWorker = new DateApiWorker();
    let [date,setDate] = useState([]);

    const loadOrders = () => {
        orderApiWorker.getOrders().then(
            response => {
                setOrders(response.data)
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }

    const loadDate = () => {
        dateApiWorker.getDate().then(
            response => {
                setDate(response.data)
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        )
    }


    useEffect(() => {
        loadDate();
        loadOrders();
    },);

    return (

        <div>
            <h1>{date}</h1>
            <h1>Заказы покупателей</h1>
            {
                hasApiError === true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <OrdersList orders={orders}/>

            }

        </div>
    );
};

export default Orders;