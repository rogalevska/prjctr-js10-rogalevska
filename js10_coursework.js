"use strict";

const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const preset = document.querySelector(".preset");
const plusMonthButton = document.getElementById("plusmonth");
const displayResultCalc = document.getElementById("calculationsResult");
const resultsTable = document.querySelector(".resultstable");
const tab = document.querySelector(".tab");

tab.addEventListener("click", handleTab);

function handleTab(event) {
    if (event.target.classList.contains("datescalc")) {
        displayDates(event);
        renderTable();
    } else if (event.target.classList.contains("holidayslist")) {
        displayHolidays(event);
    };
  };

  function displayDates(event) {
    document.getElementById("datespage").style.display = "block";
    document.getElementById("holidaypage").style.display = "none";
  };
  
  function displayHolidays(event) {
    document.getElementById("datespage").style.display = "none";
    document.getElementById("holidaypage").style.display = "block";
  };

  startDateInput.addEventListener("change", enableEndDate);
  function enableEndDate(event) {
    if(startDateInput.value) {
        endDateInput.disabled = false;
        endDateInput.setAttribute("min", startDateInput.value);
    };
  };

  preset.addEventListener("click", definePreset);
  let presetDays;

function definePreset(event) {
    if(event.target.classList.contains("plusweek")) {
        presetDays = 7;
    } else if(event.target.classList.contains("plusmonth")) {
        presetDays = 30;
    };
    calcPreset(event, presetDays);
    return presetDays;
};

  function calcPreset(event, addDays) {
    console.log(startDateInput.value);
    let startDateInputVal;
    if (startDateInput.value) {
        startDateInputVal = new Date(startDateInput.value);
        let calcNewDate = new Date((startDateInputVal).setDate(startDateInputVal.getDate() + addDays));
        let endDateInputVal = formatDate(calcNewDate);
        endDateInput.value = endDateInputVal;
    } else {
        let today = new Date();
        startDateInput.value = formatDate(today);
        startDateInputVal = new Date(startDateInput.value);
        let calcNewDate = new Date((startDateInputVal).setDate(startDateInputVal.getDate() + addDays));
        let endDateInputVal = formatDate(calcNewDate);
        endDateInput.value = endDateInputVal;
        enableEndDate();
    };
  };

  function formatDate(date) {
    let year = date.toLocaleString("default", { year: "numeric" });
    let month = date.toLocaleString("default", { month: "2-digit" });
    let day = date.toLocaleString("default", { day: "2-digit" });
    return `${year}-${month}-${day}`;
  };

  const submit = document.getElementById("submit");
  submit.addEventListener("click", calcDays);

  function calcDays(event) {
    let dayTypeSelect = document.getElementsByName("dayfilter");
    let dayTypeElem = Array.from(dayTypeSelect).find((radio => radio.checked));
    let dayType = dayTypeElem.value;

    let startDateElem = document.getElementById("startDate");
    let startDate = new Date(startDateElem.value).toDateString();
    let endDateElem = document.getElementById("endDate");
    let endDate = new Date(endDateElem.value).toDateString();
    let daysBetweenAmount = (Math.abs((Date.parse(new Date(endDate)) - Date.parse(new Date(startDate))) / 1000 / 60 / 60 / 24));
    let days;

    if (dayType === "alldays") {
        days = daysBetweenAmount;
    } else if (dayType === "weekdays") {
        days = durationBetweenDatesWeekdays(event, startDate, daysBetweenAmount);
    } else if (dayType === "weekends") {
        days = durationBetweenDatesWeekends(event, startDate, daysBetweenAmount);
    }
    let dimensionSelect = document.getElementsByName("dimension");
    let dimensionElem = Array.from(dimensionSelect).find((radio => radio.checked));
    let dimension = dimensionElem.value;

    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    let calcResult;
    if (dimension === 'seconds') {
        calcResult = `${seconds} seconds`;
       } else if (dimension === 'minutes') {
        calcResult = `${minutes} minutes`;
       } else if (dimension === 'hours') {
        calcResult = `${hours} hours`;
       } else if ( dimension === 'days') {
        calcResult = `${days} days`;
       } else {
        return `Invalid dimension. ${days} days`;
       };
       displayResultCalc.innerHTML = `RESULT: ${calcResult}.`;
       const tableElem = {
        "startdate": startDate,
        "enddate": endDate,
        "result": calcResult
       };

       function storeResultInLocalStorage(value) {
        let tableData = [];

        if (localStorage.getItem("tableData")) {
          tableData = JSON.parse(localStorage.getItem("tableData"));
        };
      
        tableData.push(value);
        if (tableData.length > 10) {
            tableData.shift();
        };
        localStorage.setItem("tableData", JSON.stringify(tableData));
      };

      function addResult(value) {
        const tr = document.createElement("tr");
        const column1 = document.createElement("th");
        const column2 = document.createElement("th");
        const column3 = document.createElement("th");
        column1.innerHTML = tableElem.startdate;
        column2.innerHTML = tableElem.enddate;
        column3.innerHTML = tableElem.result;
        tr.append(column1);
        tr.append(column2);
        tr.append(column3);
        resultsTable.append(tr);
        storeResultInLocalStorage(value);
      };
      addResult(tableElem, tableElem);
    };


    function renderTable() {
        resultsTable.innerHTML = `
        <tr>
		<th>Start Date</th>
		<th>End Date</th>
		<th>Result</th>
	  </tr>`;
      
        if (localStorage.getItem("tableData")) {
          const tableData = JSON.parse(localStorage.getItem("tableData"));
      
          tableData.forEach((elem) => {
            const tr = document.createElement("tr");
            const column1 = document.createElement("th");
            const column2 = document.createElement("th");
            const column3 = document.createElement("th");
            column1.innerHTML = elem.startdate;
            column2.innerHTML = elem.enddate;
            column3.innerHTML = elem.result;
            tr.append(column1);
            tr.append(column2);
            tr.append(column3);
            resultsTable.append(tr);
          });
        };
      };


function durationBetweenDatesWeekdays (event, startDate, daysBetweenAmount) {  
    let loopLength = daysBetweenAmount;
    let loopDate = new Date(startDate);
    let sum = 0; 
    
    for (let i = 0; i < loopLength; i++) {
        if (loopDate.getDay() % 6 !== 0) {
            sum++;
        };
        loopDate = new Date(loopDate.setDate(loopDate.getDate() + 1));
    };
    return sum;
};

function durationBetweenDatesWeekends (event, startDate, daysBetweenAmount) {
    let loopLength = daysBetweenAmount;
    let loopDate = new Date(startDate);
    let sum = 0; 
    
    for (let i = 0; i < loopLength; i++) {
        if (loopDate.getDay() % 6 === 0) {
            sum++;
        };
        loopDate = new Date(loopDate.setDate(loopDate.getDate() + 1));
    };
    return sum;
};

