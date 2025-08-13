import styled from "styled-components";

export const ContentInfo = styled.section`
  max-width: 46rem;
  width: 100%;
  margin: 0 auto;
`;

export const TaskInfoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 0.5rem;

  
  input,
  button {
    transform: translateY(-50%);
    margin-bottom: 2.3125rem;
  }
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

 
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;


export const TaskButton = styled.button`

  display: flex;
  align-items: center;
  gap: 0.1rem;
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme['white']};
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme['blue-300']};
  }
`;

