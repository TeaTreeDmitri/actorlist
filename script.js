//fetch

const array = "./actors.json"

fetch(array)
    .then(res => res.json())
    .then(dataReceived);

    function dataReceived(data) {
        console.log(data);
        data.forEach(popActor);
    }

    function popActor(b) {
        const templateElement = document.querySelector('#trailer').content;
        const myClone = templateElement.cloneNode(true);
        myClone.querySelector("#fullName").textContent = b.fullname;
        myClone.querySelector("#movieName").textContent  = b.movie;
        const parentElement = document.querySelector("main");
        parentElement.appendChild(myClone);
        buttons();
    };

    function buttons(){
    const fullName = document.querySelector("#fullName");
    const movieName = document.querySelector("#movieName");
    if(fullName){
        fullName.addEventListener("click", onClick);
    }

    function onClick() {
        movieName.classList.remove("hidden");
        console.log("boo")
    }
}

