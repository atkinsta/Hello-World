let LineByLineReader = require("line-by-line"), // npm install line-by-line for this to work.
    lr = new LineByLineReader("TopSongs.csv");  // put your file in here, example ("data.csv").

let maxLength = Array(9).fill(0);               // Put the number of columns you need to check in here like Array(num).
let columnLocator = Array(9).fill("");          // Ditto

lr.on("error", function(err){
    throw err;
});

lr.on("line", function(line) {
    let lineArray = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);; // Ignores splitting items with commas between quotes.
    lineArray.forEach((word, index) => {                          // Ex ("hello, world") will not be split.
        if (word.length > maxLength[index]) {
            maxLength[index] = word.length;
            columnLocator[index] = word;
            console.log("Updated MaxLength[%i] to max length %i", index, word.length);
        }
    });
});

lr.on("end", function() {
    console.log("\nLongest Column 1: %s - Length: %s\n" +
                "Longest Column 2: %s - Length: %s\n" +
                "Longest Column 3: %s - Length: %s\n" +
                "Longest Column 4: %s - Length: %s\n" +
                "Longest Column 5: %s - Length: %s\n",
                columnLocator[0].toString(), maxLength[0].toString(),
                columnLocator[1].toString(), maxLength[1].toString(),
                columnLocator[2].toString(), maxLength[2].toString(),
                columnLocator[3].toString(), maxLength[3].toString(),
                columnLocator[4].toString(), maxLength[4].toString()); //Convert all to strings to allow multiple data types.
    console.log("I'm done here");
});