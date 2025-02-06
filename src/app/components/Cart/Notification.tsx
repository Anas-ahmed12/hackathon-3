// components/Notification.tsx

import { useState, useEffect } from 'react';

type NotificationProps = {
  message: string;
  visible: boolean;
};

const Notification = ({ message, visible }: NotificationProps) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
