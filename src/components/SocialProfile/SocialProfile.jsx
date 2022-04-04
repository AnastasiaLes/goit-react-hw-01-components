import PropTypes from 'prop-types';
import { ProfileCard, ProfileDescription, ProfileImage, ProfileName, ProfileTag, Stats, StatsElement, StatsElementName,StatsElementValue } from "./SocialProfile.styled";


export const SocialProfile = ({ username, tag, location, avatar, followers, views, likes }) => {
    // console.log(avatar);
  return (
    <ProfileCard>
        <ProfileDescription>
            <ProfileImage
            src={avatar}
            alt="User avatar"
            className="avatar"
            />
            <ProfileName>{ username }</ProfileName>
            <ProfileTag>@{ tag }</ProfileTag>
            <ProfileTag>{ location }</ProfileTag>
        </ProfileDescription>

        <Stats>
            <StatsElement>
                <StatsElementName>Followers</StatsElementName>
                <StatsElementValue> { followers }</StatsElementValue>
            </StatsElement>
            <StatsElement>
                <StatsElementName>Views</StatsElementName>
                <StatsElementValue> { views }</StatsElementValue>
            </StatsElement>
            <StatsElement>
                <StatsElementName>Likes</StatsElementName>
                <StatsElementValue> { likes }</StatsElementValue>
            </StatsElement>
        </Stats>
    </ProfileCard>
  )
};

SocialProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};