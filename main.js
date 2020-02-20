(function () {
    'use strict';

    // let selectBox = document.getElementById("disease");

    // window.addEventListener("click", selectBox);
    //
    // function selectBox() {
    //
    // }

    // $('.box').on('click', function(e){
    //   e.preventDefault();
    //   $(this).toggleClass('selected');
    // });

    window.addEventListener("click", function(event) {
        // console.log("hello");
        if (event.target.classList.contains("disease")) {
            event.preventDefault();
            event.target.classList.toggle("selected");
        }
    });

    //
    // var content = document.getElementById("content");
    // var winHeight = window.innerHeight;
    // var winWidth = window.innerWidth;
    // var boxHeight = box1.offsetHeight;
    // var boxWidth = box1.offsetWidth;
    //
    // function printInfo() {
    //     console.log("Window height: " + winHeight);
    //     console.log("Window width: " + winWidth);
    //     console.log("Box height: " + boxHeight);
    //     console.log("Box width: " + boxWidth);
    //     console.log("Box position left: " + window.getComputedStyle(box1).left);
    //     console.log("Box position top: " + window.getComputedStyle(box1).top);
    //     //använda parseInt här för att komma åt siffrorna
    // }
    //
    // function centerBox() {
    //     winHeight = window.innerHeight;
    //     winWidth = window.innerWidth;
    //     boxHeight = box1.offsetHeight;
    //     boxWidth = box1.offsetWidth;
    //
    //     box1.style.zIndex = 1;
    //     box1.style.left = (winWidth / 2) - (boxWidth / 2) + "px";
    //     box1.style.top = (winHeight / 2) - (boxHeight / 2) + "px";
    //     //console.log("/////////////After centering: /////////////");
    //     //printInfo();
    // }
    //
    // function toggleCircle() { //e-tangent
    //     var all = document.getElementsByClassName("selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].classList.toggle("circle");
    //     }
    // }
    //
    // function increaseSize() { //q-tangent
    //     var all = document.getElementsByClassName("selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var height = all[i].offsetHeight; //gettar
    //         var newHeight = height + 10;
    //         var width = all[i].offsetWidth;
    //         var newWidth = width + 10;
    //
    //         all[i].style.height = newHeight + 'px'; //settar
    //         all[i].style.width = newWidth + 'px';
    //
    //         all[i].style.left = (all[i].offsetLeft - 5) + "px";
    //         all[i].style.top = (all[i].offsetTop - 5) + "px";
    //         //centerElement();
    //         // console.log(all[i])
    //     }
    // }
    //
    // function decreaseSize() { //w-tangent
    //     var all = document.getElementsByClassName("selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var height = all[i].offsetHeight;
    //         var newHeight = height - 10;
    //         var width = all[i].offsetWidth;
    //         var newWidth = width - 10;
    //
    //         all[i].style.height = newHeight + 'px';
    //         all[i].style.width = newWidth + 'px';
    //
    //         all[i].style.left = (all[i].offsetLeft + 5) + "px";
    //         all[i].style.top = (all[i].offsetTop + 5) + "px";
    //     }
    // }
    //
    // function changeColor() { //r-tangent
    //     var all = document.getElementsByClassName("selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var color = all[i].classList;
    //
    //         if (color.contains("mint")) {
    //             all[i].classList.remove("mint");
    //             all[i].classList.add("yellow");
    //         } else if (color.contains("yellow")) {
    //             all[i].classList.remove("yellow");
    //             all[i].classList.add("peach");
    //         } else if (color.contains("peach")) {
    //             all[i].classList.remove("peach");
    //             all[i].classList.add("purple");
    //         } else if (color.contains("purple")) {
    //             all[i].classList.remove("purple");
    //             all[i].classList.add("mint");
    //         }
    //     }
    // }
    //
    // function duplicate() { //t-tangent
    //     var all = document.querySelectorAll(".selected");
    //
    //     console.log("number of elements created: " + all.length);
    //     for (var i = 0; i < all.length; i++) {
    //         var temp = all[i].cloneNode();
    //
    //         temp.removeAttribute("id"); //strippar id pga fler kan ej ha samma
    //         content.appendChild(temp);
    //
    //         temp.style.top = Math.floor(Math.random() *
    //         (window.innerHeight - temp.offsetHeight)) + "px";
    //         temp.style.left = Math.floor(Math.random() *
    //         (window.innerWidth - temp.offsetWidth)) + "px";
    //
    //         temp.style.zIndex++;
    //         //console.log("z index is now: " + temp.style.zIndex);
    //     }
    // }
    //
    // function moveBackward() { //a-tangent
    //     var all = document.querySelectorAll(".selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].style.zIndex--;
    //     }
    // }
    //
    // function moveForward() { //s-tangent
    //     var all = document.querySelectorAll(".selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].style.zIndex++;
    //     }
    // }
    //
    // function remove() { //y-tangent
    //     var all = document.querySelectorAll(".selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].parentNode.removeChild(all[i]);//parentNode pga vet utgläget
    //         //console.log(all[i])
    //
    //         //document.removeChild(all[i]); //funkar ej
    //         //body.removeChild(all[i]); //funkar ej
    //     }
    // }
    //
    // function unselectAll() { //u-tangent
    //     var all = document.getElementsByClassName("box");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].classList.remove("selected");
    //     }
    // }
    //
    // function selectAll() { //i-tangent
    //     var all = document.getElementsByClassName("box");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].classList.add("selected");
    //     }
    // }
    //
    // function moveUp() {
    //     var all = document.getElementsByClassName("selected");
    //     var step = 10;
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var top = all[i].offsetTop;
    //
    //         all[i].style.top = (top - step) + "px";
    //     }
    // }
    //
    // function moveDown() {
    //     var all = document.getElementsByClassName("selected");
    //     var step = 10;
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var top = all[i].offsetTop;
    //
    //         all[i].style.top = (top + step) + "px";
    //     }
    // }
    //
    // function moveLeft() {
    //     var all = document.getElementsByClassName("selected");
    //     var step = 10;
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var top = all[i].offsetLeft;
    //
    //         all[i].style.left = (top - step) + "px";
    //     }
    // }
    //
    // function moveRight() {
    //     var all = document.getElementsByClassName("selected");
    //     var step = 10;
    //
    //     for (var i = 0; i < all.length; i++) {
    //         var top = all[i].offsetLeft;
    //
    //         all[i].style.left = (top + step) + "px";
    //     }
    // }
    //
    // function randomElement() { //p-tangent
    //     var randomElement = box1.cloneNode();
    //     var randomColors = ["mint", "yellow", "purple", "peach"];
    //     var randomForms = ["box", "circle"];
    //
    //     randomElement.removeAttribute("id");
    //     //console.log(randomElement);
    //     content.appendChild(randomElement);
    //
    //     randomElement.style.top = Math.floor(Math.random() * (window.innerHeight
    //     - randomElement.offsetHeight)) + "px";
    //     randomElement.style.left = Math.floor(Math.random() * (window.innerWidth
    //     - randomElement.offsetWidth)) + "px";
    //
    //     randomElement.style.zIndex++;
    //     randomElement.classList.remove("mint");
    //
    //     var newColor = randomColors[Math.floor(Math.random() *
    //     randomColors.length)];
    //
    //     randomElement.classList.add(newColor);
    //
    //     var form = randomForms[Math.floor(Math.random() * randomForms.length)];
    //
    //     randomElement.classList.add(form);
    //     //console.log(randomElement);
    // }
    //
    // function timer(event) {
    //     event.target.classList.toggle("animateSize");
    //     event.target.style.width = "2px";
    //     event.target.style.height = "2px";
    //
    //     window.setTimeout(function() {
    //         content.removeChild(event.target);
    //     }, 2000);
    // }
    //
    // function animateShape() {
    //     var all = document.querySelectorAll(".selected");
    //
    //     for (var i = 0; i < all.length; i++) {
    //         all[i].classList.toggle("animateShape");
    //         all[i].style.width = "500px";
    //         all[i].style.height = "200px";
    //     }
    // }
    //
    // //centerBox används som callback här, körs ej direkt
    // window.addEventListener("resize", centerBox);
    //
    //
    //
    //
    // window.addEventListener("dblclick", function(event) {
    //     timer(event);
    // });
    //
    // document.addEventListener("keydown", function(event) {
    //     var key = event.key;
    //
    //     switch (key) {
    //         case "e":
    //             toggleCircle();
    //             break;
    //         case "q":
    //             increaseSize();
    //             break;
    //         case "w":
    //             decreaseSize();
    //             break;
    //         case "r":
    //             changeColor();
    //             break;
    //         case "t":
    //             duplicate();
    //             break;
    //         case "a":
    //             moveBackward();
    //             break;
    //         case "s":
    //             moveForward();
    //             break;
    //         case "y":
    //             remove();
    //             break;
    //         case "u":
    //             unselectAll();
    //             break;
    //         case "i":
    //             selectAll();
    //             break;
    //         case "ArrowUp":
    //             event.preventDefault();
    //             moveUp();
    //             break;
    //         case "ArrowDown":
    //             event.preventDefault();
    //             moveDown();
    //             break;
    //         case "ArrowLeft":
    //             event.preventDefault();
    //             moveLeft();
    //             break;
    //         case "ArrowRight":
    //             event.preventDefault();
    //             moveRight();
    //             break;
    //         case "p":
    //             randomElement();
    //             break;
    //         case "g":
    //             animateShape();
    //             break;
    //     }
    // });
    //
    // // window.console.log('Sandbox is ready!');
    // // printInfo();
    // centerBox();
})();
