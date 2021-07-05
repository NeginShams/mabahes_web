import React from 'react';

import MenuItem from '../Menuitem/menuitem.component';
import a3 from './images/3.jpg';
import a4 from './images/4.jpeg';
import a6 from './images/6.jpg';

import a7 from './images/7.jpg';


import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'ویروس کرونا',
          imageUrl:a3,
          id: 1,
          linkUrl: 'services'
        },
        {
          title: 'عصب و صورت',
          imageUrl:a4,
          id: 2,
          linkUrl: 'services'
        },
        {
          title: 'مادران باردار',
          imageUrl:a6,
          id: 3,
          linkUrl: 'services'
        },
        {
          title: 'پسماند پزشکی',
          imageUrl: a7,
          id: 4,
          linkUrl: 'services'
        },
        // {
        //   title: 'جراحی',
        //   imageUrl: jarrahi,
        //   id: 5,
        //   linkUrl: 'services'
        // }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;