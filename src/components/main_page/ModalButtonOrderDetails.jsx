import React, {useState} from 'react';
import DetailsApiWorker from "../api/DetailsApiWorker";
import {Button, Input, Modal, Space} from "antd";

const ModalButtonOrderDetails = ({loadOrders}) => {

    const [modalIsOpen, setModalOpen] = useState(false);
    let [inputOrderDetails, setInputOrderDetails] = useState({
        serialNumber: "",
        productName: "",
        orderId: "",
        quantity: ""
    });

    let detailsApiWorker = new DetailsApiWorker();

    const addNewOrdersDetails = () => {
        console.log(inputOrderDetails);
        detailsApiWorker.ordersDetailsAddNew(inputOrderDetails)
            .then(response => {
                loadOrders();

                setInputOrderDetails({
                    serialNumber: "",
                    productName: "",
                    orderId: "",
                    quantity: "",
                });
            });
    }
        return (
            <Space style={{marginTop: "10px"}}>
                <Button type="primary" onClick={() => setModalOpen(true)}>Добавить продукт</Button>
                <Modal title="Добавить продукт"
                       centered
                       open={modalIsOpen}
                       onOk={() => {
                           setModalOpen(false)
                           addNewOrdersDetails()
                       }}
                       onCancel={() => setModalOpen(false)}
                       okText="Добавить продукт"
                       cancelText="Отмена">
                    <div>
                        <div style={{marginTop: "5px" }}>
                            <Input type="number" value={inputOrderDetails.serialNumber}
                                   onChange={event => setInputOrderDetails({...inputOrderDetails, serialNumber: event.target.value})}
                                   placeholder={"serialNumber"}/>
                        </div>
                        <div style={{marginTop: "5px" }}>
                            <Input type="text" value={inputOrderDetails.productName}
                                   onChange={event => setInputOrderDetails({...inputOrderDetails, productName: event.target.value})}
                                   placeholder={"productName"}/>
                        </div>
                        <div style={{marginTop: "5px" }}>
                            <Input type="number" value={inputOrderDetails.orderId}
                                   onChange={event => setInputOrderDetails({...inputOrderDetails, orderId: event.target.value})}
                                   placeholder={"номер заказа"}/>
                        </div>
                        <div style={{marginTop: "5px" }}>
                            <Input type="number" value={inputOrderDetails.quantity}
                                   onChange={event => setInputOrderDetails({...inputOrderDetails, quantity: event.target.value})}
                                   placeholder={"quantity"}/>
                        </div>

                    </div>
                </Modal>
            </Space>
        );
    };

export default ModalButtonOrderDetails;