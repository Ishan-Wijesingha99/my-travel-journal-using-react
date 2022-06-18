import React from 'react';
import '../index.css'
import { SingleCardRender } from './singleCard';

const arrayOfCardObjects = [
    
    {
        id: 1,
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        image: "card1.png"
    },

    {
        id: 2,
        title: "Sydney Opera House",
        location: "Australia",
        googleMapsUrl: "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967",
        startDate: "27 May, 2021",
        endDate: "8 Jun, 2021",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        image: "card2.png"
    },

    {
        id: 3,
        title: "Geirangerfjord",
        location: "Norway",
        googleMapsUrl: "https://www.google.com/maps/place/Geirangerfjord/@62.1047779,6.9351325,11z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        image: "card3.png"
    },
]


export const CardElementArray = arrayOfCardObjects.map(function(object) {
    return (
        <SingleCardRender 
            key={object.id}
            {...object}
            img={`images/${object.image}`}
        />
    )
})