import Image from 'next/image';
import StyledChatCard from './ChatCard.styles';

interface ChatCardInterface {
  img: string;
  name: string;
  lastMessge: string;
  count: number;
  isSelected: boolean;
  date: string;
  onClick: () => void;
}

// chat card for users in chat list (right section of chat page)

const ChatCard = (props: ChatCardInterface) => {
  const { img, name, lastMessge, count, date, isSelected, onClick } = props;

  return (
    <StyledChatCard onClick={onClick} $active={isSelected}>
      <div className="img-wrraper">
        <Image src={img} alt={name} width={70} height={70} />
      </div>

      <div className="chatInfo">
        <section className="top">
          <p className="name">{name}</p>
          <p className="date">{date}</p>
        </section>
        <section className="bottom">
          <p className="message">{lastMessge}</p>
          {Boolean(count) && <p className="count">{count}</p>}
        </section>
      </div>
    </StyledChatCard>
  );
};

export default ChatCard;
