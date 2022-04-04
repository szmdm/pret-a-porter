import React, { useState, useContext } from 'react';
import CarouselPageMan from '../Carousel/Carousel';
import CarouselPageWoman from '../Carousel/CarouselWoman';
import { ViewerTitle, ViewerContainer, } from './viewerStyle';
import { CarouselDataMan } from '../Carousel/CarouselDataMan';
import { CarouselDataWoman } from '../Carousel/CarouselDataWoman';
import { ViewerContext } from '../../Contexts/ViewerContext';
import { GenderContext } from '../../pages/Home';

export const ViewerPage = () => {

    
    const gender = useContext(GenderContext);
    console.log(gender);

    return (
        <>
            <ViewerTitle>Viewer</ViewerTitle>
            <ViewerContainer>
                <ViewerContext.Provider>
                    {gender === 'female' ? <CarouselPageWoman slides={CarouselDataWoman} /> : <CarouselPageMan slides={CarouselDataMan} />}
                </ViewerContext.Provider>

            </ViewerContainer>
        </>
    )
}
