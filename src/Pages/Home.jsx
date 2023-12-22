// import { earningData, SparklineAreaData, ecomPieChartData } from '../assets/dummy'
import Button from '../Components/Button'
import { earningData } from '../assets/dummy'
import background from './../assets/imgs/imgdesktop.jpg'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoDotFill} from 'react-icons/go'


export const Home = () => {

    return (
        <div className="ecommerce-home mt-12">
            {/* [1] - First Section */}
            <div className="flex flex-wrap 2xl:flex-nowrap justify-center">
                {/* Cover Page */}
                <div className='flex w-full 2xl:w-[50%] justify-center 2xl:justify-start m-3 2xl:flex-1'>
                    <div style={{backgroundImage: `url(${background})`}} className="bg-white dark:text-gray-200 bg-cover dark:bg-secondary-dark-bg min-h-[130px] rounded-xl w-full p-8 pt-9 bg-no-repeat bg-center">
                        <div className="ele-center-col items-start text-white 2xl:h-full 2xl:justify-between">
                            <div className="info 2xl:gap-3 flex flex-col">
                                <span className='text-gray-400 font-bold 2xl:text-lg'>Earning</span>
                                <h3 className='text-2xl 2xl:text-4xl'>$63,448.78</h3>
                            </div>
                            <div className="mt-6">
                                <Button color='white' bgColor='#1a97f5' text='Download' borderRadius='10px'/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Cards */}
                <div className="ele-center flex-wrap gap-2 m-3 w-full justify-center 2xl:w-[50%] box-border">
                    {earningData.map((item, idx) => (
                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full sm:w-56 2xl:w-[48%] p-4 pt-9 rounded-2xl" key={idx}>
                            <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}} className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl">
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">{item.amount}</span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

             {/* [2] - Second Section */}
            <div className="updates flex gap-10 flex-wrap justify-center">
                {/* Revenue */}
                <div className="revenue bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl m-3 p-4 md:w-[780px]">
                    <div className="header flex justify-between">
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className="dot flex items-center gap-2 text-gray-600 hover:drop-shadow-xl"><span><GoDotFill/></span> <span>Expense</span></p>
                            <p className="dot flex items-center gap-2 text-green-400 hover:drop-shadow-xl"><span><GoDotFill/></span> <span>Budget</span></p>
                        </div>
                    </div>
                </div>
                {/* Budget */}
                <div className="budget">

                </div>
            </div>
        </div>
    )
}
// 1:58