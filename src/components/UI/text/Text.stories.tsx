import { Meta, StoryObj } from "@storybook/react"

import Text, { TextProps } from "@UI/text"

export default {
    title: "UI/Text",
    component: Text,
    tags: ["autodocs"]
} as Meta<typeof Text>;

interface StoryProps {
    variants: TextProps["variant"][]
}

type Story = StoryObj<StoryProps>;


export const Large: Story = {
    render: ({ variants }: StoryProps) => {
        return (
            <>
                {
                    variants.map((variant) => (
                        <Text variant={variant}>
                            {variant}
                        </Text>
                    )
                    )
                }
            </>
        )
    },
    args: {
        variants: [
            "large/light",
            "large/normal",
            "large/semibold",
            "large/bold"
        ],
    },
};

export const Medium: Story = {
    render: ({ variants }: StoryProps) => {
        return (
            <>
                {
                    variants.map((variant) => (
                        <Text variant={variant}>
                            {variant}
                        </Text>
                    )
                    )
                }
            </>
        )
    },
    args: {
        variants: [
            "medium/light",
            "medium/normal",
            "medium/semibold",
            "medium/bold"
        ],
    },
};
export const Small: Story = {
    render: ({ variants }: StoryProps) => {
        return (
            <>
                {
                    variants.map((variant) => (
                        <Text variant={variant}>
                            {variant}
                        </Text>
                    )
                    )
                }
            </>
        )
    },
    args: {
        variants: [
            "small/light",
            "small/normal",
            "small/semibold",
            "small/bold"
        ],
    },
};