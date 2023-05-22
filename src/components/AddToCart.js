import React, { useEffect, useState } from 'react'
import AccessoriesAdded from './AccessoriesAdded';
import CustomiseQuote from './CustomiseQuote';
import CustomizeBoxs from './CustomizeBoxs';

function AddToCart({ successfull, getSuccessfull }) {

    const [showContents, setShowContents] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = "#212121"
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Customise Your Quote icons
    // const financeIcons =
    //     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25" fill="none">
    //         <path fillRule="evenodd" clipRule="evenodd" d="M10.5603 3.89312L10.074 2.04518L7.15615 3.89312H10.5603ZM11.5702 1.05093L12.159 3.28825L16.88 0.298266C17.6086 -0.163215 18.5757 0.216835 18.7952 1.05093L19.5431 3.89312H21.2254C22.8684 3.89312 24.2004 5.22507 24.2004 6.86812V10.6931H25.9004C26.8393 10.6931 27.6004 11.4542 27.6004 12.3931V15.7931C27.6004 16.732 26.8393 17.4931 25.9004 17.4931H24.2004V21.3181C24.2004 22.9612 22.8684 24.2931 21.2254 24.2931H3.37539C1.73234 24.2931 0.400391 22.9612 0.400391 21.3181V6.86812C0.400391 5.22507 1.73234 3.89312 3.37539 3.89312H3.97889L9.65497 0.298266C10.3836 -0.163215 11.3507 0.216835 11.5702 1.05093ZM17.299 2.04518L17.7853 3.89312H14.3812L17.299 2.04518ZM22.5004 6.86812V10.6931H20.8004C18.9226 10.6931 17.4004 12.2153 17.4004 14.0931C17.4004 15.9709 18.9226 17.4931 20.8004 17.4931H22.5004V21.3181C22.5004 22.0223 21.9296 22.5931 21.2254 22.5931H3.37539C2.67123 22.5931 2.10039 22.0223 2.10039 21.3181V6.86812C2.10039 6.16395 2.67123 5.59312 3.37539 5.59312H21.2254C21.9296 5.59312 22.5004 6.16395 22.5004 6.86812ZM25.9004 12.3931H20.8004C19.8615 12.3931 19.1004 13.1542 19.1004 14.0931C19.1004 15.032 19.8615 15.7931 20.8004 15.7931H25.9004V12.3931ZM20.8004 14.9431C21.2698 14.9431 21.6504 14.5626 21.6504 14.0931C21.6504 13.6237 21.2698 13.2431 20.8004 13.2431C20.3309 13.2431 19.9504 13.6237 19.9504 14.0931C19.9504 14.5626 20.3309 14.9431 20.8004 14.9431Z" fill={`white`} />
    //     </svg>;

    // const accessoriesIcons =
    //     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29" viewBox="0 0 20 29" fill="none">
    //         <path fillRule="evenodd" clipRule="evenodd" d="M13.1017 1.79595L13.381 3.28376L6.61992 3.28376L6.89925 1.79595L13.1017 1.79595ZM15.1463 3.47349C15.2937 4.25823 14.6917 4.98376 13.8932 4.98376H12.8365V6.01046H13.121C14.8415 6.01046 16.2908 7.29569 16.4966 9.00384L17.5617 17.8464C17.6339 18.4455 17.5453 19.0531 17.305 19.6066L16.8152 20.7354C16.7946 20.7828 16.7727 20.8293 16.7495 20.875H18.3802C19.2628 20.875 19.9235 21.634 19.7466 22.4448L18.648 27.4794C18.5152 28.088 17.9441 28.525 17.2816 28.525H3.14419C2.48166 28.525 1.91057 28.088 1.77778 27.4794L0.679187 22.4448C0.502271 21.634 1.16296 20.875 2.0456 20.875H3.25139C3.22822 20.8293 3.20631 20.7828 3.18574 20.7354L2.69586 19.6066C2.45561 19.0531 2.36702 18.4455 2.43919 17.8464L3.50434 9.00384C3.7101 7.29569 5.15944 6.01046 6.87994 6.01046H7.16439V4.98376H6.1077C5.30925 4.98376 4.70726 4.25823 4.85459 3.47349L5.29351 1.13568C5.40671 0.532777 5.93318 0.0959473 6.54662 0.0959473H13.4543C14.0677 0.0959473 14.5942 0.532779 14.7074 1.13568L15.1463 3.47349ZM8.86439 4.98376V6.01046H9.57548H10.0004H11.1365V4.98376H8.86439ZM6.87994 7.71046C6.01969 7.71046 5.29502 8.35308 5.19214 9.20715L4.12699 18.0497C4.0909 18.3493 4.1352 18.653 4.25532 18.9298L4.7452 20.0586C4.88001 20.3692 5.18633 20.5702 5.52493 20.5702H9.57548H10.0004H14.476C14.8146 20.5702 15.1209 20.3692 15.2557 20.0586L15.7456 18.9298C15.8657 18.653 15.91 18.3493 15.8739 18.0497L14.8088 9.20715C14.7059 8.35308 13.9812 7.71046 13.121 7.71046H10.0004H9.57548H6.87994ZM2.61525 22.6186L3.52361 26.7814H16.9022L17.8105 22.6186H2.61525ZM7.51698 10.9183C7.04754 10.9183 6.66698 11.2989 6.66698 11.7683C6.66698 12.2377 7.04754 12.6183 7.51698 12.6183H10.0004L10.0013 12.6183H12.4838C12.9532 12.6183 13.3338 12.2377 13.3338 11.7683C13.3338 11.2989 12.9532 10.9183 12.4838 10.9183H10.0004H10.0003H7.51698ZM6.60037 15.1254C6.13093 15.1254 5.75037 15.506 5.75037 15.9754C5.75037 16.4449 6.13093 16.8254 6.60037 16.8254H9.99939H10.0003H13.4004C13.8698 16.8254 14.2504 16.4449 14.2504 15.9754C14.2504 15.506 13.8698 15.1254 13.4004 15.1254H10.0004H10.0003H6.60037Z" fill={`white`} />
    //     </svg>

    // const filesIcons =
    //     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 22 28" fill="none">
    //         <path fillRule="evenodd" clipRule="evenodd" d="M2.4998 2.10039V25.9004H19.4998V8.90039H14.1873C13.6005 8.90039 13.1248 8.42469 13.1248 7.83789V2.10039H2.4998ZM14.8248 3.15893L18.8721 7.20039H14.8248V3.15893ZM0.799805 1.46289C0.799805 0.876087 1.2755 0.400391 1.8623 0.400391H14.0285C14.3101 0.400391 14.5801 0.512123 14.7793 0.711052L20.8881 6.81107C21.0877 7.01037 21.1998 7.28085 21.1998 7.56291V26.5379C21.1998 27.1247 20.7241 27.6004 20.1373 27.6004H1.8623C1.2755 27.6004 0.799805 27.1247 0.799805 26.5379V1.46289ZM5.0498 12.3004C4.58036 12.3004 4.1998 12.6809 4.1998 13.1504C4.1998 13.6198 4.58036 14.0004 5.0498 14.0004H16.9498C17.4192 14.0004 17.7998 13.6198 17.7998 13.1504C17.7998 12.6809 17.4192 12.3004 16.9498 12.3004H5.0498ZM4.1998 17.4004C4.1998 16.9309 4.58036 16.5504 5.0498 16.5504H16.9498C17.4192 16.5504 17.7998 16.9309 17.7998 17.4004C17.7998 17.8698 17.4192 18.2504 16.9498 18.2504H5.0498C4.58036 18.2504 4.1998 17.8698 4.1998 17.4004ZM5.0498 20.8004C4.58036 20.8004 4.1998 21.1809 4.1998 21.6504C4.1998 22.1198 4.58036 22.5004 5.0498 22.5004H16.9498C17.4192 22.5004 17.7998 22.1198 17.7998 21.6504C17.7998 21.1809 17.4192 20.8004 16.9498 20.8004H5.0498Z" fill={`white`} />
    //     </svg>

    // const addOns = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
    //     <path fillRule="evenodd" clipRule="evenodd" d="M15.7004 0.949219C16.1698 0.949219 16.5504 1.32978 16.5504 1.79922V4.77422H19.5254C19.9948 4.77422 20.3754 5.15478 20.3754 5.62422C20.3754 6.09366 19.9948 6.47422 19.5254 6.47422H16.5504V9.44922C16.5504 9.91866 16.1698 10.2992 15.7004 10.2992C15.2309 10.2992 14.8504 9.91866 14.8504 9.44922V6.47422H11.8754C11.4059 6.47422 11.0254 6.09366 11.0254 5.62422C11.0254 5.15478 11.4059 4.77422 11.8754 4.77422H14.8504V1.79922C14.8504 1.32978 15.2309 0.949219 15.7004 0.949219ZM25.1563 11.3441C25.4958 11.1639 25.9171 11.2904 26.1012 11.6279C26.2469 11.895 26.2039 12.2256 25.9946 12.4465L19.941 18.8364C19.5007 19.3012 18.9508 19.648 18.3416 19.8451L13.9199 21.2756C13.0397 21.5604 12.0861 21.5165 11.2357 21.1521L8.86631 20.1366C8.44309 19.9552 7.98743 19.8617 7.52698 19.8617H5.50039V13.0617H10.3309C10.395 13.0617 10.4584 13.0746 10.5174 13.0996L14.5085 14.7881C14.7726 14.8998 14.8926 15.2073 14.7739 15.4684C14.6694 15.6982 14.4126 15.8169 14.1699 15.7476L9.3464 14.3694C8.89502 14.2405 8.42456 14.5018 8.2956 14.9532C8.16663 15.4046 8.428 15.875 8.87938 16.004L13.7029 17.3822C14.755 17.6828 15.8687 17.168 16.3215 16.1719C16.3483 16.113 16.3722 16.0535 16.3935 15.9937L25.1563 11.3441ZM7.52698 21.5617H5.50039V22.6242C5.50039 23.0937 5.11983 23.4742 4.65039 23.4742H0.400391V9.87422H4.65039C5.11983 9.87422 5.50039 10.2548 5.50039 10.7242V11.3617H10.3309C10.6225 11.3617 10.9112 11.4203 11.1798 11.5339L15.1709 13.2224C15.6341 13.4184 15.9951 13.7534 16.2266 14.1577L24.3595 9.84236C25.5216 9.2257 26.9636 9.65884 27.5936 10.8138C28.0923 11.7281 27.945 12.8596 27.2287 13.6157L21.1751 20.0056C20.5391 20.6769 19.7448 21.1779 18.8649 21.4625L14.4432 22.8931C13.1718 23.3044 11.7943 23.241 10.5661 22.7146L8.19665 21.6992C7.98504 21.6085 7.75721 21.5617 7.52698 21.5617ZM3.80039 11.5742H2.10039V21.7742H3.80039V11.5742Z" fill={`white`} />
    // </svg>

    // const exclusiveBenefits = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
    //     <path fillRule="evenodd" clipRule="evenodd" d="M10.6604 9.97843C10.6035 10.1535 10.4403 10.2721 10.2562 10.2721H0.756869C0.345162 10.2721 0.173982 10.7989 0.507061 11.0409L8.19216 16.6245C8.34111 16.7327 8.40344 16.9245 8.34655 17.0996L5.4111 26.134C5.28388 26.5256 5.73203 26.8512 6.06511 26.6092L13.7502 21.0256C13.8992 20.9174 14.1009 20.9174 14.2498 21.0256L21.9349 26.6092C22.268 26.8512 22.7162 26.5256 22.5889 26.134L19.6535 17.0996C19.5966 16.9245 19.6589 16.7327 19.8079 16.6245L27.493 11.0409C27.8261 10.7989 27.6549 10.2721 27.2432 10.2721H17.7439C17.5597 10.2721 17.3966 10.1535 17.3397 9.97843L14.4042 0.944058C14.277 0.552501 13.723 0.552502 13.5958 0.944059L10.6604 9.97843ZM14 5.20138L12.2772 10.5038C11.9927 11.3793 11.1768 11.9721 10.2562 11.9721H4.68092L9.19139 15.2492C9.93618 15.7903 10.2478 16.7494 9.96334 17.625L8.24049 22.9274L12.751 19.6503C13.4958 19.1092 14.5043 19.1092 15.2491 19.6503L19.7595 22.9274L18.0367 17.625C17.7522 16.7494 18.0639 15.7903 18.8086 15.2492L23.3191 11.9721H17.7439C16.8233 11.9721 16.0073 11.3793 15.7229 10.5038L14 5.20138Z" fill={`white`} />
    // </svg>

    // activeAccessories is there or not

    const [isAccessories, setIsAccessories] = useState(false);
    const [isMerchandise, setIsMerchandise] = useState(false);
    const [isLoans, setIsLoans] = useState(false);
    const [isInsurance, setIsInsurance] = useState(false);
    const [isAddOns, setIsAddOns] = useState(false)

    useEffect(() => {
        const accessories = localStorage.getItem("Accessories");

        if (accessories === 'true') {
            setIsAccessories(true);
        }

        const merchandise = localStorage.getItem("Merchandise");

        if (merchandise === 'true') {
            setIsMerchandise(true);
        }

        const addedLoans = localStorage.getItem("Loans");

        if (addedLoans === 'true') {
            setIsLoans(true);
        }

        const insurances = localStorage.getItem("Insurance");

        if (insurances === 'true') {
            setIsInsurance(true);
        }

        const addOns = localStorage.getItem("AddOns");

        if (addOns === 'true') {
            setIsAddOns(true);
        }

    }, []);


    // ======================== new icons ===================

    const accessoriesIcons = <svg width="57" height="85" viewBox="0 0 57 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M36.9183 5.6352L37.7399 10.0111L17.8543 10.0111L18.6759 5.63519L36.9183 5.6352ZM42.932 10.5692C43.3654 12.8772 41.5948 15.0111 39.2464 15.0111H36.1384V18.0308H36.975C42.0353 18.0308 46.2981 21.8109 46.9033 26.8349L50.0361 52.8424C50.2483 54.6045 49.9878 56.3914 49.2811 58.0196L47.8403 61.3394C47.7798 61.4788 47.7154 61.6157 47.6472 61.75H52.4433C55.0393 61.75 56.9825 63.9824 56.4622 66.3671L53.231 81.1748C52.8405 82.9647 51.1608 84.25 49.2122 84.25H7.63158C5.68298 84.25 4.00329 82.9647 3.61271 81.1748L0.381571 66.3671C-0.13877 63.9824 1.80443 61.75 4.40043 61.75H7.94688C7.87871 61.6157 7.8143 61.4788 7.75379 61.3394L6.31297 58.0196C5.60633 56.3914 5.34577 54.6045 5.55804 52.8424L8.69085 26.8349C9.29603 21.8109 13.5588 18.0308 18.6191 18.0308H19.4557V15.0111H16.3478C13.9994 15.0111 12.2288 12.8772 12.6622 10.5691L13.9531 3.69322C14.286 1.91999 15.8345 0.635193 17.6387 0.635193L37.9555 0.635196C39.7597 0.635196 41.3082 1.91999 41.6411 3.69323L42.932 10.5692ZM24.4557 15.0111V18.0308H26.5471H27.797H31.1384V15.0111H24.4557ZM18.6191 23.0308C16.0889 23.0308 13.9576 24.9209 13.655 27.4329L10.5222 53.4403C10.416 54.3214 10.5463 55.2149 10.8996 56.0289L12.3404 59.3488C12.7369 60.2623 13.6379 60.8535 14.6338 60.8535H26.5471H27.797H40.9603C41.9563 60.8535 42.8572 60.2623 43.2537 59.3488L44.6945 56.0289C45.0478 55.2149 45.1781 54.3214 45.072 53.4403L41.9391 27.4329C41.6366 24.9209 39.5052 23.0308 36.975 23.0308H27.797H26.5471H18.6191ZM6.07588 66.8782L8.74752 79.1218H48.0962L50.7679 66.8782H6.07588ZM20.4927 32.4656C19.112 32.4656 17.9927 33.5849 17.9927 34.9656C17.9927 36.3464 19.112 37.4656 20.4927 37.4656H27.7945H27.7967H35.1009C36.4816 37.4656 37.6009 36.3464 37.6009 34.9656C37.6009 33.5849 36.4816 32.4656 35.1009 32.4656H27.797H27.7967H20.4927ZM17.7968 44.8396C16.4161 44.8396 15.2968 45.9589 15.2968 47.3396C15.2968 48.7203 16.4161 49.8396 17.7968 49.8396H27.7944H27.7966H37.7968C39.1775 49.8396 40.2968 48.7203 40.2968 47.3396C40.2968 45.9589 39.1775 44.8396 37.7968 44.8396H27.797H27.7966H17.7968Z" fill="url(#paint0_linear_2139_751)" />
        <defs>
            <linearGradient id="paint0_linear_2139_751" x1="28.4219" y1="0.635193" x2="28.4219" y2="84.25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE2E2" />
                <stop offset="1" stopColor="#9F7A6A" />
            </linearGradient>
        </defs>
    </svg>

    const loans = <svg width="81" height="72" viewBox="0 0 81 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M30.4757 11.1574L29.0454 5.72226L20.4636 11.1574H30.4757ZM33.4461 2.79801L35.1778 9.37834L49.0631 0.584283C51.2062 -0.773014 54.0505 0.344783 54.6961 2.79801L56.8959 11.1574H61.8438C66.6762 11.1574 70.5938 15.0749 70.5938 19.9074V31.1574H75.5938C78.3552 31.1574 80.5938 33.396 80.5938 36.1574V46.1574C80.5938 48.9188 78.3552 51.1574 75.5938 51.1574H70.5938V62.4074C70.5938 67.2399 66.6762 71.1574 61.8438 71.1574H9.34375C4.51126 71.1574 0.59375 67.2399 0.59375 62.4074V19.9074C0.59375 15.0749 4.51126 11.1574 9.34375 11.1574H11.1188L27.8131 0.584283C29.9562 -0.773014 32.8005 0.344783 33.4461 2.79801ZM50.2954 5.72226L51.7257 11.1574H41.7136L50.2954 5.72226ZM65.5938 19.9074V31.1574H60.5938C55.0709 31.1574 50.5938 35.6345 50.5938 41.1574C50.5938 46.6802 55.0709 51.1574 60.5938 51.1574H65.5938V62.4074C65.5938 64.4784 63.9148 66.1574 61.8438 66.1574H9.34375C7.27268 66.1574 5.59375 64.4784 5.59375 62.4074V19.9074C5.59375 17.8363 7.27268 16.1574 9.34375 16.1574H61.8438C63.9148 16.1574 65.5938 17.8363 65.5938 19.9074ZM75.5938 36.1574H60.5938C57.8323 36.1574 55.5938 38.396 55.5938 41.1574C55.5938 43.9188 57.8323 46.1574 60.5938 46.1574H75.5938V36.1574ZM60.5938 43.6574C61.9745 43.6574 63.0938 42.5381 63.0938 41.1574C63.0938 39.7767 61.9745 38.6574 60.5938 38.6574C59.213 38.6574 58.0938 39.7767 58.0938 41.1574C58.0938 42.5381 59.213 43.6574 60.5938 43.6574Z" fill="url(#paint0_linear_2139_1145)" />
        <defs>
            <linearGradient id="paint0_linear_2139_1145" x1="40.5938" y1="0" x2="40.5938" y2="71.1574" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE2E2" />
                <stop offset="1" stopColor="#9F7A6A" />
            </linearGradient>
        </defs>
    </svg>

    const insurance = <svg width="61" height="80" viewBox="0 0 61 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.39062 5V75H55.3906V25H39.7656C38.0397 25 36.6406 23.6009 36.6406 21.875V5H5.39062ZM41.6406 8.11336L53.5443 20H41.6406V8.11336ZM0.390625 3.125C0.390625 1.39911 1.78974 0 3.51562 0H39.2987C40.1267 0 40.9209 0.328625 41.5068 0.913709L59.4738 18.8549C60.0608 19.4411 60.3906 20.2366 60.3906 21.0662V76.875C60.3906 78.6009 58.9915 80 57.2656 80H3.51562C1.78973 80 0.390625 78.6009 0.390625 76.875V3.125ZM12.8906 35C11.5099 35 10.3906 36.1193 10.3906 37.5C10.3906 38.8807 11.5099 40 12.8906 40H47.8906C49.2713 40 50.3906 38.8807 50.3906 37.5C50.3906 36.1193 49.2713 35 47.8906 35H12.8906ZM10.3906 50C10.3906 48.6193 11.5099 47.5 12.8906 47.5H47.8906C49.2713 47.5 50.3906 48.6193 50.3906 50C50.3906 51.3807 49.2713 52.5 47.8906 52.5H12.8906C11.5099 52.5 10.3906 51.3807 10.3906 50ZM12.8906 60C11.5099 60 10.3906 61.1193 10.3906 62.5C10.3906 63.8807 11.5099 65 12.8906 65H47.8906C49.2713 65 50.3906 63.8807 50.3906 62.5C50.3906 61.1193 49.2713 60 47.8906 60H12.8906Z" fill="url(#paint0_linear_2139_606)" />
        <defs>
            <linearGradient id="paint0_linear_2139_606" x1="30.3906" y1="0" x2="30.3906" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE2E2" />
                <stop offset="1" stopColor="#9F7A6A" />
            </linearGradient>
        </defs>
    </svg>

    const addOns = <svg width="82" height="66" viewBox="0 0 82 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M45.1875 0.125C46.5682 0.125 47.6875 1.23581 47.6875 2.60606V11.2898H56.4375C57.8182 11.2898 58.9375 12.4006 58.9375 13.7708C58.9375 15.1411 57.8182 16.2519 56.4375 16.2519H47.6875V24.9356C47.6875 26.3059 46.5682 27.4167 45.1875 27.4167C43.8068 27.4167 42.6875 26.3059 42.6875 24.9356V16.2519H33.9375C32.5568 16.2519 31.4375 15.1411 31.4375 13.7708C31.4375 12.4006 32.5568 11.2898 33.9375 11.2898H42.6875V2.60606C42.6875 1.23581 43.8068 0.125 45.1875 0.125ZM72.999 30.4664C73.9976 29.9405 75.2368 30.3099 75.7782 31.2949C76.2067 32.0746 76.0801 33.0396 75.4646 33.6843L57.6598 52.3359C56.3648 53.6925 54.7474 54.7048 52.9558 55.28L39.9507 59.4557C37.3618 60.2869 34.5571 60.1588 32.0561 59.0951L25.0873 56.131C23.8425 55.6016 22.5023 55.3286 21.1481 55.3286H15.1875V35.4801H29.3949C29.5833 35.4801 29.7698 35.5177 29.9434 35.5905L41.6819 40.5192C42.4586 40.8453 42.8115 41.743 42.4625 42.505C42.1553 43.1756 41.3998 43.5222 40.686 43.3198L26.4993 39.2972C25.1717 38.9207 23.788 39.6836 23.4087 41.0012C23.0294 42.3187 23.7981 43.6919 25.1257 44.0684L39.3124 48.091C42.4069 48.9685 45.6826 47.466 47.0143 44.5583C47.0931 44.3864 47.1636 44.2129 47.226 44.0383L72.999 30.4664ZM21.1481 60.2907H15.1875V63.392C15.1875 64.7623 14.0682 65.8731 12.6875 65.8731H0.1875V26.1761H12.6875C14.0682 26.1761 15.1875 27.2869 15.1875 28.6572V30.518H29.3949C30.2526 30.518 31.1016 30.6889 31.8916 31.0206L43.6301 35.9493C44.9926 36.5213 46.0543 37.499 46.7353 38.6793L70.6554 26.0831C74.0735 24.2832 78.3147 25.5475 80.1676 28.9188C81.6344 31.5875 81.2009 34.8902 79.0943 37.097L61.2896 55.7485C59.419 57.7081 57.0827 59.1703 54.4949 60.0012L41.4898 64.1769C37.7503 65.3775 33.6991 65.1925 30.0865 63.656L23.1177 60.6919C22.4953 60.4272 21.8252 60.2907 21.1481 60.2907ZM10.1875 31.1383H5.1875V60.911H10.1875V31.1383Z" fill="url(#paint0_linear_2139_11)" />
        <defs>
            <linearGradient id="paint0_linear_2139_11" x1="40.6089" y1="0.125" x2="40.6089" y2="65.8731" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE2E2" />
                <stop offset="1" stopColor="#9F7A6A" />
            </linearGradient>
        </defs>
    </svg>

    const merchandise = <svg width="82" height="68" viewBox="0 0 82 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.74678 15.2623L24.9839 7.76711C25.0106 7.93231 25.0714 8.09542 25.1692 8.24652L34.6095 22.8298C34.9755 23.3953 35.7237 23.569 36.3014 23.2227L38.9807 21.6169V31.8293C38.9807 32.5196 39.5403 33.0793 40.2307 33.0793H41.7373C42.4277 33.0793 42.9873 32.5196 42.9873 31.8293V21.6171L45.6663 23.2227C46.244 23.569 46.9922 23.3953 47.3582 22.8298L56.7985 8.24652C56.8974 8.09374 56.9584 7.9287 56.9846 7.76161L76.2512 15.284L73.775 27.7427L65.4968 26.1013C63.178 25.6416 61.0174 27.4158 61.0174 29.7797V62.1087H20.8153V29.7959C20.8153 27.4161 18.6272 25.6382 16.2978 26.1253L8.61258 27.7322L5.74678 15.2623ZM41.5733 19.5362C41.6018 19.4661 41.6371 19.3977 41.6795 19.3316L50.3002 5.89117H31.6675L40.2882 19.3316C40.3306 19.3977 40.3659 19.4661 40.3944 19.5362H41.5733ZM29.5638 0.891174C29.0981 0.891174 28.6364 0.977935 28.2024 1.14702L2.92524 10.9955C1.19133 11.6711 0.215109 13.516 0.631904 15.3296L4.0141 30.0465C4.4715 32.0368 6.43739 33.2952 8.43633 32.8772L15.8153 31.3343V63.3587C15.8153 65.4298 17.4942 67.1087 19.5653 67.1087H62.2674C64.3385 67.1087 66.0174 65.4298 66.0174 63.3587V31.3019L74.0281 32.8902C76.059 33.2929 78.0319 31.9735 78.4355 29.9429L81.3595 15.2316C81.7138 13.4487 80.7385 11.6684 79.0453 11.0073L53.7932 1.14799C53.3585 0.978269 52.896 0.891174 52.4294 0.891174H29.5638Z" fill="url(#paint0_linear_2139_502)" />
        <defs>
            <linearGradient id="paint0_linear_2139_502" x1="40.984" y1="0.891174" x2="40.984" y2="67.1087" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE2E2" />
                <stop offset="1" stopColor="#9F7A6A" />
            </linearGradient>
        </defs>
    </svg>

    return (
        <>
            {/* flase then pt-[10px] */}
            <div className={`w-full h-full ${successfull === false ? 'pt-0' : 'pt-0'} max-w-[1260px] mx-auto text-white`}>

                {/* main cars details */}
                {/* mb-[70px] */}
                <div className={`w-full h-full flex lg:flex-row flex-col justify-between gap-[12px] 
                ${getSuccessfull === 'true' ?
                        'md:mt-3 mt-2'
                        : 'md:mt-[40px] mt-[30px]'}`
                }>
                    {/* mt-[9px] */}
                    {/* left side cars details */}
                    <div className="lg:w-[45%] w-full h-full flex flex-col justify-between">
                        <div className="w-full">
                            {/* cars title */}
                            <div className="w-full flex items-start flex-col">
                                {/* title */}
                                {
                                    !getSuccessfull &&
                                    <h2 className="dark:text-white md:text-[26px] xs:text-[22px] text-[20px] font-bold uppercase">Scorpio-N</h2>
                                }
                                {/* orders status */}
                                {/* {
                                    getSuccessfull === 'true' ?
                                        (
                                            <p className={`text-[14px]`}>
                                                Status:
                                                <span className='text-[#44DD30] font-[700]'> Order Processed</span>
                                            </p>
                                        )
                                        : ''
                                } */}

                                {
                                    getSuccessfull === 'true' ?
                                        (
                                            <div className='w-full h-max flex items-center gap-[8px]'>
                                                {/* successfull-images */}
                                                <div className='h-[50px] mt-auto'>
                                                    <img className={`w-full h-full object-contain`} src='/Congratulations-loader.svg' alt="successfull-buying" />
                                                    {/* <img className={`w-full h-full object-cover md:scale-[1.4] sm:scale-[1.2] scale-[1.1] sm:-mt-[0.2rem] md:-mt-[0.6rem]`} src='/Congratulations-loader.gif' alt="successfull-buying" /> */}
                                                </div>

                                                {/* user names */}
                                                <div className='w-max'>
                                                    <h1 className={`md:text-[26px] xss:text-[22px] text-[20px] font-[700] capitalize`}>
                                                        Congratulations!
                                                    </h1>

                                                    {/* cars name */}
                                                    <p className={`sm:text-[14px] text-[12px] font-[700]`}>Your Scorpio-N is booked</p>
                                                </div>
                                            </div>
                                        )
                                        : ''
                                }
                            </div>
                            {/* cars images */}
                            {/* md:mt-0 mt-[8px] */}
                            <div className="md:w-[425px] xs:w-[330px] w-full lg:mr-auto mx-auto md:h-full h-[191px] my-[0.8rem]">
                                {/* <img src='/infinityBlue.png' alt="product-img" className='w-full h-full md:object-contain object-cover' /> */}
                                <img src='/image 14.png' alt="product-img" className='w-full h-full object-contain' />
                            </div>
                        </div>

                        {/* <div className="1x1:w-[35%] mb-[20px] mt-[20px] md:block hidden 1x1:fixed 1x1:bottom-[70px]">
                            <p className="text-white 1x1:text-[12px] text-[10px]">*Disclaimer: *Cancellation charges to the tune of 10% of the Booking amount will be applicable on each and every cancellation (except Scorpio-N bookings). The Waiting Period For Your Selected Variant Is 4-6 Weeks <span className='underline'>Read More</span></p>
                        </div> */}
                    </div>
                    {/* right side select configurations */}
                    {/* id="overFlowNone" 1x1:h-[510px] md:h-[360px] */}
                    <div className="lg:w-[50%] w-full mb-[20px] h-full">
                        {/* tabs for fuel or diesel */}
                        <div className="w-full">
                            <div className="w-full">
                                {/* config title */}
                                <div className="w-full">
                                    <h3 className="md:text-[20px] text-[18px] text-white font-bold text-left">
                                        Hi Ashish, here’s your Booking Summary
                                        {/* Hi John, here’s your booking summary */}
                                    </h3>
                                </div>

                                {/* content */}

                                <div className='w-full h-full mt-[16px]'>
                                    {/* xs:flex-row flex-col xs:items-center items-start */}
                                    <div onClick={() => setShowContents(!showContents)} className={`cursor-pointer w-full h-full bg-[#333333] flex items-center justify-between p-[20px] ${showContents === true ? ' rounded-[10px_10px_0_0]' : 'rounded-[10px]'}`}>
                                        {/* text */}
                                        <div className='flex items-center gap-2'>
                                            <img src='/ico-Summary.png' alt='icons' className='w-[28px] h-[28px]' />
                                            <div className='md:leading-0 leading-[18px]'>
                                                <h2 className='md:text-[18px] text-[16px] font-bold select-none'>₹ 2 210 705.00*</h2>
                                                {/* <span className='sm:hidden block text-[12px] font-bold'>Price confirmation Shortly</span> */}
                                            </div>
                                        </div>
                                        {/* icons */}
                                        <div className='h-[20px] flex items-center'>
                                            <svg width="20" className={`${showContents === false && 'rotate-180'}`} height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.0588 11.2377C19.3005 11.0111 19.3128 10.6314 19.0862 10.3897L10.0862 0.789657C9.97273 0.668667 9.81428 0.600022 9.64844 0.600022C9.48259 0.600022 9.32414 0.668667 9.21071 0.789657L0.210714 10.3897C-0.0159245 10.6314 -0.00367548 11.0111 0.238071 11.2377C0.47982 11.4644 0.859522 11.4521 1.08616 11.2104L9.64844 2.07729L18.2107 11.2104C18.4374 11.4521 18.8171 11.4644 19.0588 11.2377Z" fill="white" />
                                            </svg>
                                        </div>

                                        {/* <div className='xs:pl-0 pl-[35px] sm:block hidden'>
                                            <h2 className='md:text-[18px] text-[12px] font-bold select-none'>Price confirmation Shortly</h2>
                                        </div> */}
                                    </div>

                                    {/* half contents */}
                                    <div className={`w-full h-max bg-[#F8F8F8] px-[20px] py-[12px] ${showContents === true ? 'rounded-0' : 'rounded-[0_0_10px_10px]'} text-black`}>
                                        {/* title */}
                                        <div className='mb-[12px]'>
                                            <h2 className='text-[16px] text-black font-bold'>Scorpio-N • Z8 L D AT • Deep Forest</h2>
                                        </div>

                                        {/* dealer */}
                                        <div className='mb-[12px]'>
                                            <h6 className='text-[14px] text-black'>Dealer Name</h6>
                                            <h2 className='md:text-[14px] text-[12px] font-bold mt-[2px]'>Nbs International Ltd., 400058 <br />
                                                {/* Pin Code - 411045 */}
                                            </h2>
                                        </div>

                                        {/* city */}
                                        {/* <div className='mb-[12px]'>
                                                    <h6 className='text-[14px] text-black'>City of  Registeration</h6>
                                                    <h2 className='text-[14px] font-bold mt-[2px]'>Mumbai</h2>
                                                </div> */}

                                        {/* disclaimer */}

                                        {
                                            showContents === false &&
                                            <div className='w-full mt-[12px]'>
                                                <p className='sm:text-[12px] text-[10px]'>The waiting period for your selected variant is 12-18 weeks <span className='underline cursor-pointer'>Read More</span></p>
                                            </div>
                                        }

                                    </div>

                                    {/* contents */}

                                    {
                                        showContents === true &&
                                        <div className='w-full -mt-[12px] h-max bg-[#F8F8F8] px-[20px] pb-[12px] rounded-[0_0_10px_10px] text-black divide-y divide-[#635D5D]'>
                                            <span className='w-[80%] mx-auto h-[1px] bg-black'></span>
                                            {/* personal details */}
                                            <div className='w-full h-full pt-[12px]'>
                                                {/* title */}
                                                <div className='mb-[10px]'>
                                                    <h2 className='text-[16px] text-black font-bold'>Personal Details</h2>
                                                </div>

                                                <div className='flex items-start flex-col justify-between'>
                                                    {/* dealer */}
                                                    <div className='md:w-1/2 mb-[8px] flex items-center gap-[6px]'>
                                                        <h6 className='text-[14px] text-black'>Full Name :</h6>
                                                        {/* <h2 className='text-[14px] font-bold'>John Doe</h2> */}
                                                        <h2 className='text-[14px] font-bold'>Ashish Y</h2>
                                                    </div>

                                                    {/* city */}
                                                    <div className='md:w-1/2 mb-[8px] flex items-center gap-[6px]'>
                                                        <h6 className='text-[14px] text-black'>Mobile no :</h6>
                                                        <h2 className='text-[14px] font-bold'>+91 9677732949</h2>
                                                    </div>

                                                    {/* email */}
                                                    <div className='md:w-1/2 mb-[8px] flex items-center gap-[6px]'>
                                                        <h6 className='text-[14px] text-black'>Email Id :</h6>
                                                        {/* <h2 className='text-[14px] font-bold'>jd@gmail.com</h2> */}
                                                        <h2 className='text-[14px] font-bold'>ashishy@gmail.com</h2>
                                                    </div>

                                                    {/* city
                                                    <div className='md:w-1/2 mb-[12px]'>
                                                        <h6 className='text-[14px] text-black'>City/State</h6>
                                                        <h2 className='text-[14px] font-bold mt-[2px]'>Pune</h2>
                                                    </div> */}
                                                </div>
                                                {/* 
                                                <div className='flex items-start md:flex-row flex-col justify-between'>
                                                    dealer
                                                    <div className='md:w-1/2 mb-[12px]'>
                                                        <h6 className='text-[14px] text-black'>Mobile no.</h6>
                                                        <h2 className='text-[14px] font-bold mt-[2px]'>+91 9898987894</h2>
                                                    </div>

                                                    city
                                                    <div className='md:w-1/2 mb-[12px]'>
                                                        <h6 className='text-[14px] text-black'>Email</h6>
                                                        <h2 className='text-[14px] font-bold mt-[2px]'>ashishy@gmail.com</h2>
                                                    </div>
                                                </div> */}

                                                {/* disclaimer */}

                                                <div className='w-full mt-[12px]'>
                                                    <p className='sm:text-[12px] text-[10px]'>The waiting period for your selected variant is 12-18 weeks <span className="underline">Read More</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {/* <div onClick={() => setShowContentsTwo(!showContentsTwo)} className={`mt-[20px] cursor-pointer w-full h-full bg-[#333333] flex items-center justify-between p-[20px] ${showContents === true ? ' rounded-[10px_10px_0_0]' : 'rounded-[10px]'}`}>
                                        text
                                        <div className='flex items-center gap-2'>
                                            <img src='/ico-Ev-Charger.png' alt='icons' className='w-[28px] h-[28px]' />
                                            <h2 className='md:text-[18px] text-[16px] font-bold select-none'>Charger Preference</h2>
                                        </div>
                                        icons
                                        <div className='h-[20px] flex items-center'>
                                            <svg width="20" className={`${showContentsTwo === false && 'rotate-180'}`} height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M19.0588 11.2377C19.3005 11.0111 19.3128 10.6314 19.0862 10.3897L10.0862 0.789657C9.97273 0.668667 9.81428 0.600022 9.64844 0.600022C9.48259 0.600022 9.32414 0.668667 9.21071 0.789657L0.210714 10.3897C-0.0159245 10.6314 -0.00367548 11.0111 0.238071 11.2377C0.47982 11.4644 0.859522 11.4521 1.08616 11.2104L9.64844 2.07729L18.2107 11.2104C18.4374 11.4521 18.8171 11.4644 19.0588 11.2377Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>

                                    contents

                                    {
                                        showContentsTwo &&
                                        <div className='w-full h-max bg-[#F8F8F8] px-[20px] py-[12px] rounded-[0_0_10px_10px] text-black divide-y divide-[#635D5D]'>

                                            <ul className='text-black list-disc pl-[10px]'>
                                                <li>7.2kW AC Charger</li>
                                            </ul>
                                        </div>
                                    } */}

                                    {/* <div className="mt-[30px] mb-[20px] md:hidden block">
                                        <p className="text-white 1x1:text-[12px] text-[10px]">*Disclaimer: *Cancellation charges to the tune of 10% of the Booking amount will be applicable on each and every cancellation (except Scorpio-N bookings). The Waiting Period For Your Selected Variant Is 4-6 Weeks <span className='underline'>Read More</span></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:mb-[100px] mb-[80px]'>
                    {/* Customise Your SUV */}
                    {
                        getSuccessfull === 'true' &&
                        <>
                            <div className='w-full h-max'>
                                <div className='w-full mb-[14px]'>
                                    {/* title */}
                                    <h3 className={`text-[18px] font-bold`}>Customise Your SUV</h3>
                                </div>

                                {/* boxes */}
                                {/* flex flex-col */}
                                <div className='w-full h-max grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[16px]'>
                                    {/* {
                                        isAccessories === true ? (
                                            <>
                                                <CustomiseQuote link='/own-online/finance/pre-approved' icons={financeIcons && financeIcons} text="Apply for a Loan" />
                                                <CustomiseQuote link='/own-online/finance/product-list' icons={filesIcons && filesIcons} text="Buy Insurance" />
                                                <CustomiseQuote link='/own-online/finance/application/details/exclusive-benefits' icons={exclusiveBenefits && exclusiveBenefits} text="Exclusive Benefits" />
                                                <CustomiseQuote link='/own-online/finance/application/details/addons' icons={addOns && addOns} text="Add-Ons" />
                                                <AccessoriesAdded />
                                            </>
                                        ) : (
                                            <>
                                                <CustomiseQuote link='/own-online/finance/application/details/accessories' icons={accessoriesIcons && accessoriesIcons} text="Accessories" />
                                                <CustomiseQuote link='/own-online/finance/pre-approved' icons={financeIcons && financeIcons} text="Apply for a Loan" />
                                                <CustomiseQuote link='/own-online/finance/product-list' icons={filesIcons && filesIcons} text="Buy Insurance" />
                                                <CustomiseQuote link='/own-online/finance/application/details/exclusive-benefits' icons={exclusiveBenefits && exclusiveBenefits} text="Exclusive Benefits" />
                                                <CustomiseQuote link='/own-online/finance/application/details/addons' icons={addOns && addOns} text="Add-Ons" />
                                            </>
                                        )

                                    } */}

                                    <CustomizeBoxs isAdded={isAccessories} title="Accessories" icons={accessoriesIcons && accessoriesIcons} text="Accessories that will go with your Scorpio-N" links="/own-online/finance/application/details/accessories/" />
                                    <CustomizeBoxs isAdded={isLoans} title="Apply for Loan" icons={loans && loans} text="Lets collaborate to bring home your dream SUV" links="/own-online/finance/pre-approved/" />
                                    <CustomizeBoxs isAdded={isInsurance} title="Buy Insurance" icons={insurance && insurance} text="Quotes that are hard to miss out on" links="/own-online/finance/product-list/" />
                                    <CustomizeBoxs isAdded={isAddOns} title="Add-Ons" icons={addOns && addOns} text="We got you covered  at every step " links="/own-online/finance/application/details/addons/" />
                                    <CustomizeBoxs isAdded={isMerchandise} title="Merchandise" icons={merchandise && merchandise} text="Merchandise that you will love to flaunt" links="/own-online/finance/application/details/merchandise/" />

                                </div>
                            </div>

                            <div className='mt-[21px] w-full md:h-[56px] h-max bg-[#333333] p-[16px] rounded-[10px] flex md:flex-row flex-col items-center md:gap-0 gap-[18px]'>
                                <p className='md:text-[16px] text-[14px] md:text-left text-center'>To continue with post booking updates and SUV tracking etc. please download and start using <span className='font-bold text-[16px]'>M4U App</span> now</p>
                                <div className='flex md:items-start items-center gap-[12px] md:ml-[16px]'>
                                    <div className='h-[28px]'>
                                        <img src="/app-store.svg" className='w-full h-full object-contain' alt="gif" />
                                    </div>
                                    <div className='h-[28px]'>
                                        <img src="/google-play-badge 1.svg" className='w-full h-full object-contain' alt="gif" />
                                    </div>
                                </div>
                            </div>
                        </>
                    }


                    {/* mobile view paragraphs */}
                    <div className='lg:hidden block mt-[30px] mb-[20px]'>
                        <div className={`flex gap-[6px]`}>
                            <p className='sm:text-[12px] text-[10px] font-bold'>Disclaimer:</p>
                            <span className='sm:text-[12px] text-[10px]'>
                                *Cancellation charges to the tune of 10% of the Booking amount will be applicable on each and every cancellation (except Scorpio-N bookings).
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart