import { motion} from "framer-motion"

const Satirs = () => {
    const stairAnimation={
        initial:{
            top:"0%"
        },
        animate:{
            top:"100%"
        },
        exit:["100%","0%"]
    }

    const reversIndex=(index)=>{
        const totalStep=6;
        return totalStep - index-1;
    }

    return (
        <>
           {/* {[...Array(6)].map((_,index)=>{
            return (
                <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                    duration:0.4,
                    ease:"easeInOut",
                    delay:reversIndex(index) * 0.1
                }} className="h-full w-full bg-white relative" />
            )
           })} */}
        </>
    );
};

export default Satirs;