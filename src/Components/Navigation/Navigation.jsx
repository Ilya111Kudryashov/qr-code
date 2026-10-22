import { Link } from "react-router-dom";
import s from './Navigation.module.css'
const Navigation = () => {
  return ( 
  <nav className={s.container}>
  <Link to="/generate" >Generated QR Code</Link>
  <Link to="/scan" >Scanning QR Code</Link> 
  <Link to="/scanHistory" >History scanirovaniya</Link> 
  <Link to="/generateHistory" >History generirovaniya</Link> 
  </nav> 
  );
}
 
export default Navigation;