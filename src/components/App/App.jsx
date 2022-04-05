import { Container, Wrap } from './App.styled';
import { SocialProfile } from '../../components/SocialProfile/SocialProfile';
import user from '../../social-profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import stats from '../../statistics/data.json';
import { FriendsList } from '../Friends/Friends';
import friends from '../../friend-list/friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../../transaction-history/transactions.json';

export const App = () => {
  return (
    <Container>
      <Wrap>
        <SocialProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics title="Upload stats" stats={stats} />
        {/* <Statistics stats={stats} /> */}
        <FriendsList friends={friends} />
      </Wrap>

      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
