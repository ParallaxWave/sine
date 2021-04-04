export default function ChatInput(props){
  return (
    <>
              <div className="flex">
          <div style={{
              position: 'absolute',
              bottom: 0,
              width: '22.5%',
              right: '1.175%',
              background: '#3b4252'
           }} className="mb-4 px-3 py-3 font-normal rounded-sm shadow-sm flex-grow flex">
              <input 
                type="text" 
                style={{
                background: '#3b4252'
                 }}
                placeholder="Message..." 
                className="flex-grow"
            />
            <button className="material-icons focus:outline-none" style={{ fontSize: 24 }}>send</button>
          </div>
        </div>

    </>
  );
}
