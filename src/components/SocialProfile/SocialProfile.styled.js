import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: white;
  margin-left: 100px;
  margin-right: 50px;
  width: 300px;
  height: fit-content;
  display: block;
  text-align: center;
  border-radius: 2%;
  box-shadow: 3px 3px 2px #888888;
`;

export const ProfileDescription = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ProfileImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

export const ProfileTag = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: grey;
`;

export const Stats = styled.ul`
  padding-left: 0;
  background-color: #f0f0f0;
  display: grid;
  grid-template-columns: auto auto auto;
`;
export const StatsElement = styled.li`
  padding-top: 16px;
  padding-bottom: 16px;
  color: #787878;
  display: block;
  border: solid 1px #e0e0e0;
`;

export const StatsElementName = styled.span`
  margin-bottom: 5px;
  font-size: 14px;
  display: block;
`;

export const StatsElementValue = styled.span`
  font-weight: 700;
  color: #696969;
  display: block;
`;
