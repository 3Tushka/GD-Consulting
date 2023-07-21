import './middleContent.scss';

type MiddleContentProps = {
    MiddleContentTitle?: string,
    MiddleContentImage?: string,
    MiddleContentText?: string,
}

export const MiddleContent = (props: MiddleContentProps) => {
    return (
        <div className="middleContent">
            <div className="middleContent__title">
                <div className="middleContent__title__h1">
                    {props.MiddleContentTitle}
                </div>
            </div>
            <div className="middleContent__image">
                <img src={props.MiddleContentImage} alt="middleContentImage" />
            </div>
            <div className="middleContent__text">
                {props.MiddleContentText}
            </div>
        </div>
    )
}
