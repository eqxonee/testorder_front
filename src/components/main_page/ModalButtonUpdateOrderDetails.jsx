import React, {useState} from 'react';
import {Button, Input, Modal, Space} from "antd";
import DetailsApiWorker from "../api/DetailsApiWorker";

const ModalButtonUpdateOrderDetails = ({orders,loadOrders}) => {

    const [modalIsOpen, setModalOpen] = useState(false);
    let [editingOrder, setEditingOrder] = useState({
        id: orders.id,
        serialNumber: orders.serialNumber,
        productName: orders.productName,
        orderId: orders.orderId,
        quantity: orders.quantity,
    });
    let detailsApiWorker = new DetailsApiWorker();

    const editOrderDetails = () => {
        detailsApiWorker.detailsUpdateById(orders.id, editingOrder)
            .then(response => {
                loadOrders();

            });

    }
    return (
        <Space style={{marginTop: "10px"}}>
            <Button type="primary" onClick={() => setModalOpen(true)}>Изменить продукт</Button>
            <Modal title="Изменить продукт"
                   centered
                   open={modalIsOpen}
                   onOk={() => {
                       setModalOpen(false)
                       editOrderDetails()
                   }}
                   onCancel={() => setModalOpen(false)}
                   okText="Изменить продукт"
                   cancelText="Отмена">
                <div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={editingOrder.id}
                               onChange={event => setEditingOrder({...editingOrder, id: event.target.value})}
                               placeholder={"номер продукта"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={editingOrder.serialNumber}
                               onChange={event => setEditingOrder({...editingOrder, serialNumber: event.target.value})}
                               placeholder={"Серийный номер продукта"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="text" value={editingOrder.productName}
                               onChange={event => setEditingOrder({...editingOrder, productName: event.target.value})}
                               placeholder={"название продукта"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={editingOrder.orderId}
                               onChange={event => setEditingOrder({...editingOrder, orderId: event.target.value})}
                               placeholder={"Номер заказа"}/>
                    </div>
                    <div style={{marginTop: "5px" }}>
                        <Input type="number" value={editingOrder.quantity}
                               onChange={event => setEditingOrder({...editingOrder, quantity: event.target.value})}
                               placeholder={"Количетсво"}/>
                    </div>
                </div>
            </Modal>
        </Space>
    );
};

export default ModalButtonUpdateOrderDetails;