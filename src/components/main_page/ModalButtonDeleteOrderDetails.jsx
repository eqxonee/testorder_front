import React, {useState} from 'react';
import {Button, Input, Modal, Space} from "antd";
import DetailsApiWorker from "../api/DetailsApiWorker";

const ModalButtonDeleteOrderDetails = ({orders,loadOrders}) => {
    let detailsApiWorker = new DetailsApiWorker();
    const [modalIsOpen, setModalOpen] = useState(false);
    let [removeOrder, setRemoveOrder] = useState({
        id: orders.id,
        serialNumber: orders.serialNumber,
        productName: orders.productName,
        orderId: orders.orderId,
        quantity: orders.quantity,
    });

    const deleteDetailsOrder = (id) => {
        //alert(id);
        detailsApiWorker.ordersDetailsDeleteById(id)
            .then(response => {
                loadOrders();
            })
    }
    return (

        <Space style={{marginTop: "10px"}}>
            <Button type="primary" onClick={() => setModalOpen(true)}>Удалить продукт</Button>
            <Modal title="Удаление продукта"
                   centered
                   open={modalIsOpen}
                   onOk={() => {
                       setModalOpen(false)
                       deleteDetailsOrder(removeOrder.id)
                   }
                   }
                   onCancel={() => setModalOpen(false)}
                   okText="Удалить продукт"
                   cancelText="Отмена">

                <div>
                    <div style={{marginTop: "5px"}}>
                        <Input type="number" value={removeOrder.id}
                               onChange={event => setRemoveOrder({...removeOrder, id: event.target.value})}
                               placeholder={"номер продукта"}/>
                    </div>
                </div>
            </Modal>
        </Space>
    );
};

export default ModalButtonDeleteOrderDetails;