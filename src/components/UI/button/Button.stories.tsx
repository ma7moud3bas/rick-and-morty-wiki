import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "@UI/button"

export default {
    title: "UI/Button",
    component: Button,
    argTypes: {
        fullWidth: {
            type: 'boolean',
        },
    },
} as Meta<ButtonProps>


type Story = StoryObj<ButtonProps>

export const Primary: Story = {
    render: (props: ButtonProps) => {
        return (
            <div>
                <Button {...props}>
                    Button
                </Button>
            </div>
        )
    },
    args: {
        intent: "primary",
        fullWidth: true
    },
}
export const Secondary: Story = {
    render: (props: ButtonProps) => {
        return (
            <div>
                <Button {...props}>
                    Button
                </Button>
            </div>
        )
    },
    args: {
        intent: "secondary",
    }
}

export const Danger: Story = {
    render: (props: ButtonProps) => {
        return (
            <div>
                <Button {...props}>
                    Button
                </Button>
            </div>
        )
    },
    args: {
        intent: "danger",
    }
} 