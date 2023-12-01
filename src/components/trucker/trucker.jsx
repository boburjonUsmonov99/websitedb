import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './trucker.css';
import Modal from '../modal/modal';
import { useUser } from '../../UserContext';

const DriversDashboard = () => {
    const [availableOrders, setAvailableOrders] = useState([]);
    const [myOrders, setMyOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);

    const { user } = useUser();
    const driverId = user?.id;

    useEffect(() => {
        fetchOrders();
    }, [driverId]);

    const fetchOrders = async () => {
        await fetchAvailableOrders();
        await fetchMyOrders();
    };

    const fetchAvailableOrders = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/available-orders');
            setAvailableOrders(response.data);
        } catch (error) {
            console.error('Error fetching available orders:', error);
        }
    };

    const fetchMyOrders = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/my-orders/${driverId}`);
            setMyOrders(response.data);
        } catch (error) {
            console.error('Error fetching my orders:', error);
        }
    };

    const handleClaimOrder = async (orderId) => {
        try {
            await axios.post(`http://127.0.0.1:8000/api/claim-order`, { orderId, driverId });
            await fetchOrders(); // Refresh both lists after claiming an order
        } catch (error) {
            console.error('Error claiming order:', error);
        }
    };

    const openOrderModal = (order) => {
        setSelectedOrder(order);
        setShowOrderModal(true);
    };

    const closeOrderModal = () => {
        setSelectedOrder(null);
        setShowOrderModal(false);
    };

    return (
        <div className="drivers-dashboard">
            <h1>Driver's Dashboard</h1>

            <div className='drivers-content'>
                <div className="available-orders">
                    <h2>Available Orders</h2>
                    <div className="orders-space">
                        {availableOrders.map(order => (
                            <div key={order.id} className="order" onClick={() => openOrderModal(order)}>
                                <p>{order.title}</p>
                                <button onClick={() => handleClaimOrder(order.id)}>Claim</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="taken-orders">
                    <h2>My Orders</h2>
                    <div className="orders-space">
                        {myOrders.map(order => (
                            <div key={order.id} className="order" onClick={() => openOrderModal(order)}>
                                <p>{order.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="earnings">
                <h2>Earnings</h2>
                <div className="orders-space">
                    <div className="earnings">
                        <p className="earnings-amount">
                            {/* Earnings amount should be dynamically calculated or fetched */}
                            990000004$
                        </p>
                    </div>
                </div>
            </section>

            {selectedOrder && (
                <Modal show={showOrderModal} onClose={closeOrderModal}>
                    <h3>Order Details</h3>
                    <p><strong>Title:</strong> {selectedOrder.title}</p>
                    <p><strong>Car Brand:</strong> {selectedOrder.carBrand}</p>
                    <p><strong>Car Title Number:</strong> {selectedOrder.carTitleNumber}</p>
                    <p><strong>Location:</strong> {selectedOrder.location}</p>
                    <p><strong>Destination:</strong> {selectedOrder.destination}</p>
                    <p><strong>Price:</strong> ${selectedOrder.price}</p>
                    <p><strong>ID:</strong> {selectedOrder.id}</p>
                </Modal>
            )}
        </div>
    );
};

export default DriversDashboard;
