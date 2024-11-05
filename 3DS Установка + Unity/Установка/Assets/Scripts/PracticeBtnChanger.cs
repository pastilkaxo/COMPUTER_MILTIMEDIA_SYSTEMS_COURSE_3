using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PracticeBtnChanger : MonoBehaviour
{

    [SerializeField]
    Text message;
    [SerializeField]
    GameObject textBack;
    [SerializeField]
    GameObject pointer;


    public void PointerEnter()
    {
        Open();
        switch (transform.name)
        {
            case "ParcticeBtn":
                message.text = "Включите установку.";
                break;
            case "Task1Btn":
                message.text = "Задание 1. \nСопротивление реостата Rнак сделайте максимальным, а реостата\r\nRа – минимальным.";
                break;
            case "Task2Btn":
                message.text = "Задание 2. \nРеостатом Rнак установите по амперметру А силу тока Iнак в\r\nцепи накала согласно значениям, указанным на установке, \nи измерьте вольтметром V2 соответствующее значение Uнак .";
                break;
            case "Task3Btn":
                message.text = "Задание 3. \nИзменяя реостатом Rа анодное напряжение Uа от 0 до 240 В через\r\nкаждые 20 В (по вольтметру V1), измерьте величину\r\nанодного тока Iа с помощью миллиамперметра \r\nи занесите данные в таблицу.";
                break;
            case "Task4Btn":
                message.text = "Задание 4. \nВыполните аналогичные измерения для \nдругого значений тока накала Iнак.";
                break;
            case "Task5Btn":
                message.text = "Задание 5. \nРассчитайте сопротивления катода RТ при заданных режимах работы. \nПо прилагаемому графику определите соответствующие \nзначения температуры Т катода";
                break;
            case "Task6Btn":
                message.text = "Задание 6. \nРассчитайте значения работы выхода электрона А \nиспользуя результаты измерений";
                break;
            default:
                message.text = "Информация о текущем состоянии установки.";
                break;
        }
    }


    public void PointerExit()
    {
        // Close();
    }


    public void Open()
    {
        textBack.SetActive(true);
        pointer.SetActive(false);

    }

    public void Close()
    {
        textBack.SetActive(false);
    }


    void Start()
    {
        Close();
    }

    void Update()
    {

    }
}
