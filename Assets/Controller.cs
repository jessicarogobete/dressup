using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System;

public class Controller : MonoBehaviour{

    static int topsIndex;
    static int bottomsIndex;
    static int shoesIndex;
    static int hairIndex;



    public void SetIndices(int tops, int bottoms, int hair, int shoes){
        topsIndex = tops;
        bottomsIndex = bottoms;
        shoesIndex = shoes;
        hairIndex = hair;

    }

}