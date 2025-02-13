// Nested Squares -- draw a set of nested squares

//draw a square
_విధానము_     square(side) {
   ఆవర్తించు(4, _విధానము_     () {
      ముందుకు_జరుగు(side);
      కుడి_వైపు_తిరుగు(90);
   });
}


// draw some nested squares
_విధానము_     nestedSquares(count) {
  చెరిపి_వేయి();
  స్థానము_మార్చు(0,0);
  కుంచికను_దాచు();
  for (s=1; s<count*4; s=s+4) {
    కుంచికను_పైకి_ఎత్తు();
    // move down and back 2 spaces
    ఎడమ_వైపు_తిరుగు(90);
    ముందుకు_జరుగు(2);
    ఎడమ_వైపు_తిరుగు(90);
    ముందుకు_జరుగు(2);
    ఎడమ_వైపు_తిరుగు(180);
    కుంచికను_కింద_పెట్టు();
    రంగు_మార్చు(యాదృచ్ఛిక_సంఖ్య(16));
    square (s);
  }
}

_విధానము_     demo1() {
  ఆది_స్థితి()
  size = 2* గరిష్ఠY()
  if (2* గరిష్ఠX() < size) {
    size = 2*గరిష్ఠX()
  }
  number = .9 * size /4  // 4 is the difference in square size
  _విధానము_     nest25 () {
    nestedSquares (size);
  }
  // animate a simple parameterless function
  ఆడించు( nest25, 200);
}

_విధానము_     ప్రదర్శన() {
  // animate with _విధానము_     needing a parameter passed
  ఆది_స్థితి()
  size = 2* గరిష్ఠY()
  if (2* గరిష్ఠX() < size) {
    size = 2*గరిష్ఠX()
  }
  number = .9 * size /4  // 4 is the difference in square size
  ఆడించు( _విధానము_     () { nestedSquares(number)} ,200);
}
