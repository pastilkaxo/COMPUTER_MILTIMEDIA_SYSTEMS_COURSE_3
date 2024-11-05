using System.Collections;
using System.Collections.Generic;
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
    Text Ua1;
    [SerializeField]
    Text Ua2;
    [SerializeField]
    Text Ua3;
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
       if(string.IsNullOrEmpty(textInput.text))
            return false;
       
       foreach(char ch in textInput.text)
       {
            if(ch < '0' || ch > '9')
            {
                return false;
            }
       }
       return true; 
    }


    public void WriteValue()  //функция для кнопки «Записать»
    {
        if (CheckInputText())
        {
            if (Inak1.text == "-")
                Inak1.text = textInput.text.ToString();
            else if (Inak2.text == "-")
                Inak2.text = textInput.text.ToString();
            else if (Unak1.text == "-")
                Unak1.text = textInput.text.ToString();
            else if (Unak2.text == "-")
                Unak2.text = textInput.text.ToString();
            else if (Rt1.text == "-")
                Rt1.text = textInput.text.ToString();
            else if (Rt2.text == "-")
                Rt2.text = textInput.text.ToString();
            else if (T1.text == "-")
                T1.text = textInput.text.ToString();
            else if (T2.text == "-")
                T2.text = textInput.text.ToString();
            else if (Ua1.text == "-")
                Ua1.text = textInput.text.ToString();
            else if (Ua2.text == "-")
                Ua2.text = textInput.text.ToString();
            else if (Ua3.text == "-")
                Ua3.text = textInput.text.ToString();
            else if (t1_1.text == "-")
                t1_1.text = textInput.text.ToString();
            else if (t1_2.text == "-")
                t1_2.text = textInput.text.ToString();
            else if (t1_3.text == "-")
                t1_3.text = textInput.text.ToString();
            else if (t2_1.text == "-")
                t2_1.text = textInput.text.ToString();
            else if (t2_2.text == "-")
                t2_2.text = textInput.text.ToString();
            else if (t2_3.text == "-")
                t2_3.text = textInput.text.ToString();
            textInput.text = "";
        }


    }
    //функция для кнопки «Очистить»
    public void Clean()
    {
        //u1.text = "-";
        //u2.text = "-";
        //u3.text = "-";
        //i1.text = "-";
        //i2.text = "-";
        //i3.text = "-";
        //v1.text = "-";
        //v2.text = "-";
        //v3.text = "-";
    }

    private void Start()
    {
        closeDesc();
    }


}
