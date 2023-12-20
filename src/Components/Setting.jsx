// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaCog } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Setting = () => {
    return (
        <div className="setting fixed right-4 bottom-4 z-50">
            <div className="sett relative hover:after:flex hover:before:flex">
                <button type='button' className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-[50%]' style={{backgroundColor: "#1a97f5"}}><FiSettings className="settings-icon" /></button>
            </div>
        </div>
    )
}

export default Setting