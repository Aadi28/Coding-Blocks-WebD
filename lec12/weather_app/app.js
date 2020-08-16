$(document).ready(() => {
    $("#button").click(() => {
        var input_value = $("#inp").val();
        console.log(input_value)
    })

    // $(".output").append(data.toString())
})

// document.getElementById("button").addEventListener("click", getVar)

// function getVar() {
//     var inp = document.getElementById("inp").innerText
//     console.log("button pressed")
// }

export { input_value };
