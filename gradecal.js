function gradecalc(){
    const score = document.getElementById("question").value;
    if (Number(score) >=80 && Number(score) <=100){
        document.getElementById("grade").innerHTML = "You've got A";
    }
    else if (Number(score) >= 70 && Number(score) < 80){
        document.getElementById("grade").innerHTML = "You've got B";
    }
    else if (Number(score) >= 60 && Number(score) < 70){
        document.getElementById("grade").innerHTML = "You've got C";
    }
    else if (Number(score) >= 50 && Number(score) < 60){
        document.getElementById("grade").innerHTML = "You've got D";
    }
    else if (Number(score) >= 0 && Number(score) < 50){
        document.getElementById("grade").innerHTML = "You've got F";
    }
    else{
        document.getElementById("grade").innerHTML = "Please enter number between 1-100";
    }
}