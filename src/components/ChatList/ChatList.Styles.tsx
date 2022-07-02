import styled from 'styled-components';

const StyledChatList = styled.div`
  background: ${({ theme }) => theme.bgColors.group2};
  min-width: 400px;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid #9393932f;

  .head-bar {
    display: flex;
    align-items: center;
    min-height: 40px;
    justify-content: space-between;
    width: 100%;
    padding: 7px;
    box-shadow: 0 8px 18px -6px rgba(0, 0, 0, 0.2);
    z-index: 2;
    position: relative;
  }

  .chats-list {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 5px;
    gap: 5px;
    max-height: calc(100vh - 40px);
  }
`;

export default StyledChatList;
