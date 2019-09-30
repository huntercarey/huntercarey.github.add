

/*
    * Make references to the HTML elements that we want to interact with through JS
    * Add in the ability to add a new list item
    * Add in the ability to remove a list item
    * Add i the ability to mark a list item as DONE
*/

var submit = document.getElementById('submitButton');
var input = document.getElementById('textInput');
var ul = document.querySelector('ul'); //querySelector gets the first instance of a particular element type.

function createListElement() {



    //Create a new li element
    var li = document.createElement('li');

    //Add content to it
    li.innerHTML = input.value;

    //Add it to the ul
    ul.appendChild(li);
    input.value = '';

    //Create a function to handle showing a list item as complete

    function markDone () {
        //If the li does not have a class of 'done' applied to it, it will be applied. If it does, it will be taken off.
        li.classList.toggle('done');
    }
        li.addEventListener('click', markDone);

        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        //Add a button as a child of the li
        li.appendChild(deleteButton); 


        //This function will be called whenever the delete button is called
        function deleteListItem () {
            li.classList.add('delete');
        }
    deleteButton.addEventListener('click', deleteListItem);
}

function createListItemSubmitButton() {
    if (input.value.length > 0) {
        createListElement();
    }
}

function createListItemEnterKey(event) {
    console.log(event.keyCode);

    //Create a new list item if there is text in the input field and the enter key is pressed
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Make it so that
submit.addEventListener('click', createListItemSubmitButton);

//Make it so that when the submit button is clicked, the createListElement function is called
submit.addEventListener('click', createListElement);