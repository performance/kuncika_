// Square Series -- draw a set of overlapping squares

// lower right is not quite right, it gets left out.

_విధానము_     paddle (side) {
  side2 = side + side
  ముందుకు_జరుగు( side2)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  ఎడమ_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
  కుంచికను_పైకి_ఎత్తు()
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side2)
  కుడి_వైపు_తిరుగు( 180)
  కుంచికను_కింద_పెట్టు()
}


_విధానము_     cwGroup( side) {
  for( _సర్వత్ర_   i=0; i<4; i++) {
    paddle( side)
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
    కుంచికను_కింద_పెట్టు()
  }
}


_విధానము_     ccwGroup( side) {
  for( _సర్వత్ర_   i=0; i<4; i++) {
    paddle( side)
    కుంచికను_పైకి_ఎత్తు()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 90)
    కుంచికను_కింద_పెట్టు()
  }
}


_విధానము_     cwRow( side) {
  for (_సర్వత్ర_   i=కనిష్ఠX(); i<గరిష్ఠX(); i = i + 6*side) {
    xనియోగించు(i)
    cwGroup( side)
  }
}


_విధానము_     ccwRow( side) {
  for (_సర్వత్ర_   i=కనిష్ఠX() + 4*side; i<గరిష్ఠX(); i = i + 6*side) {
                     // offset row 3 sides + 1 for cw/ccw flip
    xనియోగించు(i)
    ccwGroup( side)
  }
}


_విధానము_     ప్రదర్శన() {
   చుట్టొద్దు()
  side = 30
  for (_సర్వత్ర_   i=కనిష్ఠY(); i<గరిష్ఠY(); i = i + 6*side) {
    yనియోగించు(i)
    cwRow( side)
    yనియోగించు(i + 3*side)
    రంగు_మార్చు( ఎరుపు )
    ccwRow( side)
    రంగు_మార్చు("నలుపు")
  }
}