// గోడ గడియారము

_సర్వత్ర_   కొలత;

// గడియారము చుట్టూ క్షణముల గీతలు గీయుటకు
_విధానము_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {
   _అత్ర_   గీత_పొడవు = 7;
   _అత్ర_   ఖాళీ = వ్యాసార్థము - గీత_పొడవు;
   రంగు_మార్చు( నీలము );
   వెడల్పు(1);
   లెక్క_పెడుతూ_ఆవర్తించు( 60, ( కో ) => {
      _అత్ర_ థీటా = కో * 6;
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను
      వెడల్పు( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)
      కుంచికను_పైకి_ఎత్తు();
      స్థానము_మార్చు(0,0);
      కోణము(థీటా);
      ముందుకు_జరుగు(ఖాళీ);
      కుంచికను_కింద_పెట్టు();
      ముందుకు_జరుగు(గీత_పొడవు);
   });
   
}


// గంటలు, నిమిషాలూ సూచించే అంకెలు
_విధానము_     అంకెలు(x, y, వ్యాసార్థము) {
   కుంచికను_పైకి_ఎత్తు();
   _అత్ర_  అక్షర_పరిమాణము = 20/130 * కొలత
   అక్షరరూపము_స్థాపించు(అక్షర_పరిమాణము+"px sans-serif");
   రంగు_మార్చు("నలుపు");
   లెక్క_పెడుతూ_ఆవర్తించు( 12, ( గంట ) =>{
      స్థానము_మార్చు(x,y);
      కోణము(గంట * 30);
      ముందుకు_జరుగు(వ్యాసార్థము); // to center of digit
      కోణము(180);
      ముందుకు_జరుగు(10/130 * కొలత); // vertical correction to baseline
      కుడి_వైపు_తిరుగు(90);
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు
      ముందుకు_జరుగు( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)
      // if (గంట < 10) {
      //   ముందుకు_జరుగు(6/130 * కొలత); // horizontal correction to lower left corner
      // } else {
      //   ముందుకు_జరుగు(10/130 * కొలత)
      // }
      కుడి_వైపు_తిరుగు(180);
      వ్రాయి(గంట);
   })
   కుంచికను_కింద_పెట్టు();
}

// చేతులు గీయుటకు  
_విధానము_     చెయ్యి (థీటా, చెయ్యి_వెడల్పు, పొడవు, రంగు) {
   _అత్ర_   కూచి_తగ్గింపు = 5;
   _అత్ర_   కూచి_తగ్గింపులు = (పొడవు / కూచి_తగ్గింపు);
   _అత్ర_   వెడల్పు_సర్దుబాటు =  చెయ్యి_వెడల్పు / కూచి_తగ్గింపులు;
   స్థానము_మార్చు(0, 0);
   కోణము(థీటా);
   రంగు_మార్చు(రంగు);
   // for (_సర్వత్ర_   step = 0; step < పొడవు; step = step + కూచి_తగ్గింపు) 
   లెక్క_పెడుతూ_ఆవర్తించు( కూచి_తగ్గింపులు, ( అడుగు) => 
   {
      వెడల్పు( చెయ్యి_వెడల్పు ); // కుంచిక వెడల్పు
      ముందుకు_జరుగు(కూచి_తగ్గింపు);
      చెయ్యి_వెడల్పు =  చెయ్యి_వెడల్పు  - వెడల్పు_సర్దుబాటు;
   }
   );
}

_విధానము_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {
    // క్షణముల చెయ్యి
    _అత్ర_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");
    // నిమిషముల చెయ్యి 
    _అత్ర_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట
    _అత్ర_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");
    // గంటల చెయ్యి
    _అత్ర_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు 
    _అత్ర_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");
}

// గడియారమును పునరావృతము చేయుటకు
_విధానము_     గడియారము() {
   చెరిపి_వేయి();
   కొలత = .9 *  Math.min( గరిష్ఠX(), గరిష్ఠY())
   అంకెలు(0, 0, 110/130 * కొలత);
   రంగు_మార్చు("lightgreen");
   స్థానము_మార్చు(0,0);
   వెడల్పు(1/130* కొలత)
   వృత్తము(130/130 * కొలత );
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );
   _అత్ర_  సమయము = new Date();
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());
}

_విధానము_     ప్రదర్శన() {
   ఆది_స్థితి();
   కుంచికను_దాచు();
   ఆడించు(గడియారము,1000); // గడియారమును ప్రతి క్షణము పునరావృతము చేయ వలెను.
}
