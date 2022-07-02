import { useState } from 'react';
import { MenuBtn } from 'components/Buttons/';
import ChatCard from 'components/ChatCard';
import Search from 'components/Search';
import { usersFakeData } from 'helpers/statics';
import StyledChatList from './ChatList.Styles';

const ChatList = () => {
  const [selected, setSelected] = useState(0);

  return (
    <StyledChatList>
      <section className="head-bar">
        <MenuBtn />
        <Search />
      </section>
      <section className="chats-list">
        {usersFakeData.map((item, index) => (
          <ChatCard
            onClick={() => setSelected(index)}
            key={item.name}
            img={item.img}
            name={item.name}
            lastMessge={item.lastMessge}
            count={item.count}
            date={item.date}
            isSelected={selected === index}
          />
        ))}
      </section>
    </StyledChatList>
  );
};

export default ChatList;
