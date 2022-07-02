import MessageBox from 'components/MessageBox';
import { chatsFakeData } from 'helpers/statics';
import Image from 'next/image';
import { BsThreeDotsVertical, BsEmojiSmile } from 'react-icons/bs';
import { GrAttachment } from 'react-icons/gr';
import StyledMessageChannel from './MessageChannel.Styles';

// middle of chate page
const ChatList = () => {
  return (
    <StyledMessageChannel>
      <Image
        src="/fathers_stuff-wallpaper-1920x1200.jpg"
        alt="bg"
        layout="fill"
      />
      <header>
        <div className="status">
          <div className="img-wrraper">
            <Image src="/profiles/10.jpg" alt="name" width={70} height={70} />
          </div>

          <div className="chatInfo">
            <section className="left">
              <p className="name"> name</p>
              <p className="date">online</p>
            </section>
          </div>
        </div>
        <section className="right">
          <BsThreeDotsVertical />
        </section>
      </header>

      <section className="messages">
        {chatsFakeData.map((item) => (
          <MessageBox
            key={item.id}
            msg={item.msg}
            time={item.time}
            sent={item.sent}
            seen={item.seen}
          />
        ))}
      </section>

      <footer>
        <GrAttachment />
        <input placeholder="Type your message..." />
        <BsEmojiSmile />
      </footer>
    </StyledMessageChannel>
  );
};

export default ChatList;
