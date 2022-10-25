$(function(){
  //#wrap> ul> li> a를 클릭하니까, 모든 li에 있는 on클래스가 없어진 다음에 내가 방금 누른것의 부모요소(li)에 on클래스가 붙는다
  $("#wrap>ul>li>a").click(function(){
    $("#wrap>ul>li").removeClass("on");//wrap>ul>li의 모든 on이 사라짐
    $(this).parent().addClass("on");
  });
});