import styled from 'styled-components';

interface Props {
  $active: boolean;
}

const StyledChatCard = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  min-height: 90px;
  background: ${({ theme }) => theme.bgColors.group2};
  color: ${({ theme }) => theme.colors.group1};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.group2 : theme.colors.group1};
  background: ${({ $active, theme }) =>
    $active ? theme.bgColors.group1 : theme.bgColors.group2};

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.group2 : theme.colors.group1};
    background: ${({ $active, theme }) =>
      $active ? theme.bgColors.group1 : theme.bgColors.group2};
  }

  .img-wrraper {
    border-radius: 50%;
    overflow: hidden;
    min-width: 70px;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chatInfo {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    min-height: 80%;
    gap: 10px;

    section.top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .name {
      font-weight: bold;
    }

    section.bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .count {
      background: ${({ theme }) => theme.bgColors.group4};
      padding: 1px 7px;
      font-size: 14px;
      font-weight: lighter;
      border-radius: 100px;
      color: ${({ theme }) => theme.colors.group2};
    }
  }
`;

export default StyledChatCard;
