const quiz = [
  {
    question:
      "二つ以上のものが互いに敵対することなく助け合って生存し、ともに栄えること",
    correct: document.getElementsByTagName("img")[14],
    text: "共存共栄",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
    explainText: "互いに協力し合うことで、共に繁栄していくという意味です。",
  },
  {
    question: "一生に一度の出会いであるということ",
    correct: document.getElementsByTagName("img")[3],
    text: "一期一会",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question:
      "多くの人が心を一つにして、あたかも一人の人のように固く結びつくこと",
    correct: document.getElementsByTagName("img")[7],
    text: "一心同体",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "互いの気持ちや考えなどがぴったりと一致すること",
    correct: document.getElementsByTagName("img")[1],
    text: "意気投合",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question:
      "崩壊や敗北などの危機に直面した状態を一気によい方向に立て直すこと",
    correct: document.getElementsByTagName("img")[12],
    text: "起死回生",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "態度や雰囲気に威厳が満ちあふれて立派",
    correct: document.getElementsByTagName("img")[9],
    text: "威風堂々",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "それまでの考えを改め、あることを成し遂げようと決心すること",
    correct: document.getElementsByTagName("img")[5],
    text: "一念発起",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "意気込みや元気がこの上なく盛んな状態",
    correct: document.getElementsByTagName("img")[0],
    text: "意気衝天",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "言葉によらずに、互いの心から心に伝えること",
    correct: document.getElementsByTagName("img")[2],
    text: "以心伝心",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "欠点や不足がまったくないさま",
    correct: document.getElementsByTagName("img")[11],
    text: "完全無欠",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "多くの人が一つの目的のためにまとまること",
    correct: document.getElementsByTagName("img")[8],
    text: "一致団結",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "「一日に一つはよいことしましょう」という呼びかけ",
    correct: document.getElementsByTagName("img")[4],
    text: "一日一善",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question:
      "今までに一度もなく、これからも起こらないと思われるごくまれなこと",
    correct: document.getElementsByTagName("img")[15],
    text: "空前絶後",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "命がけで物事をすること",
    correct: document.getElementsByTagName("img")[6],
    text: "一生懸命",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "一つの目的に向かって夢中で取り組むさま",
    correct: document.getElementsByTagName("img")[10],
    text: "我武者羅",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
  {
    question: "喜び・怒り・悲しみ・楽しみの四つの情のことと",
    correct: document.getElementsByTagName("img")[13],
    text: "喜怒哀楽",
    explainImg: "images/table/omote (1).png", // ← 解説用の別画像
  },
];

const QuizLen = quiz.length;
let quizIndex = 0;
let score = 0;

// 問題セット
const SetupQuiz = () => {
  document.getElementById("question").textContent = quiz[quizIndex].question;
};
SetupQuiz();

// ポップアップ表示
const showPopup = (message, imgPath = null, explainText = null) => {
  const popupMessage = document.getElementById("popup-message");
  popupMessage.innerHTML = ""; // 一旦クリア

  // メッセージを追加
  const msg = document.createElement("p");
  msg.textContent = message;
  popupMessage.appendChild(msg);

  // 解説画像を追加
  if (imgPath) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.style.maxWidth = "200px";
    img.style.display = "block";
    img.style.margin = "10px auto";
    popupMessage.appendChild(img);
  }

  // 解説文を追加
  if (explainText) {
    const exp = document.createElement("p");
    exp.textContent = explainText;
    exp.style.marginTop = "10px";
    popupMessage.appendChild(exp);
  }

  document.getElementById("popup").style.display = "flex";
};

// OKボタンで閉じる
document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";

  if (quizIndex < QuizLen) {
    SetupQuiz();
  } else {
    showPopup("終了！あなたの正解数は " + score + "/" + QuizLen);
  }
});

// クリック判定
const $answer = document.getElementsByTagName("img");

const clickHandler = (e) => {
  const clickedImg = e.target.getAttribute("src");

  if (quiz[quizIndex].correct === clickedImg) {
    score++;
    showPopup(
      "正解です！「" + quiz[quizIndex].text + "」",
      quiz[quizIndex].explainImg,
      quiz[quizIndex].explainText
    );
  } else {
    showPopup(
      "不正解！正解は「" + quiz[quizIndex].text + "」です。",
      quiz[quizIndex].explainImg,
      quiz[quizIndex].explainText
    );
  }
  quizIndex++;
};

// 画像にイベント付与
let HandlerIndex = 0;
const AnswerLen = $answer.length;
while (HandlerIndex < AnswerLen) {
  $answer[HandlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  HandlerIndex++;
}
