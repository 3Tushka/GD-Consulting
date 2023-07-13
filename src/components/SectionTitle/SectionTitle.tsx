import "./sectionTitle.scss";

type SectionTitleProps = {
    text: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className="title">
            <h2 className="title__content">
                {props.text}
            </h2>
        </div>
    )
}