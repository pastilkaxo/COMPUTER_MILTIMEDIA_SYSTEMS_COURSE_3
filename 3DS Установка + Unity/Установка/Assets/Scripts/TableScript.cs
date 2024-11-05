using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TableScript : MonoBehaviour {

	[SerializeField]
	GameObject table;

	public void OpenTable()
	{
		table.SetActive(true);
	}

	public void CloseTable()
	{
		table.SetActive(false);
	}

	// Use this for initialization
	void Start () {
		CloseTable();
    }
	
	// Update is called once per frame
	void Update () {
		
	}
}
