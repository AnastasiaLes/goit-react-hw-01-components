import { Container } from './App.styled';
import { SocialProfile } from '../../components/SocialProfile/SocialProfile';
import user from '../../social-profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import stats from '../../statistics/data.json';
import { FriendsList } from '../Friends/Friends';
import friends from '../../friend-list/friends.json';

export const App = () => {
  return (
    <Container>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics key={stats.id} stats={stats} />
      <FriendsList key={friends.id} friends={friends} />
    </Container>
  );
};
