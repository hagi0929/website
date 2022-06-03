document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(mouseX);
    console.log(mouseY);
    console.log("-"+50+(6*(mouseX/screen.width)-3));
    document.getElementById("floor-wrapper").style.transform = "translateX(-"+(20*mouseX/screen.width-10)+"px)";
    document.getElementById("spaceman-wrapper").style.transform = "translateY(-"+(50-(6*(mouseY/screen.width)-3))+"%)"+ "translateX(-"+(50-(6*(mouseX/screen.width)-3))+"%)";

});