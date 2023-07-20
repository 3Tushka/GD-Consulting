import './inlineCards.scss';

type InlineCardsProps = {
    InlineCardsTitleFirst: string,
    InlineCardsTextFirst: string,
    InlineCardsTitleSecond: string,
    InlineCardsTextSecond: string,
}

export const InlineCards = (props: InlineCardsProps) => {
    return (
        <>
            <div className="inlineCards">
                <div className="inlineCards__item">
                    <div className="inlineCards__item__title">
                        {props.InlineCardsTitleFirst}
                    </div>
                    <div className="inlineCards__item__text">
                        {props.InlineCardsTextFirst}
                    </div>
                </div>
                <div className="inlineCards__item">
                    <div className="inlineCards__item__title">
                        {props.InlineCardsTitleSecond}
                    </div>
                    <div className="inlineCards__item__text">
                        {props.InlineCardsTextSecond}
                    </div>
                </div>
            </div>
        </>
    )
}
