import { motion } from "framer-motion";
export default function Button({children, type='button', className='button', onClick}){
    return(
        <motion.button className={`${className}`} type={type} onClick={onClick} whileHover={{scale: 1.1}} transition={{
            type: 'spring',
            bounce: 0.75,
        }}>{children}</motion.button>
    );
}