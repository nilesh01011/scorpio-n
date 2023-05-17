import React from 'react'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { useRouter } from 'react'

function Buttons({ title, outline, links, cardsItems, setWidth, handlePoppupClick }) {
    const urlLinks = links ? links : '';

    // const router = useHistory();

    const handleClick = () => {
        if (urlLinks) {
            // router.push(urlLinks)

            // localStorage.setItem("cardsDetails", JSON.stringify(cardsItems))
        }
    }

    const widthSet = `${setWidth + 'px'}`;

    return (
        // ${setWidth ? `w-[${widthSet}]` : 'xl:w-[150px] md:w-[150px] w-[116px]'}
        <Link to={urlLinks} onClick={() => handleClick()} type='button' className={`md:text-[16px] text-[14px] relative z-[5] capitalize ${setWidth ? `` : 'flex items-center justify-center xl:w-[150px] md:w-[150px] w-[120px]'} h-full before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 ${setWidth ? `before:sm:w-auto before:w-[137px]` : 'before:md:w-[144px] before:w-[120px]'} before:h-[44px] before:border-[1px] ${outline === false ? ' before:border-[#ff3e5b] before:bg-[#ff3e5b]' : 'before:border-white hover:before:bg-[#ff3e5b] hover:before:border-[#ff3e5b]'} before:z-[-1] after:content-[""] after:absolute ${setWidth ? `after:md:-right-[10px] after:-right-[8px]` : 'after:md:right-[-3px] after:right-[-10px]'} after:bottom-0 after:top-0 after:bg-[#ff3e5b] after:w-[2px] after:h-full text-white font-bold`}
            style={{ width: `${setWidth ? widthSet : ''}` }}
        >
            {title}
            <style jsx="true">
                {`
                a::after,
                a:before {
                    transform:skew(-13deg);
                }

            `}
            </style>
        </Link>
    )
}

export default Buttons