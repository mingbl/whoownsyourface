const coverFaces = document.querySelectorAll(".image")
console.log(coverFaces[1].textContent.trim())

var displayCredit = function(idx, event) {
    let text = this.textContent.trim()
    var creditName = document.getElementById("tspan2832--inject-1")
    creditName.textContent = text
}

var revertCredit = function(idx, event) {
    var creditName = document.getElementById("tspan2832--inject-1")
    creditName.textContent = titleCredit
}


coverFaces.forEach((faceDiv, i) => {
    faceDiv.addEventListener("mouseover", displayCredit.bind(faceDiv, i))
    faceDiv.addEventListener("mouseout", revertCredit.bind(faceDiv, i))
})