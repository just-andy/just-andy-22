import React from 'react';

interface StatProps {
    stats: Array<{ label: string; number: number }>;
}

const StatCounter = ({ stats }: StatProps) => (
    <div>
        <div className="section-spacer child">
            <div className="container mx-auto">
                <div className="grid  grid-cols-2 lg:grid-cols-4 justify-between">
                    {stats.map((stat, index) => (
                        <div key={index} className="">
                            <div className="my-3 text-4xl text-center font-sans text-primary-500 lg:text-8xl ">
                                {stat.number}
                            </div>
                            <div className="my-2 text-xl  text-center lg:text-3xl">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default StatCounter;
