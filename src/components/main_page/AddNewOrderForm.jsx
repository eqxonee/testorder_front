import React, {useState} from 'react';
import OrderApiWorker from "../api/OrderApiWorker";

const AddNewOrderForm = ({loadOrders}) => {

    let [inputOrder, setInputOrder] = useState({
        customerName: "",
        customerAddress: "",
        totalPrice: ""
    });

    let orderApiWorker = new OrderApiWorker();

    const addNewOrder = () => {
        console.log(inputOrder);
        orderApiWorker.ordersAddNew(inputOrder)
            .then(response => {
                loadOrders();

                setInputOrder({
                    customerName: "",
                    customerAddress: "",
                    totalPrice: ""
                });
            });
    }
    return (
        <div>
            <div>
                <input type="text" value={inputOrder.customerName}
                       onChange={event => setInputOrder({...inputOrder, customerName: event.target.value})}
                       placeholder={"customerName"}/>
            </div>
            <div>
                <input type="text" value={inputOrder.customerAddress}
                       onChange={event => setInputOrder({...inputOrder, customerAddress: event.target.value})}
                       placeholder={"ticket price"}/>
            </div>
            <div>
                <input type="number" value={inputOrder.totalPrice}
                       onChange={event => setInputOrder({...inputOrder, totalPrice: event.target.value})}
                       placeholder={"ticket price"}/>
            </div>
            <div>
                <button onClick={addNewOrder}>Add new order</button>
            </div>
        </div>
    );
};

export default AddNewOrderForm;