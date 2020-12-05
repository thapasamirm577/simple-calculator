const buttons = document.querySelectorAll(".button");
const show = document.getElementById("show");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let value = e.currentTarget.dataset.num;
        show.value += value;
        
    })
})
const equal = document.getElementById("equal");
equal.addEventListener("click", function(){
    if(show.value !== ""){
        evaluation();
    }
    else{
        show.value = " ";
    }
})

function evaluation(){
        let ans = eval(show.value);
        show.value = ans;
        return show.value;
}

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    if(show.value !== " "){
        show.value = " ";
    }
        
})