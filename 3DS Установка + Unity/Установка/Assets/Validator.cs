using UnityEngine;
using UnityEngine.UI;
using System.Text.RegularExpressions;

public class Validator : MonoBehaviour
{
    public InputField inputField;

    void Start()
    {
        inputField.onValueChanged.AddListener(ValidateInput);
    }

    void ValidateInput(string input)
    {
        string validInput = Regex.Replace(input, "[^0-9\\.]", "");

        int dotCount = 0;
        string processedInput = "";
        foreach (char c in validInput)
        {
            if (c == '.')
            {
                dotCount++;
                if (dotCount > 1)
                {
                    continue; 
                }
            }
            processedInput += c;
        }

        if (processedInput != input)
        {
            inputField.text = processedInput;
        }
    }
}