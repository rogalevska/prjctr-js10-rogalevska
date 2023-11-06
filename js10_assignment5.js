'use strict';

// Task1

function durationBetweenDates(startDate = '01 Jan 1970', endDate = new Date().toDateString(), dimension) {
    
   let seconds = Math.abs((Date.parse(new Date(endDate)) - Date.parse(new Date(startDate))) / 1000);
   let minutes = seconds / 60;
   let hours = minutes / 60;
   let days = hours / 24;
   
   if (dimension === 'seconds') {
    return `${seconds} seconds`;
   } else if (dimension === 'minutes') {
    return `${minutes} minutes`;
   } else if (dimension === 'hours') {
    return `${hours} hours`;
   } else if ( dimension === 'days') {
    return `${days} days`;
   } else {
    return `Invalid dimension. ${seconds} seconds`;
   }
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'))  // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'))  // поверне '362 days'

// Task2

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };

    function optimizer(data) {
        const newData = Object.entries(data).map((arr) => {
            return [arr[0].toLowerCase(), Number(arr[1]).toFixed(2)];
        });
        return Object.fromEntries(newData);
    };

    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}