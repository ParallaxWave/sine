import { useRef } from 'react';

export default function ChatArea(props){
  const bottomRef = useRef();
  const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    };

  return (
    <>
      <div className="p-5" style={{
          overflowY: 'scroll',
          position: 'absolute',
          right: '0%',
          height: '82%'
        }}>



        <div ref={bottomRef} className="list-bottom"></div>
      </div>
    </>
  );
}
