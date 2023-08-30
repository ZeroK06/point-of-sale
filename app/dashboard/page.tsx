'use client'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { GiCardboardBoxClosed, GiLaptop, GiReceiveMoney, GiShoppingBag } from 'react-icons/gi'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export const data = [
    {
        name: "Jan",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Feb",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Mar",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Apr",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "May",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jun",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Jul",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Aug",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Sep",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Oct",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Nov",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: "Dec",
        total: Math.floor(Math.random() * 5000) + 1000,
    },
]

const Page = () => {


    return (

        <div className='dashboard__layout--content overflow-y-scroll bg-gray-100'>

            <div className='py-4 px-6 border-b-gray-100 mx-8 border-b-2'>
                asdasd
            </div>
            <div className='py-8 px-8'>
                <div className='grid grid-cols-4 gap-8'>
                    <div className='bg-white rounded-xl h-40 p-6 flex flex-col justify-between relative'>
                        <div className='absolute -top-3 left-6 h-20 w-20 rounded-xl bg-primary shadow-primary flex justify-center items-center'>
                            <GiReceiveMoney size={35} color='#fff' />
                        </div>
                        <div className='text-right'>
                            <p className='text-sm'>
                                El dinero de hoy
                            </p>
                            <h2 className='text-2xl font-semibold'>
                                2000
                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                            </h2>
                        </div>
                        <Separator />
                        <div className='text-right'>
                            <p>
                                +55% que la semana pasada
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl h-40 p-6 flex flex-col justify-between relative'>
                        <div className='absolute -top-3 left-6 h-20 w-20 rounded-xl bg-primary shadow-primary flex justify-center items-center'>
                            <GiCardboardBoxClosed size={35} color='#fff' />
                        </div>
                        <div className='text-right'>
                            <p className='text-sm'>
                                Productos anadidos
                            </p>
                            <h2 className='text-2xl font-semibold'>
                                3
                            </h2>
                        </div>
                        <Separator />
                        <div className='text-right'>
                            <p>
                                +55% que la semana pasada
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl h-40 p-6 flex flex-col justify-between relative'>
                        <div className='absolute -top-3 left-6 h-20 w-20 rounded-xl bg-primary shadow-primary flex justify-center items-center'>
                            <GiLaptop size={35} color='#fff' />
                        </div>
                        <div className='text-right'>
                            <p className='text-sm'>
                                Servicios del dia de hoy
                            </p>
                            <h2 className='text-2xl font-semibold'>
                                4
                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                            </h2>
                        </div>
                        <Separator />
                        <div className='text-right'>
                            <p>
                                +55% que la semana pasada
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl h-40 p-6 flex flex-col justify-between relative'>
                        <div className='absolute -top-3 left-6 h-20 w-20 rounded-xl bg-primary shadow-primary flex justify-center items-center'>
                            <GiShoppingBag size={35} color='#fff' />
                        </div>
                        <div className='text-right'>
                            <p className='text-sm'>
                                Ventas del dia de hoy
                            </p>
                            <h2 className='text-2xl font-semibold'>
                                2000
                                <span className="ml-1 text-xs font-normal text-gray-400">PEN</span>
                            </h2>
                        </div>
                        <Separator />
                        <div className='text-right'>
                            <p>
                                +55% que la semana pasada
                            </p>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-2 mt-6'>
                    <div className='bg-white rounded-xl p-6 relative'>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={data}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    className='fill-primary'
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Bar dataKey="total" className='fill-chart-primary' radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page