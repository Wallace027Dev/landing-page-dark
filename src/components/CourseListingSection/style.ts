import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.background.gradient};
  padding: 60px 20px;
  text-align: center;


  button{
    margin-top:20px;
  }
    
  @media (max-width: 425px) {
    padding: 36px 8px;
  }
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div + a {
    margin-top: 36px;
  }
`;

export const CourseListingTitle = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 2.1rem;
    }

    p {
      margin-bottom: 24px;
    }
  }
`;

export const CourseTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;

  span {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
  }

  span.active::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.blues.medium};
    bottom: -23px;
    left: 0;
  }

  @media (max-width: 768px) {
    gap: 12px;

    span {
      font-size: 1rem;
    }

    span.active::after {
      bottom: -5px;
      height: 3px;
    }
  }

  @media (max-width: 425px) {
    padding: 4px 8px;
  }
`;

export const TabLine = styled.div`
  width: 100%;
  max-width: 790px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 30px;
 

  @media (max-width: 768px) {
    display: none;
  }
`;
