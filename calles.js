document.addEventListener("DOMContentLoaded", function () {
    const callesporColonias = {
        "San Marcos": ["Calle 1", "Calle 2", "Calle 3"],
        "Jardines de la Asunción": ["Calle 4", "Calle 5"],
        "Altavista": ["Calle 6", "Calle 7"],
        "Villa Teresa": ["Calle 8", "Calle 9"],
        "Las Américas": ["Calle 10", "Calle 11"],
        "Lomas del Sur": ["Calle 12", "Calle 13"],
        "Bosques del Prado": ["Calle 14", "Calle 15"],
        "Ojocaliente": ["Calle 16", "Calle 17"],
        "Insurgentes": ["Calle 18", "Calle 19"],
        "La Soledad": ["Calle 20", "Calle 21"],
        "Villa Montaña": ["Calle 22", "Calle 23"],
        "Mirador de las Culturas": ["Calle 24", "Calle 25"],
        "Agua Clara": ["Calle 26", "Calle 27"],
        "Aguascalientes Centro": ["Calle 28", "Calle 29"],
        "Alameda": ["Calle 30", "Calle 31"],
        "Albanta Norte": ["Calle 32", "Calle 33"],
        "Alianza Ferrocarrilera": ["Calle 34", "Calle 35"],
        "Ambrosía": ["Calle 36", "Calle 37"],
        "Ampliación de Calvillito": ["Calle 38", "Calle 39"],
        "Arroyo El Molino": ["Calle 40", "Calle 41"],
        "Balcones de Ojocaliente": ["Calle 42", "Calle 43"],
        "Balcones del Valle": ["Calle 44", "Calle 45"],
        "Barandales de San José": ["Calle 46", "Calle 47"],
        "Barrio de Santiago": ["Calle 48", "Calle 49"],
        "Benito Palomino Dena": ["Calle 50", "Calle 51"],
        "Bonafortuna": ["Calle 52", "Calle 53"],
        "Bosque Sereno": ["Calle 54", "Calle 55"],
        "Cumbres II": ["Calle 56", "Calle 57"],
        "Infonavit Pilar Blanco": ["Calle 58", "Calle 59"],
        "La Pona": ["Calle 60", "Calle 61"],
        "Las Víboras": ["Calle 62", "Calle 63"],
        "Montebello": ["Calle 64", "Calle 65"],
        "Pirámides": ["Calle 66", "Calle 67"],
        "Rancho San Carlos": ["Calle 68", "Calle 69"],
        "San Francisco del Arenal": ["Calle 70", "Calle 71"],
        "Torres de San Francisco": ["Calle 72", "Calle 73"],
        "Triana": ["Calle 74", "Calle 75"],
        "Villas de Nuestra Señora de la Asunción": ["Calle 76", "Calle 77"],
        "Villas de San Nicolás": ["Calle 78", "Calle 79"]
    };

    const ubicacionInput = document.getElementById("ubicacion");
    const datalistCalles = document.getElementById("calles");

    ubicacionInput.addEventListener("input", function () {
        const coloniaSeleccionada = ubicacionInput.value.trim();
        datalistCalles.innerHTML = "";

        if (callesporColonias[coloniaSeleccionada]) {
            callesporColonias[coloniaSeleccionada].forEach(calle => {
                const option = document.createElement("option");
                option.value = calle;
                datalistCalles.appendChild(option);
            });
        }
    });
});