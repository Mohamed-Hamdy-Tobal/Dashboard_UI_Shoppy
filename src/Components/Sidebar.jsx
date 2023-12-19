import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../assets/dummy.js'

import { Link } from "react-router-dom"

const Sidebar = () => {

    const activeMenu = true
    
    return (
        <div className="sidebar pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (<>
                 {/* The Logo And Close Button */}
                <div className="flex items-center justify-between">
                    <Link to='/' onClick={() => {}} className="flex justify-center gap-3 ml-3 mt-4 items-center text-xl font-extrabold tracking-tight dark:text-white text-salte"><SiShopware/> <span>Shoppy</span></Link>
                    <TooltipComponent content='Menu' position='BottomCenter'>
                        <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'><MdOutlineCancel/></button>
                    </TooltipComponent>
                </div>

                {/* The Links */}
                {links.map((link,idx) => (
                    <div key={idx} className='text-gray-400 m-3 uppercase'>{link.title}</div>
                ))}
                
            </>)}
        </div>
    )
}

export default Sidebar