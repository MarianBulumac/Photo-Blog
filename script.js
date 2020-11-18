// Get the modal

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// deseneaza pozele in pagina
var list = [];
async function draw() {
    //document.querySelector(".backgroundLoader").classList.remove("hidden");
    var response = await fetch("https://blog-photo-4400d.firebaseio.com/photos.json");
    window.list = await response.json();
    // document.querySelector(".backgroundLoader").classList.add("hidden");
    var str = "";

    for (var i in list) {
        if (list[i] === null) {
            continue;
        }

        str += `
   
    <img
      id="myImg"
      src="${list[i].imagine}"
      alt="${list[i].detalii}"
      class="w3-image"
      width="1000"
      height="500"
      style="margin-bottom:25px;"
    />
    `;


        document.querySelector("#showPhotos").innerHTML = str;
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}