import React from 'react';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body, } from './styles';
import SideList from '../SideList';
import FollowSugestionList from '../FollowSugestionList';
import NewsList from '../NewsList';
import StickyBox from 'react-sticky-box'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter..." />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <SideList
          title="Talvez você curta"
          elements={ [
            <FollowSugestionList
            name="Gabriela Prioli"
            email="@musa_liberal"
            />,
            <FollowSugestionList
            name="Elon Musk"
            email="@twitter_ceo"
            />,
            <FollowSugestionList
            name="Alexandre de Moraes"
            email="@stf_is_gay"
            />
          ] }
          />

          <SideList
          title="Talvez você curta"
          elements={ [
            <NewsList/>,
            <NewsList/>,
            <NewsList/>
          ] }
          />
          <SideList
          title="Talvez você curta"
          elements={ [
            <NewsList/>,
            <NewsList/>,
            <NewsList/>
          ] }
          />
          <SideList
          title="Talvez você curta"
          elements={ [
            <NewsList/>,
            <NewsList/>,
            <NewsList/>
          ] }
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;