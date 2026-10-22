import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import s from './qrCodeGenerator.module.css'
import { GENERATE_DATA} from '../../constns'; 
const QrCodeGenerator = () => {
  const [value,setValue]=useState("");
  const [result,setResult]=useState('');
  


  const onClickHandler=()=>{
    
    const prevData=JSON.parse(localStorage.getItem(GENERATE_DATA)||'[]')
    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData,value])
    )
    
    setResult(value)
    setValue('')

  }
  
  function onChangeHandler(event){
    setValue(event.target.value);
    console.log(event.target.value);
     setResult('')
  }
  console.log("result \n"+result);
  return ( 
    <div className={s.container}>
    {/* {isShowQRCode===true?<QRCodeSVG value={value} />:null} */}
    {/* {isShowQRCode ? <QRCodeSVG value={value} />:null} */}
   
    
    <input 
    type="text"
      value={value} 
      placeholder='Enter text'
      onChange={onChangeHandler} 
      className={s.result}/>
    <button className={s.button} type='button' onClick={onClickHandler}>Generated</button>
     {result!=='' && (
      <div className={s.qrWrapper}>

      <QRCodeSVG value={result} size="200" />
      </div>
      )}
    </div>
   );
}
 
export default QrCodeGenerator;