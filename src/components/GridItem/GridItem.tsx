import './gridItem.scss';
import ArrowRight from '../../assets/icons/Frame 512533.svg';
import { motion } from 'framer-motion'

type GridItemType = {
    gridItemText?: string,
};
export const GridItem = (props: GridItemType) => {

    const animationContainerGridItem = {
        hidden: { opacity: 0, scale: 1 },
        show: {
            opacity: 1, scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.25,
                staggerChildren: 0.9,
            }
        },
    }

    const item = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
            }
        }
    }

    return (
        <>
            <motion.div className="gridItem"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={animationContainerGridItem}>

                <motion.div className="gridItem__text"
                    variants={item}>
                    <span>{props.gridItemText}</span>
                </motion.div>
                <div className="gridItem__button">
                    <button className="gridButton">
                        <img src={ArrowRight} alt="arrow" />
                    </button>
                </div>
            </motion.div>
        </>
    )
}
