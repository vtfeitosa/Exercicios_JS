let textArea = document.getElementById("textarea");
let button = document.querySelector("#btn");

button.addEventListener('click',ok);

function ok(){
    console.log(textArea.value);
    console.log("oi");

    try {
        let text = JSON.parse(textArea.value);
        alert('Parsable JSON string!');
        console.log(text);


    } catch (error) {
        alert(error);
    }
    
}

// String para teste:
// {"name":"John", "age":30, "city":"New York"}

