import './inlineCards.scss';

type cardColor = "#EBF3FF" | "#F6F6F6" | undefined;

type InlineCardsProps = {
    InlineCardsTitleFirst?: string | null,
    InlineCardsTextFirst?: string,
    InlineCardsTitleSecond?: string | null,
    InlineCardsTextSecond?: string,
    InlineCardsColor?: cardColor;
}

export const InlineCards = (props: InlineCardsProps) => {
    return (
        <>
            <div className="inlineCards">
                <div className="inlineCards__item" style={{ background: props.InlineCardsColor }}>
                    {
                        props.InlineCardsTitleFirst &&
                        <div className="inlineCards__item__title">
                            {props.InlineCardsTitleFirst}
                        </div>
                    }
                    <div className="inlineCards__item__text">
                        {props.InlineCardsTextFirst}
                    </div>
                </div>
                <div className="inlineCards__item">
                    {
                        props.InlineCardsTitleSecond &&
                        <div className="inlineCards__item__title">
                            {props.InlineCardsTitleSecond}
                        </div>
                    }
                    <div className="inlineCards__item__text">
                        {props.InlineCardsTextSecond}
                    </div>
                </div>
            </div>
        </>
    )
}
