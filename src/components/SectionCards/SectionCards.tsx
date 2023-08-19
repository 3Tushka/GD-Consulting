import "./sectionCards.scss";
import { motion } from 'framer-motion'

type SectionCardsProps = {
    sectionCardText?: string,
    sectionCardTitle?: string,
    sectionCardImage?: string;
}

export const SectionCards = (props: SectionCardsProps) => {
    return (
        <>
            <motion.div className="card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: 0.3
                }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 1 }
                }}>
                <div className="card__image image-wrapp">
                    <img src={props.sectionCardImage} alt="card-image" />
                </div>
                <div className="card__title">
                    <span>{props.sectionCardTitle}</span>
                </div>
                <div className="card__text">
                    <span>{props.sectionCardText}</span>
                </div>
            </motion.div>
        </>
    )
}
