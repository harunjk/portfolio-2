"use client"

import CountUp from "react-countup";

const Statss=[
    {
        num:1.5,
        text:"Year of experience",
    },
    {
        num:15,
        text:"Project Completed",
    },
    {
        num:200,
        text:"Code Commite",
    },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-4 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {
                        Statss.map((item,index)=>{
                            return <div
                            className=" flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}>
                                <CountUp end={item.num} 
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl"/>
                                <p className={`${item.text.length < 15 ? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;