using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TaskBtnScript : MonoBehaviour {



	[SerializeField]
	GameObject taskPanel;
	bool opened = false;
	[SerializeField]
	GameObject bottomText;


    public void ToggleTaskPanel()
	{
		if (opened)
		{
            CloseTaskPanel();
			CloseBottomText();
        }
        else
			OpenTaskPanel();
	}

	public void OpenTaskPanel()
	{
		taskPanel.SetActive(true);
		opened = true;
	}

	public void CloseTaskPanel()
	{
		taskPanel.SetActive(false);
		opened = false;
	}

     private void CloseBottomText()
    {
        bottomText.SetActive(false);
    }

    void Start () {
		CloseTaskPanel();
		CloseBottomText();
    }
	
	void Update () {
	}
}
