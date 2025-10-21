import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding: 64px 0 90px;
  
  @media(min-width: 768px) {
    padding: 100px 0 140px;
  }
  
  @media(min-width: 1440px) {
    padding: 180px 0 220px;
  }
`;

export const ImageContainerStyled = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 6px;

  @media(min-width: 1024px) {
    width: calc(50% - 16px);
  }

  .tags {
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
    margin-right: 12px;
    margin-bottom: 16px;
  }
  
  a {
    gap: 2px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gray);
    text-transform: lowercase;
    
    @media(min-width: 768px) {
      font-size: 14px;
      min-width: 17%;
    }
  
    svg {
      margin-left: 0 !important;
      path {
        stroke: var(--gray);
      }
    }
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  min-height: 150px;
  object-fit: cover;

  &:hover {
    ~ div {
      transform: translateY(0%);
    }
  }
  
  @media (min-width: 768px) {
    min-height: 350px;
    max-height: 600px;  
  }
`;

export const ImageDescriptionStyled = styled.div`
  inset: 0;
  padding: 16px;
  position: absolute;
  transform: translateY(100%);
  transition: transform .3s ease;
  background: var(--bg-translucent-medium);
  
  gap: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 768px) {
    gap: 4px;
    top: auto;
    flex-direction: row;
    justify-content: space-between;
    background: var(--bg-translucent-light);
  }

  &:hover {
    transform: translateY(0%);
  }
`;

export const CarouselListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;
  margin-top: 44px;
`;