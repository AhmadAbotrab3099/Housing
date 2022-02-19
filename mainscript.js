var userLang = navigator.language || navigator.userLanguage; 
  
  
  document.getElementById('map').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.380183807143!2d17.853444684335333!3d48.58341897926145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zNDjCsDM1JzAwLjMiTiAxN8KwNTEnMDQuNSJF!5e0!3m2!1sar!2s!4v1644764196350!5m2!1s"+userLang+"!2s";
 

  
  const link = document.querySelectorAll('.select-lang');
  const Apartmentstr = document.querySelector('.Apartments-tr');
  const loc = document.querySelector('.Location-tr');
  const contect = document.querySelector('.Contact-tr');
  const fl1 = document.querySelector('.fl1');
  const fl2 = document.querySelector('.fl2');
  const fl3 = document.querySelector('.fl3');
  const fl4 = document.querySelector('.fl4');
  const fr1 = document.querySelector('.fr1');
  const fr2 = document.querySelector('.fr2');
  const sl1 = document.querySelector('.sl1');
  const sl2 = document.querySelector('.sl2');
  const sr1 = document.querySelector('.sr1');
  const sr2 = document.querySelector('.sr2');
  const tit1 = document.querySelector('.tit1');
  const tit2 = document.querySelector('.tit2');
  const tit3 = document.querySelector('.tit3');
  const expl1 = document.querySelector('.expl1');
  const expl2 = document.querySelector('.expl2');
  const expl3 = document.querySelector('.expl3');
  const expl4 = document.querySelector('.expl4');
  const expl5 = document.querySelector('.expl5');
  //const formName = document.getElementsByName("email")[0];

  
  
  

  link.forEach(el => {
    el.addEventListener('click', () => {
     

      const attr = el.getAttribute('language');
      console.log(typeof(attr));
      sessionStorage.setItem("lang",attr)
      Apartmentstr.textContent = dataTr[attr].ApartmentsTr;
      loc.textContent = dataTr[attr].LocationTr;
      contect.textContent = dataTr[attr].conect;
      fl1.textContent = dataTr[attr].fl1;
      fl2.textContent = dataTr[attr].fl2;
      fl3.textContent = dataTr[attr].fl3;
      fl4.textContent = dataTr[attr].fl4;
      fr1.textContent = dataTr[attr].fr1;
      fr2.textContent = dataTr[attr].fr2;
      sl1.textContent = dataTr[attr].sl1;
      sl2.textContent = dataTr[attr].sl2;
      sr1.textContent = dataTr[attr].sr1;
      sr2.textContent = dataTr[attr].sr2;
      tit1.textContent = dataTr[attr].tit1;
      tit2.textContent = dataTr[attr].tit2;
      tit3.textContent = dataTr[attr].tit3;
      expl1.textContent = dataTr[attr].expl1;
      expl2.textContent = dataTr[attr].expl2;
      expl3.textContent = dataTr[attr].expl3;
      expl4.textContent = dataTr[attr].expl4;
      expl5.textContent = dataTr[attr].expl5;
      //formName.placeholder = dataTr[attr].formName;
      

    
    });
  });
  
  var dataTr = {
      "english": 
      {
        "ApartmentsTr": "Our Apartments",
        "LocationTr": "Location",
        "conect": "Contact us",
        "fl1": "- Solar panels on the roof for heating water",
        "fl2": "- Energy saving heat pump for heating flats",
        "fl3": "- One building will have outside parking, one inside",
        "fl4": "- Green plants surrounding to make good microclimate",
        "fr1": "It ll have security system and closed area with gate",
        "fr2": "One building ll have garages and one ll have outside parking, on both places ll have one station for charging electro cars",
        "sl1": "- Energy saving heat pump for heating flats",
        "sl2": "- Electro charger for electric cars on every parking for building",
        "sr1": "Every building ll have 12 flats and 3 floors",
        "sr2": "Together we have 24 flats, all of them has balcony",
        "tit1": "Barking charging",
        "expl1": "Electro charger for electric cars on every parking for building",
        "tit2": "Security",
        "expl2": "It ll have security system and closed area with gate",
        "tit3": "Planting area",
        "expl3": "Green plants surrounding to make good microclimate",
        "expl4": "Every building ll have 12 flats and 3 floors",
        "expl5": "Together we have 24 flats, all of them has balcony",
        
        
        // "": "",
        // "": "",
        // "": "",
        // "": "",
        // "": "",
        // "": "",


        
      },
      "solovaki": 
      {
        "ApartmentsTr": " Naše apartmány",
        "LocationTr": "Miesto",
        "conect": " Kontaktujte nás",
        "fl1": "- Solárne panely na streche na ohrev vody",
        "fl2": "- Energeticky úsporné tepelné čerpadlo na vykurovanie bytov",
        "fl3": "- Jedna budova bude mať vonkajšie parkovisko, jedna vo vnútri",
        "fl4": "- Zelené rastliny obklopujúce, aby vytvorili dobrú mikroklímu",
        "fr1": "Bude mať bezpečnostný systém a uzavretý priestor s bránou",
        "fr2": "Jedna budova bude mať garáže a jedna bude mať vonkajšie parkovisko, na oboch miestach bude mať jednu stanicu na nabíjanie elektroau.",
        "sl1": "- Energeticky úsporné tepelné čerpadlo na vykurovanie bytov",
        "sl2": "- Elektronabíjačky pre elektrické autá na každom parkovisku pre budovu",
        "sr1": "Každá budova bude mať 12 bytov a 3 poschodia.",
        "sr2": "Spolu máme 24 bytov, všetky majú balkón",
        "tit1": "Štekanie nabíjania",
        "expl1": "Elektronabíjačky pre elektrické autá na každom parkovisku pre budovu",
        "tit2": "Bezpečnosť",
        "expl2": "Bude mať bezpečnostný systém a uzavretý priestor s bránou",
        "tit3": "Výsadbová plocha",
        "expl3": "Zelené rastliny obklopujúce, aby vytvorili dobrú mikroklímu",
        "expl4": "Každá budova bude mať 12 bytov a 3 poschodia",
        "expl5": "Spolu máme 24 bytov, všetky majú balkón",
        
        
       
      }
    }