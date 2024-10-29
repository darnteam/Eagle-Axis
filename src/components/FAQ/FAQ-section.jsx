import React from "react";
import FAQItem from "./FAQ-question";

const FAQSection = ()=>{
    return(
        <>
        <div className="bg-white text-center pb-4">
            <h4 className="text-xl text-primaryYellow pt-6">Frequently Asked Questions</h4>
            <h1 className="text-richBlack text-6xl m-2">Have Any Questions?</h1>
            <div className="w-[5%] h-1 bg-primaryYellow mx-auto my-4"></div>
            <div className="my-8">
            <FAQItem 
            question={"How often will i be paid as an owner operator working with a freight carrier"}
            answer={"At Eagle Axis we pay our drivers weekly"}/>
            <FAQItem 
            question={"How often will i be paid as an owner operator working with a freight carrier"}
            answer={"At Eagle Axis we pay our drivers weekly"}/>
            <FAQItem 
            question={"How often will i be paid as an owner operator working with a freight carrier"}
            answer={"At Eagle Axis we pay our drivers weekly"}/>
            <FAQItem 
            question={"How often will i be paid as an owner operator working with a freight carrier"}
            answer={"At Eagle Axis we pay our drivers weekly"}/>
            </div>

        </div>
        </>
    )
}
export default FAQSection