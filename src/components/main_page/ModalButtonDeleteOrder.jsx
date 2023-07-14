import React, {useState} from 'react';
import OrderApiWorker from "../api/OrderApiWorker";
import {Button, Input, Modal, Space} from "antd";

const ModalButtonDeleteOrder = ({orders,loadOrders}) => {

    let orderApiWorker = new OrderApiWorker();
    const [modalIsOpen, setModalOpen] = useState(false);
    let [removeOrder, setRemoveOrder] = useState({
        id: orders.id,
        customerName: orders.customerName,
        customerAddress: orders.customerAddress,
        totalPrice: orders.totalPrice,
    });

    const deleteOrder = (id) => {
        //alert(id);
        orderApiWorker.orderDeleteById(id)
            .then(response => {
                loadOrders();
            });
    }
    return (
        <Space style={{marginTop: "10px"}}>
            <Button type="primary" onClick={() => setModalOpen(true)}>Удалить заказ</Button>
            <Modal title="Удаление заказа"
                   centered
                   open={modalIsOpen}
                   onOk={() => {
                       setModalOpen(false)
                       deleteOrder(removeOrder.id)
                   }}
                   onCancel={() => setModalOpen(false)}
                   okText="Удалить заказ"
                   cancelText="Отмена">
                <div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={removeOrder.id}
                               onChange={event => setRemoveOrder({...removeOrder, id: event.target.value})}
                               placeholder={"номер заказа"}/>
                    </div>
                </div>
            </Modal>
        </Space>
    );
};


export default ModalButtonDeleteOrder;