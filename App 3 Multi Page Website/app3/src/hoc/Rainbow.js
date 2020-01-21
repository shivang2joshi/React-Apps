import React from 'react';

const Rainbow = (PassedComponent)=>{

    const colors = ['red', 'blue', 'violet','yellow','green', 'indigo', 'orange'];
    const randomColor = colors[Math.floor(Math.random()*7)];
    const className = randomColor + '-text';

    return ( //wrapped component
        (props) => {
            return (
                <div className={className}>
                    <PassedComponent {...props}/>
                </div>
            );
        }
    )

}

export default Rainbow;