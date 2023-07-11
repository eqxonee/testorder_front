import React from 'react';

const OrderDetailsList = ({orderDetails}) => {
    return (
        <ul>
            {
                orderDetails.map((orderDetails,index)=>(
                    <tr>
                        <li scope ="row" key={index}>key={index+1}</li>
                        <td>{orderDetails.id}</td>
                        <td>serialNumber = {orderDetails.serialNumber}</td>
                        <td>name = {orderDetails.productName}</td>
                        <td>orderId = {orderDetails.orderId}</td>
                        <td>quantity = {orderDetails.quantity}</td>
                    </tr>
                ))


            }

        </ul>
    );
};

export default OrderDetailsList;