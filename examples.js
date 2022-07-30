square ='\
/* Define helper functions here\n\
or write your own functions\n\
including a demo() function\n\
For example:    */\n\
\n\
\n\
function square(side) {\n\
    let i = 0;\n\
    repeat(4, () => {\n\
        forward(side)\n\
        turn_right(90)\n\
    });\n\
}\n\
\n\
function demo() {\n\
    reset();\n\
    hideTurtle();\n\
    setColor("blue");\n\
    let side = 100;\n\
    let color_number = 0;\n\
    while (side > 0) {\n\
        square(side);\n\
        turn_right(36);\n\
        side = side - 10;\n\
        color_number = (color_number + 1) % 16;\n\
        changeColor(color_number);\n\
    }\n\
}\n\
'
చేప ='\
\n\
వర్గమూలము = Math.sqrt\n\
\n\
ప్రదర్శన = () => {\n\
  _సర్వదా_ సవ్య = అవును;\n\
  _సర్వదా_ అపసవ్య = !సవ్య;\n\
\n\
  కుంచికను_దాచు();\n\
\n\
చేప = ( వ ) => {\n\
  వృత్తము( వ )\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( వ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుంచికను_చూపు();\n\
\n\
\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
  ముందుకు_జరుగు( 2 * వ );\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
\n\
  ముందుకు_జరుగు( వర్గమూలము( 2 * వ * 2 * వ * 2 ) );\n\
\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
  ముందుకు_జరుగు( 2 * వ );\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
\n\
  // కుంచికను_దాచు();\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( వ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
}\n\
\n\
రంగు_చేప = (రంగు_సంఖ్య) =>  {\n\
  రంగు_మార్చు(రంగు_సంఖ్య)\n\
 చేప( 40 + ( రంగు_సంఖ్య * 1 ) )\n\
} \n\
లెక్క_పెడుతూ_ఆవర్తించు( 16 , (క) => రంగు_చేప( క ) )\n\
\n\
}\n\
'
ಮತ್ಸ್ಯ ='\
\n\
\n\
ವರ್ಗಮೂಲ = Math.sqrt\n\
\n\
ಪ್ರದರ್ಶನೆ = () => {\n\
  కుంచికను_దాచు();\n\
\n\
ಮತ್ಸ್ಯ = ( ವ ) => {\n\
  వృత్తము( ವ )\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( ವ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుంచికను_చూపు();\n\
\n\
\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
  ముందుకు_జరుగు( 2 * ವ );\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
\n\
  ముందుకు_జరుగు( ವರ್ಗಮೂಲ( 2 * ವ * 2 * ವ * 2 ) );\n\
\n\
  కుడి_వైపు_తిరుగు(90+45)\n\
  ముందుకు_జరుగు( 2 * ವ );\n\
  ఎడమ_వైపు_తిరుగు( 45 );\n\
\n\
  // కుంచికను_దాచు();\n\
\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  ముందుకు_జరుగు( ವ );\n\
  కుంచికను_కింద_పెట్టు()\n\
\n\
  కుడి_వైపు_తిరుగు( 90 );\n\
}\n\
\n\
రంగు_చేప = (రంగు_సంఖ్య) =>  {\n\
  రంగు_మార్చు(రంగు_సంఖ్య)\n\
 చేప( 40 + ( రంగు_సంఖ్య * 1 ) )\n\
} \n\
లెక్క_పెడుతూ_ఆవర్తించు( 16 , (క) => రంగు_చేప( క ) )\n\
\n\
}\n\
'
ಅಂಡಾಕಾರ ='\
// ಮೂಲ: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
ಅಂಡಾಕಾರ = (x, y, ಪರಿಮಾಣ, ಇಳಿಜಾರು) => {\n\
  ಕುಂಚಿಕವನ್ನು_ಎತ್ತಿ()\n\
  ಸ್ಥಾನ_ಬದಿಲಿಸಿ(x,y)\n\
  ಕುಂಚಿಕವನ್ನು_ಕೆಳಗೆ_ಇರಿಸಿ()\n\
  ದಿಕ್ಕನ್ನು_ಬದಲಿಸಿ(270+ಇಳಿಜಾರು)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(4) // red\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(ಪರಿಮಾಣ,180)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(1) // blue\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(2*ಪರಿಮಾಣ,45)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(10) // green\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(0.586*ಪರಿಮಾಣ,90)\n\
  ವರ್ಣ_ಬದಲಿಸಿ(1) // blue\n\
  ಬಲಕ್ಕೆ_ಚಾಪ(2*ಪರಿಮಾಣ,45)\n\
}\n\
\n\
ಪ್ರದರ್ಶನೆ = () => {\n\
  ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ();\n\
  ಅಂಡಾಕಾರ( 90, 90, 40, 0 )\n\
  ಅಂಡಾಕಾರ( 0, 0, 90, 45 )\n\
}\n\
'
ఇష్టికా_ప్రస్తారము ='\
// ఇష్టికా ప్రస్తారము \n\
\n\
_సర్వదా_    ఎత్తు = 15\n\
_సర్వదా_    వెడల్పు = 2* ఎత్తు \n\
\n\
// ఇష్టికా == ఇటుక \n\
\n\
ఇష్టికా = ( ఎత్తు, వెడల్పు, ఇష్టిక_రంగు) => {\n\
  ఆకారము_ప్రారంభించు()\n\
  ఆవర్తించు (2, () => {\n\
    ముందుకు_జరుగు( వెడల్పు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
    ముందుకు_జరుగు( ఎత్తు)\n\
    కుడి_వైపు_తిరుగు(90)\n\
  })\n\
  ఆకారము_ముగించు( ఇష్టిక_రంగు)\n\
  ముందుకు_జరుగు( వెడల్పు)\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  ఆది_స్థితి()\n\
 \n\
  yB = గరిష్ఠY()\n\
  xB = కనిష్ఠX()\n\
   చుట్టొద్దు()\n\
  కుడి_వైపు_తిరుగు( 90)\n\
  రంగు_మార్చు( తెలుపు )\n\
\n\
  యావత్_పరిక్రమ( () => కుంచిక.స్థానము.y > కనిష్ఠY(), () => {\n\
    స్థానము_మార్చు(xB, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      ఇష్టికా(ఎత్తు, వెడల్పు, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
    } )\n\
    yB = yB - ఎత్తు\n\
\n\
    స్థానము_మార్చు(xB - వెడల్పు/2, yB)\n\
    యావత్_పరిక్రమ( () => కుంచిక.స్థానము.x < గరిష్ఠX(), () => {\n\
      కుంచికను_కింద_పెట్టు()\n\
      ఇష్టికా(ఎత్తు, వెడల్పు, "darkred")\n\
      కుంచికను_పైకి_ఎత్తు()\n\
    } )\n\
    yB = yB - ఎత్తు\n\
  } )\n\
}\n\
'
గడియారము ='\
// గోడ గడియారము\n\
\n\
_సర్వత్ర_   కొలత;\n\
\n\
// గడియారము చుట్టూ క్షణముల గీతలు గీయుటకు\n\
_విధానము_     క్షణముల_గీతలు(x, y, వ్యాసార్థము) {\n\
   _అత్ర_   గీత_పొడవు = 7;\n\
   _అత్ర_   ఖాళీ = వ్యాసార్థము - గీత_పొడవు;\n\
   రంగు_మార్చు( నీలము );\n\
   వెడల్పు(1);\n\
   లెక్క_పెడుతూ_ఆవర్తించు( 60, ( కో ) => {\n\
      _అత్ర_ థీటా = కో * 6;\n\
      // ప్రతి  ఐదవది దళసరి గా వేయవలెను\n\
      వెడల్పు( ( ( కో % 5 ) ? 1 : 3)/130* కొలత)\n\
      కుంచికను_పైకి_ఎత్తు();\n\
      స్థానము_మార్చు(0,0);\n\
      కోణము(థీటా);\n\
      ముందుకు_జరుగు(ఖాళీ);\n\
      కుంచికను_కింద_పెట్టు();\n\
      ముందుకు_జరుగు(గీత_పొడవు);\n\
   });\n\
   \n\
}\n\
\n\
\n\
// గంటలు, నిమిషాలూ సూచించే అంకెలు\n\
_విధానము_     అంకెలు(x, y, వ్యాసార్థము) {\n\
   కుంచికను_పైకి_ఎత్తు();\n\
   _అత్ర_  అక్షర_పరిమాణము = 20/130 * కొలత\n\
   అక్షరరూపము_స్థాపించు(అక్షర_పరిమాణము+"px sans-serif");\n\
   రంగు_మార్చు("నలుపు");\n\
   లెక్క_పెడుతూ_ఆవర్తించు( 12, ( గంట ) =>{\n\
      స్థానము_మార్చు(x,y);\n\
      కోణము(గంట * 30);\n\
      ముందుకు_జరుగు(వ్యాసార్థము); // to center of digit\n\
      కోణము(180);\n\
      ముందుకు_జరుగు(10/130 * కొలత); // vertical correction to baseline\n\
      కుడి_వైపు_తిరుగు(90);\n\
      // క్రింది, ఎడమ భాగమునకు అనుప్రస్థ సరదుబాటు\n\
      ముందుకు_జరుగు( ( (గంట < 10 ) ? 6 : 10 )/130 * కొలత)\n\
      // if (గంట < 10) {\n\
      //   ముందుకు_జరుగు(6/130 * కొలత); // horizontal correction to lower left corner\n\
      // } else {\n\
      //   ముందుకు_జరుగు(10/130 * కొలత)\n\
      // }\n\
      కుడి_వైపు_తిరుగు(180);\n\
      వ్రాయి(గంట);\n\
   })\n\
   కుంచికను_కింద_పెట్టు();\n\
}\n\
\n\
// చేతులు గీయుటకు  \n\
_విధానము_     చెయ్యి (థీటా, చెయ్యి_వెడల్పు, పొడవు, రంగు) {\n\
   _అత్ర_   కూచి_తగ్గింపు = 5;\n\
   _అత్ర_   కూచి_తగ్గింపులు = (పొడవు / కూచి_తగ్గింపు);\n\
   _అత్ర_   వెడల్పు_సర్దుబాటు =  చెయ్యి_వెడల్పు / కూచి_తగ్గింపులు;\n\
   స్థానము_మార్చు(0, 0);\n\
   కోణము(థీటా);\n\
   రంగు_మార్చు(రంగు);\n\
   // for (_సర్వత్ర_   step = 0; step < పొడవు; step = step + కూచి_తగ్గింపు) \n\
   లెక్క_పెడుతూ_ఆవర్తించు( కూచి_తగ్గింపులు, ( అడుగు) => \n\
   {\n\
      వెడల్పు( చెయ్యి_వెడల్పు ); // కుంచిక వెడల్పు\n\
      ముందుకు_జరుగు(కూచి_తగ్గింపు);\n\
      చెయ్యి_వెడల్పు =  చెయ్యి_వెడల్పు  - వెడల్పు_సర్దుబాటు;\n\
   }\n\
   );\n\
}\n\
\n\
_విధానము_     చేతులు(గంటలు, నిమిషములు, క్షణములు) {\n\
    // క్షణముల చెయ్యి\n\
    _అత్ర_   క్షణముకెన్ని_డిగ్రీలు = 6;	// = 360 degrees/60 క్షణములు\n\
    చెయ్యి(క్షణములు * క్షణముకెన్ని_డిగ్రీలు, 4, 100/130 * కొలత, "red");\n\
    // నిమిషముల చెయ్యి \n\
    _అత్ర_   నిమిషానికెన్ని_డిగ్రీలు = 0.1;	// = 360 degrees /3600 క్షణములు /గంట\n\
    _అత్ర_   నిమిషములుInక్షణములు = నిమిషములు * 60 + క్షణములు;\n\
    చెయ్యి(నిమిషములుInక్షణములు * నిమిషానికెన్ని_డిగ్రీలు, 10, 100/130 * కొలత, "blue");\n\
    // గంటల చెయ్యి\n\
    _అత్ర_   గంటకెన్ని_డిగ్రీలు = .1/12;	// = నిమిషానికెన్ని_డిగ్రీలు / 12 గంటలు \n\
    _అత్ర_   గంటలుInక్షణములు = ((గంటలు % 12) * 3600) + నిమిషములుInక్షణములు;\n\
    చెయ్యి(గంటలుInక్షణములు * గంటకెన్ని_డిగ్రీలు, 10, 60/130 * కొలత, "green");\n\
}\n\
\n\
// గడియారమును పునరావృతము చేయుటకు\n\
_విధానము_     గడియారము() {\n\
   చెరిపి_వేయి();\n\
   కొలత = .9 *  Math.min( గరిష్ఠX(), గరిష్ఠY())\n\
   అంకెలు(0, 0, 110/130 * కొలత);\n\
   రంగు_మార్చు("lightgreen");\n\
   స్థానము_మార్చు(0,0);\n\
   వెడల్పు(1/130* కొలత)\n\
   వృత్తము(130/130 * కొలత );\n\
   క్షణముల_గీతలు(0, 0, 130/130 * కొలత );\n\
   _అత్ర_  సమయము = new Date();\n\
   చేతులు(సమయము.getHours(), సమయము.getMinutes(), సమయము.getSeconds());\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
   కుంచికను_దాచు();\n\
   ఆడించు(గడియారము,1000); // గడియారమును ప్రతి క్షణము పునరావృతము చేయ వలెను.\n\
}\n\
'
రంగవల్లీ ='\
\n\
ప్రదర్శన = () => {\n\
    కుంచికను_దాచు();\n\
  ఆవర్తించు(6, () => {\n\
    రంగు_మార్చు( 0 );\n\
    కుడి_వైపు_తిరుగు(180);\n\
    _అత్ర_ భుజము = 100;\n\
    _అత్ర_ రంగు_సంఖ్య = 0;\n\
    యావత్_పరిక్రమ( () => భుజము > 0, ()=> {\n\
  \n\
      కుడివైపు_చాపాము(భుజము, 30 );\n\
  \n\
      కుడి_వైపు_తిరుగు(30);\n\
      భుజము = భుజము - 10;\n\
      రంగు_సంఖ్య = ( రంగు_సంఖ్య  + 15 ) % 16;\n\
      రంగు_మార్చు( రంగు_సంఖ్య );\n\
    } );\n\
  });\n\
\n\
  కుడి_వైపు_తిరుగు(310);\n\
  కుంచికను_పైకి_ఎత్తు();\n\
  ముందుకు_జరుగు(60 );\n\
  కుంచికను_కింద_పెట్టు()\n\
  రంగు_మార్చు( 13 );\n\
  నిండు_వృత్తము(5 );\n\
  వృత్తము(10);\n\
}\n\
'
ಚತುರ್ಭುಜ ='\
/* ఇಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಕ್ರಿಯೆಗಳು ಬರೆಬಹುದು. ಉದಾಹರಣಕ್ಕೆ:    */\n\
\n\
ಸಮ_ಚತುರ್ಭುಜ = ( ಭುಜ ) => {\n\
  ಆವರ್ತಿಸಿ(4, () => {\n\
    ಮುಂದೆ_ಹೋಗಿ( ಭುಜ );\n\
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 90 );\n\
  });\n\
}\n\
\n\
ಪ್ರದರ್ಶನೆ = () => {\n\
  ಕುಂಚಿಕವನ್ನು_ಮರೆಮಾಡಿ();\n\
  ವರ್ಣ_ಸ್ಥಾಪಿಸಿ( 1 );\n\
  _ಇಲ್ಲಿ_ ಭುಜ = 100;\n\
  _ಇಲ್ಲಿ_ ವರ್ಣ_ಸಂಖ್ಯೆ = 0;\n\
  ಯಾವತ್_ಪರಿಕ್ರಮ( () => ಭುಜ > 0, () => {\n\
    ಸಮ_ಚತುರ್ಭುಜ( ಭುಜ );\n\
    ಬಲಕ್ಕೆ_ತಿರುಗಿ( 10 );\n\
    ಭುಜ = ಭುಜ - 5;\n\
    ವರ್ಣ_ಸಂಖ್ಯೆ = ( ವರ್ಣ_ಸಂಖ್ಯೆ + 1 ) %  16\n\
    ವರ್ಣ_ಬದಲಿಸಿ (ವರ್ಣ_ಸಂಖ್ಯೆ );\n\
  } );\n\
}\n\
'
चतुर्भुजः ='\
/* ఇక్కడ మీ ప్రక్రియ లు వ్రాయ గలరు. ఉదాహరణ కి:    */\n\
\n\
सम_चतुरस्रः = ( भुजः ) => {\n\
  आवर्तय(4, () => {\n\
    अग्रे_गच्छतु( भुजः );\n\
    दक्षिणं_वर्तस्व(90);\n\
  });\n\
}\n\
\n\
प्रदर्शन = () => {\n\
  कुंचिकं_गोपाय();\n\
  वर्णं_स्थापय( 0 );\n\
  _अत्र_ भुजः = 100;\n\
  _अत्र_ वर्ण_संख्य = 0;\n\
  आवर्तय_यावत्( () => भुजः > 0, ()=> {\n\
    सम_चतुरस्रः( भुजः );\n\
    दक्षिणं_वर्तस्व(36);\n\
    भुजः = भुजः - 10;\n\
    वर्ण_संख्य = ( वर्ण_संख्य + 1 ) % 16;\n\
    वर्णं_परिवर्तय( वर्ण_संख्य );\n\
  } );\n\
}\n\
'
అండాకారము ='\
// మూలము: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/\n\
\n\
అండాకారము = (x, y, పరిమాణము, వాలు) => {\n\
  కుంచికను_పైకి_ఎత్తు()\n\
  స్థానము_మార్చు(x,y)\n\
  కుంచికను_కింద_పెట్టు()\n\
  దిశ_మార్చు(270+వాలు)\n\
  రంగు_మార్చు(ఎరుపు)\n\
  కుడివైపు_చాపాము(పరిమాణము,180)\n\
  రంగు_మార్చు(నీలము)\n\
  కుడివైపు_చాపాము(2*పరిమాణము,45)\n\
  రంగు_మార్చు("ఆకుపచ్చ")\n\
  కుడివైపు_చాపాము(0.586*పరిమాణము,90)\n\
  రంగు_మార్చు(నీలము)\n\
  కుడివైపు_చాపాము(2*పరిమాణము,45)\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  కుంచికను_దాచు();\n\
  అండాకారము( 90, 90, 40, 0 )\n\
  అండాకారము( 0, 0, 90, 45 )\n\
}\n\
'
హిమరేకులు ='\
\n\
\n\
కనిష్ఠ_విలువ = Math.min\n\
\n\
_విధానము_     కోఖ్_రేఖ (పొడవు, లోతు) {\n\
  యది_తర్హి_అన్యథా( () => (లోతు == 0),\n\
   () => {    ముందుకు_జరుగు(పొడవు);  },\n\
   () => {\n\
    //  ఎడమ వైపు బుడిప \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
    కుడి_వైపు_తిరుగు(120); \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
    ఎడమ_వైపు_తిరుగు(60); \n\
    కోఖ్_రేఖ (పొడవు/3, లోతు-1);\n\
  } )\n\
}\n\
\n\
\n\
_విధానము_     కోఖ్_హిమ_రేకు (పొడవు, లోతు) {\n\
  కోణము (30);\n\
  స్థానము_మార్చు(-పొడవు/2,-.3 * పొడవు);\n\
  కోఖ్_రేఖ (పొడవు, లోతు);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కోఖ్_రేఖ (పొడవు, లోతు);\n\
  కుడి_వైపు_తిరుగు(120);\n\
  కోఖ్_రేఖ (పొడవు, లోతు);\n\
  కుడి_వైపు_తిరుగు(120);\n\
}\n\
  \n\
హిమ_రేకులు = ()=> {\n\
  రేకు_రంగులు.push(యాదృచ్ఛిక_సంఖ్య(15) );\n\
  రేకు_రంగులు.shift();\n\
  లెక్క_పెడుతూ_ఆవర్తించు (6, ( క ) => {\n\
    రంగు_మార్చు( రేకు_రంగులు [క] );\n\
    కోఖ్_హిమ_రేకు( పొడవు * (క+1) * (క+1), క)\n\
  } );\n\
}\n\
\n\
_విధానము_     ప్రదర్శన() {\n\
  ఆది_స్థితి()\n\
  పొడవు = .045* కనిష్ఠ_విలువ(గరిష్ఠX(), గరిష్ఠY())\n\
  రేకు_రంగులు = [];\n\
  లెక్క_పెడుతూ_ఆవర్తించు (6, ( క ) => {\n\
    రేకు_రంగులు[క] = యాదృచ్ఛిక_సంఖ్య(6);\n\
  } );\n\
\n\
  కుంచికను_దాచు();\n\
  ఆడించు(హిమ_రేకులు,1)\n\
}\n\
'
చతుర్భుజము ='\
/* ఇక్కడ మీ ప్రక్రియ లు వ్రాయ గలరు. ఉదాహరణ కి:    */\n\
\n\
సమ_చతురస్రము = ( భుజము ) => {\n\
  ఆవర్తించు(4, () => {\n\
    ముందుకు_జరుగు( భుజము );\n\
    కుడి_వైపు_తిరుగు(90);\n\
  });\n\
}\n\
\n\
ప్రదర్శన = () => {\n\
  కుంచికను_దాచు();\n\
  రంగు_మార్చు( నీలము );\n\
  _అత్ర_ భుజము = 100;\n\
  _అత్ర_ రంగు_సంఖ్య = 0;\n\
  యావత్_పరిక్రమ( () => భుజము > 0, ()=> {\n\
    సమ_చతురస్రము( భుజము );\n\
    కుడి_వైపు_తిరుగు(36);\n\
    భుజము = భుజము - 10;\n\
    రంగు_సంఖ్య = ( రంగు_సంఖ్య + 1 ) % 16;\n\
    రంగు_మార్చు( రంగు_సంఖ్య );\n\
  } );\n\
}\n\
'
