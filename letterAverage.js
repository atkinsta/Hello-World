const gradeLookup = {
    12: "A+",
    11: "A",
    10: "A-",
    9: "B+",
    8: "B",
    7: "B-",
    6: "C+",
    5: "C",
    4: "C-",
    3: "D+",
    2: "D",
    1: "D-",
    0: "F"
}

export const calcAverage = array => {
    let runningTotal = 0;
    const filteredArray = array.filter(item => item !== "Not yet graded");
    filteredArray.forEach(letter => {
        switch(letter) {
            case "A+":
                return runningTotal += 12;
            case "A":
                return runningTotal += 11;
            case "A-":
                return runningTotal += 10;
            case "B+":
                return runningTotal += 9;
            case "B":
                return runningTotal += 8;
            case "B-":
                return runningTotal += 7;
            case "C+":
                return runningTotal += 6;
            case "C":
                return runningTotal += 5;
            case "C-":
                return runningTotal += 4;
            case "D+":
                return runningTotal += 3;
            case "D":
                return runningTotal += 2;
            case "D-":
                return runningTotal += 1;
            case "F":
                return runningTotal += 0;
            default:
                return;  
        }
    });
    const average = runningTotal / filteredArray.length;
    const letterAverage = gradeLookup[Math.round(average)];
    return letterAverage;
}
