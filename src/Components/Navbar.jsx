import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../assets/imgs/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { menuToggler } from '../Store/Reducers/dashReducer'


const Navbar = () => {

    const dispatch = useDispatch()

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <TooltipComponent content='Menu' position='BottomCenter'>
                <button type='button' onClick={() => {dispatch(menuToggler())}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 relative text-blueTheme'><AiOutlineMenu/></button>
            </TooltipComponent>
        </div>
    )
}

export default Navbar

// 1:18:40