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
                    imageUrl: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 1,
                    linkUrl: 'shop/evergreens'
                },
                {
                    title: 'plants with flowers',
                    imageUrl: 'https://images.pexels.com/photos/5764075/pexels-photo-5764075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 2,
                    linkUrl: 'shop/flowers'
                },
                {
                    title: 'exotics',
                    imageUrl: 'https://images.unsplash.com/photo-1561627213-f689b52ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80',
                    id: 3,
                    linkUrl: 'shop/exotics'
                },
                {
                    title: 'indoor plants',
                    imageUrl: 'https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/indoor'
                },
                {
                    title: 'outdoor plants',
                    imageUrl: 'https://images.pexels.com/photos/298246/pexels-photo-298246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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