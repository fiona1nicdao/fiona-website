import React, {useState} from "react";

export const ChangeMenuColor = ()=>{
    const [colorChange, setColorChange] = useState(false)

    const menuLinks = document.querySelectorAll(".dropdown-content a");
    const url = window.location.href
    let aboutme = url.includes("aboutme")


        if (colorChange === aboutme){
            setColorChange(state => !state)
            console.log(colorChange)
        }

    // function menu(){
        // preventDefault();

        console.log("hi", aboutme)
        function changeColor(){
            if (aboutme){
                // set(state => !state)
                menuLinks.forEach( link => link.style.color = "black" )
               console.log("aboutme true", aboutme)
    
            }
            else{
               menuLinks.forEach( link => link.style.color = "white" )
               console.log("aboutme false", aboutme)
            }
        }
        changeColor();

        
    // }
}