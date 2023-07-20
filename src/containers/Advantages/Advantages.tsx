import { GridItem } from '../../components/GridItem/GridItem';
import './advantages.scss';

type AdvantagesProps = {
    AdvantagesTitle?: string,
    AdvantagesText?: string,
}

export const Advantages = (props: AdvantagesProps) => {
    return (
        <>
            <div className="advantages">
                <div className="advantages__upper">
                    <div className="advantages__upper__content">
                        <div className="advantages__upper__content__title">
                            <h2 className="advantages__upper__title__h2">
                                {props.AdvantagesTitle}
                            </h2>
                        </div>
                        <div className="advantages__upper__content__text">
                            {props.AdvantagesText}
                        </div>
                    </div>
                    <div className="advantages__upper__item">
                        <GridItem gridItemText='G&D Consulting specialists are highly qualified in accounting & bookeeping' />
                    </div>
                </div>
                <div className="advantages__lower">
                    <GridItem gridItemText='The payment for accounting services is significantly less than the salary of a qualified accountant' />
                    <GridItem gridItemText='G&D Consulting will be responsible for organizing accounting, searching for personnel for accounting, and other related tasks' />
                    <GridItem gridItemText='In addition to accounting support, you can count on qualified legal assistance in G&D Consulting' />
                </div>
            </div>
        </>
    )
}
