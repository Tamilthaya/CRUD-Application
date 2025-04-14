import { useState } from 'react'
import './App.css'
import ResponsiveBreakpointsExample from './table'
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUpfun from './popup';

function App() {
  const [show, setShow] = useState(false);
  const [value,setvalue]=useState(false)
  const [tempdata,settempdata]=useState({});

  const handleClose = () => setShow(false);
  const handleShow = (rowdata) =>{
    if(rowdata){
    settempdata(rowdata);
  }else{
    settempdata({
      name:null,
      emailId:null,
      location:null,
      phoneNo:null,
      qualification:null,
    })
  }
    setShow(true)};
  return (
    <div>
      <PopUpfun boxshow={show} boxclose={handleClose} file={tempdata} setfile={settempdata} ref={value} setref={setvalue} />
      <ResponsiveBreakpointsExample boxclick={handleShow} ref={value} setref={setvalue} />

     </div>
  )
}

export default App
