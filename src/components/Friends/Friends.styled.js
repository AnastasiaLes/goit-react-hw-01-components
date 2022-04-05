import styled from '@emotion/styled';

export const Friends = styled.ul`
  /* background-color: #fff; */
  gap: 20px;
`;

export const FriendElement = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 2px #888888;
  gap: 20px;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 15px;
`;

export const FriendsImg = styled.img``;

// const setBgColor = props =>
//     props.isOnline ? 'green' : 'red';

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;

export const FriendName = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin-right: 50px;
`;
