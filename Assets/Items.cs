using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "Data", menuName = "ScriptableObjects/SpawnManagerScriptableObject", order = 1)]
public class Items: ScriptableObject {

    public string prefabName;

    public int numberOfPrefabsToCreate;
    public Vector3[] spawnPoints;

    public bool isActive;
    public int maxIndex;
    public int currentIndex;

    public SpriteRenderer spriteRenderer;
    public Sprite newSprite;

    [SerializeField]
    public Sprite[] items;

    public Items(bool active, Sprite[] arrayOfItems){
        isActive = active;
        items = arrayOfItems;
        maxIndex = items.Length - 1;
        currentIndex = 0;
    }

    public void switchRight(){
        //items[currentIndex].SetActive(false);
        int newIndex;
        if (currentIndex == maxIndex){
            newIndex = 0;
        }
        else {
            newIndex = currentIndex + 1;
        }
        spriteRenderer.sprite = items[newIndex];
        //items[newIndex].SetActive(true);
        currentIndex = newIndex;
    }

    public void switchLeft(){
        //items[currentIndex].SetActive(false);
        int newIndex;
        if (currentIndex - 1 < 0){
            newIndex = maxIndex;
        }
        else {
            newIndex = currentIndex - 1;
        }
        //items[newIndex].SetActive(true);
        spriteRenderer.sprite = items[newIndex];
        currentIndex = newIndex;
    }
}