import styled from 'styled-components';

export const TagStyled = styled.div`
  width: 100%;
  flex: 1 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  padding: 6px 20px;
  border-radius: 20px;
  border: solid 1px var(--gray);
  
  p {
    font-size: 12px;
    color: var(--gray);
  }
  

  @media(min-width: 768px) {
    flex: none;
    
    p {
      font-size: 14px;
    }
  }
  
  @media(min-width: 992px) {
    width: max-content;
  }
`;