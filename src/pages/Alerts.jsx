import React, { useState, useEffect } from "react";

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const savedAlerts = JSON.parse(localStorage.getItem("alerts")) || [];
        setAlerts(savedAlerts);
    }, []);

    const handleRemoveAlert = (id) => {
        const updatedAlerts = alerts.filter(alert => alert.id !== id);
        setAlerts(updatedAlerts);
        localStorage.setItem("alerts", JSON.stringify(updatedAlerts));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Price Alerts</h1>
            {alerts.length > 0 ? (
                <ul className="space-y-4">
                    {alerts.map(alert => (
                        <li key={alert.id} className="p-4 bg-white shadow-md rounded-lg flex justify-between">
                            <div>
                                <p className="text-lg font-semibold">{alert.name}</p>
                                <p className="text-gray-600">Price: ${alert.price}</p>
                                <p className="text-xs text-gray-400">Set on: {alert.time}</p>
                            </div>
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                onClick={() => handleRemoveAlert(alert.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No active alerts.</p>
            )}
        </div>
    );
};

export default Alerts;
