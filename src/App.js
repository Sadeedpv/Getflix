import Input from './components/input';
import Navbars from './components/navbar';
import ReactLoading from "react-loading";
import { useEffect, useState } from 'react';

function App() {
  const [intro, setintro] = useState(true)
  useEffect(() =>{
    setintro(false)
  }, [])

  if (intro){
    return(
      <div className='intro'>
        <ReactLoading type='bars' height={250} width={200}/>
      </div>
    )
  }

  return(
    <>
    <Navbars />
    <Input />
    </> 
  );
}

export default App;
