using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Task1 : MonoBehaviour {

	[SerializeField]
	GameObject Rnak;

	float x, y, z;


	public void OnMouseDown()
	{
        if (Input.GetMouseButton(0))
        {
			Vector3 newPos = Rnak.transform.position + Rnak.transform.TransformDirection(new Vector3(-4.5f,0,0));
			Rnak.transform.position = newPos;
        }
	}


	// Use this for initialization
	void Start () {

	}
	
	// Update is called once per frame
	void Update () {
        x = transform.position.x; y = transform.position.y; z = transform.position.z;
        Debug.Log("x:" + x.ToString() + " y:" + y.ToString() + " z:" + z.ToString());

    }
}
