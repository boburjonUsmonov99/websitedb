import React, { useState } from 'react';
import './client.css';
import Modal from '../modal/modal';
import axios from 'axios';
import { useUser } from '../../UserContext';

const ClientsDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderFormData, setOrderFormData] = useState({
    carBrand: '',
    carTitleNumber: '',
    location: '',
    destination: ''
  });
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const { user } = useUser();

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setOrderFormData({
      carBrand: '',
      carTitleNumber: '',
      location: '',
      destination: ''
    });
  };

  const openOrderModal = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };
  const closeOrderModal = () => setSelectedOrder(null);

  const handleInputChange = (event) => {
    setOrderFormData({
      ...orderFormData,
      [event.target.name]: event.target.value
    });
  };

  const handleCreateOrder = async (event) => {
    event.preventDefault();

    try {
      const formToSend = {
        ...orderFormData,
        customer: user?.user_id
      };
      console.log('Form to send:', formToSend);

      const response = await axios.post('http://127.0.0.1:8000/requests/create/', formToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const createdOrder = response.data;

      setOrders([...orders, createdOrder]);
      closeModal();
    } catch (error) {
      console.error('Error creating order:', error);
    }
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
              <label className='form-child'>
                <p className='form-text'>Car Brand</p>
                <input
                  className='form-input'
                  type="text"
                  name="carBrand"
                  value={orderFormData.carBrand}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label className='form-child'>
                <p className='form-text'>Car Title Number</p>
                <input
                  className='form-input'
                  type="text"
                  name="carTitleNumber"
                  value={orderFormData.carTitleNumber}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label className='form-child'>
                <p className='form-text'>Location of the Car</p>
                <input
                  className='form-input'
                  type="text"
                  name="location"
                  value={orderFormData.location}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label className='form-child'>
                <p className='form-text'>Destination</p>
                <input
                  className='form-input'
                  type="text"
                  name="destination"
                  value={orderFormData.destination}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button className='form-button' type="submit">Create Order</button>
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
