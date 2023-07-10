import React, {useEffect, useState} from 'react';
import OrderApiWorker from "../api/OrderApiWorker";
// import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Alert, Card, Table} from "antd";
import OrdersList from "./OrdersList";

const Orders = () => {

    let [orders,setOrders] = useState([]);
    let [hasApiError, setHasApiError] = useState(false);
    let orderApiWorker = new OrderApiWorker();

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

    useEffect(() => {
        loadOrders();
    }, []);

    return (

        <div>
            <h1>Заказы покупателей</h1>
            {
                hasApiError == true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <OrdersList orders={orders}/>

            }

        </div>
    );
};

export default Orders;