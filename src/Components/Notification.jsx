import React, { useState } from "react";
import "./Notification.css";
import { BiBell } from "react-icons/bi";

export default function Notification() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, text: "Order on the way" },
    { id: 2, text: "Order placed successfully" },
    { id: 3, text: "Payment completed" }
  ]);

  const deleteOne = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-container">
      
      <button onClick={() => setOpen(!open)}>
        <BiBell/> Notification ({notifications.length})
      </button>

      
      {open && (
        <div className="notification-popup">

          <div className="header">
            <h4>Notifications</h4>
            <button onClick={clearAll}>Clear All</button>
          </div>

          {notifications.length === 0 ? (
            <p>No notifications</p>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className="notification-item">
                <span>{n.text}</span>
                <button onClick={() => deleteOne(n.id)}>x</button>
              </div>
            ))
          )}

        </div>
      )}
    </div>
  );
}