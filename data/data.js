import { FaHome } from 'react-icons/fa'
import { CiViewTable } from 'react-icons/ci'
import { FiCreditCard } from 'react-icons/fi'
import { BsGrid1X2 } from 'react-icons/bs'

import { BsCurrencyDollar } from 'react-icons/bs'

import avatar from './avatar.jpg'

// import product1 from './product1.jpg'
// import product2 from './product2.jpg'
// import product3 from './product3.jpg'
// import product4 from './product4.jpg'
import product5 from './product5.jpg'
import product6 from './product6.jpg'
import product7 from './product7.jpg'

// SideBarLiks
export const links = [
  {
    title: 'Pages',
    links: [
      {
        name: 'home',
        url: '',
        icon: <FaHome />,
      },
    ],
  },
  {
    title: 'Components',
    links: [
      {
        name: 'Register',
        url: 'register',
        icon: <PiUserListBold />,
      },
      {
        name: 'Login',
        url: 'login',
        icon: <PiUserMinusLight />,
      },

      {
        name: 'Forms',
        url: 'forms',
        icon: <MdFormatAlignLeft />,
      },
      {
        name: 'Table',
        url: 'table',
        icon: <CiViewTable />,
      },
      {
        name: 'Grid Items',
        url: 'grid-items',
        icon: <BsGrid1X2 />,
      },
      {
        name: 'List',
        url: 'list',
        icon: <BsListCheck />,
      },
      {
        name: 'Slider',
        url: 'slider',
        icon: <TfiLayoutSlider />,
      },

      {
        name: 'Charts',
        url: 'charts',
        icon: <LuBarChart4 />,
      },

      {
        name: 'Toast',
        url: 'toast',
        icon: <IoMdNotificationsOutline />,
      },
    ],
  },
]

// UserProfileDataNavBar
export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#262427',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
]

// Cart
export const cartData = [
  {
    image: product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image: product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image: product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
]

// Chat
export const chatData = [
  {
    image: avatar,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
    dotColor: '#4FD36D',
  },
  {
    image: avatar,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
    dotColor: '#AEAEAE',
  },
  {
    image: avatar,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
    dotColor: '#AEAEAE',
  },
  {
    image: avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
    dotColor: '#4FD36D',
  },
]

// Colors

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#6E4381',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
]
