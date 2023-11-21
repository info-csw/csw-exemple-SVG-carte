// un tableau avec les noms des provinces
const provinces = ["hainaut", "limbourg", "bruxelles", "brabant-flamant", "namur","luxembourg", "flandre-orientale", "flandre-occidentale", "anvers", "liege", "brabant-wallon"];
// on récupère l'élément qui contient le nom de la province à trouver
const provinceToFindEl = document.getElementById("province-to-find");
// on choisit une province au hasard
const provinceToFind = provinces[Math.floor(Math.random() * provinces.length)];
// on affiche le nom de la province à trouver
provinceToFindEl.innerHTML = provinceToFind;
// on récupère l'élément qui contient le nom de la province sélectionnée
const selectedProvinceEl = document.getElementById("selected-province");
// on initialise la province sélectionnée à null
let selectedProvince = null;
// on récupère les éléments SVG des provinces
const provincesElements = {};

/**
 * Modifier la couleur de la province sélectionnée (en vert si c'est la bonne, en rouge sinon)
 * @param {string} newProvince - le nom de la province sélectionnée 
 */
function switchProvince(newProvince) {
	// si une province est déjà sélectionnée
	if (selectedProvince) {
		// on change sa couleur en gris
		provincesElements[selectedProvince].setAttribute('fill', '#7c7c7c');
	}
	// on enregistre la nouvelle province sélectionnée
	selectedProvince = newProvince;
	// si la province sélectionnée est la bonne
	if (selectedProvince == provinceToFind) {
		// on change sa couleur en vert
		provincesElements[selectedProvince].setAttribute('fill', '#387b32');
	} else {
		// sinon on change sa couleur en rouge
		provincesElements[selectedProvince].setAttribute('fill', '#822222');
	}
}

// Pour chaque province, on ajoute un listener sur le click
provinces.forEach((province) => {
	// on récupère l'élément SVG de la province
	provincesElements[province] = document.getElementById(province);
	// on ajoute un listener sur le click
	provincesElements[province].addEventListener("click", function() {
		// on affiche le nom de la province sélectionnée
		selectedProvinceEl.innerHTML = province;
		// on change la couleur de la province sélectionnée
		switchProvince(province);
	});
});