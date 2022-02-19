const dataA = [
    { flatNr: "1", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "2", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "3", rooms: "3", floor: "1.NP", flatSize: "67,97 m²", balconySize: "2,3 m²", price: 146500, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "4", rooms: "1", floor: "1.NP", flatSize: "38,04 m²", balconySize: "3,81 m²", price: 81990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "5", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "6", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "7", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "8", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "9", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "10", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "11", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' },
    { flatNr: "12", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free",availabiltyS:"Slobodný", src: 'assets/1.jpg' }
  
  ]
  
  const dataB = [
    { flatNr: "1", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "2", rooms: "2", floor: "1.NP", flatSize: "50,19 m²", balconySize: "4,3 m²", price: 107990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "3", rooms: "3", floor: "1.NP", flatSize: "67,97 m²", balconySize: "2,3 m²", price: 146500, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "4", rooms: "1", floor: "1.NP", flatSize: "38,04 m²", balconySize: "3,81 m²", price: 81990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "5", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "6", rooms: "2", floor: "2.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 111500, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/2.jpg" },
    { flatNr: "7", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "8", rooms: "3", floor: "2.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 152500, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "9", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "10", rooms: "2", floor: "3.NP", flatSize: "50,65 m²", balconySize: "4,3 m²", price: 113990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "11", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
    { flatNr: "12", rooms: "3", floor: "3.NP", flatSize: "69,29 m²", balconySize: "4,89 m²", price: 155990, availabilty: "Free",availabiltyS:"Slobodný", src: "assets/1.jpg" },
  ]

  var dataTr = {
    "english": 
    {
      "flatnr": "Flat nr.",
      "rooms":"Rooms",
      "floor":"Floor",
      "size":"Size",
      "balsize":"Balcony size",
      "praice":"Sale price",
      "ava":"Availability",
    

      },
    "solovaki": 
    {
      "flatnr": "Ploché č.",
      "rooms":"Izby",
      "floor":"Podlaha",
      "size":"Veľkosť",
      "balsize":"Veľkosť balkóna",
      "praice":"Predajná cena",
      "ava":"Dostupnosť",
       }
   
  }
  
  if(window.addEventListener){
    window.addEventListener('load', ()=>{
      const flatnr = document.querySelectorAll('.flatnr');
      const rooms = document.querySelectorAll('.rooms');
      const floor = document.querySelectorAll('.floor');
      const size = document.querySelectorAll('.size');
      const balsize = document.querySelectorAll('.balsize');
      const praice = document.querySelectorAll('.praice');
      const ava = document.querySelectorAll('.ava');
      

      var attr = sessionStorage.getItem("lang").toString();
      flatnr.forEach(el=>{el.textContent = dataTr[attr].flatnr;})

      rooms.forEach(el=>{el.textContent = dataTr[attr].rooms;})

      floor.forEach(el=>{el.textContent = dataTr[attr].floor;})

      size.forEach(el=>{el.textContent = dataTr[attr].size;})

      balsize.forEach(el=>{el.textContent = dataTr[attr].balsize;})

      praice.forEach(el=>{el.textContent = dataTr[attr].praice;})

      ava.forEach(el=>{el.textContent = dataTr[attr].ava;})

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
    console.log(attr);
    if(attr=="english"){
      availabiltya.innerHTML = dataA[i].availabilty;
    }
    else{
      availabiltya.innerHTML = dataA[i].availabiltyS;
    }

    
    
  
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
    if(attr=="english"){
      availabiltyb.innerHTML = dataB[i].availabilty;
    }
    else{
      availabiltyb.innerHTML = dataB[i].availabiltyS;
    }
    
  
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
        if(attr=="english"){
          availabiltyat.innerHTML = dataTop[i].availabilty;
        }
        else{
          availabiltyat.innerHTML = dataTop[i].availabiltyS;
        }
        
       
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
        if(attr=="english"){
          availabiltybt.innerHTML = dataTopB[i].availabilty;
        }
        else{
          availabiltybt.innerHTML = dataTopB[i].availabiltyS;
        }
        
  
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
        if(attr=="english"){
          availabiltyad.innerHTML = dataDown[i].availabilty;
        }
        else{
          availabiltyad.innerHTML = dataDown[i].availabiltyS;
        }
        
  
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
        if(attr=="english"){
          availabiltybd.innerHTML = dataDownB[i].availabilty;
        }
        else{
          availabiltybd.innerHTML = dataDownB[i].availabiltyS;
        }
        
       
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
  
  
  
  
		
	

   
  
              
    })
  }
    
  


  
  // var dataDown=data.sort((a,b) =>  b.price-a.price )
  // console.log(dataDown);
  
  // var dataTop=data.sort((a,b) =>  a.price-b.price )
  // console.log(dataTop);