
import React, { useState } from 'react';

const ButtonCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Best In Town {count} </button>
        </div>
    );
};

export default ButtonCounter;