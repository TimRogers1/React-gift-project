

import React from 'react';
import Tickbox from './Sidebar/Tickbox';
import Price from './Sidebar/Price'

const GiftCardFilter = (props) => {
    return (
        <div>
            <Tickbox category={props.category} selected={props.selected}/>
            <Price/>
        </div>
    )
}

export default GiftCardFilter
