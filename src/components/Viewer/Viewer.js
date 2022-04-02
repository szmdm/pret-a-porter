import React, { useState } from 'react';
import CarouselPageMan from '../Carousel/Carousel';
import CarouselPageWoman from '../Carousel/CarouselWoman';
import { ViewerTitle, ViewerContainer, } from './viewerStyle';
import { CarouselDataMan } from '../Carousel/CarouselDataMan';
import { CarouselDataWoman } from '../Carousel/CarouselDataWoman';
import { ViewerContext } from '../../Contexts/ViewerContext';


export const ViewerPage = () => {

    const [toggle] = useState(false)


    return (
        <>
            <ViewerTitle>Viewer</ViewerTitle>
            <ViewerContainer>
                <ViewerContext.Provider>
                    {toggle ? <CarouselPageWoman slides={CarouselDataWoman} /> : <CarouselPageMan slides={CarouselDataMan} />}
                </ViewerContext.Provider>

            </ViewerContainer>
        </>
    )
}
