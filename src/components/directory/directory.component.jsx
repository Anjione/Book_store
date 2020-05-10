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
          id: 1
        },
        {
          title: 'khoa học-công nghệ',
          imageUrl: 'https://i.imgur.com/oRtloWK.jpg',
          id: 2
        },
        {
          title: 'kĩ năng',
          imageUrl: 'https://i.imgur.com/QyIVPUC.jpg',
          id: 3
        },
        {
          title: 'văn học',
          imageUrl: 'https://i.imgur.com/aVdDBmI.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'thiếu nhi',
          imageUrl: 'https://i.imgur.com/gPMoYm1.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
