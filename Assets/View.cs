using System.Collections;
using System.Collections.Generic;
using System;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class View: MonoBehaviour {

    [SerializeField]
    Controller controller;

    [SerializeField]
    Button rightArrowTops;
    [SerializeField]
    Button rightArrowBottoms;
    [SerializeField]
    Button leftArrowTops;
    [SerializeField]
    Button leftArrowBottoms;
    [SerializeField]
    public Sprite[] topsList;
    [SerializeField]
    public Sprite[] bottomsList;
    [SerializeField]
    public Sprite[] hairList;
    [SerializeField]
    public Sprite[] shoeList;

    Items tops;
    Items bottoms;
    Items shoes;
    Items hair;

    public int maxIndex;

    void Start(){
        //tops = topsList.AddComponent<Items>(); 
        //tops = new Items(false, topsList);

        bottoms = new Items(false, bottomsList);
        shoes = new Items(false, shoeList);
        hair = new Items(false, hairList);
    }

    public void onRightTop(){
        //move forward in array of tops
        //check if there is any top active first then switch to next
        tops.switchRight();
    }

    public void onLeftTop(){
        //move back in array of tops
        tops.switchLeft();
    }

    public void onRightBottom(){
        //next bottoms
        bottoms.switchRight();
    }

    public void onLeftBottom(){
        //previous bottoms
        bottoms.switchLeft();
    }

    public void onRightHair(){
        hair.switchRight();
    }

    public void onLeftHair(){
        hair.switchLeft();
    }

    public void onRightShoe(){
        shoes.switchRight();
    }

    public void onLeftShoe(){
        shoes.switchLeft();
    }

    public void finish(){
        controller.SetIndices(tops.currentIndex, bottoms.currentIndex, hair.currentIndex, shoes.currentIndex);
        //DontDestroyOnLoad(bottoms.GameObject);
        //DontDestroyOnLoad(shoes.GameObject);
        //DontDestroyOnLoad(hair.GameObject);
        SceneManager.LoadScene("final selection");
    }

    
}