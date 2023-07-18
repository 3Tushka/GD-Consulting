import { GridItem } from "../../components/GridItem/GridItem";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import vectorStar from '../../assets/icons/Vector 7.svg';
import './principles.scss'

export const Principles = () => {
    return (
        <>
            <div className="vectorStar">
                <img src={vectorStar} alt="star" />
            </div>
            <div className="principles">
                <div className="principles__title">
                    <h2 className="principles__title__h2">
                        Our principles
                    </h2>
                </div>
                <GridItem gridItemText="Providing an individual approach to each client and developing a personalized solution for their business" />
                <GridItem gridItemText="Maintaining transparency in communication with clients and promptly responding to their inquiries" />
                <GridItem gridItemText="Prioritizing the completion of tasks in full and on time, as one of the key factors" />
                <GridItem gridItemText="Taking care of employees to ensure high-quality task completion every day" />
                <GridItem gridItemText="Providing quality solutions based on experience and practical knowledge" />
            </div>
        </>
    )
}
