using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VoltmetrAnimControl : MonoBehaviour {

	Animator animatorVip;
	void Start () {
        animatorVip = GetComponent<Animator>();
	}
	
	void Update () {
		if (Input.GetMouseButtonDown(0))
		{
            animatorVip.SetTrigger("hit");
        }

        if (Input.GetMouseButtonDown(1))
        {
            animatorVip.SetTrigger("reset");
        }
    }
}
