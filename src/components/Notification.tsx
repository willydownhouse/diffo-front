import React from 'react';

type NotificationProps = {
  message: string;
};

function Notification({ message }: NotificationProps) {
  if (!message) return null;
  return <div className="alert alert-danger">{message}</div>;
}

export default Notification;
