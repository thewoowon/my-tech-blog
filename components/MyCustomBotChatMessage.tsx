export default function MyCustomBotChatMessage(props: { message: string }) {
  return (
    <div
      style={{ wordBreak: 'break-all' }}
      className="overflow-scroll shadow-md p-2 rounded-lg mr-1 border-2 border-black"
    >
      {props.message}
    </div>
  );
}
