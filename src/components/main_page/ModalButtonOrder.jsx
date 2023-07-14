import React, {useState} from 'react';
import {Button, Input, Modal, Space} from "antd";
import OrderApiWorker from "../api/OrderApiWorker";

const ModalButtonOrder = ({loadOrders}) => {
    const [modalIsOpen, setModalOpen] = useState(false);
    let [inputOrder, setInputOrder] = useState({
        customerName: "",
        customerAddress: "",
        totalPrice: "",
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
                    totalPrice: "",
                });
            });
    }
    return (
        <Space style={{marginTop: "10px"}}>
            <Button type="primary" onClick={() => setModalOpen(true)}>Создать заказ</Button>
            <Modal title="Создание заказа"
                   centered
                   open={modalIsOpen}
                   onOk={() => {
                       setModalOpen(false)
                       addNewOrder()
                   }}
                   onCancel={() => setModalOpen(false)}
                   okText="Создать заказ"
                   cancelText="Отмена">
                <div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={inputOrder.customerName}
                               onChange={event => setInputOrder({...inputOrder, customerName: event.target.value})}
                               placeholder={"customerName"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={inputOrder.customerAddress}
                               onChange={event => setInputOrder({...inputOrder, customerAddress: event.target.value})}
                               placeholder={"customerAddress"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={inputOrder.totalPrice}
                               onChange={event => setInputOrder({...inputOrder, totalPrice: event.target.value})}
                               placeholder={"ticketPrice"}/>
                    </div>

                </div>
            </Modal>
        </Space>
    );
};

export default ModalButtonOrder;