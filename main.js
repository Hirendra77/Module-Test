function submitForm(){
    let fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let reason=document.getElementById('reason').value;
   let email=document.getElementById('email').value;
    if( fname != '' && lname != ''&& reason != '' && email != ''){
        alert("success")
    }
    else{
        alert("All fields are required")
    }
}