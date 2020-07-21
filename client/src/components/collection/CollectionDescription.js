import React from 'react';
import styled from 'styled-components';
import { AuthConsumer } from '../../providers/AuthProvider';


const CollectionDescription = () => (
  <AuthConsumer>
    { values => (
      <TopBox>
        <BannerRight>
          <BannerRightTop>
          <UserAvatar>
            {values.user.image}
          </UserAvatar>
          <BannerRightContents>
            <CollectionTitle>
              {/* {values.collection.title} */}
            </CollectionTitle>
            <CreatorName>
              {values.user.first_name} {values.user.last_name}
            </CreatorName>
            <CollectionBio>
              {/* {values.collection.description} */}
            </CollectionBio>
          </BannerRightContents>
          </BannerRightTop>
        </BannerRight>
      </TopBox>
    )}
  </AuthConsumer>
)





const BannerRightTop = styled.div`
  display: flex;
`

const BannerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-left: 5rem;
`

const BannerRightContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  margin-left: 10rem;
`

const TopBox = styled.div`
  width: 100%;
  height: 429px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`;

const CollectionBio = styled.div`

`

const CollectionTitle = styled.div`

`
const CreatorName = styled.div`

`

const UserAvatar = styled.div`
  width: 186px;
  height: 186px;
  flex-shrink: 0;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://s3-alpha-sig.figma.com/img/ec66/6407/9e9f7a7ff4ae4cd1ece6422aab9a5377?Expires=1594598400&Signature=V-PNeXDpn62x6xlJcsTX1hYnIEbnfWD8Y1lApqwAb0SKUUE6eAmUjEW8QPrI7cRZJ10N8LJYtw-01vD~fIgPyEKMoigjrliLDsTEour3oA6oJRay0OvT00r3ez9m5s2ka1GgwOKdBcIe5qBHzPHkiJ1NzF~p262Tfzn4OZFSHXyMxvebTyJRXHsQhM2LiFTTrDCPttv8SROOKmKDkz7Yth05vYAE9NaUUqdHJydk9p1NDXLSaBA0dnqQDrsuETVzqFf0~4LSjV5xme4TbYbwpOfEtNtcPWdY7pov6ww1pZ7gZyGk0xWIXEhcXjS0kcfhpzD-jXIFHt3hgF5RMrMojA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
`;
export default CollectionDescription;