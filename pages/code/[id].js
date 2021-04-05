import Head from 'next/head'
import Chat from '../../components/Chat';
import Editor from '../../components/Editor';

export default function Code(){
  return(
    <>
      <Head>
        <title>Sine</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
		  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono"/>

      </Head>
      <div className="lg:grid lg:grid-cols-12 h-screen">
        <div className="lg:col-span-9 ">
          <div className="row-span-5">
            <div className="shadow-md px-4 py-2 font-bold text-lg" style={{ background: '#2e3440', color: '#81a1c1' }}>
              Kode Stuff
              <span className="float-right">
                <button className="focus:outline-none px-3"> 
                <span className="material-icons ml-3 "
                  style={{ color: '#BF616A', fontSize: 30 }}>play_circle</span>
                </button>
              </span>
            </div>
            <Editor />
          </div>
        </div>
        <div className="col-span-3 hidden lg:inline" style={{ background: '#2e3440' }}>
          <Chat /> 
        </div>
      </div>
    </>
  );
}
