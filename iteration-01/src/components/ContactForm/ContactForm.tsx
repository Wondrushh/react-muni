import "./contact-form.css";
import { TextInput, TextInputProps } from "../Common/TextInput/TextInput";
import { TextArea, TextAreaProps } from "../Common/TextArea/TextArea";
import { Button } from "../Common/Button/Button";

const textInputs: Array<TextInputProps> = [
  { label: "Your Name", placeholder: "Mike" },
  { label: "Your Surname", placeholder: "Litoris" },
  { label: "Email", placeholder: "mike@litoris.com" },
  { label: "Phone Number", placeholder: "+420 123 456 789" },
];

const testAreas: Array<TextAreaProps> = [
  { label: "What bothers you?", placeholder: "I am having troubles with..." },
];

export const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <h2 className="contact-form__header">Contact Form</h2>
        {textInputs.map((t) => (
          <div className="contact-form__text-input">
            <TextInput label={t.label} placeholder={t.placeholder}></TextInput>
          </div>
        ))}
        {testAreas.map(() => (
          <div className="contact-form__text-area">
            <TextArea
              label="What bothers you?"
              placeholder="I am having troubles with..."
            ></TextArea>
          </div>
        ))}
        <Button type="primary" label="Send message"></Button>
      </div>
    </>
  );
};
