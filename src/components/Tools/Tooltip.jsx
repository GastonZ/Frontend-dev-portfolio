import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    console.log(showTooltip);

    return (
        <div className="absolute inline-block z-10">
            <span
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}>
                {children}
            </span>
            {showTooltip && (
                <div className="absolute z-10 px-2 py-1 w-40 bg-n-1 text-n-8 text-xs rounded-md bottom-full transform">
                    <span className='text-white-neutro-100'>
                        {text}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Tooltip;