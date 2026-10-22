import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css'
import { SCAN_DATA } from '../../constns';
const QrCodeScanner = () => {

  const [scanned, setScanned] = useState(null)
  const scanHandler = (result) => {
    setScanned(result[0].rawValue)
    let prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue]))
  }
  return (
    <div className={s.container} style={{


      // backgound:"#333",
    }}>
      <Scanner

        allowMultiple={false}
        components={{
          audio: false,
          finder: false,
          zoom: 1,
        }}
        styles={{
          container: { width: 300, height: "100%", },
        }}
        onScan={scanHandler}
        onError={(error) => console.log(error?.message)}
      />
      <p className={s.result}>
        {"scan:" + scanned}
      </p>
    </div>
  );
}

export default QrCodeScanner;