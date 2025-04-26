import React from 'react';
import { useState, useEffect } from 'react';

const Notification = ({ data, onDismiss }) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  return (
    !hidden &&
      <div onClick={handleClick}
        className={`notification notification-${data.flag || 'info'}`}
      >
        <p>{data.message}</p>
        <button onClick={onDismiss}>Dismiss</button>
      </div>
  );

};

const Notifications = ({ messages }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const newArray = [...messages, ...notifications];
    setNotifications(newArray);
  }, [messages]);

  const onDismiss = (index) => {
    setNotifications((prevNotifications) => {
      const newNotifications = [...prevNotifications];
      newNotifications.splice(index, 1);
      return newNotifications;
    });
  };

  return (
    <div>
      {notifications.length > 0 &&
        notifications.map((notification, index) => (
          <div key={index} className="notification">
            <Notification data={notification} onDismiss={() => onDismiss(index)}/>
          </div>
        ))
      }
    </div>
  );
};

export default Notifications;