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
                        <h4>HEALTH<br>46 / 50</h4>
                    </div>
                    <div>
                        <h4>ARMOR<br>+ 2</h4>
                    </div>
                    <div>
                        <h4>DAMAGE<br>+ 1</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div id="screen">
                <h1>🙠 ${header} 🙢</h1>
                <img src="${img}">
                <p>${paragraph1}</p>
                <h4>${paragraph2}</h4>
                <div id="buttons">${buttons}</div>
            </div>
        </div>

        <div class="container">
            <div id="inventory-screen">
            <br><h1>INVENTORY</h1><br>
                <div class="small-container">
                <h4>WEAPON<br>${playerWeapon}</h4>
                <h4>ARMOR<br>${playerArmor}</h4>
                <h4>TRINKET<br>${playerTrinket}</h4>
                <h4>BACKPACK</h4>
                    <ul>
                        <li>Rope</li>
                        <li>Rations</li>
                        <li>Climbing boots</li>
                        <li>Stoneskin elixir</li>
                        <li>Waterskin</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    `
    app.innerHTML = newScreen
}
