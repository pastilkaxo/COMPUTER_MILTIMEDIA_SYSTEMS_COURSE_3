using System;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using UnityEngine;
using UnityEngine.UI;

public class ConfigureTable : MonoBehaviour
{
    //определение используемых переменных
    [SerializeField]
    InputField textInput;
    [SerializeField]
    GameObject desc;

    [SerializeField]
    Text Inak1;
    [SerializeField]
    Text Inak2;
    [SerializeField]
    Text Unak1;
    [SerializeField]
    Text Unak2;
    [SerializeField]
    Text Rt1;
    [SerializeField]
    Text Rt2;
    [SerializeField]
    Text T1;
    [SerializeField]
    Text T2;
    [SerializeField]
    Text t1_1;
    [SerializeField]
    Text t1_2;
    [SerializeField]
    Text t1_3;
    [SerializeField]
    Text t2_1;
    [SerializeField]
    Text t2_2;
    [SerializeField]
    Text t2_3;
    [SerializeField]
    Text eRabota;


    public void openDesc()
    {
        desc.SetActive(true);
    }

    public void closeDesc() { 
        desc.SetActive(false);
    }


    public bool CheckInputText()
    {
        string validInput = Regex.Replace(textInput.text, "[^0-9\\.]", "");

        int dotCount = 0;
        string processedInput = "";
        foreach (char c in validInput)
        {
            if (processedInput.Length == 0 && c == '.')
            {
                continue;
            }

            if (c == '.')
            {
                dotCount++;
                if (dotCount > 1)
                {
                    continue; 
                }
            }
            processedInput += c;
        }

        if (processedInput != textInput.text)
        {
            textInput.text = processedInput;
        }

        float result;
        bool isValid = float.TryParse(processedInput, out result);

        return isValid;

    }


    public void WriteValue()  //функция для кнопки «Записать»
    {
        if (CheckInputText())
        {
            if (Inak1.text == "-")
                Inak1.text = textInput.text.ToString();
            else if(Unak1.text == "-")
                Unak1.text = textInput.text.ToString();
            else if (t1_1.text == "-")
                t1_1.text = textInput.text.ToString();
            else if (t1_2.text == "-")
                t1_2.text = textInput.text.ToString();
            else if (t1_3.text == "-")
            {
                t1_3.text = textInput.text.ToString();
                float rt1Res = float.Parse(Unak1.text) / float.Parse(Inak1.text);
                Rt1.text = Math.Round(rt1Res, 2).ToString(); 
            }
            else if(T1.text == "-")
                T1.text = textInput.text.ToString();
            else if (Inak2.text == "-")
                Inak2.text = textInput.text.ToString();
            else if (Unak2.text == "-")
                Unak2.text = textInput.text.ToString();
            else if (t2_1.text == "-")
                t2_1.text = textInput.text.ToString();
            else if (t2_2.text == "-")
                t2_2.text = textInput.text.ToString();
            else if (t2_3.text == "-")
            {
                t2_3.text = textInput.text.ToString();
                float rt1Res = float.Parse(Unak2.text) / float.Parse(Inak2.text);
                Rt2.text = Math.Round(rt1Res, 2).ToString();
            }
            else if (T2.text == "-")
            {
                T2.text = textInput.text.ToString();
                float first = (float)(8.93 * Math.Pow(10, -5));
                float second =  (int.Parse(T1.text) * int.Parse(T2.text) ) / (int.Parse(T2.text) - int.Parse(T1.text));
                float third = (float)Math.Abs(Math.Log((float.Parse(t2_3.text) / float.Parse(t1_3.text)), 2.71) ) - (float)Math.Abs(2 * Math.Log((float.Parse(T2.text) / float.Parse(T1.text)), 2.71));
                float rabotaRes = first * second * third;
                eRabota.text += Math.Round(rabotaRes,3).ToString();
            }
        }
        textInput.text = "";

    }
    //функция для кнопки «Очистить»
    public void Clean()
    {
        Inak1.text = "-";
        Inak2.text = "-";
        Unak1.text = "-";
        Unak2.text = "-";
        Rt1.text = "-";
        Rt2.text = "-";
        T1.text = "-";
        T2.text = "-";
        t1_1.text = "-";
        t1_2.text = "-";
        t1_3.text = "-";
        t2_1.text = "-";
        t2_2.text = "-";
        t2_3.text = "-";
        eRabota.text = "Работа выхода электрона = ";
    }

    private void Start()
    {
        closeDesc();
    }


}
