import styled from 'styled-components';

const StyledMessageChannel = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    min-width: 100%;
    background: ${({ theme }) => theme.bgColors.group2};
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    justify-content: space-between;

    .status {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-weight: bold;
      }
      .date {
        font-weight: lighter;
      }
    }

    .img-wrraper {
      overflow: hidden;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  }

  section.messages {
    position: relative;
    width: 100%;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
  }

  footer {
    position: relative;
    min-width: 100%;
    background: ${({ theme }) => theme.bgColors.group2};
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    input {
      width: 90%;
      padding: 5px;
      outline: 0;
      border: 0;
    }
  }
`;

export default StyledMessageChannel;
