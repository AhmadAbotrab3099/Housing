const dataA = [
    { flatNr: "1", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "2", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "3", rooms: "3", floor: "1.NP", flatSize: "67,97 m²", balconySize: "2,3 m²", price: 146500, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "4", rooms: "1", floor: "1.NP", flatSize: "38,04 m²", balconySize: "3,81 m²", price: 81990, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "5", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Reserved", src: 'assets/1.jpg' },
    { flatNr: "6", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "7", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "8", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "9", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "10", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Reserved", src: 'assets/1.jpg' },
    { flatNr: "11", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free", src: 'assets/1.jpg' },
    { flatNr: "12", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free", src: 'assets/1.jpg' }
  
  ]
  
  const dataB = [
    { flatNr: "1", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "2", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "3", rooms: "3", floor: "1.NP", flatSize: "67,97 m²", balconySize: "2,3 m²", price: 146500, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "4", rooms: "1", floor: "1.NP", flatSize: "38,04 m²", balconySize: "3,81 m²", price: 81990, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "5", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "6", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Reserved", src: "assets/2.jpg" },
    { flatNr: "7", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "8", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "9", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "10", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Reserved", src: "assets/1.jpg" },
    { flatNr: "11", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free", src: "assets/1.jpg" },
    { flatNr: "12", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free", src: "assets/1.jpg" },
  ]
  
  
  var i = 0;
  
  /* init Array dataA */
  for (i = 0; i < dataA.length; i++) {
  
    let numa = document.getElementById("numa" + (i + 1).toString());
    numa.innerHTML = dataA[i].flatNr + ".";
  
    let roomsa = document.getElementById("roomsa" + (i + 1).toString());
    roomsa.innerHTML = dataA[i].rooms;
  
    let floora = document.getElementById("floora" + (i + 1).toString());
    floora.innerHTML = dataA[i].floor;
  
    let flatSizea = document.getElementById("flatSizea" + (i + 1).toString());
    flatSizea.innerHTML = dataA[i].flatSize;
  
    let balconySizea = document.getElementById("balconySizea" + (i + 1).toString());
    balconySizea.innerHTML = dataA[i].balconySize;

    let pricea = document.getElementById("pricea" + (i + 1).toString());
    pricea.innerHTML = dataA[i].price+",00 €";
  
    let imagea = document.getElementById('imga' + (i + 1).toString());
    imagea.src = dataA[i].src;
  
    let availabiltya = document.getElementById("avla" + (i + 1).toString());
    availabiltya.innerHTML = dataA[i].availabilty;
  
    if (dataA[i].availabilty == "Free") {

      availabiltya.classList.add("volny");
    }
  
    else if (dataA[i].availabilty == "Reserved") {
      availabiltya.classList.add("rezervovany");
    }
  
  }
  
  /* init Array dataB */
  for (i = 0; i < dataB.length; i++) {
  
    let numb = document.getElementById("numb" + (i + 1).toString());
    numb.innerHTML = dataB[i].flatNr + ".";
  
    let roomsb = document.getElementById("roomsb" + (i + 1).toString());
    roomsb.innerHTML = dataB[i].rooms;
  
    let floorb = document.getElementById("floorb" + (i + 1).toString());
    floorb.innerHTML = dataB[i].floor;
  
    let flatSizeb = document.getElementById("flatSizeb" + (i + 1).toString());
    flatSizeb.innerHTML = dataB[i].flatSize;
  
    let balconySizeb = document.getElementById("balconySizeb" + (i + 1).toString());
    balconySizeb.innerHTML = dataB[i].balconySize;

    let priceb = document.getElementById("priceb" + (i + 1).toString());
    priceb.innerHTML = dataB[i].price+",00 €";
    
  
    let imageb = document.getElementById('imgb' + (i + 1).toString());
    imageb.src = dataB[i].src;
  
    let availabiltyb = document.getElementById("avlb" + (i + 1).toString());
    availabiltyb.innerHTML = dataB[i].availabilty;
  
    if (dataB[i].availabilty == "Free") {
      availabiltyb.classList.add("volny")
    }
  
    else if (dataB[i].availabilty == "Reserved"){
      availabiltyb.classList.add("rezervovany")
    }
  
  }
  
  
  
  document.getElementById("select").addEventListener("change", () => {
  
    if (document.getElementById("select").value == "top") {
      /* Sort top price Array dataA */
      const dataTop = dataA.sort((a, b) => b.price - a.price)
  
      for (i = 0; i < dataTop.length; i++) {
        let numa = document.getElementById("numa" + (i + 1).toString());
        numa.innerHTML = dataTop[i].flatNr + ".";
  
        let roomsa = document.getElementById("roomsa" + (i + 1).toString());
        roomsa.innerHTML = dataTop[i].rooms;
  
        let floora = document.getElementById("floora" + (i + 1).toString());
        floora.innerHTML = dataTop[i].floor;
  
        let flatSizea = document.getElementById("flatSizea" + (i + 1).toString());
        flatSizea.innerHTML = dataTop[i].flatSize;
  
        let balconySizea = document.getElementById("balconySizea" + (i + 1).toString());
        balconySizea.innerHTML = dataTop[i].balconySize;

        let priceat = document.getElementById("pricea" + (i + 1).toString());
        priceat.innerHTML = dataTop[i].price+",00 €";

        
        let imagea = document.getElementById('imga' + (i + 1).toString());
        imagea.src = dataTop[i].src;
  
        let availabiltyat = document.getElementById("avla" + (i + 1).toString());
        availabiltyat.innerHTML = dataTop[i].availabilty;
       
        if (dataTop[i].availabilty == "Free") {
          availabiltyat.classList.remove("rezervovany") 
          availabiltyat.classList.add("volny");
         
        }
  
        else if (dataTop[i].availabilty == "Reserved") {
            availabiltyat.classList.remove("volny");
          availabiltyat.classList.add("rezervovany");
         
        }
  
        
      }
  
      /* Sort top price Array dataB */
      const dataTopB = dataB.sort((a, b) => b.price - a.price)
  
      for (i = 0; i < dataTopB.length; i++) {
        let numb = document.getElementById("numb" + (i + 1).toString());
        numb.innerHTML = dataTopB[i].flatNr + ".";
  
        let roomsb = document.getElementById("roomsb" + (i + 1).toString());
        roomsb.innerHTML = dataTopB[i].rooms;
  
        let floorb = document.getElementById("floorb" + (i + 1).toString());
        floorb.innerHTML = dataTopB[i].floor;
  
        let flatSizeb = document.getElementById("flatSizeb" + (i + 1).toString());
        flatSizeb.innerHTML = dataTopB[i].flatSize;
  
        let balconySizeb = document.getElementById("balconySizeb" + (i + 1).toString());
        balconySizeb.innerHTML = dataTopB[i].balconySize;

        let pricebt = document.getElementById("priceb" + (i + 1).toString());
        pricebt.innerHTML = dataTopB[i].price+",00 €";

        
  
        let imageb = document.getElementById('imgb' + (i + 1).toString());
        imageb.src = dataTopB[i].src;
  
        let availabiltybt = document.getElementById("avlb" + (i + 1).toString());
        availabiltybt.innerHTML = dataTopB[i].availabilty;
  
        if (dataTopB[i].availabilty == "Free") {
            availabiltybt.classList.remove("rezervovany");
          availabiltybt.classList.add("volny");
        }
  
        else if (dataTopB[i].availabilty == "Reserved") {
            availabiltybt.classList.remove("volny");
          availabiltybt.classList.add("rezervovany");
        }
      }
  
  
  
    }
  
    if (document.getElementById("select").value == "down") {
  
      /* Sort down price Array dataA */
      const dataDown = dataA.sort((a, b) => a.price - b.price)
  
      for (i = 0; i < dataDown.length; i++) {
        let numa = document.getElementById("numa" + (i + 1).toString());
        numa.innerHTML = dataDown[i].flatNr + ".";
  
        let roomsa = document.getElementById("roomsa" + (i + 1).toString());
        roomsa.innerHTML = dataDown[i].rooms;
  
        let floora = document.getElementById("floora" + (i + 1).toString());
        floora.innerHTML = dataDown[i].floor;
  
        let flatSizea = document.getElementById("flatSizea" + (i + 1).toString());
        flatSizea.innerHTML = dataDown[i].flatSize;
  
        let balconySizea = document.getElementById("balconySizea" + (i + 1).toString());
        balconySizea.innerHTML = dataDown[i].balconySize;

        let pricead = document.getElementById("pricea" + (i + 1).toString());
        pricead.innerHTML = dataDown[i].price+",00 €";

        
        let imagea = document.getElementById('imga' + (i + 1).toString());
        imagea.src = dataDown[i].src;
  
        let availabiltyad = document.getElementById("avla" + (i + 1).toString());
        availabiltyad.innerHTML = dataDown[i].availabilty;
  
        if (dataDown[i].availabilty == "Free") {
            availabiltyad.classList.remove("rezervovany");
          availabiltyad.classList.add("volny");
        }
  
        else if (dataDown[i].availabilty == "Reserved") {
            availabiltyad.classList.remove("volny");
          availabiltyad.classList.add("rezervovany");
        }
      }
  
      /* Sort down price Array dataB */
      const dataDownB = dataB.sort((a, b) => a.price - b.price)
   
      for (i = 0; i < dataDownB.length; i++) {
        let numb = document.getElementById("numb" + (i + 1).toString());
        numb.innerHTML = dataDownB[i].flatNr + ".";
  
        let roomsb = document.getElementById("roomsb" + (i + 1).toString());
        roomsb.innerHTML = dataDownB[i].rooms;
  
        let floorb = document.getElementById("floorb" + (i + 1).toString());
        floorb.innerHTML = dataDownB[i].floor;
  
        let flatSizeb = document.getElementById("flatSizeb" + (i + 1).toString());
        flatSizeb.innerHTML = dataDownB[i].flatSize;
  
        let balconySizeb = document.getElementById("balconySizeb" + (i + 1).toString());
        balconySizeb.innerHTML = dataDownB[i].balconySize;

        let pricebd = document.getElementById("priceb" + (i + 1).toString());
        pricebd.innerHTML = dataDownB[i].price;

        
  
        let imageb = document.getElementById('imgb' + (i + 1).toString());
        imageb.src = dataDownB[i].src;
  
        let availabiltybd = document.getElementById("avlb" + (i + 1).toString());
        availabiltybd.innerHTML = dataDownB[i].availabilty;
       
        if (dataDownB[i].availabilty == "Free") {
            availabiltybd.classList.remove("rezervovany");
          availabiltybd.classList.add("volny");
         
        }
  
        else if (dataDownB[i].availabilty == "Reserved") {
            availabiltybd.classList.remove("volny");
          availabiltybd.classList.add("rezervovany");
          
        }
      }
      
    }
  
  
  });
  
  
  
  
  
  // var dataDown=data.sort((a,b) =>  b.price-a.price )
  // console.log(dataDown);
  
  // var dataTop=data.sort((a,b) =>  a.price-b.price )
  // console.log(dataTop);