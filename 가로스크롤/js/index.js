window.addEventListener("scroll", () => {
  //section의 left값을 스크롤한 거리만큼 (-)값으로 적용
  document.querySelector("section").style.left = -(scrollY) + "px";
})

//article 요소의 갯수 저장
const articles = document.querySelectorAll("article");
const numAc = articles.length;

//article요소의 총 넓이 계산
const winSec = 200 * numAc;

//패널이 하나 열렸을 때 총 넓이 계산(article이 펼쳐지면 넓이가 600px 늘어남)
const widTotal = winSec + 600;

//section의 넓이 설정
document.querySelector("section").style.width = widTotal + "px";

//body의 높이 설정
document.body.style.height = winSec + "px";

//문서의 스크롤 거리를 widSec의 넓이만큼 변경해서 처음 문서가 불러와지면 마지막 위치로 스크롤 이동
scrollTo({
  top: winSec,
  behavior: "smooth"
})