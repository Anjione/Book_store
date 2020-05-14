import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'pháp luật',
          imageUrl: 'https://i.imgur.com/sAZOaDx.jpg',
          id: 1,
          linkUrl:'phapluat'
        },
        {
          title: 'khoa học-công nghệ',
          imageUrl: 'https://i.imgur.com/oRtloWK.jpg',
          id: 2,
          linkUrl:''
        },
        {
          title: 'kĩ năng',
          imageUrl: 'https://i.imgur.com/QyIVPUC.jpg',
          id: 3,
          linkUrl:''
        },
        {
          title: 'văn học',
          imageUrl: 'https://i.imgur.com/aVdDBmI.jpg',
          size: 'large',
          id: 4,
          linkUrl:''
        },
        {
          title: 'thiếu nhi',
          imageUrl: 'https://i.imgur.com/gPMoYm1.jpg',
          size: 'large',
          id: 5,
          linkUrl:''
        }
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