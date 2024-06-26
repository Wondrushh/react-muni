import "./text-input.css";

interface TextInputProps {
    label?: string;
    placeholder?: string;
    initialText?: string;
}

export const TextInput = ({ ...props }: TextInputProps) => {
    return (
        <>
            <p>{props.label}</p> 
            <input className="input" type="text" placeholder={props.placeholder} value={props.initialText} />
        </>
    )
};
