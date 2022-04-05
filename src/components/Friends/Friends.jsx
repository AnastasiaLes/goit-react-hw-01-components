import PropTypes from 'prop-types';
import {
  Friends,
  FriendElement,
  FriendsImg,
  FriendName,
  FriendStatus,
} from '../Friends/Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendElement key={friend.id}>
          <FriendStatus status={friend.isOnline}></FriendStatus>
          <FriendsImg src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendElement>
      ))}
    </Friends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
