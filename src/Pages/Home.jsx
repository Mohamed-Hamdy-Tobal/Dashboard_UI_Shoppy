// import { earningData, SparklineAreaData, ecomPieChartData } from '../assets/dummy'
import Button from '../Components/Button'
import SparkLine from '../Components/Charts/SparkLine'
import Stacked from '../Components/Charts/Stacked'
import { SparklineAreaData, earningData } from '../assets/dummy'
import background from './../assets/imgs/imgdesktop.jpg'
// import {BsCurrencyDollar} from 'react-icons/bs'
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
                        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-[48%] sm:w-56 2xl:w-[48%] p-4 pt-9 rounded-2xl" key={idx}>
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
                {/* 1) Revenue And Budget*/}      
                <div className="revenue bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl m-3 p-4 md:w-[780px]">
                    {/* - Header Budget */}
                    <div className="header flex justify-between">
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className="dot flex items-center gap-2 text-gray-600 hover:drop-shadow-xl"><span><GoDotFill/></span> <span>Expense</span></p>
                            <p className="dot flex items-center gap-2 text-green-400 hover:drop-shadow-xl"><span><GoDotFill/></span> <span>Budget</span></p>
                        </div>
                    </div>
                    {/* - Content */}
                    <div className="main-holder mt-10 flex flex-wrap gap-10 justify-center">
                         {/* Revenue */}       
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p><span className='text-3xl font-semibold'>$93,438</span><span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-xs text-white'>23%</span></p>
                                <p className='text-gray-500'>Budget</p>
                            </div>
                            <div className='mt-8'>
                                <p><span className='text-3xl font-semibold'>$48,458</span></p>
                                <p className='text-gray-500'>ُExpense</p>
                            </div>
                            <div className="mt-5">
                                <SparkLine 
                                currentColor='#1a97f5' 
                                id="line-sparkLine" 
                                type="Line" 
                                height="80px" 
                                width="250px" 
                                data={SparklineAreaData} 
                                color='#1a97f5' />
                            </div>
                            <div className="mt-10">
                                <Button color='white' bgColor='#1a97f5' text='Download Report' borderRadius='10px'/>
                            </div>
                        </div>
                        {/* Budget */}
                        <div className="budget">
                            <Stacked width='320px' height='360px'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}