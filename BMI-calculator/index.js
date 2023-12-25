const btnEl=document.getElementById("btn");
const bmiInputEl=document.getElementById("bmi-result");
const weightConditionEl=document.getElementById("weight-condition");

function claculateBMI(){
    const heightValue=document.getElementById("height").value/100; //cm to m  1cm=1/100m
    const weightValue=document.getElementById("weight").value;


    const bmiValue=weightValue/(heightValue*heightValue);

    bmiInputEl.value=bmiValue;
    
    if(bmiValue<18.5){
        weightConditionEl.innerText="under weight";
    }else if(bmiValue>=18.5 && bmiValue<=24.9){
        weightConditionEl.innerText="Normal Weight";
    }else if(bmiValue>=25 && bmiValue<=29.9){
        weightConditionEl.innerText="Overweight";
    }else if(bmiValue>=30){
        weightConditionEl.innerText="Obesity";
    }
}

btnEl.addEventListener("click",claculateBMI);