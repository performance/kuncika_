// Fibanochi sequence -- draw a set of squares illustrating a Figanochi sequence
// a Fibanochi sequence is the series 1,1,2,3,5,8,13,21,...
// This defines the Golden Ratio phi.
// it appears in nature as in the nautilus shell, pineapple, sunflower,
// pine cones.
// Originally it was thought to be the rate of reproduction of rabbits.
// More at Wikipedia.com

_విధానము_     box (side) {
  for (_సర్వత్ర_   i = 0; i<4; i++) {
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 90)
  }
  ముందుకు_జరుగు( side)
  కుడి_వైపు_తిరుగు( 90)
  ముందుకు_జరుగు( side)
}

_విధానము_     fib(count, side) {
  _సర్వత్ర_   fiblist = [1,1]
  _సర్వత్ర_   fibcount = 1
  while (fibcount <= count) {
    console.log("fig " + fibcount + " " + fiblist[0] + "," + fiblist[1])
    if (fibcount == 1) {
      box( side)
      console.log("box1")
    }
    if (fibcount == 2) {
      box( side)
      console.log("box2")
    }
    if (fibcount >=3 ) {
      foo = fiblist[0] + fiblist[1]
      box( side * foo)
      fiblist =[fiblist[1], foo]
      console.log("box3")
    }
    fibcount = fibcount + 1
  }
}


_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  స్థానము_మార్చు(150,60)
  కోణము(90)
  కుంచికను_దాచు()
  fib( 11,4)
}
