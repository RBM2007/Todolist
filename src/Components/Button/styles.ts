import styled from "styled-components";

export const ButtonTasks = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.25rem;
  padding: 1rem;

  background-color: ${props => props.theme['blue-500']};
  color: ${props => props.theme['gray-100']};

  border: 0;
  border-radius: 8px;
  gap: 0.5rem;
  box-shadow: none;

  line-height: 140%;
  font-weight: bold;
  font-size: 0.875rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme['blue-300']};
  }
`;
