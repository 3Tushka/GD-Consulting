import "./buttonLarge.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

type ButtonLargeProps = {
    text: string,
}

export const ButtonLarge = (props: ButtonLargeProps) => {
    return (
        <button className="buttonLarge">
            {props.text} <ArrowRightOutlined />
        </button>
    )
}