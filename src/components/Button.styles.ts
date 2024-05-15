import styled, {css} from 'styled-components'

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariantColor;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    height: 40px;
    width: 100px;

    ${props => {
        return css`
        background-color: ${buttonVariants[props.variant]};
        `
    }}
`;