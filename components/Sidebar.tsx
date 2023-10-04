import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { MdOutlineDashboard, MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { links } from '../data/data'

const Sidebar: FC = () => {
  const pathname = usePathname()

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              href='/'
              onClick={handleCloseSideBar}
              passHref
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
            >
              <MdOutlineDashboard /> <span>Dashboard</span>
            </Link>
            <TooltipComponent
              content='Menu'
              position='BottomCenter'
            ></TooltipComponent>
          </div>
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <Link
                    href={`/${link.url}`}
                    onClick={handleCloseSideBar}
                    key={link.name}
                    style={{
                      backgroundColor:
                        pathname === `/${link.url}` ? currentColor : '',
                    }}
                    className={
                      pathname === `/${link.url}` ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar