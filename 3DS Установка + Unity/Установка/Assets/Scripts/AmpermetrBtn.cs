using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AmpermetrBtn : MonoBehaviour {

    [SerializeField]
    Text message;
    [SerializeField]
    GameObject textBack;

    public void PointerEnter()
    {
        Open();
        switch (transform.name)
        {
            case "AmpermetrBtn":
                message.text = "Амперметр - прибор для измерения силы тока в амперах.";
                break;
            case "VoltmetrBtn":
                message.text = "Вольтметр - измерительный прибор непосредственного отсчёта для\r\nопределения разности электрических " +
                    "потенциалов, напряжения или\r\nЭДС в электрических цепях.";
                break;
            case "MilliampermetrBtn":
                message.text = "Миллиамперметр - лабораторный прибор электромагнитной системы";
                break;
            case "ElectricBtn":
                message.text = "Энергия напряжения - скалярная физическая величина.";
                break;
            case "VympramitelBtn":
                message.text = "Выпрямитель - преобразователь электрической энергии";
                break;
            case "ReostatBtn":
                message.text = "Реостат - преобразователь кинетической энергии";
                break;
            case "LampaBtn":
                message.text = "Лампа накаливания - искусственный источник света.";
                break;
        }
    }


    public void PointerExit()
    {  
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
        Debug.Log(transform.name);
        Close();
    }
	
	void Update () {
		
	}
}
