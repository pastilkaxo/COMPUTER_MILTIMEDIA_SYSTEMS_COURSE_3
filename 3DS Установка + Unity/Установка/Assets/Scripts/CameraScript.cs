using UnityEngine;

public class CameraScript : MonoBehaviour
{
    [SerializeField]
    GameObject potolok;
    [SerializeField]
    GameObject pol;
    [SerializeField]
    GameObject stenaSleva;
    [SerializeField]
    GameObject stenaSprava;
    [SerializeField]
    GameObject stenaSzadi;
    [SerializeField]
    GameObject stenaSperedi;

    [SerializeField]
    Transform targetPos;
    [SerializeField]
    float sensivity = 3f;
    [SerializeField]
    float scrollSpeed = 3f;
    [SerializeField]
    int maxdistance = 50;
    [SerializeField]
    int mindistance = 1;


    Vector3 ClampPosition(Vector3 position)
    {
        float clampedX = Mathf.Clamp(position.x, stenaSleva.transform.position.x + 40f, stenaSprava.transform.position.x - 40f);
        float clampedY = Mathf.Clamp(position.y, pol.transform.position.y + 5f, potolok.transform.position.y - 4f);
        float clampedZ = Mathf.Clamp(position.z, stenaSzadi.transform.position.z + 30f, stenaSperedi.transform.position.z - 55f);

        return new Vector3(clampedX, clampedY, clampedZ);
    }

    bool ControlDistance(float distance)
    {
        if (distance > mindistance && distance < maxdistance) return true;
        return false;
    }

    void Start()
    {
    }


    void Update()
    {

        if (Input.GetMouseButton(1))
        {
            float y = Input.GetAxis("Mouse X") * sensivity;
            if (y != 0) transform.RotateAround(targetPos.position, Vector3.up, y);
        }


        float x = Input.GetAxis("Horizontal") / sensivity;   
        if (x != 0)
        {
            Vector3 newpos = transform.position + transform.TransformDirection(new Vector3(x, 0, 0));
            if (ControlDistance(Vector3.Distance(newpos, targetPos.position))) transform.position = ClampPosition(newpos);
            Debug.Log(newpos.x + ":" + newpos.y + ":"+ newpos.z);

        }


        float straight = Input.GetAxis("Vertical") / sensivity;
        if (straight != 0)
        {
            Vector3 newpos = transform.position + transform.TransformDirection(new Vector3(0, 0, straight));
            if (ControlDistance(Vector3.Distance(newpos, targetPos.position))) transform.position = ClampPosition(newpos);
            Debug.Log(newpos.x + ":" + newpos.y + ":" + newpos.z);
        }


        float z = Input.GetAxis("Mouse ScrollWheel") * scrollSpeed;
        if (z != 0)
        {
            Vector3 newpos = transform.position + transform.TransformDirection(Vector3.forward * z);
            if (ControlDistance(Vector3.Distance(newpos, targetPos.position))) transform.position = ClampPosition(newpos);
            Debug.Log(newpos.x + ":" + newpos.y + " : " + newpos.z);
        }


        if (Input.GetKeyDown(KeyCode.V))
        {
            transform.Rotate(Vector3.left , -3f);
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            transform.Rotate(Vector3.right, -3f);
        }
    }

}
