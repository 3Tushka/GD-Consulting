import './gridItem.scss';
import ArrowRight from '../../assets/icons/Frame 512533.svg';

type GridItemType = {
    gridItemText: string,
};
export const GridItem = (props: GridItemType) => {
    return (
        <>
            <div className="gridItem">
                <div className="gridItem__text">
                    <span>{props.gridItemText}</span>
                </div>
                <div className="gridItem__button">
                    <button className="gridButton">
                        <img src={ArrowRight} alt="arrow" />
                    </button>
                </div>
            </div>
        </>
    )
}
