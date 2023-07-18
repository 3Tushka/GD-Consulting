import "./sectionCards.scss";

type SectionCardsProps = {
    sectionCardText?: string,
    sectionCardTitle?: string,
    sectionCardImage?: string;
}

export const SectionCards = (props: SectionCardsProps) => {
    return (
        <>
            <div className="card">
                <div className="card__image image-wrapp">
                    <img src={props.sectionCardImage} alt="card-image" />
                </div>
                <div className="card__title">
                    <span>{props.sectionCardTitle}</span>
                </div>
                <div className="card__text">
                    <span>{props.sectionCardText}</span>
                </div>
            </div>
        </>
    )
}
