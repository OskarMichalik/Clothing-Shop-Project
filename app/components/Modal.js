import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({title,children,onClose}){

    return createPortal(
        <>
            <motion.div className="backdrop" onClick={onClose} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}/>
            <motion.dialog open className="modal" 
            variants={{
                hiddenEntry: {y: 30, opacity: 0},
                visible: {y: 0, opacity: 1},
                hiddenExit: {y: -30,opacity: 0}
            }}
            initial='hiddenEntry' 
            animate='visible'
            exit='hiddenExit'>
                <h2>{title}</h2>
                {children}
            </motion.dialog>
        </>,
        document.getElementById('modal')
    );
}