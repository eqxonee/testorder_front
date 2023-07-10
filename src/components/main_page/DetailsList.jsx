import React from 'react';

const DetailsList = ({orderDetails}) => {
    return (
        <ul>
            {
                orderDetails.map((orderDetails,index)=>(
                    <tr>
                        <li scope ="row" key={index}>key={index+1}</li>
                        <td>{orderDetails.id}</td>
                        <td>name= {orderDetails.serialNumber}</td>
                        <td>adress= {orderDetails.productName}</td>
                        <td>price= {orderDetails.orderId}</td>
                        <td>date= {orderDetails.quantity}</td>
                    </tr>
                ))


            }

        </ul>
    );
};

export default DetailsList;