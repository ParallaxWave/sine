import ChatNav from './ChatNav';
import ChatInput from './ChatInput';
import ChatArea from './ChatArea';

export default function Chat(props){
  return (
    <>
      <ChatNav />
      <ChatArea />
      <ChatInput onSend={a => alert(a)}/>
    </>
  );
}
