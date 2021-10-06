const userNameInput = document.querySelector(".user-input");
const pass1Input = document.getElementById("pas1");
const pass2Input = document.getElementById("pas2");
const userNameMsg = document.querySelector(".user-msg");
const pass1NameMsg = document.querySelector(".pas1-msg");
const pass2NameMsg = document.querySelector(".pas2-msg");
const okMsg = document.querySelector(".ok-msg");
const submitBtn = document.querySelector(".buton-log");


submitBtn.addEventListener("click", submitHandeler);

function submitHandeler (event){
    event.preventDefault;
    let ifSend = true;
    userNameMsg.innerText ="";
    pass1NameMsg.innerText ="";
    pass2NameMsg.innerText = "";
    okMsg.innerHTML = "";
    const usernameValue = userNameInput.value;
    const pass1Value = pass1Input.value;
    const pass2Value = pass2Input.value;

    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1){
        userNameMsg.innerText = "please enter valid E-mail";
        ifSend = false;
    }
    if (pass1Value.length === 0){
        pass1NameMsg.innerText = "please enter your password";
        ifSend = false;
    }else if (pass1Value.length < 8){
        pass1NameMsg.innerText = "please enter strong password";
        ifSend = false;
    }
    if (pass1Value !== pass2Value){
        pass2NameMsg.innerText = "They are not similar";
        ifSend = false;
    }
    if (ifSend){
        const data = JSON.stringify({
            Email : usernameValue,
            password : pass2Value,
        });
        console.log(data);
        const header = {"content-type" : "application/json"}
        fetch("https://jsonplaceholder.typicode.com/posts" , {
        method: "post",
        body: data,
        headers: header,
        })
            .then(response =>{
                console.log(response);
                if (response.ok){
                    okMsg.innerText = "Sign up successfully!"
                }else{
                    okMsg.innerHTML = `<div class='fail-msg'> Sign up Fail!</div>`
                }
            })
            .catch
            
    }



}



