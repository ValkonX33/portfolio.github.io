import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:8103362933">8103362933</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sumukh9036@gmail.com">
            sumukh9036@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ValkonX33">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sumukh-sharma-3167241a1/">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/Valkonx33">
            <AiFillTwitterSquare size="3rem"></AiFillTwitterSquare>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
