function goToPreviousQuestion(id){
  id--;
  console.log(id);
  let url=window.location.href;
  let base=url.split(/\d/)[0]
  let newUrl= url.split("/")
  newUrl.pop();
  newUrl=newUrl.join('/').replace(" ","");
  if(id<4){
    location.href=newUrl+"/3cards_layout.html?key="+id;
  }
  else if(id<5){
    location.href=newUrl+"/2cards_layout.html?key="+id;
  }
  else{
    location.href=newUrl+"/2cards_layout_b.html?key="+id;
  }
  return 0;
}
