export default function MyCustomBotChatMessage(props: { message: string }) {
  return (
    <div
      style={{ wordBreak: 'break-all' }}
      className="overflow-scroll shadow-md p-2 rounded-lg mr-1 bg-gray-700"
    >
      {props.message}
    </div>
  );
}
