getData();
async function getData() {
    const response = await fetch("incidentData.csv");
    const data = await response.text();
    // orgnize data by rows and eliminate the index using slice(1)
    const table = data.split('\n').slice(1);
    console.log(table);
    // Parce with the split function the data
    // Create empty list and add dictionaries to the empty list
    var dataSet = []
    table.forEach((row) => {
        const columns = row.split(',');
        const Incident  = columns[0];
        const Value = columns[1];
        const Category = columns[2];
     dataSet.push({x: Incident, value: Value, category: Category})
     console.log(dataSet)  
    });
    return dataSet 
}
// 
// anychart.onDocumentReady(function () {
//         // code to create a word cloud chart will be here
//     });
    anychart.onDocumentReady(function () {
        var data = [
            {"x": "BURGLARY", "value": 11453, category: "PROPERTY"},
            {"x": "FRAUD", "value": 1478, category: "PROPERTY/FINANCIAL"},	
            {"x": "UNAUTHORIZED USE OF MOTOR VEH", "value": 696, category: "PROPERTY"},	
            {"x": "RECKLESS DAMAGE", "value": 3200, category: "PROPERTY"},	
            {"x": "FOUND PROPERTY (NO OFFENSE)", "value": 1341, category: "NO OFFENSE"},	
            {"x": "ASSAULT", "value": 17819, category: "PERSONAL"},
            {"x": "INTERFERENCE", "value": 1563, category: "PROPERTY/PERSONAL"},
            {"x": "OTHER MISDEMEANOR", "value": 54, category: "PROPERTY/PERSONAL"},
            {"x": "ACCIDENT", "value": 866, category: "PROPERTY/PERSONAL"},
            {"x": "OTHER FELONY OFFENSE", "value": 62, category: "PROPERTY/PERSONAL"},	
            {"x": "CRUELTY TO ANIMALS", "value": 227, category: "ANIMALS"},	
            {"x": "ROBBERY", "value": 8671, category: "PROPERTY/FINANCIAL"},	
            {"x": "CRIM MISCHIEF", "value": 14156, category: "PROPERTY/PERSONAL"},
            {"x": "INJURED PERSON - NO OFFENSE", "value": 3035, category: "NO OFFENSE"},	
            {"x": "TRAFFIC VIOLATION", "value": 5149 , category: "TRAFFIC"},	
            {"x": "BMV", "value": 19319, category: "PROPERTY"},	
            {"x": "NATURAL DEATH (NO OFFENSE)", "value": 2002, category: "NO OFFENSE"},	
            {"x": "DEADLY CONDUCT", "value": 1819, category: "PERSONAL"},
            {"x": "UNEXPLAINED DEATH (NO OFFENSE)", "value": 866, category: "NO OFFENSE"},	
            {"x": "OBSTRUCTION", "value": 104, category: "PROPERTY/PERSONAL"},
            {"x": "TERRORISTIC THREAT", "value": 494, category: "PROPERTY"},
            {"x": "HARASSMENT", "value": 3286, category: "PERSONAL"},	
            {"x": "FORGERY", "value": 710, category: "PROPERTY"},
            {"x": "TRESPASSING", "value": 081, category: "PROPERTY"},
            {"x": "VIO BOND ORDER", "value": 236, category: "PERSONAL"},
            {"x": "MIR - JUVENILE", "value": 84, category: "CHILD RELATED"},	
            {"x": "THEFT", "value": 15864, category: "PROPERTY/FINANCIAL"},	
            {"x": "IMPERSONATION", "value": 25, category: "PERSONAL"},
            {"x": "RESIST ARREST", "value": 13, category: "PERSONAL"},
            {"x": "UNLAWFUL DIS -INTIMATE MAT.", "value": 60, category: "PERSONAL"},	
            {"x": "POSS CONT SUB", "value": 8, category: "PROPERTY"},	
            {"x": "INDECENCY W/A CHILD EXPOSES", "value": 1, category: "CHILD RELATED"},	
            {"x": "CR/DR CARD ABUSE", "value": 886, category: "PROPERTY"},
            {"x": "OFFICIAL OPPRESSION", "value": 4, category: "PERSONAL"},	
            {"x": "LOST PROPERTY (NO OFFENSE)", "value": 1638, category: "NO OFFENSE"},	
            {"x": "INJURY CHILD/ELDERLY/DISABLED", "value": 88, category: "CHILD RELATED"},	
            {"x": "ABANDON", "value": 113, category: "PROPERTY/PERSONAL"},
            {"x": "SUICIDE (ATT) - (SOCIAL SERVICES REFERRAL)", "value": 17, category: "PERSONAL"},	
            {"x": "DISORDERLY CONDUCT", "value": 60, category: "PERSONAL"},
            {"x": "MURDER", "value": 155, category: "PERSONAL"},	
            {"x": "FALSE STATEMENT", "value": 28, category: "PERSONAL"},	
            {"x": "KIDNAPPING", "value": 80, category: "PERSONAL"},	
            {"x": "DISCHARGE FIREARM", "value": 36, category: "PERSONAL"},	
            {"x": "FAIL TO ID", "value": 19, category: "PERSONAL"},	
            {"x": "STALKING", "value": 80, category: "PERSONAL"},	
            {"x": "HOMICIDE", "value": 28, category: "PERSONAL"},
            {"x": "DOG RELATED", "value": 886, category: "ANIMALS"},
            {"x": "VIO PROTECTIVE ORDER", "value": 8, category: "PERSONAL"},	
            {"x": "HOAX BOMB", "value": 10, category: "PROPERTY"},
            {"x": "UNLAWFUL RESTRAINT", "value": 28, category: "PERSONAL"},	
            {"x": "UNLAWFUL CARRY WEAPON", "value": 6, category: "PROPERTY"},	
            {"x": "STOLEN CHECK", "value": 1, category: "FINANCIAL"},	
            {"x": "TAKE WEAPON FROM OFFICER", "value": 11, category: "PROPERTY"},	
            {"x": "ARSON", "value": 9, category: "PROPERTY"},	
            {"x": "CONTINUOUS VIOLENCE AGAINST THE FAMILY", "value": 2, category: "PERSONAL"},	
            {"x": "LICENSE VIOLATION", "value": 2, category: "PROPERTY"},	
            {"x": "CAPITAL MURDER", "value": 32, category: "PERSONAL"},
            {"x": "GRAFFITI", "value": 27, category: "PROPERTY"},	
            {"x": "DECEPTIVE BUSINESS", "value": 1, category: "FINANCIAL"},	
            {"x": "EXTORTION/BLACKMAIL", "value": 3, category: "PERSONAL"},	
            {"x": "UNLAWFUL INSTALLATION OF TRACKING DEVICE", "value": 3, category: "PERSONAL"},
            {"x": "POSS MARIJUANA", "value": 0, category: "PERSONAL"},
            {"x": "ENTICING A CHILD", "value": 1, category: "CHILD RELATED"},	
            {"x": "COMPUTER SECURITY BREACH", "value": 8, category: "PROPERTY"},	
            {"x": "TRADEMARK COUNTERFEITING", "value": 4, category: "PROPERTY"},
            {"x": "TRAFFICKING OF PERSONS, CONTINUOUS", "value": 3, category: "PERSONAL"},	
            {"x": "POSSESSION OF STOLEN PROPERTY", "value": 2, category: "PROPERTY"},	
            {"x": "UNL INTER/USE/DISC WIRE/ORAL ELEC COMMUNICATE", "value": 1, category: "PERSONAL"},
            {"x": "UNAUTH RECORDING", "value": 16, category: "PERSONAL"},	
            {"x": "OPEN BUILDING (NO OFFENSE)", "value": 111, category: "NO OFFENSE"},	
            {"x": "REPEATED VIOL", "value": 10, category: "PERSONAL"},	
            {"x": "DWI", "value": 194, category: "PERSONAL"},	
            {"x": "ILLEGAL DUMPING", "value": 41, category: "PROPERTY"},	
            {"x": "APOWW (SOCIAL SERVICES REFERRAL)", "value": 31, category: "PERSONAL"},	
            {"x": "MANSLAUGHTER", "value": 34, category: "PERSONAL"},
            {"x": "PUBLIC INTOXICATION", "value": 27, category: "PERSONAL"},
            {"x": "ALARM INCIDENT", "value": 6, category: "PROPERTY"},
            {"x": "MISAPP FIDUC/FINAN PROP", "value": 2, category: "FINANCIAL"},	
            {"x": "ILLUMINATING AN AIRCRAFT ", "value": 4, category: "PROPERTY"},	
            {"x": "ORGANIZED CRIMINAL", "value": 2, category: "PROPERTY/PERSONAL"},	
            {"x": "SEIZED PROPERTY (NO OFFENSE)", "value": 28, category: "NO OFFENSE"},	
            {"x": "SUSPICIOUS PERSON MIR", "value": 53, category: "NO OFFENSE"},	
            {"x": "RECOVERED OUT OF TOWN - PROP", "value": 25, category: "PROPERTY"},	
            {"x": "NO CODE", "value": 5, category: "NO OFFENSE"},	
            {"x": "RUNAWAY (TEXAS FC 51.03(B)(3))", "value": 10, category: "PERSONAL"},	
            {"x": "ABUSE OF CORPSE", "value": 13, category: "PERSONAL"},
            {"x": "COCKFIGHTING: SPACE/OWNS/TRAINS/EQUIPS", "value": 3, category: "PERSONAL"},
            {"x": "TAMPERING", "value": 5, category: "PROPERTY"},
            {"x": "INVOLVING MINORS", "value": 2, category: "CHILD RELATED"},	
            {"x": "BRIBERY", "value": 2, category: "FINANCIAL"},	
            {"x": "BIGAMY", "value": 1, category: "PERSONAL"},	
            {"x": "VOIDED OFFENSE", "value": 5, category: "NO OFFENSE"},	
            {"x": "TRAFFICKING OF PERSONS  BENEFIT", "value": 1, category: "PERSONAL"},	
            {"x": "PROHIBITED SUB/PROP", "value": 1, category: "PROPERTY"},	
            {"x": "SILENT CALLS TO 911", "value": 1, category: "PROPERTY"},	
            {"x": "UNLAWFUL POSS FIREARM", "value": 1, category: "PROPERTY"},
            {"x": "PUBLIC LEWDNESS", "value": 7, category: "PERSONAL"},
            {"x": "SECURE EXECUTION DOC", "value": 1, category: "PROPERTY"},	
            {"x": "CRIMINAL CONSPIRACY", "value": 1, category: "PERSONAL"},	
            {"x": "VOYEURISM", "value": 1, category: "PERSONAL"},	
            {"x": "MAN DEL CONT SUB", "value": 2, category: "PERSONAL"},
          ];
  // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

        // set a chart title
        chart.title('2019 -2020 Police Incident')
        // set an array of angles at which the words will be laid out
        chart.angles([0, -45, 90])
        // enable a color range
        chart.colorRange(true);
        // set the color range length
        chart.colorRange().length('80%');
        // chart.listen("pointClick", function (e) {
        //     var url = "https://en.wikipedia.org/wiki/" + e.point.get("x");
        //     window.open(url, "_blank");
        // });
        // display the word cloud chart
        chart.container("container");
        chart.draw();
    });