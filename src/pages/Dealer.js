import React, { useEffect } from 'react'
import { carsDetails } from '../api/CarData';
import Badge from '../components/Badge';
import Buttons from '../components/Buttons';
import DealerSelect from '../components/DealerSelect';
import DeskTopNavbar from '../components/navbar/DeskTopNavbar'
import SelectStateCity from '../components/SelectStateCity'
import Steppers from '../components/Steppers'

function Dealer() {
    useEffect(() => {
        document.body.style.backgroundColor = "#212121"
        window.scrollTo(0, 0);
    });

    return (
        <>
            <main className='w-full h-full text-white'>
                {/* navbar */}
                <DeskTopNavbar />
                {/* badges */}
                {/* <div className='w-full mb-[16px]'>
                    <Badge />
                </div> */}

                {/* contents */}
                <div className='w-full h-full 1x1:px-0 px-[15px] max-w-[1264px] mx-auto'>
                    {/* Steps */}
                    <div className='flex items-center justify-center mt-[12px]'>
                        <Steppers Steps={2} />
                    </div>

                    {/* main contents */}
                    <div className='w-full h-full'>
                        {/* select state city */}
                        {/* <div className='w-full ml-auto xl:mt-0 mt-[36px] xl:block hidden xl:pr-[20px]'>
                            <SelectStateCity />
                        </div> */}

                        {/* contents */}

                        <div className='w-full h-full'>
                            <DealerSelect />
                        </div>
                    </div>
                </div>

                {/* footer */}
                {/* see disclaimers */}
                <div id='footer' className="fixed bottom-0 left-0 right-0 h-max w-full mt-0 bg-[#313131]">
                    {/* main footer */}
                    <div className="w-full h-[70px] px-[35px] flex items-center justify-center max-w-[1280px] mx-auto">
                        <div className="h-[44px] flex items-center justify-center gap-8">
                            <Buttons links="/" title="back" outline={true} />
                            <Buttons cardsItems={carsDetails} links="/scorpio-N/details-verification" title="continue" outline={false} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Dealer