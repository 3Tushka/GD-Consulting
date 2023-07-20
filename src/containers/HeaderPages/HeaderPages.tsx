import { ButtonLarge } from '../../components/Buttons/ButtonLarge/ButtonLarge';
import './headerPages.scss';

type HeaderPagesProps = {
    HeaderPagesPropsTitle?: string,
    HeaderPagesPropsTextFirst?: string,
    HeaderPagesPropsTextSecond?: string,
    HeaderPagesPropsImage?: string,
};

export const HeaderPages = (props: HeaderPagesProps) => {
    return (
        <>
            <div className="headerPages">
                <div className="headerPages__left">
                    <div className="headerPages__left__title">
                        <h3 className="headerPages__left__title__h3">
                            {props.HeaderPagesPropsTitle}
                        </h3>
                    </div>
                    <div className="headerPages__left__content">
                        <div className="headerPages__left__content__item">
                            {props.HeaderPagesPropsTextFirst}
                        </div>
                        <div className="headerPages__left__content__item">
                            {props.HeaderPagesPropsTextSecond}
                        </div>
                    </div>

                    <div className="headerPages__button">
                        <ButtonLarge text='Submit your application' />
                    </div>
                </div>
                <div className="headerPages__right">
                    <div className="headerPages__right__image">
                        <img src={props.HeaderPagesPropsImage} alt="headerPageImage" className='image-wrapp' />
                    </div>
                </div>
            </div>
        </>
    )
}
