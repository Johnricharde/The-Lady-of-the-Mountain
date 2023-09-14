// VIEW ///////////////////////////////////////////
updateScreen()

function updateScreen() {
    newScreen = /*HTML*/ `

    <div id="container-box">
                
        <div class="container">
            <div id="stats-screen">
                <br><h1>CHARACTER</h1><br>
                <div class="small-container">
                    <div>
                        <h5>HEALTH: 46 / 50</h5>
                    </div>
                    <div>
                        <h5>ARMOR: + 2</h5>
                    </div>
                    <div>
                        <h5>DAMAGE: + 1</h5>
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
                <h4>${paragraph2}</h4>
                <div id="buttons">${buttons}</div>
            </div>
        </div>

        <div class="container">
            <div id="inventory-screen">
            <br><h1>INVENTORY</h1><br>
                <div class="small-container">
                    <h5>WEAPON:<br>${playerWeapon}</h5>
                    <h5>ARMOR:<br>${playerArmor}</h5>
                    <h5>TRINKET:<br>${playerTrinket}</h5>
                    <h5>BACKPACK:<br>
                        <ul>
                            <li>Rope</li>
                            <li>Rations</li>
                            <li>Climbing boots</li>
                            <li>Stoneskin elixir</li>
                            <li>Waterskin</li>
                        </ul>
                    </h5>
                </div>
            </div>
        </div>

    </div>
    `
    app.innerHTML = newScreen
}
