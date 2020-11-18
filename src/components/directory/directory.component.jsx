import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'

class Directory extends React.Component{
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'ever greens',
                    imageUrl: 'https://www.pexels.com/photo/photo-of-green-leaves-3571551/',
                    id: 1,
                    linkUrl: 'shop/evergreens'
                },
                {
                    title: 'plants with flowers',
                    imageUrl: 'https://www.pexels.com/photo/fresh-flowers-in-glass-jar-at-sunlight-5764075/',
                    id: 2,
                    linkUrl: 'shop/flowers'
                },
                {
                    title: 'exotics',
                    imageUrl: 'https://unsplash.com/photos/O1YwZvJNHRw',
                    id: 3,
                    linkUrl: 'shop/exotics'
                },
                {
                    title: 'indoor plants',
                    imageUrl: 'https://www.pexels.com/photo/potted-green-indoor-plants-3076899/',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/indoor'
                },
                {
                    title: 'outdoor plants',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/outdoor'
                }
            ]
        };
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;