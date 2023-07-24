import { ButtonLarge } from '../Buttons/ButtonLarge/ButtonLarge';
import './services.scss';


type FlexDirection = "column" | "inherit" | "-moz-initial" | "initial" | "revert" | "unset" | "column-reverse" | "row" | "row-reverse" | undefined;

type ServicesProps = {
    servicesTitle?: string,
    servicesText?: string,
    servicesImage?: string,
    serviceBoolean?: boolean,
    serviceDirection?: FlexDirection,
}

export const Services = (props: ServicesProps) => {
    return (
        <>
            <div className="services" style={{ flexDirection: props.serviceDirection }}>
                <div className="services__left">
                    <div className="services__left__title">
                        {props.servicesTitle}
                    </div>
                    <div className="services__left__text">
                        {props.servicesText}
                    </div>
                    {
                        props.serviceBoolean === true &&
                        <div className="services-button">
                            <ButtonLarge text='Get free сonsultations' />
                        </div>
                    }
                </div>
                <div className="services__right">
                    <div className="services__right__image">
                        <img src={props.servicesImage} alt="servicesImage" />
                    </div>
                </div>
            </div>
        </>
    )
}
