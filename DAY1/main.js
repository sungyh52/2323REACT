const mainElFirst = (
  <div class="main">; const mainElLast = 자바스크립트로 만드는 HTML!</div>
);

const titleElFirst = <div class="title">; const titleElLast = </div>;

const ulElFirst = <ul>; const ulElLast = </ul>;

const liElFirst = <li>; const liElLast = </li>;

const titleContent = `리액트를 잘하려면?`;
const howToMasterReact = ["공부를 해라", "연습을 해라", "다시 태어나라"];

const liArray = howToMasterReact.map((v, i) => {
  return `${i + 1}. ${v}`;
});

console.log(...liArray);

root.innerHTML =
  mainElFirst +
  titleElFirst +
  titleContent +
  titleElLast +
  ulElFirst +
  ulElLast +
  mainElLast;
