import { type Pricing } from "../../types/pricing";
import { PricingCard } from "../Common/PricingCard/PricingCard";
import "./pricing-section.css";

interface PricingSectionProps {
  options: Pricing[];
}

export const PricingSection = ({ ...props }: PricingSectionProps) => {
  return (
    <>
      <section className="pricing-section">
        <h1 className="pricing-section__header">Pricing plans for teams of all sizes</h1>
        <p className="pricing-section__description">
          These pricing plans are top notch! I would recommend them even to my
          mom!1!
        </p>
              <div className="pricing-section__card-container">
              {props.options.map((props) => (<PricingCard className={`pricing-section__card ${props.isMostPopular ? "pricing-section__card--most-popular" : ""}`} {...props} />))}
        </div>
      </section>
    </>
  );
};
