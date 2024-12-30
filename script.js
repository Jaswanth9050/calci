// accessing the html elements to add the functionalites
let result=document.querySelector("#result")
let btnContainer=document.querySelector(".container")


// adding the functionalites for button click-->mouseEvent

btnContainer.addEventListener("click",(e)=>{
    let target=e.target
    //console.log(target)
    if(target.tagName=="INPUT" &&  target.type=="button"){
        // console.log(target.value)
        handleInput(target.value)
    }
})
// adding the functionalites for keypass click -->keyBoradEvents

document.addEventListener("keydown",(e)=>{
    // console.log("keybord:",e)
    let key=e.key
    // console.log("keybord:",key)

    if((key>="0" && key<="9") || ["+","-","*","%","/","=",".","Delete","Enter","Backspace"].includes(key))
        // console.log("keybord:",key)
        handleInput(key)
})


// Handling the both keybord and mouse-events

function handleInput(input){
    if(input=="C" || input=="Delete"){
        result.value=""
    }else if(input=="✂" || input=="Backspace"){
        result.value=result.value.slice(0,-1);
    }else if(input=="=" || input=="Enter"){
        // calculating the value based the input given by user
        Calculate(result.value)

    }else{
        // result.value+=input
        UpdateScreen(input)

    }

}

// function to  update the values on the screen (display the output on screen)
function UpdateScreen(value){
    result.value+=value
}


// function for calculating the result
function Calculate(expression){
    result.value=eval(expression)

}