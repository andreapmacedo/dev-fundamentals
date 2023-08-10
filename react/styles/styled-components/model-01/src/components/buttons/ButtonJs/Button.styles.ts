import styled, { css } from 'styled-components';

export type ButttonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

interface ButtonContainerProps {
  variant: ButttonVariant
}

const butttonVariants = {
  primary: "blue",
  secondary: "orange",
  danger: "red",
  success: "green",
  warning: "yellow"
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${props => {
    return css`background-color: ${butttonVariants[props.variant]};`
  }}
`;

// defaul
// export const ButtonContainer = styled.button<ButtonContainerProps>`
//   background-color: #fff;
//   border: 1px solid #000;
//   border-radius: 4px;
//   color: #000;
//   cursor: pointer;
//   font-size: 1rem;
//   font-weight: 600;
//   padding: 0.5rem 1rem;
//   transition: all 0.2s ease-in-out;
// `;
