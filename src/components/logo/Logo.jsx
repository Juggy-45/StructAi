import { Link } from 'react-router-dom';
import '../logo/logo.css'
import logoDark from '../../assets/img/logo-dark.png';
import logoLight from '../../assets/img/logo-light.png';

// eslint-disable-next-line react/prop-types
const LogoDark = ({ light }) => {
  return (
    <Link to='/'>
     <div className='Logo-style'>StructAI </div>
    </Link>
  );
};

export default LogoDark;
