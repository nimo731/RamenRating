const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Naruto Ramen", restaurant: "Menya", image: "./images/naruto.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Kojiro Ramen", restaurant: "Ramen-ya", image: "./images/kojiro.jpg", rating: 7, comment: "Very rich!" },
    {id:4, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "./images/nirvana.jpg", rating: 3, comment: "Not bad!" },
    {id:5, name: "Gyukotsu Ramen", restaurant: "Menya", image: "./images/gyukotsu.jpg", rating: 6, comment: "Very rich!" },
 ];

 function displayRamen(){
    const ramenMenu = document.getElementById("rm-menu");
    ramenMenu.innerHTML = "";
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () =>  handleClick(ramen));
        ramenMenu.appendChild(img);
    });
 }

 function handleClick(ramen){
    document.getElementById ("rm-image").src = ramen.image;
    document.getElementById ("rm-name").textContent = ramen.name;
    document.getElementById ("rm-restaurant").textContent = ramen.restaurant;
    document.getElementById ("rm-rating").textContent = `Rating: ${ramen.rating}`;
    document.getElementById ("rm-comment").textContent = `Comment: ${ramen.comment}`;
 }

 function addSubmitListener(){
 const form = document.getElementById("fm-form");   
   form.addEventListener("submit", (event ) => {
         event.preventDefault();
         const newRamen= {
             name: document.getElementById("fm-name").value,
             restaurant: document.getElementById("fm-restaurant").value,
             image: document.getElementById("fm-image").value,
             rating: document.getElementById("fm-rating").value,
             comment: document.getElementById("fm-comment").value
         };

         ramens.push(newRamen);
            displayRamen();
            form.reset();
        });
    }

    function main(){
        displayRamen();
        addSubmitListener();

        if (ramens.length > 0){
            handleClick(ramens[0]);
        }
    }

    document.addEventListener("DOMContentLoaded", main);
         
 