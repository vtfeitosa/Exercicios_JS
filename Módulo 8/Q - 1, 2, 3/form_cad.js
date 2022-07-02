let name =  document.getElementById("name");
let bDate = document.getElementById("bDate");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let genderInput = "ok";

const ficha = {
    name: "",
    birthDate: "",
    weight: "",
    height: "",
    gender: ""
}

// name.addEventListener("change", (e) => gerar(e));
// bdate.addEventListener("change", (e) => gerar(e));
// weight.addEventListener("change", (e) => gerar(e));
// height.addEventListener("change", (e) => gerar(e));
// gender.addEventListener("change", (e) => gerar(e));


document.getElementById("ok").addEventListener("click", gerar);

function gerar(e) {

    
   try {
        if (name.value.length >5){
            ficha.name = name.value;
        }else{
            throw "Field 'name' is invalid";
        }
    }

    catch(err) {
        alert(err);
    }

    // Data Atual
    let today = new Date ();     

    try {
        if (Date.parse(bDate.value) <= today){
            ficha.birthDate = Date.parse(bDate.value);
        } else{
            throw "Field 'birthDate' is invalid!";
        }
    }
    
    catch(err) {
        alert(err);
    }
    

    // console.log(weight.value);
    // console.log(parseInt(weight.value));

    try {
        if (isNaN(weight.value) == false){
            ficha.weight = Number(weight.value);
        }else{
            throw "Field 'weight' is invalid! - Only Numbers";
        }
    }

    catch(err) {
        alert(err);
    }

    try {
        if (isNaN(Number(height.value))== false){
            ficha.height = parseInt(height.value *100)

        }else{
            throw "Field 'height' is invalid! - Only Numbers";
        }
    }

    catch(err) {
        alert(err);
    }

    
   try { 
        if (gender.value == gender.options[0].value){
            throw "Field 'gender' is invalid! ";
        } else {
            ficha.gender = gender.value;
        }
    }

    
    catch(err) {
        alert(err);
    }

    console.log(ficha);


    let fichaString = JSON.stringify(ficha);

    console.log(fichaString);

}

