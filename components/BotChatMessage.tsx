import React from 'react';

function BotChatMessage({
  message,
  loading,
}: {
  message?: string;
  loading?: boolean;
}) {
  return <div>{loading ? <div>{message}</div> : null}</div>;
}

export default BotChatMessage;
