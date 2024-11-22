using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Experimental.UIElements;
using UnityEngine.UI;

public class Task3 : MonoBehaviour
{
    public float v1Speed;
    public float IaSpeed;

    Vector3 lastPos;
    public bool isDone = false;
    bool isDragging = false;
    float mouseSpeed = 0.10f;
    [SerializeField]
    GameObject Ua;
    [SerializeField]
    GameObject Ia;
    [SerializeField]
    Light lampa;
    Task2 task2Done;
    GameObject task2Obj;

    [SerializeField]
    GameObject ampermetr;

    Vector3 ClampPos(Vector3 position)
    {
        float clapedX = Mathf.Clamp(position.x, 143.7f, 148.1f);
        return new Vector3(clapedX, position.y, position.z);
    }


    public void OnMouseDown()
    {
        //Vector3 newPos = gameObject.transform.position + gameObject.transform.TransformDirection(new Vector3(-4.5f, 0, 0));
        //transform.position = Vector3.Lerp(transform.position, ClampPos(newPos), mouseSpeed);
        isDragging = true;

    }

    public void OnMouseUp()
    {
        isDragging = false;
    }

    void Start()
    {
        task2Obj = GameObject.Find("переключатель");
        task2Done = task2Obj.GetComponent<Task2>();
    }


    // Update is called once per frame
    void Update()
    {
        try
        {
            if (isDragging)
            {
                float mouseDelta = Input.GetAxis("Mouse X");
                transform.Translate(Vector3.left * mouseDelta * mouseSpeed);
                transform.position = ClampPos(transform.position);

                if (task2Done.isDone)
                {
                    v1Speed = task2Done.v1Speed;
                    IaSpeed = task2Done.IaSpeed;

                    if (transform.position != lastPos)
                    {
                        Ua.transform.Rotate(Vector3.right * mouseDelta * v1Speed);
                        Ia.transform.Rotate(Vector3.right * mouseDelta * IaSpeed);

                        Debug.Log("ua " + Ua.transform.rotation.x);

                        lampa.intensity += mouseDelta * task2Done.intensivityValue;
                        lampa.intensity = Mathf.Clamp(lampa.intensity, 0f, 10f);

                    }
                    lastPos = transform.position;

                }
            }


            if (Ua.transform.rotation.x > -0.30f)
                isDone = true;
            else
                isDone = false;
        }
        catch (UnassignedReferenceException)
        {
            //Debug.Log("sPeed:" + v1Speed);
            // Debug.Log("v1:" + Ua.transform.rotation.x);
        }
    }
  }


