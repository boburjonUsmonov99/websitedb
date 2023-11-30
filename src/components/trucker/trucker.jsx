import React, { useEffect, useState } from 'react';
import './trucker.css';

const DriversDashboard = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch('URL_TO_YOUR_API_ENDPOINT');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOrders(data); // Assuming the API returns an array of orders
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="drivers-dashboard">
            <h1>Driver's Dashboard</h1>

            <div className='drivers-content'>
                <div className="available-orders">
                    <h2>Available Orders</h2>
                    <div className="orders-space">
                        {orders.map(order => (
                            <div key={order.id} className="order">
                                {/* Display order details */}
                                <p>{order.title}</p>
                                {/* Include other details as needed */}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="taken-orders">
                    <h2>My Orders</h2>
                    <div className="orders-space">
                        {/* Display taken orders here */}
                    </div>
                </div>
            </div>

            <section className="earnings">
                <h2>Earnings</h2>
                <div className="orders-space">
                    {/* Display earnings information here */}
                </div>
            </section>
        </div>
    );
};

export default DriversDashboard;
