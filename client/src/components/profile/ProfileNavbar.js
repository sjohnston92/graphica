import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileNavbar = ({ changeTab, isCurrentUser, currentTab }) => {
  const [ recentColor, setRecentColor ] = useState("black")
  const [ collectionsColor, setCollectionsColor ] = useState("black")
  const [ settingsColor, setSettingsColor ] = useState("black")

  useEffect(() => {
    if (currentTab === "recent"){
      setRecentColor("#0099BA")
      setSettingsColor("black")
      setCollectionsColor("black")
    } else if (currentTab === "collections"){
      setCollectionsColor("#0099BA")
      setRecentColor("black")
      setSettingsColor("black")
    } else if (currentTab === "settings"){
      setSettingsColor("#0099BA")
      setRecentColor("black")
      setCollectionsColor("black")
    }
  }, [currentTab])

  return(
    <Wrapper>
      <Flex>
        <RecentDiv color={recentColor} onClick={() => changeTab("recent")}>
          recent
        </RecentDiv>
        <CollectionDiv color={collectionsColor} onClick={() => changeTab("collections")}>
          collection
        </CollectionDiv>
        { isCurrentUser &&
          <SettingsDiv color={settingsColor} onClick={() => changeTab("settings")}> 
            settings
          </SettingsDiv>
        }
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-weight: 500;
`

const Flex = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 5rem;
`

const RecentDiv = styled.div`
  color: ${props => props.color};
  margin-right: 3rem;
  cursor: pointer;
`

const CollectionDiv = styled.div`
  color: ${props => props.color};
  margin-right: 3rem;
  cursor: pointer;
`

const SettingsDiv = styled.div`
  color: ${props => props.color};
  margin-right: 3rem;
  cursor: pointer;
`





export default ProfileNavbar;