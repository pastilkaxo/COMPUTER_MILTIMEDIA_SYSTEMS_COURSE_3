var dialogOn = false; // active/inactive

function dialog_window() {
  const SpeechKit = window.SpeechKitBrowserSDK;

  // добавление интерфейса диалогового окна на страницу при загрузке
  document.body.innerHTML +=
    "<div id='modal_container' class='modal_container'><img class='modal_image'/></div>" +
    "<div id='dialog' class='dialog' style='margin-left:-45px;'>" +
    "<div class='label' onclick='openDialog()'>Нажми, чтобы спросить!</div>" +
    "<div class='header'>История:</div>" +
    "<div class='history' id='history'></div>" +
    "<div class='question'><input id='Qdialog' placeholder='Введите вопрос'/> <br/><button button onclick = 'ask(\"Qdialog\")' > Спросить</button ></div > " +
    "<button class='voiceBtn'>Говорить</button>" +
    "</div>";

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Ваш браузер не поддерживает распознавание речи.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "ru-RU";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const questionInput = document.querySelector("#Qdialog");
    questionInput.value = transcript + "?";
  };

  recognition.onerror = (event) => {
    console.error(`Ошибка распознавания речи: ${event.error}`);
  };

  document.querySelector(".voiceBtn").addEventListener("click", function () {
    recognition.start();
  });

  //API-ключ для подключения к речевому сервису Yandex
  window.ya.speechkit.settings.apikey =
    "AQVN0IkfUdYyk4mrmN8qkiZJCNU14gVJ74X_wIk2";
}

function openDialog() {
  // animation
  if (dialogOn) {
    //анимация закрытия диалогового окна
    $("#dialog").animate({ "margin-left": "-45px" }, 1000, function () {});
    dialogOn = false;
  } else {
    //анимация открытия диалогового окна
    $("#dialog").animate({ "margin-left": "-1370px" }, 1000, function () {});
    dialogOn = true;
    clearInterval(timer);
  }
}

function ask(questionInput) {
  //переменная для считывания содержания окна ввода вопроса:
  var question = document.getElementById(questionInput).value;
  //активизация диалога
  dialogOn = true;
  //создаем переменную и сохраняем в ней тег <div>
  var newDiv = document.createElement("div");
  //задаем класс оформления созданного блока
  newDiv.className = "question";
  //заполняем созданный блок текстом вопроса
  newDiv.innerHTML = question;
  //вставляем созданный блок в блок <history> и закрываем его
  document.getElementById("history").appendChild(newDiv);
  +"</div>";
  //создаем еще один блок <div>
  newDiv = document.createElement("div");
  //задаем класс оформления созданного блока
  newDiv.className = "answer";
  //наполняем созданный блок ответом, полученным от функции getAnswer()
  newDiv.innerHTML = getAnswer(question);
  //добавляем в ответ тег аудио, ссылающийся на звук от синтезатора Yandex
  newDiv.innerHTML +=
    "<audio controls='true' autoplay='true' " +
    "src='http://tts.voicetech.yandex.net/" +
    "generate?format=wav&lang=ru-RU&" +
    "key=AQVN0IkfUdYyk4mrmN8qkiZJCNU14gVJ74X_wIk2&" +
    "text=" +
    newDiv.innerText +
    "'></audio>";
  //вставка звукового блока в блок <history>
  document.getElementById("history").appendChild(newDiv);
  //запуск звука
  if (newDiv.lastChild.tagName == "AUDIO") {
    newDiv.lastChild.play();
  }
  //прокрутка в окне истории ответов в самый низ
  document.getElementById("history").scrollTop =
    document.getElementById("history").scrollHeight;
  //очистка текстового поля для ввода нового вопроса
  document.getElementById(questionInput).value = "";
}

let gotChanged = false;

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("answer_image")) {
    zoom(event.target);
  }
});

function zoom(image) {
  if (!gotChanged) {
    let modal = document.querySelector(".modal_container");
    let modalImg = document.querySelector(".modal_image");
    if (modal && modalImg) {
      modal.classList.add("modal_container_active");
      modalImg.src = image.src;
      gotChanged = true;
    }
  }
}

function hide() {
  let modal = document.querySelector(".modal_container");
  let modalImg = document.querySelector(".modal_image");
  modalImg.src = null;
  modal.classList.remove("modal_container_active");
  gotChanged = false;
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal_container_active")) {
    hide();
  }
});
