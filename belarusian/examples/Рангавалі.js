// https://hi.wikipedia.org/wiki/%E0%A4%B0%E0%A4%82%E0%A4%97%E0%A5%8B%E0%A4%B2%E0%A5%80

паказаць = () => {
  пачатковы_стан();
    схавайце_пэндзаль();
  паўтараць(6, () => {
    змяніць_колер_на( 0 );
    павярнуць_направа(180);
    _тут_ бок = 100;
    _тут_ колер_нумар = 0;
    Паўтараць_пакуль( () => бок > 0, ()=> {
  
      дуга_направа(бок, 30 );
  
      павярнуць_направа(30);
      бок = бок - 10;
      колер_нумар = ( колер_нумар  + 15 ) % 16;
      змяніць_колер_на( колер_нумар );
    } );
  });

  павярнуць_направа(310);
  падніміце_пэндзаль();
  ісці_наперад(60 );
  пакладзеце_пэндзаль()
  змяніць_колер_на( 13 );
  запоўнены_круг(5 );
  круг(10);
}
