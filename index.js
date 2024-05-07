const mailValidation= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const submitBt= document.getElementById("submit-bt");
const mailField= document.getElementById("field-email");

const errorIcons= [document.getElementById("error-icon1"), 
document.getElementById("error-icon2"), 
document.getElementById("error-icon3"), 
document.getElementById("error-icon4"),];

const errorMsgs=[document.getElementById("error-msg1"),
document.getElementById("error-msg2"),
document.getElementById("error-msg3"),
document.getElementById("error-msg4"),
]

const dataFields=[document.getElementById("field-name"),
document.getElementById("field-surname"), mailField,
document.getElementById("field-pass")
];

const errorBorder= getComputedStyle(document.documentElement).getPropertyValue("--Red");


submitBt.addEventListener("click", function(event){
    console.log("button clicked");
    let emptyField= false;
    for(const field of dataFields){
        const value= field.value.trim();
        const iconIndex= dataFields.indexOf(field);
        if(iconIndex===2){
            if(!value.match(mailValidation)){
                field.classList.add("error-border");
                errorIcons[iconIndex].style.opacity=100;
            errorMsgs[iconIndex].style.opacity=100;  
            console.log("no valid email");
            }
        }


        if(!value){
            field.classList.add("error-border");
            emptyField=true;
            
            errorIcons[iconIndex].style.opacity=100;
            errorMsgs[iconIndex].style.opacity=100;
        } else{
            field.classList.remove("error-border");
            errorIcons[iconIndex].style.opacity=0;
            errorMsgs[iconIndex].style.opacity=0;
        }
    }
    if(emptyField==true){
        event.preventDefault();
    }

});