// Color Changing Dots -- show changing colors of a string of dots or lights

/*
Maybe you can adapt to make a traffic light simulator or Christmas light
controller.
*/

బిందువును_చిత్రీకరించు = () => {
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16))
    నిండు_వృత్తము()
    ముందుకు_జరుగు(15)
}

బిందువుల_వారుస_చిత్రీకరించు = () => {
  స్థానము_మార్చు(కనిష్ఠX() + 20,0)
  ఆవర్తించు(32, బిందువును_చిత్రీకరించు)
}

రంగులు_మారే_బిందువులు = () => {
  ఆది_స్థితి()
   చుట్టొద్దు()
  స్థానము_మార్చు(కనిష్ఠX(),0)
  కోణము(90)
  కుంచికను_కింద_పెట్టు()
  రంగు_మార్చు("నలుపు")
  వెడల్పు(80)
  ముందుకు_జరుగు(గరిష్ఠX() + గరిష్ఠX()) // నల్ల పట్టీ
  కుంచికను_పైకి_ఎత్తు()
  వెడల్పు(1)
  ఆడించు( బిందువుల_వారుస_చిత్రీకరించు, 500)
}

ప్రదర్శన = రంగులు_మారే_బిందువులు;
