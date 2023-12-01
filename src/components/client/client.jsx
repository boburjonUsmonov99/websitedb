import React, { useState } from 'react';
import './client.css';
import Modal from '../modal/modal';

const ClientsDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: 'Order 1',
      carBrand: 'Toyota',
      carTitleNumber: '123ABC',
      location: 'New York',
      destination: 'California',
      estimatedArrival: '2023-01-01'
    },
    // Add more initial orders here if needed
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const openOrderModal = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };
  const closeOrderModal = () => {
    setSelectedOrder(null);
    setShowOrderModal(false);
  };

  const handleCreateOrder = async (event) => {
    event.preventDefault();
  
    const newOrderData = {
      id: orders.length + 1,
      title: 'New Mock Order',
      carBrand: 'Honda',
      carTitleNumber: '456DEF',
      location: 'Boston',
      destination: 'Miami',
      estimatedArrival: '2023-02-01'
    };


    setOrders([...orders, newOrderData]);
    closeModal();
  };

  return (
    <div className="wrapper">
      <h2 className='title'>Client's Dashboard</h2>
      <div className="clients-dashboard">
        <section className="place-order">
          <h2>Place New Order</h2>
          <button className='form-button' onClick={openModal}>New Order</button>
          <Modal show={showModal} onClose={closeModal}>
          <form className='new-order-form' onSubmit={handleCreateOrder}>
            <form className='new-order-form'>
              <label className='form-child'>
                <p className='form-text'>Car Brand</p>
                <input className='form-input' type="text" name="carBrand" />
              </label>
              <label className='form-child'>
                <p className='form-text'>Car Title Number</p>
                <input className='form-input' type="text" name="carTitleNumber" />
              </label>
              <label className='form-child'>
                <p className='form-text'>Location of the Car</p>
                <input className='form-input' type="text" name="location" />
              </label>
              <label className='form-child'>
                <p className='form-text'> Destination</p>
                <input className='form-input' type="text" name="destination" />
              </label  > 
              <button className='form-button' type="submit">Create Order</button>
            </form>
            </form>
          </Modal>
        </section>

        <section className="my-orders">
          <h2>My Orders</h2>
          <div className="client-order-space">
            {orders.map(order => (
              <div key={order.id} className="client-order" onClick={() => openOrderModal(order)}>
                <p className="client-order-title">{order.title}</p>
              </div>
            ))}
          </div>
        </section>

        {selectedOrder && (
          <Modal show={showOrderModal} onClose={closeOrderModal}>
            <h3>Order Details</h3>
            <p>Car Brand: {selectedOrder.carBrand}</p>
            <p>Car Title Number: {selectedOrder.carTitleNumber}</p>
            <p>Location: {selectedOrder.location}</p>
            <p>Destination: {selectedOrder.destination}</p>
            <p>Estimated Arrival: {selectedOrder.estimatedArrival}</p>
         
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ClientsDashboard;
