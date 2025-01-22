import React, { useState } from "react";
import useNotifications from "../../hooks/useNotifications";

const NotificationsPopup = ({ userEmail }) => {
  const { data: notifications = [], isLoading } = useNotifications(userEmail);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => setPopupVisible((prev) => !prev);

  const hidePopup = () => setPopupVisible(false);

  return (
    <div>
      {/* Notification Icon */}
      <button
        onClick={togglePopup}
        className="btn btn-primary fixed top-4 right-4"
      >
        Notifications
      </button>

      {/* Notification Pop-up */}
      {isPopupVisible && (
        <div
          className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-96"
          onClick={hidePopup}
        >
          <h3 className="font-bold text-lg mb-2">Notifications</h3>
          {isLoading ? (
            <p>Loading...</p>
          ) : notifications.length === 0 ? (
            <p>No notifications found.</p>
          ) : (
            <ul>
              {notifications.map((notification, index) => (
                <li key={index} className="border-b p-2">
                  <p>{notification.message}</p>
                  <a
                    href={notification.actionRoute}
                    className="text-blue-500 underline"
                  >
                    View Details
                  </a>
                  <p className="text-sm text-gray-400">
                    {new Date(notification.time).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPopup;
