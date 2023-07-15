import React from 'react';
import {Space} from "antd";


const OrdersList = ({orders}) => {

    return (
       <div>

           <Space size={[8, 16]} wrap>
            {

                orders.map((order)=>(
                <ul key={order.id}>
                    <li>Заказ {order.id}</li>
                    <li>Имя заказчика: {order.customerName}</li>
                    <li>Адрес заказчика: {order.customerAddress}</li>
                    <li>Суммарная сумма заказа: {order.totalPrice}</li>
                    <li>Дата заказа: {order.dateTime}</li>
                    {
                        order.orderDetails.map((item) =>(
                            <ul key ={item.id}>
                                <li>ID продукта: {item.id}</li>
                                <li>Серийный номер продукта: {item.serialNumber}</li>
                                <li>Название продукта: {item.productName}</li>
                                <li>Id заказчика: {item.orderId}</li>
                                <li>Количетсво продукта: {item.quantity}</li>
                                &nbsp;
                            </ul>
                        ))
                    }
                </ul>
                ))

            }
           </Space>

       </div>
    );
};

export default OrdersList;