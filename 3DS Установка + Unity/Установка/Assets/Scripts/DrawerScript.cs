using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DrawerScript : MonoBehaviour {
	[SerializeField]
    GameObject image;
	[SerializeField]
	Sprite sprite;
	Image img;
    public void OnDrawEnter()
	{
        img = image.GetComponent<Image>();
        image.SetActive(true);
        img.sprite = sprite;

    }

    public void OnDrawExit()
    {
        img = image.GetComponent<Image>();
        image.SetActive(false);
        img.sprite = null;
    }

    // Use this for initialization
    void Start () {
		image.SetActive(false);
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
