import MessageChannel from 'components/MessageChannel';
import ChatList from 'components/ChatList';
import StyledHomePage from './HomePage.styles';

// main component for displaying chat page
const HomePage = () => {
  return (
    <StyledHomePage>
      <ChatList />
      <MessageChannel />
    </StyledHomePage>
  );
};

export default HomePage;
