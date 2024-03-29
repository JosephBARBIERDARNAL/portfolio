import React from 'react';


const Spacing = ({ count }) => {
    const brElements = Array.from({ length: count }, (_, index) => <br key={index} />);
    return <>{brElements}</>;
};

export default Spacing;
