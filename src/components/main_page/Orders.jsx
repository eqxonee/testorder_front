import React, {useEffect, useState} from 'react';
import OrderApiWorker from "../api/OrderApiWorker";
import {Alert} from "antd";
import OrdersList from "./OrdersList";
import DateApiWorker from "../api/DateApiWorker";
import ModalButtonOrder from "./ModalButtonOrder";
import ModalButtonOrderDetails from "./ModalButtonOrderDetails";
import ModalButtonUpdateOrder from "./ModalButtonUpdateOrder";
import ModalButtonDeleteOrder from "./ModalButtonDeleteOrder";
import ModalButtonDeleteOrderDetails from "./ModalButtonDeleteOrderDetails";
import ModalButtonUpdateOrderDetails from "./ModalButtonUpdateOrderDetails";

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
            <ModalButtonOrder loadOrders={loadOrders}/>
            &nbsp;
            <ModalButtonUpdateOrder loadOrders={loadOrders} orders={orders}/>
            &nbsp;
            <ModalButtonDeleteOrder loadOrders={loadOrders} orders={orders}/>
            &nbsp;
            <ModalButtonOrderDetails loadOrders={loadOrders}/>
            &nbsp;
            <ModalButtonUpdateOrderDetails loadOrders={loadOrders} orders={orders}/>
            &nbsp;
            <ModalButtonDeleteOrderDetails loadOrders={loadOrders} orders={orders}/>


            {
                hasApiError === true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <OrdersList orders={orders}/>

            }


        </div>
    );
};

export default Orders;