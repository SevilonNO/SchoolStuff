//Model

let View = document.getElementById('app');


//view

updateView();
function updateView() {
        View.innerHTML =`
        <div id="main-holder">
        </br>
        <h1 id="h1"> Login her </h1>
        </br>

        <div id="loginErrorMsg">
        <p id="loginError">Invalid username <span id="error-msg-second-line">and/or password</span></p>
        </div>
            
        <form id="login-form">
        <input 
        type="text" 
        oninput="loginID = this.value" "value="${loginID}
        id="usernameSubmit" 
        class="login-form-field" 
        placeholder="Brukernavn"
        />

        </br>
        <input 
        type="text"  
        oninput="loginPass = this.value" "value="${loginPass}
        id="passwordSubmit" 
        class="login-form-field" 
        placeholder="Passord"
        />

        </br>
        <button onclick="checkUserID(loginID, loginPass)" id="loginSubmit"> Login </button>
        </form>
        </br>
        </div>
        `;
    }
    function loggedInView() {
        View.innerHTML = `
        <div><h1>Du er logget inn!</h1><div>
        `
    }

