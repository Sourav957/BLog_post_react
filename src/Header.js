import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa' 
import useWindowSize from './Hooks/useWindowSize'



const Header = ({title}) => {
  const {width} = useWindowSize();
  return (
    <header className='Header'>
        <h2>{title}</h2>
        {width < 762 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop/>}
    </header>
  )
}

export default Header