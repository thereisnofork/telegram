import { BsCheck2All } from 'react-icons/bs';
import StyledMessageBox from './MessageBox.Styles';

interface MessageBoxProps {
  msg: string;
  time: string;
  seen: boolean | undefined;
  sent: boolean | undefined;
}

const MessageBox = (props: MessageBoxProps) => {
  const { msg, time, seen, sent } = props;

  return (
    <StyledMessageBox $sent={sent}>
      <div className="msg">{msg}</div>
      <div className="info">
        {Boolean(seen) && <BsCheck2All />}
        <div className="time">{time}</div>
      </div>
    </StyledMessageBox>
  );
};

export default MessageBox;
