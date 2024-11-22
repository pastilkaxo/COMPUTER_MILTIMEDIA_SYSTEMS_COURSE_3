using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CheckTasks : MonoBehaviour
{
    VklAnimController started;
    Task1 task1Done;
    Task2 task2Done;
    Task3 task3Done;


    GameObject startObj;
    GameObject task1Obj;
    GameObject task2Obj;
    GameObject task3Obj;

    public GameObject button1;
    public GameObject button2;
    public GameObject button3;
    public GameObject button4;
    public GameObject button5;
    public GameObject button6;

    void Start()
    {
        startObj = GameObject.Find("крутилкаЦентр001");
        task1Obj = GameObject.Find("движулька");
        task2Obj = GameObject.Find("переключатель");
        started = startObj.AddComponent<VklAnimController>();
        task1Done = task1Obj.GetComponent<Task1>();
        task2Done = task2Obj.GetComponent<Task2>();
        task3Done = task1Obj.GetComponent<Task3>();
       
        button1.SetActive(false);    
        button2.SetActive(false);
        button3.SetActive(false);
        button4.SetActive(false);
        button5.SetActive(false);
        button6.SetActive(false);
    }

    void Update()
    {
        if (started.isEnabled)
        {
            button1.SetActive(true);
            if (task1Done.isDone)
            {
                button2.SetActive(true);
            }
                if (task2Done.isDone) button3.SetActive(true);
                if (task3Done.isDone)
                {
                    button4.SetActive(true);
                    button5.SetActive(true);
                    button6.SetActive(true);
                }

        }
        else
        {
            button1.SetActive(false);
            button2.SetActive(false);
            button3.SetActive(false);
            button4.SetActive(false);
            button5.SetActive(false);
            button6.SetActive(false);
        }

    }
}
