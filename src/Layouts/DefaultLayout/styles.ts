import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90%;
  height: calc(100vh - 1rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 22rem;
  }
`
