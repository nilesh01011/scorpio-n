<div className="w-full mt-[24px]">
    {/* choose title */}
    <div className="w-full mb-[12px]">
        <h3 className="md:text-[18px] text-[16px] text-white font-bold text-left">Charger Preference*</h3>
    </div>

    {/* contents */}

    <div className="w-full h-max flex flex-col gap-[16px]">
        {
            contentOne.map((ele) => {
                const { id, name, price } = ele;

                return (
                    <div key={id} onClick={() => setIsActive(id)} className={`cursor-pointer xs:w-[388px] w-full h-[60px] p-[16px] rounded-[10px] ${isActive === id ? 'bg-[#F8F8F8] text-black' : 'bg-[#333333] text-white'} flex items-center justify-between`}>
                        <div className="flex items-center gap-[12px]">
                            {/* icons */}
                            <div className="w-auto">
                                {
                                    isActive && isActive === id ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#FF3E5B" />
                                            <path d="M6.59252 12.97C6.377 12.9698 6.17015 12.8851 6.01652 12.734L3.33352 10.051C3.25387 9.97623 3.19006 9.88626 3.14587 9.78639C3.10168 9.68652 3.07801 9.57878 3.07628 9.46959C3.07454 9.36039 3.09476 9.25196 3.13575 9.15073C3.17674 9.0495 3.23766 8.95755 3.31488 8.88032C3.3921 8.8031 3.48406 8.74218 3.58529 8.70119C3.68651 8.66021 3.79495 8.63998 3.90414 8.64172C4.01334 8.64346 4.12108 8.66712 4.22095 8.71131C4.32082 8.7555 4.41079 8.81932 4.48552 8.89896L6.57952 10.993L12.8495 4.80496C12.9248 4.72877 13.0145 4.66828 13.1134 4.62699C13.2123 4.58571 13.3184 4.56445 13.4255 4.56445C13.5327 4.56445 13.6387 4.58571 13.7376 4.62699C13.8365 4.66828 13.9262 4.72877 14.0015 4.80496C14.1525 4.95867 14.2371 5.16551 14.2371 5.38096C14.2371 5.59641 14.1525 5.80325 14.0015 5.95696L7.15552 12.721C7.0837 12.7988 6.99667 12.861 6.89984 12.9038C6.803 12.9467 6.6984 12.9692 6.59252 12.97Z" fill="white" />
                                        </svg>
                                    ) : (
                                        <div className="w-[18px] h-[18px] rounded-full border-[1px] border-white"></div>
                                    )
                                }
                            </div>

                            {/* titles */}
                            <h3 className="md:text-[18px] text-[16px] font-bold">{name}</h3>
                        </div>
                        <div className="">
                            <h3 className="md:text-[18px] text-[16px] font-bold">{price}</h3>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>