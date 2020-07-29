$("#currentDay").text(moment().format("dddd, MMM Do"))

var startHour = 9
var endHour = 17

for (var i=startHour;i<=endHour;i++){
    var row = document.createElement("div");
    row.setAttribute("class", "row")

    var hour = document.createElement("div");
    hour.setAttribute("class", "hour col-1")
    //hour content
    var time = moment(i, "H")
    var timeFormatted = time.format("hA")
    hour.innerText = timeFormatted
    row.appendChild(hour)

    var description = document.createElement("textarea");
    description.setAttribute("class", "description col-10")
    //description content
    currentHour = parseInt(moment().format("H"))

    if (i<currentHour){
        description.classList.add("past")
    } else if (i>currentHour){
        description.classList.add("future")
    } else {
        description.classList.add("present")
    }

    

    description.value = localStorage.getItem(timeFormatted)
    
    row.appendChild(description)

    var saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveBtn col-1")
    //save button content

    var innerText = description.value
        localStorage.setItem(timeFormatted, innerText)

    row.appendChild(saveButton)

    document.querySelector(".container").appendChild(row)
}