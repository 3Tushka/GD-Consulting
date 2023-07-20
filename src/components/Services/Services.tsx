import './services.scss';

type ServicesProps = {
    servicesTitle?: string,
    servicesText?: string,
    servicesImage?: string
}

export const Services = (props: ServicesProps) => {
    return (
        <>
            <div className="services">
                <div className="services__left">
                    <div className="services__left__title">
                        {props.servicesTitle}
                    </div>
                    <div className="services__left__text">
                        {props.servicesText}
                    </div>
                </div>
                <div className="services__right">
                    <div className="services__right__image">
                        {props.servicesImage}
                    </div>
                </div>
            </div>
        </>
    )
}
