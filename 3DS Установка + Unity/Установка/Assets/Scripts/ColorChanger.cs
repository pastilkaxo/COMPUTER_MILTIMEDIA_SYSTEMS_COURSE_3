using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColorChanger : MonoBehaviour {


	public void ChangeCol()
	{
		GetComponent<Renderer>().material.color = new Color(1,0,0);
	}

	public void ChangeCol1()
	{
        GetComponent<Renderer>().material.color = new Color(1, 1, 1);

    }


    // Use this for initialization
    void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
