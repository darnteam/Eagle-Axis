import React from "react";
import FAQItem from "./FAQ-question.jsx";

const FAQSection = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center pb-4 ">
                <h4 style={{ fontFamily: "Comfortaa" }} 
                className="text-xl text-primaryYellow pt-6">Frequently Asked Questions</h4>
                <h1 style={{ fontFamily: "Comfortaa" }}
                className="text-white text-6xl m-2">Have Any Questions?</h1>
                <div className="w-[5%] h-1 bg-primaryYellow mx-auto my-4"></div>
                <div className="my-8">
                    <FAQItem 
                        question="What areas does Eagle Axis operate in?"
                        answer="Eagle Axis operates nationwide across all 48 contiguous states, with a primary focus on routes through the Midwest, South, and East Coast."
                    />
                    <FAQItem 
                        question="What types of trucks are part of the Eagle Axis fleet?"
                        answer="Our fleet includes a strong mix of company-owned trucks and owner-operated trucks, all maintained to the highest safety and quality standards."
                    />
                    <FAQItem 
                        question="How often are drivers paid at Eagle Axis?"
                        answer="We offer weekly pay to ensure our drivers receive consistent, timely compensation for their hard work every week."
                    />
                    <FAQItem 
                        question="What experience is required to drive for Eagle Axis?"
                        answer="We require at least 2 years of driving experience with a valid CDL and a clean driving record. This helps maintain safety and professionalism across our team."
                    />
                    <FAQItem 
                        question="What support does Eagle Axis provide its drivers?"
                        answer="We offer comprehensive support, including 24/7 dispatch availability, expert safety training, round-the-clock driver assistance, and fair, transparent compensation."
                    />
                    <FAQItem 
                        question="Does Eagle Axis offer flexible routes and schedules?"
                        answer="Yes, we work with each driver to create routes and schedules that meet both personal and professional needs while ensuring efficient service for our clients."
                    />
                    <FAQItem 
                        question="How does Eagle Axis ensure fair pay?"
                        answer="Our compensation structure is built on transparency and fairness, with competitive pay rates, clear guidelines, and on-time payments so drivers can trust they’re being paid fairly for every mile."
                    />
                    <FAQItem 
                        question="How can I apply to drive for Eagle Axis?"
                        answer="Interested drivers can apply directly through our website or contact our recruitment team for more details on joining the Eagle Axis family."
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;