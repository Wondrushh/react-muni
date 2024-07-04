import "./pricing-card.css";
// import { HeroIcon } from "../../../types/icons.ts";
import { CheckIcon } from "@heroicons/react/16/solid";
import { Button } from "../Button/Button";

interface PricingCardProps {
  name: string;
  description: string;
  price: number;
  isMostPopular: boolean;
  pros: Array<string>;
  className?: string;
}

export const PricingCard = ({ ...props }: PricingCardProps) => {
  return (
    <>
      <section
        className={`pricing-card ${
          props.isMostPopular ? "pricing-card--highlighted" : ""
        } ${props.className}`}
      >
        <div className="pricing-card__header">
          <h2>{props.name}</h2>
          {props.isMostPopular ? <div className="pricing-card__most-popular">Most popular</div> : null}
        </div>
        <p>{props.description}</p>
        <h3>
          <span className="pricing-card__price">${props.price}</span> / month
        </h3>
        {props.pros.map((item) => (
          <div className="pricing-card__pros">
            <CheckIcon className="tick-icon" /> {item}
          </div>
        ))}
        <div className="pricing-card__spacer"></div>
        <div className="pricing-card__button">
          <Button
            label="Buy plan"
            type={`${props.isMostPopular ? "primary" : "secondary"}`}
          />
        </div>
      </section>
    </>
  );
};
