const emailList = document.getElementById("email-list");

for (let i = 1; i <= 10; i++) {
    
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        const emailCur = resp.data.response;
        emailList.innerHTML += `<li>${emailCur}</li>`
        console.log(emailCur);
        
    });  
}