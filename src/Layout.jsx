import {Routes,Route} from "react-router-dom";
import QrCodeGenerator from "./Components/Generate/QrCodeGenerator";
import QrCodeScanner from "./Components/Scan/QrCodeScanner";
import Navigation from "./Components/Navigation/Navigation";
import GenerateHistory from "./Components/GenerateHistory";
import ScanHistory from "./Components/ScanHistory";
const Layout = () => {
  return ( 
    <>
    
    <Navigation/>
    {/* <QrCodeGenerator/> */}
    {/* <QrCodeScanner></QrCodeScanner> */}


    <Routes>
      <Route path="/generate" element={<QrCodeGenerator/>}/>
      <Route path="/scan" element={<QrCodeScanner/>}/>
      <Route path="/scanHistory" element={<ScanHistory/>}/>
      <Route path="/generateHistory" element={<GenerateHistory/>}/>
      
    </Routes>


    </>

   );
}
 
export default Layout;