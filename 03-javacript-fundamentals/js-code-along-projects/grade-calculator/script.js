function handleCalculateGrade(event) {

    let grade = event.target.value;

    // Stop lowercase/uppercase bug in code

    grade = grade.toUpperCase()

    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75%";
            break;
        case "D":
            percentage = "25-50%";
            break;
        case "E":
            percentage = "0-25%";
            break;

    }

    // Stop undefined grade value bug

    if(percentage === undefined) {
        alert("Please enter your grade")
    }else{
        alert("The percentage was " + percentage);
    }
}