import React from "react";

const IconRow = (props)=>{
    const iconCount=props.iconCount
    return(
        <div className="flex flex-row space-x-4 justify-center items-center mx-auto">
            {[...Array(iconCount)].map((_, index) => (
            <img
                key={index}
                src={props.icon}
                alt={` Icon ${index + 1}`}
                className="w-8 h-8 hover:scale-110 transition-transform duration-100 group" // Adjust the width and height based on your requirements
            />
            ))}
        </div>
    )
}

export default IconRow