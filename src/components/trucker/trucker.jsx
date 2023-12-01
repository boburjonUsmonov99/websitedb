import React, { useState } from 'react';
import './trucker.css';
import Modal from '../modal/modal'; // Ensure this path is correct

const DriversDashboard = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            title: 'Order 1',
            details: 'Deliver to California',
            status: 'available' // This order is available
        },
        {
            id: 2,
            title: 'Order 2',
            details: 'Deliver to Texas',
            status: 'taken' // This order is taken
        },
        // Add more orders as needed
    ]);

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);

    const openOrderModal = (order) => {
        setSelectedOrder(order);
        setShowOrderModal(true);
    };

    const closeOrderModal = () => {
        setSelectedOrder(null);
        setShowOrderModal(false);
    };

    // Filter orders for different categories
    const availableOrders = orders.filter(order => order.status === 'available');
    const myOrders = orders.filter(order => order.status === 'taken');

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
                                {/* Brief details can go here */}
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
                            990000004$
                        </p>
                    </div>
                </div>
            </section>

            {selectedOrder && (
                <Modal show={showOrderModal} onClose={closeOrderModal}>
                    <h3>Order Details</h3>
                    <p>Title: {selectedOrder.title}</p>
                    <p>Details: {selectedOrder.details}</p>
                    
                </Modal>
            )}
        </div>
    );
};

export default DriversDashboard;
