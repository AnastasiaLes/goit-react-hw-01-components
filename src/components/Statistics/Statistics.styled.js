import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  width: 400px;
  background-color: #fff;
  text-align: center;
  height: 100%;
  border-radius: 2%;
  box-shadow: 3px 3px 2px #888888;
`;

export const StatisticsTitle = styled.h2`
  padding-top: 25px;
  padding-bottom: 40px;
  text-transform: uppercase;
  font-size: 16px;
  color: #696969;
`;
export const StatisticsList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
`;

export const StatisticsElement = styled.li`
  display: block;
  /* border: solid 1px #E0E0E0; */
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${props => {
    switch (props.id) {
      case 'id-1':
        return 'red';
      case 'id-2':
        return 'green';
      case 'id-3':
        return 'blue';
      case 'id-4':
        return 'orange';
      case 'id-5':
        return 'teal';
    }
  }};
  color: #fff;
`;

export const StatisticsElementLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const StatisticsElementPercentage = styled.span`
  display: block;
`;
