import React, {  } from 'react';
import { OutfitTitle, OutfitContainerRows, OutfitContainer } from './outfitStyle';
import { JacketComp } from './Jacket'
import { JerseyComp } from './Jersey';
import { TrousersComp } from './Trousers';
import { ShoesComp } from './Shoes';



const OutfitPage = ({name, country, condition, tempC, pressure, humidity, wind}) => {

   
    
    return (
        <>
            <OutfitTitle>Outfit</OutfitTitle>

            <OutfitContainer>
                <OutfitContainerRows>
                    <JacketComp tempC={tempC} />
                </OutfitContainerRows>
                <OutfitContainerRows>
                    <JerseyComp tempC={tempC} />
                </OutfitContainerRows>
                <OutfitContainerRows>
                    <TrousersComp tempC={tempC} />
                </OutfitContainerRows>
                <OutfitContainerRows>
                    <ShoesComp tempC={tempC} />
                </OutfitContainerRows>
            </OutfitContainer>
            

        </>

    )
}

export default OutfitPage