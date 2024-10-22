using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Replacer : MonoBehaviour {

    bool move = true;
    Vector3 startPosition;
    Vector3 needPosition;
    float speed = 0.01f;
    float offset = 0;
    Quaternion startRotation;
    Quaternion needRotaton;

    public void Move0()  // амперметр
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(139f, 108f, 131f);
        needRotaton = Quaternion.AngleAxis(60, new Vector3(1, 0, 0));
    }

    public void Move1() // вольтметр
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(144, 108, 131f);
        needRotaton = Quaternion.AngleAxis(60, new Vector3(1, 0, 0));
    } 

    public void Move2() // миллиамперметр
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(149, 108, 131f);
        needRotaton = Quaternion.AngleAxis(60, new Vector3(1, 0, 0));
    }

    public void Move3() // электр. напр.
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(154, 108, 131f);
        needRotaton = Quaternion.AngleAxis(60, new Vector3(1, 0, 0));
    }

    public void Move4() // выпрямитель
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(141f, 109f, 139f);
        float x = 34f;
        float y = 36f;
        needRotaton = Quaternion.Euler(x, y, 0);    
        //needRotaton = Quaternion.AngleAxis(37f, new Vector3(1, 1, 0));
    }

    public void Move5() // реостат
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(145f, 108f, 134f);
        needRotaton = Quaternion.AngleAxis(34f, new Vector3(1, 0, 0));
    }

    public void Move6() // лампочка
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(140f, 109f, 136f);
        float x = 34f;
        float y = -35f;
        needRotaton = Quaternion.Euler(x, y, 0);    
      //  needRotaton = Quaternion.AngleAxis(35f, new Vector3(1, 1, 0));
    }


    public void MoveX()
    {
        move = true;
        startPosition = transform.position;
        startRotation = transform.rotation;
        needPosition = new Vector3(144.87f, 115.9f, 117.22f);
        needRotaton = Quaternion.AngleAxis(34.135f, new Vector3(1, 0, 0));
    }


    void Start()
    {
        MoveX();
    }

    void Update()
    {
        if (move)
        {
            offset += speed;
            transform.position = Vector3.Lerp(startPosition, needPosition, offset);
            transform.rotation = Quaternion.Slerp(startRotation, needRotaton, offset);
            if (offset >= 1)
            {
                move = false;
                offset = 0;
            }
        }
    }
}
