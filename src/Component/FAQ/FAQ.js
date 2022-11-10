import React from "react";
import Faq from "react-faq-component";
import './FAQ.css';
const data = {
    title: "F A Q",
    rows: [
        {
            title: "DO I have Any Team?",
            content: `No Mainly I do THe Shooting MySelf`,
        },
        {
            title: "How I Take PayMent?",
            content:
                "Cash,CArd,Mobile Banking ,Bitcoin",
        },
        {
            title: "How To Take Services from You?",
            content: `
                You Can Go To The Service section For Buying My services.But First you have to be login.
            ` ,
        }
    ],
};

const styles = {
    bgColor: 'none',
    titleTextColor: "orange",
    rowTitleColor: "black",
    rowTitleTextSize: "1.5rem",
    rowContentPaddingBottom: "20px",
    rowContentPaddingRight: "16px",
    rowContentPaddingLeft: "16px",
    rowContentColor: 'grey',
    arrowColor: "orange",

};

const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FAQ =() =>{

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default FAQ;