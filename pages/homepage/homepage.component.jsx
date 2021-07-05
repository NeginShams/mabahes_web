import React from 'react';

import { HomePageContainer } from './homepage.styles';
import Slideshow from '../../components/slideshow/slideshow.component';
import Directory from '../../components/directory/directory.component';
import SimpleImageSlider from "react-simple-image-slider";

const HomePage = () => (
  <HomePageContainer>
    
   <Slideshow />
    <h2>رویداد های اخیر</h2>
    <Directory/>
  </HomePageContainer>
);

export default HomePage;