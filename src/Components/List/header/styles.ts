import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

interface AsideProps {
  variant: 'blue' | 'purple';
}

export const AsideContainer = styled.aside<AsideProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;

  color: ${props =>
    props.variant === 'blue'
      ? props.theme['blue-300']
      : props.theme['purple-300']};
`;

export const SpanContainer = styled.span`
  padding: 2px 8px;
  border-radius: 16px;
  font-size: 0.75rem;
  color: ${props => props.theme['gray-200']};
  background-color: ${props => props.theme['gray-400']};
`;
