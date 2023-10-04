import { FC } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { useStateContext } from '../contexts/ContextProvider'
import Cart from './Cart'
import Chat from './Chat'
import Notification from './Notification'
import UserProfile from './UserProfile'

import avatar from '../data/avatar.jpg'

interface NavButtonProps {
  customFunc: () => void
  icon: JSX.Element
  color: string
  dotColor?: string
}

const NavButton: FC<NavButtonProps> = ({
  customFunc,
  icon,
  color,
  dotColor,
}) => (
  <TooltipComponent>
    <button
      type='button'
      onClick={() => customFunc()}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar: React.FC = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext()

  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          dotColor='#1A97F5'
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          dotColor='rgb(254, 201, 15)'
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <Image
              src={avatar}
              className='rounded-full w-8 h-8'
              alt='user-profile'
            />
            <p>
              <span className='text-gray-400 text-14'>Hi,</span>
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Username
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
