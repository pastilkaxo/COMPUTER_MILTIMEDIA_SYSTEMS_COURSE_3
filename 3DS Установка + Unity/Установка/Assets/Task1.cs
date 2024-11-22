using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Task1 : MonoBehaviour {


    public bool isDone = false;
    bool isDragging = false;

    float mouseSpeed = 0.10f;


    VklAnimController started;
    GameObject startObj;


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
        startObj = GameObject.Find("крутилкаЦентр001");
        started = startObj.AddComponent<VklAnimController>();
    }

  
	
	// Update is called once per frame
	void Update () {

        if(isDragging)
        {
            float mouseDelta = Input.GetAxis("Mouse X");
            transform.Translate(Vector3.left * mouseDelta * mouseSpeed);
            transform.position = ClampPos(transform.position);
        
        }

        if (transform.position.x < 144f)
            isDone = true;
        else
            isDone = false;
    }
}
