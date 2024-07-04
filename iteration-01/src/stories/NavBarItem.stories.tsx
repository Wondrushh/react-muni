import type { Meta, StoryObj } from "@storybook/react";

import { NavBarItem } from "../components/Navbar/NavBarItem";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const meta: Meta<typeof NavBarItem> = {
    title: "NavBarSubcomponents/NavBarItem",
    component: NavBarItem,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        }
    }
};
type Story = StoryObj<typeof NavBarItem>;

export default meta;


export const NavBarItemDesktop: Story = {
    args: {
        label: "Label",
    },
    decorators: [
        (Story) => (
            <>
                <div style={{
                    width: "1440px",
                    height: "1024px",
                    backgroundColor: "white",
                }}>
                <Story/>
                </div>
            </>
        )
    ]
};

export const NavBarItemMobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: "iphone14promax",
        },
    },
    args: {
        label: "Label",
    },
    decorators: [
        (Story) => (
            <>
                <div style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor:"white",
                }}>
                <Story/>
                </div>
            </>
        )
    ]
};