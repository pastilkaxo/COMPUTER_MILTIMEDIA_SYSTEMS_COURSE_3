using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Task2 : MonoBehaviour {

    public float v1Speed;
    public float IaSpeed;
    public float intensivityValue;

    Vector3 lastPos;
    bool isDragging = false;
    [SerializeField]
	float mouseSpeed = 0.55f;
    [SerializeField]
    float ampSpeed = 3.5f;
    float v2Speed = 2.5f;
    public bool isDone = false;
    [SerializeField]
	GameObject ampermetr;
    [SerializeField]
    GameObject Unak;

    Task1 task1Done;
    GameObject task1Obj;


    Vector3 ClampPos(Vector3 position)
    {
        float clapedX = Mathf.Clamp(position.x, 143.2f, 148.1f);
        return new Vector3(clapedX, position.y, position.z);
    }


    public void OnMouseDown()
    {
        isDragging = true;
    }

    public void OnMouseUp()
    {
        isDragging = false;
    }


    void Start()
    {
        task1Obj = GameObject.Find("движулька");
        task1Done = task1Obj.GetComponent<Task1>();
    }

	
	// Update is called once per frame
	void Update () {

        try
        {
            if (task1Done.isDone)
            {
                if (isDragging)
                {

                    float mouseDelta = Input.GetAxis("Mouse X");
                    transform.Translate(Vector3.left * mouseDelta * mouseSpeed);
                    transform.position = ClampPos(transform.position);

                    if (transform.position != lastPos)
                    {
                        ampermetr.transform.Rotate(Vector3.right * mouseDelta * ampSpeed);
                        Unak.transform.Rotate(Vector3.right * mouseDelta * v2Speed);
                        Debug.Log(ampermetr.transform.rotation.x);
                    }
                    lastPos = transform.position;
                }
            }

            if (ampermetr.transform.rotation.x > 0f && ampermetr.transform.rotation.x < 0.110f)
                isDone = true;
            else
                isDone = false;


            if (ampermetr.transform.rotation.x > 0f && ampermetr.transform.rotation.x < 0.05f)
            {
                v1Speed = 2.9f;
                IaSpeed = 1f;
                intensivityValue = 0.1f;
            }
            if (ampermetr.transform.rotation.x >= 0.05f && ampermetr.transform.rotation.x < 0.07f)
            {
                v1Speed = 3.9f;
                IaSpeed = 2f;
                intensivityValue = 0.3f;

            }
            if (ampermetr.transform.rotation.x >= 0.07f && ampermetr.transform.rotation.x < 0.110f)
            {
                v1Speed = 4.9f;
                IaSpeed = 3.5f;
                intensivityValue = 0.5f;

            }



        }
        catch (UnassignedReferenceException ex)
        {

        }




       

    }
}
