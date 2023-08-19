import './purpouse.scss'
import { motion } from "framer-motion";

export const Purpouse = () => {
    return (
        <motion.div className="purpouse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 1 }
            }}>
            <div className="groupe">
                <div className="groupe-one">
                    <div className="groupe-one__packet" />
                    <div className="groupe-one__stars" />
                </div>
                <div className="purpouse-box">
                    <div className="purpouse-content">
                        <motion.div className="purpouse-content__title"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.6
                            }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }} >
                            What we do
                        </motion.div>
                        <motion.div className="purpouse-content__subtitle"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.8
                            }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 0 }
                            }} >
                            <span> We provide accounting services, tax consultancy and financial solutions to help you stay ahead of the game from all key sectors of the economy.</span>
                            <span>Relying on our unrivalled multi-year experience, you will be able to discover new ways of development and find winning opportunities. </span>
                        </motion.div>
                    </div>
                </div>
                <div className="groupe-two">
                    <div className="groupe-two__vector" />
                    <motion.div className="groupe-two__bills"
                        transition={{
                            duration: 0.6,
                            delay: 1.5
                        }}
                    />
                </div>
            </div>
        </motion.div >
    )
}