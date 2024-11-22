using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VklAnimController : MonoBehaviour {

	Animator animator;
	public bool isEnabled = false;
	void Start () {
		animator = GetComponent<Animator>();
	}
	
	void Update () {
		if (Input.GetKeyDown(KeyCode.N))
		{
			animator.SetBool("turn",true);
			isEnabled = true;
		}
		if (Input.GetKeyDown(KeyCode.M))
		{
			animator.SetBool("turn", false);
			isEnabled = false;
		}
	}
}
