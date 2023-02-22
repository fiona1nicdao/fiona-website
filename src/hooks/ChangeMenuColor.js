import React, {useState} from "react";

export const ChangeMenuColor = ()=>{
    // const [colorChange, setColorChange] = useState(false)

    const menuLinks = document.querySelectorAll(".dropdown-content a");
    const url = window.location.href
    let aboutme = url.includes("aboutme")


        // if (colorChange === aboutme){
        //     setColorChange(state => !state)
        //     console.log(colorChange)
        // }

    // function menu(){
        // preventDefault();
        let screen = window.screen.width
        // console.log(screen <= 500) 

        // if(screen <= 500){
        //     menuLinks.forEach( link => link.style.color = "white" )
        // }
        console.log("hi", aboutme,screen <= 500 )
        function changeColor(){
            if (aboutme && screen >= 500){
                // set(state => !state)
                menuLinks.forEach( link => link.style.color = "black" )
            //    console.log("aboutme true", aboutme)
    
            }
            else{
               menuLinks.forEach( link => link.style.color = "white" )
            //    console.log("aboutme false", aboutme)
            }
        }
        changeColor();

        
    // }
}