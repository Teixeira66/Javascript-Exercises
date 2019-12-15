const paragraph = document.getElementById("paragraph");
const TextBox = document.getElementById("MyTextBox");
const MyButton = document.getElementById("MyButton");

function AddParagraph()  {
    paragraph.innerText = MyTextBox.value;
}

MyButton.addEventListener("click",AddParagraph);
