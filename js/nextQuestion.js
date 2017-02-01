function gotToNextQuestion(id){
  id++;
  let url=window.location.href;
  let base=url.split(/\d/)[0]
  if(id<4){
    location.href=base+"3cards_layout.html?key="+id;
  }
  else if(id<5){
    location.href=base+"2cards_layout.html?key="+id;
  }
  else{
    location.href=base+"2cards_layout_b.html?key="+id;
  }
  return 0;
}
