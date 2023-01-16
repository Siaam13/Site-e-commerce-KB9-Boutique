let section = document.querySelector("section.petitpanier");

loading();

function loading() {
  let myList = localStorage.getItem("list");
  if (myList !== null) {
    // create all element, animation, addeventlistener again as before but input data from the object of panierContent with forEach()
    let myListArray = JSON.parse(myList);
    myListArray.forEach((item) => {
      let todo = document.createElement("div");
      todo.classList.add("todo");

      let image = document.createElement("div");
      image.classList.add("image");
      image.innerHTML = item.item3;

      let content = document.createElement("div");
      content.classList.add("content");

      let title = document.createElement("h3");
      title.classList.add("title");
      title.innerText = item.item1;

      let price = document.createElement("p");
      price.classList.add("price");
      price.innerText = item.item2;

      let formcontent = document.createElement("div");
      formcontent.classList.add("formcontent");

      let form = document.createElement("form");
      form.classList.add("ammount");
      form.action = "";
      form.method = "GET";

      let input = document.createElement("input");
      input.classList.add("ammountcontent");
      input.type = "number";
      input.min = "1";
      input.name = "ammount";
      input.value = "1";

      let completeButton = document.createElement("button");
      completeButton.classList.add("complete");
      completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';

      let trashButton = document.createElement("button");
      trashButton.classList.add("trash");
      trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

      todo.appendChild(image);

      formcontent.appendChild(form);
      form.appendChild(input);

      content.appendChild(title);
      content.appendChild(price);

      todo.appendChild(formcontent);
      todo.appendChild(content);
      todo.appendChild(completeButton);
      todo.appendChild(trashButton);

      section.appendChild(todo);

      //animation
      todo.style.animation = "scaleUp 0.3s forwards";

      completeButton.addEventListener("click", (e) => {
        let todoItem = e.target.parentElement.classList.toggle("done");
        // console.log(e.target.parentElement);
      });

      trashButton.addEventListener("click", (e) => {
        let todoItem = e.target.parentElement;
        // console.log(e.target.parentElement);
        todoItem.addEventListener("animationend", () => {
          todoItem.remove();

          let myImage = todoItem.children[0].innerHTML;
          let myListArray = JSON.parse(localStorage.getItem("list"));
          myListArray.forEach((item, index) => {
            if (item.item3 == myImage) {
              myListArray.splice(index, 1);

              localStorage.setItem("list", JSON.stringify(myListArray));
              let myNumbersecond = JSON.parse(localStorage.getItem("list2"));
              myNumbersecond--;
              localStorage.setItem("list2", JSON.stringify(myNumbersecond));
              letter.innerHTML = myNumbersecond;
            }
          });
        });
        todoItem.style.animation = "scaleDown 0.3s forwards";
        // console.log(todoItem);
      });
    });
  }
}
