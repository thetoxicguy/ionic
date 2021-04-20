const calculateBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const showresult = document.getElementById("result");

const resetInputs = ()=>{
    heightInput.value = '';
    weightInput.value = '';
    showresult.innerHTML = '';;
}

const calculateBmi = () => {
    const enteredHeight = +heightInput.value; //+converts this string to a number!!!
    const enteredWeight = +weightInput.value;
    const bmi = enteredWeight / (enteredHeight * enteredHeight);
    // Use var to use the output value after the "if" statement
    var stt = "algo";
    var stt2 = "así";

    if (isNaN(bmi)){
        alert("Not a number, please check inputs");
        return
    }

    else if (bmi < 18.5){
        // Using var, makes effective the change of value outside the statement
        var stt = "Low weight";
        var stt2 = "underweight, consult your physician for a proper diet.";
    }
    
    else if (bmi < 24.9){
        var stt = "Healthy";
        var stt2 = "normal weight, keep going!!!";
    }
    else if (bmi < 29.9){
        var stt = "High weight";
        var stt2 = "overweight, consult your physician for a low-carb diet.";
    }
    else if (bmi < 34.9){
        var stt = "Very high weight";
        var stt2 = "obesity class I, consult your physician for a low-carb diet.";
    }
    else if (bmi < 39.9){
        var stt = "Extremely high";
        var stt2 = "obesity class II, consult your physician for a low-carb diet.";
    }
    else {
        var stt = "Shut your mouth!!!";
        var stt2 = "obesity class III, consult your physician for a low-carb diet.";
    }

    const resultCard = `<ion-card><ion-card-header>
                    <ion-card-subtitle>Your body mass index is ${bmi}</ion-card-subtitle>
                    <ion-card-title>${stt}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                    You have ${stt2}
                    </ion-card-content>
                    </ion-card>`;
    showresult.innerHTML = resultCard;
};

calculateBtn.addEventListener('click', calculateBmi);
resetBtn.addEventListener('click', resetInputs);