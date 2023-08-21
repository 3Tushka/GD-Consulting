import './middleContent.scss';

import { motion } from 'framer-motion';


type MiddleContentProps = {
    MiddleContentTitle?: string,
    MiddleContentImage?: string | null,
    MiddleContentText?: string,
}

export const MiddleContent = (props: MiddleContentProps) => {
    return (
        <motion.div className="middleContent"
            transition={{ ease: "easeIn", duration: 0.3, delay: 0.5 }}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 1 }
            }}
        >
            <motion.div className="middleContent__title"
                transition={{ ease: "easeIn", duration: 0.8, delay: 0.2 }}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                variants={{
                    visible: { opacity: 1, scale: 1, x: 0 },
                    hidden: { opacity: 0, scale: 0.8, x: -720 }
                }}
            >
                <div className="middleContent__title__h1">
                    {props.MiddleContentTitle}
                </div>
            </motion.div>
            {
                props.MiddleContentImage &&
                < div className="middleContent__image">
                    <img src={props.MiddleContentImage} alt='middleContentImage' />
                </div>
            }
            <div className="middleContent__text">
                {props.MiddleContentText}
            </div>
        </motion.div>
    )
}
