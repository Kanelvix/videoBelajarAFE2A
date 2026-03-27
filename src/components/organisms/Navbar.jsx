import { NavLink } from 'react-router';
import ProfileBox from '../molecules/ProfileBox';

function Navbar(props) {
  return (
    <>
      <div className='flex h-20 items-center justify-between w-full bg-white border-b-[1px] border-b-[#F1F1F1] fixed top-0 right-0 left-0 px-6 shadow-lg shadow-[#22232526] md:shadow-none z-50'>
        <NavLink to={'/homepage'} className='flex items-center cursor-pointer hover:opacity-80 duration-300'>
          <img src='/logo-videobelajar.svg' alt="Logo" className=' h-7 md:h-8' />
        </NavLink>
        
        {props.page !== "logInSignIn" &&
          <ProfileBox />
        }
      </div>
    </>
  )
}

export default Navbar;