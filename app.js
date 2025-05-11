const malumotlararray = JSON.parse(localStorage.getItem("malumotlar")) || []


const forma = document.getElementById("myForm")
const royxatWrap = document.getElementById("dataList")


function royxat() {
    royxatWrap.innerHTML = ""

    if (malumotlararray.length === 0) {
        const emptyMessage = document.createElement("li")
        emptyMessage.textContent = "No saved login information yet"
        emptyMessage.style.textAlign = "center"
        emptyMessage.style.color = "#757575"
        royxatWrap.appendChild(emptyMessage)
        return
    }

    malumotlararray.forEach((item, index) => {
        const li = document.createElement("li")

        const infoDiv = document.createElement("div")
        infoDiv.className = "info"

        const emailInfo = document.createElement("div")
        emailInfo.innerHTML = `<span class="label">Email:</span> ${item.email}`

        const passwordInfo = document.createElement("div")
        passwordInfo.innerHTML = `<span class="label">Password:</span> ${item.password}`

        infoDiv.appendChild(emailInfo)
        infoDiv.appendChild(passwordInfo)

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "del"
        deleteBtn.textContent = "O'chirish"
        deleteBtn.onclick = () => {
            del(index)
        }

        li.appendChild(infoDiv)
        li.appendChild(deleteBtn)
        royxatWrap.appendChild(li)
    })
}

royxat()

forma.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value


    const yangiobj = { email, password }
    malumotlararray.push(yangiobj)
    localStorage.setItem("malumotlar", JSON.stringify(malumotlararray))
    royxat()
    forma.reset()
})


function del(index) {
    malumotlararray.splice(index, 1)
    localStorage.setItem("malumotlar", JSON.stringify(malumotlararray))
    royxat()
}
