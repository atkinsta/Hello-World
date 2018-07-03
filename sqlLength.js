//After you npm install line-by-line, this program is run by giving it a file and number of columns as arguments
//Example: node sqlLength.js TopAlbums.csv 8

let LineByLineReader = require("line-by-line"), // npm install line-by-line for this to work.
    lr = new LineByLineReader(process.argv[2]); //Make sure your dataset is in the same folder as this file.

let numCols = parseInt(process.argv[3])
let maxLength = Array(numCols).fill(0);               
let columnLocator = Array(numCols).fill("");   

lr.on("error", function(err){
    throw err;
});

lr.on("line", function(line) {
    let lineArray = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);; // Ignores splitting items with commas between quotes.
    lineArray.forEach((word, index) => {                          // Ex ("hello, world") will not be split.
        if (word.length > maxLength[index]) {
            maxLength[index] = word.length;
            columnLocator[index] = word;
            // console.log("Updated MaxLength[%i] to max length %i", index, word.length);
        }
    });
});

lr.on("end", function() {
    columnLocator.forEach((column, index) => {
        console.log("Column%i Max Length: %i - Longest Entry: %s",
                    index, maxLength[index], column.toString());
    })
    console.log("I'm done here");
});
