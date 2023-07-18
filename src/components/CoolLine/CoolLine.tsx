import './coolLine.scss';
import rightShape from '../../assets/shape/shape-right.svg';
// import centerShape from '../../assets/shape/stars.svg';
import leftShape from '../../assets/shape/shape-left.svg';

export const CoolLine = () => {
    return (
        <>
            <div className="coolLine">
                <div className="coolLine__left">
                    <img src={leftShape} alt="lineLeft" className='image-wrapp' />
                </div>
                <div className="coolLine__center">
                    {/* <img src={centerShape} alt="lineCenter" className='image-wrapp' /> */}
                </div>
                <div className="coolLine__right">
                    <img src={rightShape} alt="lineRight" className='image-wrapp' />
                </div>
            </div>
        </>
    )
}
