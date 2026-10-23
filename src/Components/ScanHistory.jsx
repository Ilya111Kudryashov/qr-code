import {QRCodeSVG} from 'qrcode.react';
import { SCAN_DATA } from './../constns';

const ScanHistory = () => {
  const data=JSON.parse(localStorage.getItem(SCAN_DATA)||'[]')
  return ( 
    <>
    vrvr
    {data.map((text)=>(
      <p key={text}>{text}
      <QRCodeSVG value={text} size="100" />
      </p>

    ))}
    </>
   );
}
 
export default ScanHistory;