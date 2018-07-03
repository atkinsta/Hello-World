let LineByLineReader = require("line-by-line"), // npm install line-by-line for this to work.
    lr = new LineByLineReader(process.argv[2]);  // put your file in here, example ("data.csv").

let numCols = parseInt(process.argv[3])
let maxLength = Array(numCols).fill(0);               // Put the number of columns you need to check in here like Array(num).
let columnLocator = Array(numCols).fill("");          // Ditto

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
