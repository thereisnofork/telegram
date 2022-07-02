import styled from 'styled-components';

interface Props {
  $sent: boolean | undefined;
}

const StyledMessageBox = styled.div<Props>`
  background: ${({ $sent, theme }) =>
    $sent ? theme.bgColors.group7 : theme.bgColors.group5};
  margin: ${({ $sent }) => ($sent ? '0 auto 0 0' : '0 0 0 auto')};
  padding: 4px 8px;
  border-radius: 7px;

  .info {
    padding-top: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    max-width: 300px;
    font-size: 13px;
    & :last-child {
      color: #6d6d6d;
    }
    & :first-child {
      margin-top: 4px;
      color: #6d6d6d;
    }
  }
`;

export default StyledMessageBox;
