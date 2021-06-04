//Model

let loginID = "";
let loginPass = "";
let feil = document.getElementById('loginErrorMsg')

//Controller


function checkUserID(ID, Pass) {
    if (ID == "Morten" && Pass == "Myhre"){
        loggedInView()
    }
    else {
        updateView();
        loginErrorMsg.style.opacity = 1;
           
   }
}

function checkUnitTest(ID, Pass) {
    if (ID == "Morten" && Pass == "Myhre"){
        loggedInView()
        return "Du er logget inn!"
    }
    else {
        updateView();
        return "error";
        
   }
}
