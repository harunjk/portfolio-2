"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma,} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiNodedotjs, SiTypescript,SiMongoose,SiMongodb, SiExpress,} from "react-icons/si"

import {Tabs, TabsContent, TabsList, TabsTrigger} from '../../components/ui/tabs'

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '../../components/ui/tooltip'

import {ScrollArea} from "../../components/ui/scroll-area"
import {motion} from 'framer-motion'

const abouts=
    {
        title:"About me",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aliquid quam ",
        info:[
            {
                fieldName:"Name",
                fieldValu:"Harun Rashid"
            },
            {
                fieldName:"Phone",
                fieldValu:"(+880) 1312 693 045"
            },
            {
                fieldName:"Experience",
                fieldValu:"1.5+ Years"
            },
            {
                fieldName:"Telegram",
                fieldValu:"harun7115"
            },
            {
                fieldName:"Facebook",
                fieldValu:"harun7115"
            },
            {
                fieldName:"Nationality",
                fieldValu:"Bangladesh"
            },
            {
                fieldName:"Email",
                fieldValu:"harun.wb@gmail.com"
            },
            {
                fieldName:"Freelance",
                fieldValu:"Available"
            },
            {
                fieldName:"Languages",
                fieldValu:"Bangla, English, Hindi"
            },
        ]
    }

const education={
    icon:"",
    title:"My education",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aliquid quam ",
    items:[
        {
            institution:"Online Course Platform",
            degree:"Full Stack Web Development",
            duration:"2024"
        },
        {
            institution:"Jahangirpur Model high school",
            degree:"Higher Secondary Certificate",
            duration:"2016"
        },
        {
            institution:"Jahangirpur Govt Collage",
            degree:"Higher Secondary School Certificate",
            duration:"2018"
        },
        {
            institution:"Uttra National Univercity",
            degree:"Running",
            duration:"2020-2024"
        },
    ]
}

const skills={
    title:"My skills",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aliquid quam ",
    skillsList:[
        {
            icon:<FaHtml5/>,
            name:'html 5'
        },
        {
            icon:<FaCss3/>,
            name:'Css 3'
        },
        {
            icon:<FaJs/>,
            name:'Javascript'
        },
        {
            icon:<FaReact/>,
            name:'React.js'
        },
        {
            icon:<FaFigma/>,
            name:'Figma'
        },
        {
            icon:<SiNextdotjs/>,
            name:'Next.js'
        },
        {
            icon:<SiTypescript/>,
            name:'Typscript'
        },
        {
            icon:<SiMongoose/>,
            name:'Mongoose'
        },
        {
            icon:<SiMongodb/>,
            name:'MongoDb'
        },
        {
            icon:<SiExpress/>,
            name:'Express'
        },
        {
            icon:<SiTailwindcss/>,
            name:'tailwind.css'
        },
        {
            icon:<SiNodedotjs/>,
            name:'node.js'
        },
    ]
}

const Resume = () => {
    return (
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">

                        <TabsContent value="education" className="w-full">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>

                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item,index)=>{
                                        return <li key={index}
                                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                        >
                                            <span className="text-fuchsia-500 text-2xl">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>

                                            <div>
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>

                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>
                           </div>
                        </TabsContent>


                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap--[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-4">
                                    {
                                        skills.skillsList.map((skill,index)=>{
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-fuchsia-500 transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{abouts.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{abouts.description}</p>
                            </div>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mt-6">
                                {
                                    abouts.info.map((item,index)=>{
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                                            <span className="text-white/60">{item.fieldName}:</span>
                                            <span className="text-xl">{item.fieldValu}</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;