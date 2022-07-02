import styled from 'styled-components';

const StyledMenuBtn = styled.div`
  height: 2px;
  width: 30px;
  background: ${({ theme }) => theme.bgColors.group9};

  border-radius: 20px;
  position: relative;
  margin: auto;

  &::after,
  &::before {
    content: '';
    height: 2px;
    width: 30px;
    background: ${({ theme }) => theme.bgColors.group9};

    border-radius: 20px;
    position: absolute;
  }

  &::after {
    transform: translateY(-7px);
  }
  &::before {
    transform: translateY(7px);
  }
`;

const StyledBtnWrapper = styled.div`
  min-height: 45px;
  min-width: 45px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.bgColors.group8};
  }
`;

export { StyledMenuBtn, StyledBtnWrapper };
