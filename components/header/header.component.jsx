import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
  } from './header.styles';

import './header.styles.scss';



export const Header = ({hidden}) =>(
    <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      {/* <OptionLink className='covid' to='/covid'>کرونا ویروس</OptionLink> */}
      <OptionLink to='/reserve'>ورود/ عضویت</OptionLink>
      <OptionLink to='/contact'>تماس با ما</OptionLink>
      {/* <OptionLink to='/about'>درباره ی پزشک</OptionLink>
      <OptionLink to='/aboutp1'>درباره ی بیمار</OptionLink> */}
    </OptionsContainer>
  
  </HeaderContainer>
);
