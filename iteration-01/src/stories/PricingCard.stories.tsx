import type { Meta, StoryObj } from "@storybook/react";

import { PricingCard } from "../components/Common/PricingCard/PricingCard";
import {priceOptionsData} from "./assets/priceOptions.ts"

const meta: Meta<typeof PricingCard> = {
    title: "Common/PricingCard",
    component: PricingCard,
};
type Story = StoryObj<typeof PricingCard>;

export default meta;

export const Normal: Story = {
    args: priceOptionsData[0]
};

export const MostPopular: Story = {
    args: priceOptionsData[1] 
};

