// VIEW ///////////////////////////////////////////
updateScreen()

function updateScreen() {
    newScreen = /*HTML*/ `

    <div id="container-box">
                
        <div class="container">
            <div id="stats-screen">
                <br><h1>-CHARACTER-</h1><br>
                <div class="small-container">
                    <div>
                        <h5>HEALTH: ${playerHP} / ${playerHPMax}</h5>
                    </div>
                    <div>
                        <h5>ARMOR: + ${playerArmModifier}</h5>
                    </div>
                    <div>
                        <h5>DAMAGE: + ${playerDmgModifier}</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div id="screen">
                <h1>🙠 ${header} 🙢</h1>
                <div id="img-div">
                    <img src="${img}">
                </div>
                <p class="text-field">${paragraph1}</p>
                <h3>${paragraph2}</h3>
                <div id="buttons">${buttons}</div>
            </div>
        </div>

        <div class="container">
            <div id="inventory-screen">
            <br><h1>-INVENTORY-</h1><br>
                <div class="small-container">
                    <h5>WEAPON:<br>${playerWeapon}</h5>
                    <h5>ARMOR:<br>${playerArmor}</h5>
                    <h5>TRINKET:<br>${playerTrinket}</h5>
                    <h5>BACKPACK:<br>
                        <ul>
                            <li>${backpackArray[0] || ""}</li>
                            <li>${backpackArray[1] || ""}</li>
                            <li>${backpackArray[2] || ""}</li>
                            <li>${backpackArray[3] || ""}</li>
                            <li>${backpackArray[4] || ""}</li>
                            <li>${backpackArray[5] || ""}</li>
                            <li>${backpackArray[6] || ""}</li>
                            <li>${backpackArray[7] || ""}</li>
                            <li>${backpackArray[8] || ""}</li>
                            <li>${backpackArray[9] || ""}</li>
                        </ul>
                    </h5>
                </div>
            </div>
        </div>

    </div>
    `
    app.innerHTML = newScreen
}
