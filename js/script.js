// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("#addForm")
let employeeList = document.querySelector("#employees")
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newrow = employeeList.insertRow(-1)
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = newrow.insertCell(0)
    let cellName = newrow.insertCell(1)
    let cellExt = newrow.insertCell(2)
    let cellEmail = newrow.insertCell(3)
    let cellDept = newrow.insertCell(4)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let newId = document.createTextNode(id)
    let newName = document.createTextNode(name)
    let newExt = document.createTextNode(extension)
    let newEmail = document.createTextNode(email)
    let newDept = document.createTextNode(department)
    cellID.appendChild(newId)
    cellName.appendChild(newName)
    cellExt.appendChild(newExt)
    cellEmail.appendChild(newEmail)
    cellDept.appendChild(newDept)
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    newrow.appendChild(deleteBtn)
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE
employeeList.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
    if (confirm('Are you sure you want to delete this Employee?')) {
        // REMOVE THE SELECTED LI
        deleteRow(e.target.parentElement.rowIndex)
    }
    
})