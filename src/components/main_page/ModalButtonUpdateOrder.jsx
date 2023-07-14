import React, {useState} from 'react';
import OrderApiWorker from "../api/OrderApiWorker";
import {Button, Input, Modal, Space} from "antd";

const ModalButtonUpdateOrder = ({orders,loadOrders}) => {

    const [modalIsOpen, setModalOpen] = useState(false);
    let [editingOrder, setEditingOrder] = useState({
        id: orders.id,
        customerName: orders.customerName,
        customerAddress: orders.customerAddress,
        totalPrice: orders.totalPrice,
    });
    let orderApiWorker = new OrderApiWorker();

    const editOrder = () => {
        orderApiWorker.orderUpdateById(orders.id, editingOrder)
            .then(response => {
                loadOrders();

            });

    }
    return (
        <Space style={{marginTop: "10px"}}>
            <Button type="primary" onClick={() => setModalOpen(true)}>Изменить заказ</Button>
            <Modal title="Изменить заказ"
                   centered
                   open={modalIsOpen}
                   onOk={() => {
                       setModalOpen(false)
                       editOrder()
                   }}
                   onCancel={() => setModalOpen(false)}
                   okText="Изменить заказ"
                   cancelText="Отмена">
                <div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={editingOrder.id}
                               onChange={event => setEditingOrder({...editingOrder, id: event.target.value})}
                               placeholder={"номер заказа"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={editingOrder.customerName}
                               onChange={event => setEditingOrder({...editingOrder, customerName: event.target.value})}
                               placeholder={"customerName"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={editingOrder.customerAddress}
                               onChange={event => setEditingOrder({...editingOrder, customerAddress: event.target.value})}
                               placeholder={"customerAddress"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={editingOrder.totalPrice}
                               onChange={event => setEditingOrder({...editingOrder, totalPrice: event.target.value})}
                               placeholder={"totalPrice"}/>
                    </div>
                </div>
            </Modal>
        </Space>
    );
};

export default ModalButtonUpdateOrder;