using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class QuestionButton : MonoBehaviour {

	[SerializeField]
	Text message;
    [SerializeField]
    GameObject textBack;
    public void OnSettings(){   //  МЕТОД, ВЫЗЫВАЕМЫЙ ПОЛЬЗОВАТЕЛЕМ ЩЕЛЧКОМ ПО КНОПКЕ 
        message.text = "ЛР №38 \r\nОпределение работы выхода электрона из металла.";
    }

    public void OnPointer()
    {
        Open();
        message.text = "Определение работы выхода электрона из металла.\r\n Изображение лабораторной установки для измерения работы выхода электрона представлена на карте слева \r\nИсточником необходимых напряжений для анодной цепи и цепи накала катода служит Выпрямитель. \r\n" +
            "Величина анодного наА К Выпрямитель ∼ 220 В + − V1 A Rа Rнак V2 тA \r\nРис. 38.1 52 ЭЛЕКТРИЧЕСТВО НАПРЯЖЕНИЯ Uа регулируется делителем Ra и измеряется вольтметром V1 ,\r\n а сила анодного тока Iа измеряется миллиамперметром mA. \r\n" +
            "Для измерения напряжения накала Uнак используется вольтметр V2 . \r\n" +
            "Сила тока накала Iнак в цепи катода регулируется переменным резистором Rнак и измеряется амперметром";
    }


    public void OnExit() {  //  МЕТОД, ВЫЗЫВАЕМЫЙ ПОЛЬЗОВАТЕЛЕМ ПРИ УХОДЕ КУРСОРА МЫШИ С КНОПКИ
        Close();
    }


    public void Open()
    {
        textBack.SetActive(true);

    }

    public void Close()
    {
        textBack.SetActive(false);
    }


    void Start () {
        Close();
    }
	
	void Update () {
		
	}
}
