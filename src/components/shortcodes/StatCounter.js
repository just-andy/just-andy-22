import React from 'react'

const StatCounter = ({stats}) => {
    return (
        <div>
            <div className="container mx-auto my-4 lg:my-6">
                <div className="grid  grid-cols-2 lg:grid-cols-4 justify-between">
                    {stats.map((stat, index) => {
                        return (
                            <div key={index} className="font-sans ">
                                <div className="my-3 text-2xl text-center text-primary-500 lg:text-6xl ">{stat.number}</div>
                                <div className="my-2 text-xl  lg:text-3xl text-center">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default StatCounter;