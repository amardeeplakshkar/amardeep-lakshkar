import React, { useState } from 'react';

const ColorChangerButton = () => {
    const colors = ['#57c792', 'goldenrod', '#64c754',];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleButtonClick = () => {
        const updatedColorIndex = (currentColorIndex + 1) % colors.length;
        const updatedColor = colors[updatedColorIndex];
        document.documentElement.style.setProperty('--primary-color', updatedColor);
        setCurrentColorIndex(updatedColorIndex);
    };
    return (
        <button className='social-btn' onClick={handleButtonClick}>
            <i className="social-icon fa-solid fa-bolt"></i></button>
    );
};

export default ColorChangerButton;
