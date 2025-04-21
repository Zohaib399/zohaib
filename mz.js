function formValdation(){
    let inValid = true;
sfd
    let cardName = document.getElementById('cardName').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let zipCode = document.getElementById('zipCode').value;
    let nameCard = document.getElementById('nameCard').value;
    let cardNumber = document.getElementById('cardNumber').value;
    let exMonth = document.getElementById('exMonth').value;
    let exYear = document.getElementById('exYear').value;
    let cvv = document.getElementById('cvv').value;
    


    document.querySelectorAll('.error-message').forEach(function(aqib){
        aqib.innerHTML = '';
    });

    // Username

    if(cardName.trim() === ''){
        document.getElementById('fullNameError').innerText = 'Enter Your Full name';
        inValid = false;
    }

    // E-mail 

    let emailValdation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValdation.test(email)){
        document.getElementById('emailError').innerText = 'Enter E-mail ID';
        inValid = false;
    }

    // Address

    if(address.trim() === ''){
        document.getElementById('addressError').innerText = 'Enter Your Address';
        inValid = false;
    }

    // City

    if(city.trim() === ''){
        document.getElementById('cityError').innerText = 'Enter Your City';
        inValid = false;
    }

      // Zip Code

      if(zipCode.trim() === ''){
        document.getElementById('zipCodeError').innerText = 'Enter Your Area Zip Code';
        inValid = false;
    } else 
    if (zipCode.length < 3){
        document.getElementById('zipCodeError').innerText = 'Enter Your Area Zip Code';
        inValid = false;
    }

    if(nameCard.trim() === ''){
        document.getElementById('nameCardError').innerText = 'Enter Your Name of Card';
        inValid = false;
    }

    if(cardNumber.trim() === ''){
        document.getElementById('cardNumberError').innerText = 'Enter Your City';
        inValid = false;
    }else 
    if (cardNumber.length < 16){
        document.getElementById('cardNumberError').innerText = 'Enter at least 16 Digits';
        inValid = false;
    }

    if(exMonth.trim() === ''){
        document.getElementById('exMonthError').innerText = 'Enter Ex month';
        inValid = false;
    }else 
    if (exMonth.length < 2){
        document.getElementById('exMonthError').innerText = 'Enter at least 2 Digits';
        inValid = false;
    }


    if(exYear.trim() === ''){
        document.getElementById('exYearError').innerText = 'Enter ex year';
        inValid = false;
    }else 
    if (exYear.length < 2){
        document.getElementById('exYearError').innerText = 'Enter at least 2 Digits';
        inValid = false;
    }


    if(cvv.trim() === ''){
        document.getElementById('cvvError').innerText = 'Enter Your City';
        inValid = false;
    }else 
    if (cvv.length < 3){
        document.getElementById('cvvError').innerText = 'Enter at least 3 Digits';
        inValid = false;
    }
    

    if(!inValid){
        return  false;
    }

    return true;

}
