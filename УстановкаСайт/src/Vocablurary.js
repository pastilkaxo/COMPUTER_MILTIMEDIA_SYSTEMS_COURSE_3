/* 
var knowleage = 
[
  [подлежащее1, сказуемое1, дополнительные члены предложения1],
  [подлежащее2, сказуемое2, дополнительные члены предложения2],
  [подлежащее3, сказуемое3, дополнительные члены предложения3],
]
*/

// "Схема лабораторной установки для измерения работы выхода электрона представлена на рис. 38.1."
// ["Схема лабораторной установки", "представлена", "на рис. 38.1"]

// Источником необходимых напряжений для анодной цепи и цепи накала катода служит выпрямитель

var knowledge = [
  [
    "Лабораторная работа",
    "называется",
    "определение работы выхода электрона из металла",
  ],
  ["Выпрямитель", "служит", "источником напряжений для анодной цепи"],
  ["Выпрямитель", "служит", "источником напряжений для цепи накала катода"],
  ["Величина анодного напряжения Uа", "регулируется", "делителем Ra"],
  ["Анодное напряжение Uа", "измеряется", "вольтметром V1"],
  ["Сила анодного тока Iа", "измеряется", "миллиамперметром mA"],
  ["Напряжение накала Uнак", "измеряется", "вольтметром V2"],
  ["Сила тока накала Iнак", "регулируется", "переменным резистором Rнак"],
  ["Сила тока накала Iнак", "измеряется", "амперметром А"],
  [
    "Плотность тока насыщения jн",
    "определяется",
    "по формуле Ричардсона-Дешмена",
  ],
  ["Сила тока насыщения", "связана", "с плотностью тока насыщения jн"],
  ["Сила тока насыщения", "связана", "с площадью катода S"],
  ["Величина работы выхода А электрона", "не зависит", "от температуры"],
  [
    "Величина работы выхода электрона",
    "считается",
    "постоянной в узком температурном интервале",
  ],
  ["Силы тока насыщения", "измеряются", "при температурах Т1 и Т2"],
  ["Работа выхода А", "выражается", "в электрон-вольтах"],
  ["Формула (38.4)", "учитывает", "значение постоянной Больцмана k"],
  ["газовая постоянная больцмана", "равна", "1,38 ⋅ 10^(–23) Дж/K"],
  ["Расчетная формула", "получается", "для работы выхода А"],
  ["Температура катода", "определяется", "косвенными методами"],
  [
    "Методы определения температуры катода",
    "основаны",
    "на зависимостях мощности или сопротивления от температуры",
  ],
  ["Потребляемая мощность PT", "вычисляется", "по закону Джоуля–Ленца"],
  ["потребляемая электроном мощность", "равна", "Uнак ⋅ Iнак"],
  ["Сопротивление катода RT", "вычисляется", "по закону Ома"],
  ["Сопротивление катода", "равно", "Uнак / Iнак"],
  [
    "Температура катода",
    "определяется",
    "по графикам зависимости мощности или сопротивления от температуры",
  ],
  [
    "Графики зависимости PT и RT",
    "приведены",
    "в приложении к лабораторной работе",
  ],
  ["амперметр", "- это ", "прибор для измерения силы тока в амперах"],
  [
    "Вольтметр",
    "- это ",
    "измерительный прибор непосредственного отсчёта для определения разности электрических потенциалов, напряжения или ЭДС в электрических цепях.",
  ],
  ["Выпрямитель", "- это ", "преобразователь электрической энергии"],
  [
    "Источник напряжения",
    "- это",
    "двухполюсник, напряжение на зажимах которого не зависит от тока",
  ],
  ["Лампа накаливания", "- это ", "искусственный источник света."],
  [
    "Миллиамперметр",
    "представляет",
    "из себя лабораторный прибор электромагнитной системы",
  ],
  ["Энергия напряжения", "- это ", "скалярная физическая величина."],
  // Триады рисунков приборов и установки
  [
    "установка",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/одель_.jpg'/>",
  ],
  [
    "вольтметр",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/Вольтметр.jpg'/>",
  ],
  [
    "амперметр",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/Амперметр.jpg'/>",
  ],
  [
    "выпрямитель",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/Выпрямитель.jpg'/>",
  ],
  [
    "источник энергии",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/Источник напряжения.jpg'/>",
  ],
  [
    "лампа накаливания",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/Лампа накаливания.jpg'/>",
  ],
  [
    "миллиамперметр",
    "показан",
    "следующим образом на рисунке: <br><img width='200' class='answer_image' src='./images/Миллиамперметр.jpg'/>",
  ],
  [
    "энергия напряжения",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='./images/Энергия напряжения.jpg'/>",
  ],
  // Триады рисунков формул и ученых
  [
    "схема лабораторной установки",
    "представлена",
    "следующим образом: <br><img width='200' class='answer_image' src='/img/schema.png'/>",
  ],
  [
    "ричардсон-дешман",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='/img/Ричардсона – Дешмена.png'/>",
  ],
  [
    "формула Ричардсона",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='/img/38_1.png'/>",
  ],
  [
    "формулы величины силы тока насыщения",
    "выглядят",
    "следующим образом: <br><img width='200' class='answer_image' src='/img/38_2_3.png'/>",
  ],
  [
    "формула работы выхода элеткрона",
    "выглядит",
    "следующим образом: <br><img width='200' class='answer_image' src='/img/38_6.png'/>",
  ],
];

var secondaryKnowledge = [
  ["Электрон", "выходит", "из металла под действием энергии"],
  ["Работа выхода", "- это", "энергия удаления электрона"],
  ["Энергия", "измеряется", "в электрон-вольтах"],
  ["Плотность тока насыщения", "зависит", "от температуры и работы выхода"],
  [
    "Формула Ричардсона-Дешмена",
    "описывает",
    "зависимость плотности тока от температуры",
  ],
  ["Катод", "нагревается", "для эмиссии электронов"],
  ["Анод", "принимает", "электроны из катода"],
  [
    "Источники напряжения",
    "создают",
    "электрическое поле между анодом и катодом",
  ],
  ["Температура катода", "определяется", "током и напряжением накала"],
  ["Ток насыщения", "измеряется", "при двух температурах"],
  ["Работа выхода", "вычисляется", "через формулу с логарифмами токов"],
  ["Вакуумный диод", "состоит", "из анода и катода"],
  ["Анодный ток", "зависит", "от напряжения анода"],
  ["Электрическое поле", "создает", "условия для движения электронов"],
  ["Формула", "включает", "постоянную Ричардсона, температуру и работу выхода"],
  ["Постоянная Ричардсона", "характеризует", "интенсивность эмиссии"],
  ["Эмиссия", "происходит", "при достаточной энергии для преодоления барьера"],
  [
    "Двойной электрический слой",
    "удерживает",
    "электроны у поверхности металла",
  ],
  ["Работа выхода", "зависит", "от структуры поверхности металла"],
  ["Ток накала", "влияет", "на температуру катода"],
  ["Эмиссия", "увеличивается", "с ростом температуры катода"],
  ["Ток анода", "пропорционален", "напряжению на катоде"],
  ["Вакуумный диод", "работает", "в условиях низкого давления"],
  ["Катод", "покрывается", "пленкой для улучшения эмиссии"],
  ["Электрическое поле", "ускоряет", "электроны в направлении анода"],
  ["Температура катода", "зависит", "от мощности накального тока"],
  ["Двойной электрический слой", "создает", "потенциальный барьер"],
  ["Формула Ричардсона-Дешмена", "включает", "температуру в квадрате"],
  ["Энергия", "преодолевается", "за счет теплового движения электронов"],
  ["Работа выхода", "снижается", "при наличии окислов на поверхности"],
  ["Ток насыщения", "увеличивается", "при улучшении вакуума"],
  ["Эмиссия", "обеспечивается", "напряжением и температурой"],
  ["Температура накала", "измеряется", "оптически или термопарами"],
  ["Эмиссия", "характеризует", "свойства материала катода"],
  ["Работа выхода", "изучается", "в физике твердого тела"],
  ["Анодный ток", "определяется", "параметрами вакуума"],
  ["Работа выхода", "измеряется", "в электрон-вольтах"],
  ["Температура катода", "регулируется", "током накала"],
  ["Эмиссия", "увеличивается", "при уменьшении работы выхода"],
  ["Постоянная Ричардсона", "является", "физической константой"],
  ["Катод", "излучает", "электроны под действием нагрева"],
  ["Электрическое поле", "определяет", "направление движения электронов"],
  ["Работа выхода", "характеризует", "способность материала к эмиссии"],
  ["Термоэлектронная эмиссия", "происходит", "при нагреве металла"],
  ["Работа выхода", "определяет", "пороговую энергию для эмиссии"],
  ["Фотоэффект", "объясняет", "выход электрона под действием света"],
  ["Эмиссионные свойства", "зависят", "от кристаллической решётки"],
  ["Поверхностные дефекты", "влияют", "на величину работы выхода"],
  ["Фотоны", "обеспечивают", "энергию для перехода электрона"],
  ["Работа выхода", "анализируется", "для выбора материалов"],
  ["Температура", "влияет", "на интенсивность эмиссии"],
  ["Фотонная энергия", "зависит", "от частоты света"],
  ["Катод", "нагревается", "для обеспечения термоэмиссии"],
  ["Работа выхода", "влияет", "на эффективность эмиссии"],
  ["Эмиссия", "усиливается", "в сильном электрическом поле"],
  ["Фотоэффект", "доказывает", "связь света и электроники"],
];

secondaryKnowledge.forEach((el) => knowledge.push(el));
console.log(knowledge.length);
console.log(knowledge);

/*   1б   */ var endings = [
  ["ёт", "(ёт|ет|ут|ют)"],
  ["ет", "(ёт|ет|ут|ют)"],
  ["ут", "(ёт|ет|ут|ют)"],
  ["ют", "(ёт|ет|ут|ют)"], //1 спряжение

  ["ит", "(ит|ат|ят)"],
  ["ат", "(ит|ат|ят)"],
  ["ят", "(ит|ат|ят)"], //2 спряжение

  ["ется", "(ет|ут|ют)ся"],
  ["утся", "(ет|ут|ют)ся"],
  ["ются", "(ет|ут|ют)ся"], //1 спряжение, возвратные

  ["ится", "(ит|ат|ят)ся"],
  ["атся", "(ит|ат|ят)ся"],
  ["ятся", "(ит|ат|ят)ся"], //2 спряжение, возвратные

  ["cя", "(ит|ат|ят)ся"],
  ["ен", "ен"],
  ["ена", "ена"],
  ["ено", "ено"],
  ["ены", "ены"],
  ["ан", "ан"],
  ["ана", "ана"],
  ["ано", "ано"],
  ["аны", "аны"],
  ["жен", "жен"],
  ["жна", "жна"],
  ["жно", "жно"],
  ["на", "(на|но|ны)"],
  ["но", "(на|но|ны)"],
  ["ны", "(на|но|ны)"],
  ["еe", "еe"],
  ["ящие", "ящие"],
  ["жны", "жны"], //краткие прилагательные
  // ["изображен", "(ена|ен|ён|ены)"],
  // ["показан", "(ана|ан)"],
  ["такое", "- это"],
];
let blacklist = ["замена", "замены", "атрибут", "маршрут", "член", "нет"];
// 1c: определения сказуемого

function getEnding(word) {
  if (blacklist.includes(word)) {
    return -1;
  }

  for (let j = 0; j < endings.length; j++) {
    if (word.endsWith(endings[j][0])) {
      return j;
    }
  }
  return -1;
}

// 1d: переводящие первый символ в маленький и большой (для вопроса)

// для ответа

function textToLower(answer) {
  return answer.substring(0, 1).toLowerCase() + answer.substring(1);
}

function textToUpper(answer) {
  return answer.substring(0, 1).toUpperCase() + answer.substring(1);
}

// Главная функция

function getAnswer(question) {
  let txt = textToLower(question);
  var separators = "'\",.!?()[]\\/";

  for (let i = 0; i < separators.length; i++) {
    txt = txt.replace(separators[i], " " + separators[i]);
  }

  let result = false;
  let answer = "";
  let words = txt.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let ending = getEnding(words[i]);
    if (ending >= 0) {
      // !=1
      console.log("Ending:" + ending);
      words[i] =
        words[i].substring(0, words[i].length - endings[ending][0].length) + // замена псевдоокночания на набор возможных
        endings[ending][1];
      let predicate = new RegExp(words[i]); // регулярка по сказуемому с набором окончаний
      if (endings[ending][0] == endings[ending][1]) {
        if (!blacklist.includes(words[i])) {
          predicate = new RegExp(".*" + words[i] + " " + words[i + 1] + ".*");
          i++;
        }
      }
      console.log("Prediacate:" + predicate);

      let subject_string = words.slice(i + 1).join(".*"); // выделение подлежащих после сказуемого
      if (subject_string.length > 3) {
        let subject = new RegExp(".*" + subject_string + ".*");
        console.log("Subject:" + subject);
        for (let j = 0; j < knowledge.length; j++) {
          if (
            predicate.test(knowledge[j][1].toLowerCase()) &&
            (subject.test(knowledge[j][0].toLowerCase()) ||
              subject.test(knowledge[j][2].toLowerCase()))
          ) {
            answer += textToUpper(
              knowledge[j][0] +
                " " +
                knowledge[j][1] +
                " " +
                knowledge[j][2] +
                ". "
            );
            result = true;
          }
        }
        if (!result) {
          for (let j = 0; j < knowledge.length; j++) {
            if (
              subject.test(knowledge[j][0].toLowerCase()) ||
              subject.test(knowledge[j][2].toLowerCase())
            ) {
              answer += textToUpper(
                knowledge[j][0] +
                  " " +
                  knowledge[j][1] +
                  " " +
                  knowledge[j][2] +
                  ". "
              );
              result = true;
            }
          }
        }
      }
    }
  }
  if (!result) answer = "Ответ не найден <br/>";
  return answer;
}

// Массив вопросов к базе знаний:

var questions = [
  "Как называется лабораторная работа",
  "Чем служит выпрямитель",
  "Чем регулируется величина анодного напряжения",
  "Чем измеряется анодное напряжение",
  "Как измеряется сила анодного тока",
  "Чем измеряется напряжение накала",
  "Как регулируется сила тока накала",
  "Чем измеряется сила тока накала",
  "Как определяется плотность тока насыщения",
  "Что не зависит от температуры",
  "Чем считается величина работы выхода электрона",
  "При чем измеряются силы тока насыщения",
  "В чём выражается работа выхода",
  "Что учитывает формула (38.4)",
  "Чему равна газовая постоянная больцмана",
  "Что получается для работы выхода",
  "Как определяется температура катода",
  "На чём основаны методы определения температуры катода",
  "Как вычисляется потребляемая мощность",
  "Чему равна потребляемая электроном мощность",
  "Как вычисляется сопротивление катода",
  "Чему равно сопротивление катода",
  "Что такое амперметр",
  "Что такое вольтметр",
  "Что такое выпрямитель",
  "Что такое источник напряжения",
  "Что такое лампа накаливания",
  "Что представляет миллиамперметр",
  "Что такое энергия напряжения",
  // // // 2
  "Как электрон выходит из металла",
  "Что такое работа выхода",
  "В чем измеряется энергия",
  "От чего зависит плотность тока насыщения",
  "Что описывает формула ричардсона-дешмена",
  "Чем покрывается катод",
  "Что создают источники напряжения",
  "Как определяется температура катода",
  "Когда измеряется ток насыщения",
  "Как вычисляется работа выхода",
  "Из чего состоит вакуумный диод",
  "От чего зависит анодный ток",
  "Что характеризует постоянная ричардсона",
  "Когда происходит эмиссия",
  "Что создаёт двойной электрический слой",
  "Что зависит от структуры поверхности металла",
  "Что влияет на температуру катода",
  "Как эмиссия изменяется с ростом температуры катода",
  "Чему пропорционален ток анода на катоде",
  "В каких условиях работает вакуумный диод",
  "Что ускоряет электрическое поле",
  "От чего зависит температура катода",
  "Что создаёт двойной электрический слой",
  "Что включает формула ричардсона-дешмена",
  "Как преодолевается энергия",
  "Как снижается работа выхода",
  "Как ток насыщения изменяется при улучшении вакуума",
  "Как эмиссия изменяется при уменьшении работы выхода",
  "Что измеряется температура накала",
  "Что характеризует эмиссия",
  "Где изучается работа выхода",
  "Что определяется параметрами вакуума",
  "В каких единицах измеряется работа выхода",
  "Как регулируется температура катода",
  "Что такое постоянная ричардсона",
  "Что излучает электроны под действием нагрева",
  "Что определяет электрическое поле",
  "Что характеризует работа выхода",
  "Когда происходит термоэлектронная эмиссия",
  "Что определяет работа выхода",
  "Что объясняет фотоэффект",
  "От чего зависят эмиссионные свойства",
  "На что влияют поверхностные дефекты",
  "Что обеспечивают фотоны",
  "Как анализируется работа выхода",
  "Что влияет на интенсивность эмиссии",
  "От чего зависит фотонная энергия",
  "Что нагревается для обеспечения термоэмиссии",
  "Что влияет на эффективность эмиссии",
  "Как усиливается эмиссия",
  "Что доказывает фотоэффект",
  "С чем связана сила тока насыщения",
  "Где приведены графики зависимости",
];

// for (let k = 0; k < questions.length; k++) {
//   console.log(getAnswer(questions[k]));
//   console.log("<------------>");
// }

// for (i = 1; i <= 100; i++) {
//   if (confirm("Продолжить диалог?")) {
//     let question = prompt("Введите вопрос", "");
//     alert(getAnswer(question));
//   } else {
//     break;
//   }
// }

// ниже делал сам а зачем делал никто не знает все равно не сошлось со звездами карта не легла
// 1c: определения сказуемого
//let question = prompt("Задайте вопрос", "Как называется ты");
//question = question.split(" ");

// function getPredicate(arr) {
//   var res = "";
//   arr.forEach((element) => {
//     endings.forEach((okonchanie) => {
//       if (element.endsWith(okonchanie[0])) {
//         //console.log(okonchanie[0]);
//         res += element;
//       }
//     });
//   });
//   return res;
// }
// 1d: переводящие первый символ в маленький и большой (для вопроса)

// function changeQuestionCase(question) {
//   let fullQuestion;
//   const loweredQuest = question[0][0].toLowerCase() + question[0].slice(1);
//   const upperedQuest = question[0][0].toUpperCase() + question[0].slice(1);
//   question = question.slice(1);
//   fullQuestion = question.join(" ");
//   return [loweredQuest + " " + fullQuestion, upperedQuest + " " + fullQuestion];
// }

// const [lowered, uppered] = changeQuestionCase(question);
// console.log(lowered);
// console.log(uppered);
