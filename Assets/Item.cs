using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;


public abstract class Item: MonoBehaviour {

    public abstract bool isActive {get; set;}
    public abstract GameObject[] items {get; set;}

}