let inputBox = document.querySelector('.inputField input');
let addBtn = document.querySelector('.inputField button');
let todoList = document.querySelector('.todoList');
let deleteAllBtn = document.querySelector('.footer button')

inputBox.onkeyup = function () {
    let userData = inputBox.value;         // get user entered value
    if (userData.trim() != 0) {                // if user value are'n only spaces
        addBtn.classList.add('active');          // active the add button
    } else {
        addBtn.classList.remove('active');   // unactive the add button
    }
}

showTasks() // calling showTasks funtion
// if  we are click on the add buttton.
addBtn.onclick = function () {
    let userData = inputBox.value;      // getting user entered value
    let getlocalStroage = localStorage.getItem('New Todo');     //getting localStroge
    if (getlocalStroage == null) {          // if local stroge is null
        listArr = [];                      // creating blank array
    } else {
        listArr = JSON.parse(getlocalStroage)   // Transforming JSON String into a JS object
    }
    listArr.push(userData);
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //transforming js object into a json string
    showTasks() // calling showTasks funtion
    addBtn.classList.remove('active');   // unactive the add button
}

//  Function to add task list inside ul
function showTasks() {
    let getlocalStroage = localStorage.getItem('New Todo');     //getting localStroge
    if (getlocalStroage == null) {          // if local stroge is null
        listArr = [];                      // creating blank array
    } else {
        listArr = JSON.parse(getlocalStroage);  // Transforming JSON String into a JS object
    }

    let pendingNumber = document.querySelector('.pendingNumber');
    pendingNumber.textContent = listArr.length;   //passing the lenght value in pendingNumber
    if (listArr.length > 0) {
        deleteAllBtn.classList.add('active');   //active the clearall button
    } else {
        deleteAllBtn.classList.remove('active');   //unactive the clearall button
    }

    let newLiTag = '';
    listArr.forEach(function (element, index) {
        newLiTag += ` <li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i>-</span> </li>`;
    })
    todoList.innerHTML = newLiTag;    //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}

// delete tasks function
function deleteTask(index) {
    let getlocalStroage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getlocalStroage)
    listArr.splice(index, 1); // delete or remove the particular indexed li
    // after remove the li again update the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //transforming js object into a json string
    showTasks(); // calling showTasks funtion
}

// delete all tasks function 
deleteAllBtn.onclick = function () {
    listArr = []; // empty an array
    //after delete all task again upadte the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //transforming js object into a json string
    showTasks(); // calling showTasks funtion
}










