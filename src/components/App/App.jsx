import { Container } from './App.styled';
import { SocialProfile } from '../../components/SocialProfile/SocialProfile';
import user from '../../social-profile/user.json';

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
    </Container>
  );
};
