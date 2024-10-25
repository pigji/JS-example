//패럴럭스 효과
//window에서 scroll이벤트 발생 시 doScroll함수 호출
addEventListener("scroll", doScroll);

//doscroll함수 생성
function doScroll(){
  //스크롤 이동 값을 변수에 할당
  let scrollMove = window.scrollY;
  //article의 높이 값(padding포함)을 변수에 할당
  let ht = document.querySelector("article").offsetHeight;
  //console.log(ht) //높이 값 확인

  //article요소를 선택
  const articles = document.querySelectorAll("section > article");
  //article요소를 순회하면서 함수 실행 매개변수 el로 순회하는 article요소를 전달 받음
  articles.forEach(el => {
    //해당 순번의 article요소의 y축 절대 좌표값을 thisTop변수에 할당
    let thisTop = scrollMove + el.getBoundingClientRect().top;

    //각 변수에 thisTop에서 article의 높이 값을 뺀 값과 더한 값을 할당(각 요소의 스크롤 이벤트가 발생할 범위)
    let start = thisTop - ht;
    let end = thisTop + ht;
    //스크롤 이동값이 start변수 값보다 크고 end 값보다 작을때 실행
    if(scrollMove > start && scrollMove <= end){
      //변수에 스크롤 이동값에서 start변수 값을 뺀 값을 할당
      let value = scrollMove - start;
      //해당 순번의 article의 자손인 image요소를 선택하여 bottom속성 값을 value값으로 설정
        //이때 이미지를 아래로 이동시키기 위해 (-)부호를 적용하고 value를 3으로 나눠서 스크롤 이동 값보다 작은 값으로 이동하도록 설정
      el.querySelector(".image").style.bottom = -(value / 3) + "px";
    }
  })
}
//초기에 한번 doScroll함수를 호출
doScroll();

/*-----------------------------------------*/
//커서 이펙트 요소 선택
const cursorEffect = document.querySelector(".cursor_effect");

//마우스 무브 이벤트 리스너 추가
document.documentElement.addEventListener("mousemove", (e) => {
  //각 변수에 스크롤 이동 값을 제외한 마우스의 x, y축 위치 값을 할당
  let posX = e.clientX;
  let posY = e.clientY;

  //cursorEffect요소에 translate속성 값으로 마우스 위치 값을 대입
  cursorEffect.style.transform = `translate(${posX}px, ${posY}px)`;
})

//a요소에 마우스를 올리면 이펙트 커지는 효과

//모든 a태그 선택
const anchors = document.querySelectorAll("a");

//a태그에 마우스를 올리면 커서 이펙트에 on클래스를 추가하여 크기를 늘려줌
anchors.forEach(anchor => anchor.addEventListener("mouseover", () => {
  cursorEffect.classList.add('on');
}))

//a태그에서 마우스가 떠나면 on클래스를 제거해서 크기를 원래대로 돌려줌
anchors.forEach(anchor => anchor.addEventListener("mouseout", () => {
  cursorEffect.classList.remove('on');
}))

//마우스를 클릭했을때 커퍼 이펙트에 적용할 효과(클릭하면 커퍼 이펙트가 작아지는 효과)
const cursorIcon = document.querySelector(".cursor_icon");
//마우스 버튼을 누르고 있을때 cursor_icon요소에 on클래스 추가
document.documentElement.addEventListener("mousedown", () => {
  cursorIcon.classList.add('on'); //커서의 크기가 작아짐
})
//마우스 버튼을 땟을때 cursor_icon요소에 on클래스 제거
document.documentElement.addEventListener("mouseup", () => {
  cursorIcon.classList.remove('on'); //커서의 크기가 원래대로 커진다
})