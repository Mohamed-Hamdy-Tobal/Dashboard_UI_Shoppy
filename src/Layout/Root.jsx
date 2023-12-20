import { Outlet } from "react-router-dom"
import Setting from "../Components/Setting"
import  Sidebar from "./../Components/Sidebar"
import  Footer from "./../Components/Footer"
import  Navbar from "./../Components/Navbar"
import { useSelector } from "react-redux"

export const Root = () => {

    const {activeMenu} = useSelector((state) => state.dashReducer)

    const currentMode = ''

    return (
        <main className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className={`root flex relative dark:bg-main-dark-bg`}>  
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-[100]">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                
                {/* For The Remain Page */}
                <div
                    className={
                    activeMenu
                        ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                        : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    {/* For The Navbar IN Page */}
                    <header className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </header>

                    <div className="main-content">
                        <Outlet/>  {/* The Outlet In the page */}
                    </div>
                    <Footer /> {/* The Footer */}
                </div>
            </div>
            <Setting/>  {/* The Toggler Settings */}
        </main>
    )
}