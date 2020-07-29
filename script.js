$("#currentDay").text(moment().format("dddd, MMMM Do"))

let startHour = 9
let endHour = 17

for (let i = startHour; i <= endHour; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row")

    let hour = document.createElement("div");
    hour.setAttribute("class", "hour col-1")
    let time = moment(i, "H")
    let timeFormatted = time.format("hA")
    hour.innerText = timeFormatted
    row.appendChild(hour)

    let description = document.createElement("textarea");
    description.setAttribute("class", "description col-10")
    currentHour = parseInt(moment().format("H"))

    if (i < currentHour) {
        description.classList.add("past")
    } else if (i > currentHour) {
        description.classList.add("future")
    } else {
        description.classList.add("present")
    }

    description.value = localStorage.getItem(timeFormatted)
    row.appendChild(description)

    let saveButton = document.createElement("button");
    saveButton.setAttribute("class", "saveBtn col-1")
    saveButton.classList.add("fas", "fa-save")

    saveButton.addEventListener("click", function (event) {
        let innerText = description.value
        localStorage.setItem(timeFormatted, innerText)
    })
    row.appendChild(saveButton)

    document.querySelector(".container").appendChild(row)
}