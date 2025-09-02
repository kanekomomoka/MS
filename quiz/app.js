const quiz = [
  {
    question: "ここに問題01が入ります。",
    answers: [
      "images/img01.png",
      "images/img02.png",
      "images/img03.png",
      "images/img04.png",
    ],
    correct: "images/img01.png",
    explanation:
      "これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。これは問題01の解説です。正しい理由をここに説明します。",
    expImage: "images/img01.png",
  },
  {
    question: "ここに問題02が入ります。",
    answers: [
      "images/img01.png",
      "images/img02.png",
      "images/img03.png",
      "images/img04.png",
    ],
    correct: "images/img02.png",
    explanation: "これは問題02の解説です。",
    expImage: "images/img02.png",
  },
  {
    question: "ここに問題03が入ります。",
    answers: [
      "images/img01.png",
      "images/img02.png",
      "images/img03.png",
      "images/img04.png",
    ],
    correct: "images/img03.png",
    explanation: "これは問題03の解説です。",
    expImage: "images/img03.png",
  },
];

const $doc = document;
const $question = $doc.getElementById("js-question");
const $buttons = $doc.querySelectorAll(".btn");

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

// 初期表示
const init = () => {
  $question.textContent = quiz[quizCount].question;

  $buttons.forEach((btn, index) => {
    const ans = quiz[quizCount].answers[index];
    if (ans.match(/\.(png|jpg|jpeg|gif)$/)) {
      btn.innerHTML = `<img src="${ans}" alt="選択肢" style="max-width:100px;">`;
    } else {
      btn.textContent = ans;
    }
  });
};

// 次の問題へ
const goToNext = () => {
  quizCount++;
  if (quizCount < quizLen) {
    init();
  } else {
    showEnd();
  }
};

// 判定とモーダル表示
const judge = (elm) => {
  let answerText =
    elm.textContent.trim() || elm.querySelector("img")?.getAttribute("src");
  let isCorrect = answerText === quiz[quizCount].correct;

  if (isCorrect) score++;

  // モーダルに情報をセット
  document.getElementById("modalImage").src = quiz[quizCount].expImage;
  document.getElementById("modalTitle").textContent = isCorrect
    ? "正解！"
    : "不正解…";
  document.getElementById("modalBody").textContent =
    quiz[quizCount].explanation;

  // モーダルを表示
  $("#resultModal").modal("show");

  // 閉じるを押したら次へ
  document.getElementById("closeModal").onclick = () => {
    $("#resultModal").modal("hide");
    goToNext();
  };
};
// 終了時
const showEnd = () => {
  $question.innerHTML = `
    終了！あなたのスコアは ${score}/${quizLen} です<br><br>
    <a href="" onclick="location.reload(); return false;" class="btn btn-link">最初からやり直す</a>
  `;
  document.getElementById("js-items").style.visibility = "hidden";
};
// ボタンにイベント設定
$buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    judge(e.currentTarget);
  });
});

// スタート
init();
