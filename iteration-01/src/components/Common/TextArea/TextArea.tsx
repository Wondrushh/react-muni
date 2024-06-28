import "./text-area.css";

export interface TextAreaProps {
    label?: string;
    placeholder?: string;
}

export const TextArea = ({ ...props }: TextAreaProps) => {
    return (<>
        <p>{props.label}</p>
        <textarea className="text-area" placeholder={props.placeholder}>
        </textarea>
    </>);
};
