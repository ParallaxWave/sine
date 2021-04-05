export default function ChatMsg(props){
  return (
    <>
      <div className="mt-3">
          <img src={ photoURL } className="rounded-full inline mr-2" width="24"/> 
          <span className="font-bold mr-3 break-words">
            { user || botName } :  
          </span>
          <span className="break-words">
            { out }
          </span>
      </div>
    </>
  );
}
