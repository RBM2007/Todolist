import styled, { css } from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  border-radius: 8px;

  background-color: ${props => props.theme['gray-500']};
  border: 1px solid ${props => props.theme['gray-400']};
`;

export const TaskContainerLabel = styled.label`
  display: flex;
  padding: 3px;
  align-items: center;
  gap: 0.75rem;

  input[type='checkbox'] {
    display: none;
  }
`;

export const CheckBoxContainer = styled.span<{ checked: boolean }>`
  border-radius: 100%;
  height: 1.125rem;
  width: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;

  ${({ checked, theme }) => checked ? css`
    border: 2px solid ${theme['purple-500']};
    background-color: ${theme['purple-500']};

    &:hover {
      border: 2px solid ${theme['purple-300']};
      background-color: ${theme['purple-300']};
    }
  ` : css`
    border: 2px solid ${theme['blue-500']};

    &:hover {
      background-color: rgba(30, 111, 159, 0.2);
    }
  `}
`;

export const ParaContainer = styled.p<{ checked: boolean }>`
  font-size: 0.875rem;
  line-height: 140%;
  user-select: none;
  transition: 0.2s all;

  ${({ checked, theme }) => checked && css`
    text-decoration: line-through;
    color: ${theme['gray-300']};
  `}
`;

export const CheckButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 4px;
  padding: 5px 4px 2px 4px;
  transition: 0.2s background-color;

  svg line,
  svg path {
    transition: 0.2s fill;
  }

  &:hover {
    background-color: ${props => props.theme['gray-400']};
  }

  &:hover svg line,
  &:hover svg path {
    fill: ${props => props.theme['red-300']};
  }
`;
