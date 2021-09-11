

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GiftCard from './GiftCard';
import GiftCardFilter from './GiftCardFilter';
import { withRouter } from 'react-router';

const GiftCardProducts = (props) => {
    const [giftData, setGiftData] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);


    useEffect(() => {
        console.log('p', props.match.params.category)
        axios.get(
            `http://localhost:3001/${props.match.params.category}`
        )
        .then(res => {
            console.log('res', res)
            setGiftData(res.data)
        }).catch((error) => alert('Error'))
    }, []);


    const filterCards = (data, id) => {
        console.log('props', props)
        if (props.match.params.category === 'books') {
            let authors = []
            for (let el in data) {
                if (data[el] === true) {
                  if (el === 'GregaryDavidRoberts') {
                    authors.push('Gregary David Roberts')
                  } if (el === 'LeeChild') {
                    authors.push('Lee Child')
                  } if (el === 'PhilKnight') {
                    authors.push('Phil Knight')
                  } if (el === 'WilburSmith') {
                    authors.push('Wilbur Smith')
                  }
                } 
            }
            axios.get(
                `http://localhost:3001/${props.match.params.category}`
            )
            .then(res => {
                console.log('res', res)
                const result = res.data.filter((el) => authors.indexOf(el.Author) > -1);
                setGiftData(result)
            }).catch((error) => alert('Error'))
            
         } else if (props.match.params.category === 'fashion') {
            let fashionBrands = []
            for (let el in data) {
                if (data[el] === true) {
                  if (el === 'reiss') {
                    fashionBrands.push('Reiss')
                  } if (el == 'jag') {
                    fashionBrands.push('Jag')
                  } if (el === 'levi') {
                    fashionBrands.push('Levi')
                  } if (el === 'nike') {
                    fashionBrands.push('Nike')
                  }
                } 
            }
            axios.get(
                `http://localhost:3001/${props.match.params.category}`
            )
            .then(res => {
                console.log('res', res)
                const result = res.data.filter((el) => fashionBrands.indexOf(el.Brand) > -1);
                setGiftData(result)
            }).catch((error) => alert('Error'))
        
        console.log('data in filter cards', data)
    } else {
        let electronicBrands = []
            for (let el in data) {
                if (data[el] === true) {
                  if (el === 'apple') {
                    electronicBrands.push('Apple')
                  } if (el == 'phillips') {
                    electronicBrands.push('Phillips')
                  } if (el === 'kmart') {
                    electronicBrands.push('Kmart')
                  } if (el === 'kogan') {
                    electronicBrands.push('Kogan')
                  }
                } 
            }
            axios.get(
                `http://localhost:3001/${props.match.params.category}`
            )
            .then(res => {
                console.log('res', res)
                const result = res.data.filter((el) => electronicBrands.indexOf(el.Brand) > -1);
                setGiftData(result)
            }).catch((error) => alert('Error'))
        
    }
}

    


    console.log(props);
    return (
        <div className="row" style={{'display': 'flex', }}>
            <div className="col-md-4" style={{'width': '250px',
    'marginRight': '50px'}}>
                <GiftCardFilter category={props.match.params.category} selected={filterCards}/>
            </div>
            <div className="col-md-8 row" style={{'display': 'flex', 'marginTop' : '10px', 'flexWrap': 'wrap',
    'justifyContent': 'spaceEvenly'}}>
            {giftData.map((gift) => {
                return (
                    <div style={{marginRight: '30px'}}>
                            <GiftCard giftId={gift.id} indicator="giftCardProduct" title={gift.title} description={gift.description} name={gift.name} imageUrl={gift.image} brand={gift.brand} category={props.match.params.category}/>
                            
                    </div>
                )
            })}
            
        </div>

        </div>
        
    )
        }

export default withRouter(GiftCardProducts);




