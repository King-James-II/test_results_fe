// Constants representing maximum points and passing threshold
const maxPoints = 120;
const passingPoints = 70;

// Individual scores for each student
const samPoints = 84;
let alexPoints = 45;
const jessiePoints = 99;

// Boolean variable to indicate if Alex passed
const didAlexPass= !false;

// Displaying individual scores for Sam, Alex, and Jessie
const samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);

const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " + maxPoints;
console.log(alexPointsDisplay);

const jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " + maxPoints;
console.log(jessiePointsDisplay);

// Calculating and displaying percentages for each student
const samPercentage = (samPoints/maxPoints)*100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);

const alexPercentage = (alexPoints/maxPoints)*100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);

const jessiePercentage = (jessiePoints/maxPoints)*100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);

// Calculating and displaying missed points for each student
const samMissedPoints = maxPoints - samPoints;
const alexMissedPoints = maxPoints - alexPoints;
const jessieMissedPoints = maxPoints - jessiePoints;
const samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s).";
console.log(samMissedPointsDisplay);
const alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s).";
console.log(alexMissedPointsDisplay);
const jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + " point(s).";
console.log(jessieMissedPointsDisplay);

// Calculating and displaying class average
const classAveragePoints = (samPoints + alexPoints + jessiePoints)/3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "The class average was " + classAveragePoints + " points or " + classAveragePercent.toFixed(2) + "%.";
console.log(classAvgDisplay);

// Updating Alex's score and displaying the updated score
alexPoints = 75;
const alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);

// Updating HTML elements with class statistics
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = `Raw Points: ${classAveragePoints}`;
listItemArray[4].innerHTML = `Percentage: ${classAveragePercent.toFixed(2)}%`;
listItemArray[8].innerHTML = `Missed Points: ${120 - classAveragePoints}`;
listItemArray[12].innerHTML = "Final Notes: Moderate performance; missed points indicate areas for improvement.";
