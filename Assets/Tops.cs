using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Tops : Item {

    private bool _isActive;
    public override bool isActive {
        get {
            return _isActive;
        }
        set {
            _isActive = value;
        }
    }
    [SerializeField]
    private GameObject[] tops;
    public override GameObject[] items {
        get { return tops;}
        set { tops = value;}
    }
}