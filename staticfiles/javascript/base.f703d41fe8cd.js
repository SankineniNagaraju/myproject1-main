function requestCallback(){
    var divisionOne = document.createElement("div");
    var divisionTwo = document.createElement("div");
    document.body.appendChild(divisionOne);
    document.body.appendChild(divisionTwo);
    divisionOne.style.width = '100%';
    divisionOne.style.height = '1200px';
    divisionOne.style.backgroundColor = 'transparent';
    divisionOne.style.filter = 'blur(20px)';
    divisionTwo.style.width = '300px';
    divisionTwo.style.height = '300px';
    divisionTwo.style.backgroundColor = 'white';
    divisionTwo.style.position = 'absolute';
    divisionTwo.style.top = "150px";
    divisionTwo.style.left = "40%";
    
}

  
