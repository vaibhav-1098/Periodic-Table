let elementNameStyle = {
  fontSize: "16px",
  textAlign: "center",
  fontWeight: "bold",
};

document.getElementById("H").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 1,
      "Atomic Mass": "1.0080 u",
      "Standard State": "Gas",
      "Electron Configuration": "1s¹",
      "Oxidation States": "+1, -1",
      "Electronegativity": 2.2,
      "Atomic Radius": "120 pm"
  };
  showPopup("Hydrogen (H)", properties);
});

document.getElementById("He").addEventListener("click", function() {
const properties = {
    "Atomic Number": 2,
    "Atomic Mass": "4.00260 u",
    "Standard State": "Gas",
    "Electron Configuration": "1s²",
    "Oxidation States": "0",
    "Electronegativity": 0,
    "Atomic Radius": "140 pm"
};
showPopup("Helium (He)", properties);
});

document.getElementById("Li").addEventListener("click", function() {
const properties = {
    "Atomic Number": 3,
    "Atomic Mass": "7.0 u",
    "Standard State": "Solid",
    "Electron Configuration": "[He]2s¹",
    "Oxidation States": "+1",
    "Electronegativity": "0.98",
    "Atomic Radius": "182 pm"
};
showPopup("Lithium (Li)", properties);
});

document.getElementById("Be").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 4,
      "Atomic Mass": "9.012183 u",
      "Standard State": "Solid",
      "Electron Configuration": "[He]2s²",
      "Oxidation States": "+2",
      "Electronegativity": "1.57",
      "Atomic Radius": "153 pm"
  };
  showPopup("Beryllium (Be)", properties);
});

document.getElementById("B").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 5,
      "Atomic Mass": "10.81 u",
      "Standard State": "Solid",
      "Electron Configuration": "[He]2s²2p¹",
      "Oxidation States": "+3",
      "Electronegativity": "2.04",
      "Atomic Radius": "192 pm"
  };
  showPopup("Boron (B)", properties);
});

document.getElementById("C").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 6,
      "Atomic Mass": "12.011 u",
      "Standard State": "Solid",
      "Electron Configuration": "[He]2s²2p²",
      "Oxidation States": "+4, +2, -4",
      "Electronegativity": "2.55",
      "Atomic Radius": "170 pm"
  };
  showPopup("Carbon (C)", properties);
});

document.getElementById("N").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 7,
      "Atomic Mass": "14.007 u",
      "Standard State": "Gas",
      "Electron Configuration": "[He]2s²2p³",
      "Oxidation States": "+5, +4, +3, +2, +1, -1, -2, -3",
      "Electronegativity": "3.04",
      "Atomic Radius": "155 pm"
  };
  showPopup("Nitrogen (N)", properties);
});


document.getElementById("O").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 8,
      "Atomic Mass": "15.999 u",
      "Standard State": "Gas",
      "Electron Configuration": "[He]2s²2p⁴",
      "Oxidation States": "-2",
      "Electronegativity": "3.44",
      "Atomic Radius": "152 pm"
  };
  showPopup("Oxygen (O)", properties);
});

document.getElementById("F").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 9,
      "Atomic Mass": "18.99840316 u",
      "Standard State": "Gas",
      "Electron Configuration": "[He]2s²2p⁵",
      "Oxidation States": "-1",
      "Electronegativity": "3.98",
      "Atomic Radius": "135 pm"
  };
  showPopup("Fluorine (F)", properties);
});

document.getElementById("Ne").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 10,
      "Atomic Mass": "20.180 u",
      "Standard State": "Gas",
      "Electron Configuration": "[He]2s²2p⁶",
      "Oxidation States": "0",
      "Atomic Radius": "154 pm"
  };
  showPopup("Neon (Ne)", properties);
});

document.getElementById("Na").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 11,
      "Atomic Mass": "22.9897693 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ne]3s¹",
      "Oxidation States": "+1",
      "Electronegativity": "0.93",
      "Atomic Radius": "227 pm"
  };
  showPopup("Sodium (Na)", properties);
});

document.getElementById("Mg").addEventListener("click", function() {
  const properties = {
      "Atomic Number": 12,
      "Atomic Mass": "24.305 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ne]3s²",
      "Oxidation States": "+2",
      "Electronegativity": "1.31",
      "Atomic Radius": "173 pm"
  };
  showPopup("Magnesium (Mg)", properties);
});

document.getElementById("Al").addEventListener("click", function() {
  const propertiesAl = {
      "Atomic Number": 13,
      "Atomic Mass": "26.981538 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ne]3s²3p¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.61",
      "Atomic Radius": "184 pm"
  };
  showPopup("Aluminum (Al)", propertiesAl);
});

document.getElementById("Si").addEventListener("click", function() {
  const propertiesSi = {
      "Atomic Number": 14,
      "Atomic Mass": "28.085 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ne]3s²3p²",
      "Oxidation States": "+4, +2, -4",
      "Electronegativity": "1.9",
      "Atomic Radius": "210 pm"
  };
  showPopup("Silicon (Si)", propertiesSi);
});

document.getElementById("P").addEventListener("click", function() {
  const propertiesP = {
      "Atomic Number": 15,
      "Atomic Mass": "30.97376200 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ne]3s²3p³",
      "Oxidation States": "+5, +3, -3",
      "Electronegativity": "2.19",
      "Atomic Radius": "180 pm"
  };
  showPopup("Phosphorus (P)", propertiesP);
});

document.getElementById("S").addEventListener("click", function() {
  const propertiesS = {
      "Atomic Number": 16,
      "Atomic Mass": "32.07 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ne]3s²3p⁴",
      "Oxidation States": "+6, +4, -2",
      "Electronegativity": "2.58",
      "Atomic Radius": "180 pm"
  };
  showPopup("Sulfur (S)", propertiesS);
});

document.getElementById("Cl").addEventListener("click", function() {
  const propertiesCl = {
      "Atomic Number": 17,
      "Atomic Mass": "35.45 u",
      "Standard State": "Gas",
      "Electron Configuration": "[Ne]3s²3p⁵",
      "Oxidation States": "+7, +5, +1, -1",
      "Electronegativity": "3.16",
      "Atomic Radius": "175 pm"
  };
  showPopup("Chlorine (Cl)", propertiesCl);
});

document.getElementById("Ar").addEventListener("click", function() {
  const propertiesAr = {
      "Atomic Number": 18,
      "Atomic Mass": "39.9 u",
      "Standard State": "Gas",
      "Electron Configuration": "[Ne]3s²3p⁶",
      "Oxidation States": "0",
      "Electronegativity": "0",
      "Atomic Radius": "188 pm"
  };
  showPopup("Argon (Ar)", propertiesAr);
});

document.getElementById("K").addEventListener("click", function() {
  const propertiesK = {
      "Atomic Number": 19,
      "Atomic Mass": "39.0983 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s¹",
      "Oxidation States": "+1",
      "Electronegativity": "0.82",
      "Atomic Radius": "275 pm"
  };
  showPopup("Potassium (K)", propertiesK);
});

document.getElementById("Ca").addEventListener("click", function() {
  const propertiesCa = {
      "Atomic Number": 20,
      "Atomic Mass": "40.08 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²",
      "Oxidation States": "+2",
      "Electronegativity": "1",
      "Atomic Radius": "231 pm"
  };
  showPopup("Calcium (Ca)", propertiesCa);
});
document.getElementById("Sc").addEventListener("click", function() {
  const propertiesSc = {
      "Atomic Number": 21,
      "Atomic Mass": "44.95591 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.36",
      "Atomic Radius": "211 pm"
  };
  showPopup("Scandium (Sc)", propertiesSc);
});

document.getElementById("Ti").addEventListener("click", function() {
  const propertiesTi = {
      "Atomic Number": 22,
      "Atomic Mass": "47.867 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d²",
      "Oxidation States": "+4, +3, +2",
      "Electronegativity": "1.54",
      "Atomic Radius": "187 pm"
  };
  showPopup("Titanium (Ti)", propertiesTi);
});

document.getElementById("V").addEventListener("click", function() {
  const propertiesV = {
      "Atomic Number": 23,
      "Atomic Mass": "50.9415 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d³",
      "Oxidation States": "+5, +4, +3, +2",
      "Electronegativity": "1.63",
      "Atomic Radius": "179 pm"
  };
  showPopup("Vanadium (V)", propertiesV);
});

document.getElementById("Cr").addEventListener("click", function() {
  const propertiesCr = {
      "Atomic Number": 24,
      "Atomic Mass": "51.996 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]3d⁵4s¹",
      "Oxidation States": "+6, +3, +2",
      "Electronegativity": "1.66",
      "Atomic Radius": "189 pm"
  };
  showPopup("Chromium (Cr)", propertiesCr);
});

document.getElementById("Mn").addEventListener("click", function() {
  const propertiesMn = {
      "Atomic Number": 25,
      "Atomic Mass": "54.93804 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d⁵",
      "Oxidation States": "+7, +4, +3, +2",
      "Electronegativity": "1.55",
      "Atomic Radius": "197 pm"
  };
  showPopup("Manganese (Mn)", propertiesMn);
});

document.getElementById("Fe").addEventListener("click", function() {
  const propertiesFe = {
      "Atomic Number": 26,
      "Atomic Mass": "55.84 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d⁶",
      "Oxidation States": "+3, +2",
      "Electronegativity": "1.83",
      "Atomic Radius": "194 pm"
  };
  showPopup("Iron (Fe)", propertiesFe);
});

document.getElementById("Co").addEventListener("click", function() {
  const propertiesCo = {
      "Atomic Number": 27,
      "Atomic Mass": "58.93319 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d⁷",
      "Oxidation States": "+3, +2",
      "Electronegativity": "1.88",
      "Atomic Radius": "192 pm"
  };
  showPopup("Cobalt (Co)", propertiesCo);
});

document.getElementById("Ni").addEventListener("click", function() {
  const propertiesNi = {
      "Atomic Number": 28,
      "Atomic Mass": "58.693 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d⁸",
      "Oxidation States": "+3, +2",
      "Electronegativity": "1.91",
      "Atomic Radius": "163 pm"
  };
  showPopup("Nickel (Ni)", propertiesNi);
});

document.getElementById("Cu").addEventListener("click", function() {
  const propertiesCu = {
      "Atomic Number": 29,
      "Atomic Mass": "63.55 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹⁰",
      "Oxidation States": "+2, +1",
      "Electronegativity": "1.9",
      "Atomic Radius": "140 pm"
  };
  showPopup("Copper (Cu)", propertiesCu);
});

document.getElementById("Zn").addEventListener("click", function() {
  const propertiesZn = {
      "Atomic Number": 30,
      "Atomic Mass": "65.4 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹⁰",
      "Oxidation States": "+2",
      "Electronegativity": "1.65",
      "Atomic Radius": "139 pm"
  };
  showPopup("Zinc (Zn)", propertiesZn);
});

document.getElementById("Ga").addEventListener("click", function() {
  const propertiesGa = {
      "Atomic Number": 31,
      "Atomic Mass": "69.723 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹⁰4p¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.81",
      "Atomic Radius": "187 pm"
  };
  showPopup("Gallium (Ga)", propertiesGa);
});

document.getElementById("Ge").addEventListener("click", function() {
  const propertiesGe = {
      "Atomic Number": 32,
      "Atomic Mass": "72.63 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹⁰4p²",
      "Oxidation States": "+4, +2",
      "Electronegativity": "2.01",
      "Atomic Radius": "211 pm"
  };
  showPopup("Germanium (Ge)", propertiesGe);
});

document.getElementById("As").addEventListener("click", function() {
  const propertiesAs = {
      "Atomic Number": 33,
      "Atomic Mass": "74.92159 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹⁰4p³",
      "Oxidation States": "+5, +3, -3",
      "Electronegativity": "2.18",
      "Atomic Radius": "185 pm"
  };
  showPopup("Arsenic (As)", propertiesAs);
});

document.getElementById("Se").addEventListener("click", function() {
  const propertiesSe = {
      "Atomic Number": 34,
      "Atomic Mass": "78.97 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Ar]4s²3d¹⁰4p⁴",
      "Oxidation States": "+6, +4, -2",
      "Electronegativity": "2.55",
      "Atomic Radius": "190 pm"
  };
  showPopup("Selenium (Se)", propertiesSe);
});

document.getElementById("Br").addEventListener("click", function() {
  const propertiesBr = {
      "Atomic Number": 35,
      "Atomic Mass": "79.90 u",
      "Standard State": "Liquid",
      "Electron Configuration": "[Ar]4s²3d¹⁰4p⁵",
      "Oxidation States": "+5, +1, -1",
      "Electronegativity": "2.96",
      "Atomic Radius": "183 pm"
  };
  showPopup("Bromine (Br)", propertiesBr);
});

document.getElementById("Kr").addEventListener("click", function() {
  const propertiesKr = {
      "Atomic Number": 36,
      "Atomic Mass": "83.80 u",
      "Standard State": "Gas",
      "Electron Configuration": "[Ar]4s²3d¹⁰4p⁶",
      "Oxidation States": "0",
      "Electronegativity": "3",
      "Atomic Radius": "202 pm"
  };
  showPopup("Krypton (Kr)", propertiesKr);
});


document.getElementById("Rb").addEventListener("click", function() {
  const propertiesRb = {
      "Atomic Number": 37,
      "Atomic Mass": "85.468 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s¹",
      "Oxidation States": "+1",
      "Electronegativity": "0.82",
      "Atomic Radius": "303 pm"
  };

  showPopup("Rubidium (Rb)", propertiesRb);
});

document.getElementById("Sr").addEventListener("click", function() {
  const propertiesSr = {
      "Atomic Number": 38,
      "Atomic Mass": "87.62 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²",
      "Oxidation States": "+2",
      "Electronegativity": "0.95",
      "Atomic Radius": "249 pm"
  };
  showPopup("Strontium (Sr)", propertiesSr);
});

document.getElementById("Y").addEventListener("click", function() {
  const propertiesY = {
      "Atomic Number": 39,
      "Atomic Mass": "88.90584 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.22",
      "Atomic Radius": "219 pm"
  };
  showPopup("Yttrium (Y)", propertiesY);
});

document.getElementById("Zr").addEventListener("click", function() {
  const propertiesZr = {
      "Atomic Number": 40,
      "Atomic Mass": "91.22 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d²",
      "Oxidation States": "+4",
      "Electronegativity": "1.33",
      "Atomic Radius": "186 pm"
  };
  showPopup("Zirconium (Zr)", propertiesZr);
});

document.getElementById("Nb").addEventListener("click", function() {
  const propertiesNb = {
      "Atomic Number": 41,
      "Atomic Mass": "92.90637 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s¹4d⁴",
      "Oxidation States": "+5, +3",
      "Electronegativity": "1.6",
      "Atomic Radius": "207 pm"
  };
  showPopup("Niobium (Nb)", propertiesNb);
});
                                        

document.getElementById("Mo").addEventListener("click", function() {
  const propertiesMo = {
      "Atomic Number": 42,
      "Atomic Mass": "95.95 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s¹4d⁵",
      "Oxidation States": "+6",
      "Electronegativity": "2.16",
      "Atomic Radius": "209 pm"
  };
  showPopup("Molybdenum (Mo)", propertiesMo);
});

document.getElementById("Tc").addEventListener("click", function() {
  const propertiesTc = {
      "Atomic Number": 43,
      "Atomic Mass": "96.90636 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d⁵",
      "Oxidation States": "+7, +6, +4",
      "Electronegativity": "1.9",
      "Atomic Radius": "209 pm"
  };
  showPopup("Technetium (Tc)", propertiesTc);
});

document.getElementById("Ru").addEventListener("click", function() {
  const propertiesRu = {
      "Atomic Number": 44,
      "Atomic Mass": "101.1 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s¹4d⁷",
      "Oxidation States": "+3",
      "Electronegativity": "2.2",
      "Atomic Radius": "207 pm"
  };
  showPopup("Ruthenium (Ru)", propertiesRu);
});

document.getElementById("Rh").addEventListener("click", function() {
  const propertiesRh = {
      "Atomic Number": 45,
      "Atomic Mass": "102.9055 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s¹4d⁸",
      "Oxidation States": "+3",
      "Electronegativity": "2.28",
      "Atomic Radius": "195 pm"
  };
  showPopup("Rhodium (Rh)", propertiesRh);
});

document.getElementById("Pd").addEventListener("click", function() {
  const propertiesPd = {
      "Atomic Number": 46,
      "Atomic Mass": "106.42 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]4d¹⁰",
      "Oxidation States": "+3, +2",
      "Electronegativity": "2.2",
      "Atomic Radius": "202 pm"
  };
  showPopup("Palladium (Pd)", propertiesPd);
});

document.getElementById("Ag").addEventListener("click", function() {
  const propertiesAg = {
      "Atomic Number": 47,
      "Atomic Mass": "107.868 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s¹4d¹⁰",
      "Oxidation States": "+1",
      "Electronegativity": "1.93",
      "Atomic Radius": "172 pm"
  };
  showPopup("Silver (Ag)", propertiesAg);
});

document.getElementById("Cd").addEventListener("click", function() {
  const propertiesCd = {
      "Atomic Number": 48,
      "Atomic Mass": "112.41 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹⁰",
      "Oxidation States": "+2",
      "Electronegativity": "1.69",
      "Atomic Radius": "158 pm"
  };
  showPopup("Cadmium (Cd)", propertiesCd);
});

document.getElementById("In").addEventListener("click", function() {
  const propertiesIn = {
      "Atomic Number": 49,
      "Atomic Mass": "114.818 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹⁰5p¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.78",
      "Atomic Radius": "193 pm"
  };
  showPopup("Indium (In)", propertiesIn);
});

document.getElementById("Sn").addEventListener("click", function() {
  const propertiesSn = {
      "Atomic Number": 50,
      "Atomic Mass": "118.71 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹⁰5p²",
      "Oxidation States": "+4, +2",
      "Electronegativity": "1.96",
      "Atomic Radius": "217 pm"
  };
  showPopup("Tin (Sn)", propertiesSn);
});

document.getElementById("Sb").addEventListener("click", function() {
  const propertiesSb = {
      "Atomic Number": 51,
      "Atomic Mass": "121.760 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹⁰5p³",
      "Oxidation States": "+5, +3, -3",
      "Electronegativity": "2.05",
      "Atomic Radius": "206 pm"
  };
  showPopup("Antimony (Sb)", propertiesSb);
});

document.getElementById("Te").addEventListener("click", function() {
  const propertiesTe = {
      "Atomic Number": 52,
      "Atomic Mass": "127.6 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹⁰5p⁴",
      "Oxidation States": "+6, +4, -2",
      "Electronegativity": "2.1",
      "Atomic Radius": "206 pm"
  };
  showPopup("Tellurium (Te)", propertiesTe);
});

document.getElementById("I").addEventListener("click", function() {
  const propertiesI = {
      "Atomic Number": 53,
      "Atomic Mass": "126.9045 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Kr]5s²4d¹⁰5p⁵",
      "Oxidation States": "+7, +5, +1, -1",
      "Electronegativity": "2.66",
      "Atomic Radius": "198 pm"
  };
  showPopup("Iodine (I)", propertiesI);
});

document.getElementById("Xe").addEventListener("click", function() {
  const propertiesXe = {
      "Atomic Number": 54,
      "Atomic Mass": "131.29 u",
      "Standard State": "Gas",
      "Electron Configuration": "[Kr]5s²4d¹⁰5p⁶",
      "Oxidation States": "+1/2, +2, +4, +6, +8",
      "Electronegativity": "2.6",
      "Atomic Radius": "216 pm"
  };
  showPopup("Xenon (Xe)", propertiesXe);
});

document.getElementById("Cs").addEventListener("click", function() {
  const propertiesCs = {
      "Atomic Number": 55,
      "Atomic Mass": "132.9054520 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s¹",
      "Oxidation States": "+1",
      "Electronegativity": "0.79",
      "Atomic Radius": "343 pm"
  };
  showPopup("Cesium (Cs)", propertiesCs);
});

document.getElementById("Ba").addEventListener("click", function() {
  const propertiesBa = {
      "Atomic Number": 56,
      "Atomic Mass": "137.33 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²",
      "Oxidation States": "+2",
      "Electronegativity": "0.89",
      "Atomic Radius": "268 pm"
  };
  showPopup("Barium (Ba)", propertiesBa);
});

document.getElementById("La").addEventListener("click", function() {
  const propertiesLa = {
      "Atomic Number": 57,
      "Atomic Mass": "138.9055 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²5d¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.1",
      "Atomic Radius": "240 pm"
  };
  showPopup("Lanthanum (La)", propertiesLa);
});

document.getElementById("Hf").addEventListener("click", function() {
  const propertiesHf = {
      "Atomic Number": 72,
      "Atomic Mass": "178.49 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d²",
      "Oxidation States": "+4",
      "Electronegativity": "1.3",
      "Atomic Radius": "212 pm"
  };
  showPopup("Hafnium (Hf)", propertiesHf);
});

document.getElementById("Ta").addEventListener("click", function() {
  const propertiesTa = {
      "Atomic Number": 73,
      "Atomic Mass": "180.9479 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d³",
      "Oxidation States": "+5",
      "Electronegativity": "1.5",
      "Atomic Radius": "217 pm"
  };
  showPopup("Tantalum (Ta)", propertiesTa);
});

document.getElementById("W").addEventListener("click", function() {
  const propertiesW = {
      "Atomic Number": 74,
      "Atomic Mass": "183.84 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d⁴",
      "Oxidation States": "+6",
      "Electronegativity": "2.36",
      "Atomic Radius": "210 pm"
  };
  showPopup("Tungsten (W)", propertiesW);
});

document.getElementById("Re").addEventListener("click", function() {
  const propertiesRe = {
      "Atomic Number": 75,
      "Atomic Mass": "186.207 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d⁵",
      "Oxidation States": "+7, +6, +4",
      "Electronegativity": "1.9",
      "Atomic Radius": "217 pm"
  };
  showPopup("Rhenium (Re)", propertiesRe);
});

document.getElementById("Os").addEventListener("click", function() {
  const propertiesOs = {
      "Atomic Number": 76,
      "Atomic Mass": "190.2 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d⁶",
      "Oxidation States": "+4, +3",
      "Electronegativity": "2.2",
      "Atomic Radius": "216 pm"
  };
  showPopup("Osmium (Os)", propertiesOs);
});

document.getElementById("Ir").addEventListener("click", function() {
  const propertiesIr = {
      "Atomic Number": 77,
      "Atomic Mass": "192.22 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d⁷",
      "Oxidation States": "+4, +3",
      "Electronegativity": "2.2",
      "Atomic Radius": "202 pm"
  };
  showPopup("Iridium (Ir)", propertiesIr);
});

document.getElementById("Pt").addEventListener("click", function() {
  const propertiesPt = {
      "Atomic Number": 78,
      "Atomic Mass": "195.08 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s¹4f¹⁴5d⁹",
      "Oxidation States": "+4, +2",
      "Electronegativity": "2.28",
      "Atomic Radius": "209 pm"
  };
  showPopup("Platinum (Pt)", propertiesPt);
});

document.getElementById("Au").addEventListener("click", function() {
  const propertiesAu = {
      "Atomic Number": 79,
      "Atomic Mass": "196.96657 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s¹4f¹⁴5d¹⁰",
      "Oxidation States": "+3, +1",
      "Electronegativity": "2.54",
      "Atomic Radius": "166 pm"
  };
  showPopup("Gold (Au)", propertiesAu);
});

document.getElementById("Hg").addEventListener("click", function() {
  const propertiesHg = {
      "Atomic Number": 80,
      "Atomic Mass": "200.59 u",
      "Standard State": "Liquid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰",
      "Oxidation States": "+2, +1",
      "Electronegativity": "2",
      "Atomic Radius": "209 pm"
  };
  showPopup("Mercury (Hg)", propertiesHg);
});

document.getElementById("Tl").addEventListener("click", function() {
  const propertiesTl = {
      "Atomic Number": 81,
      "Atomic Mass": "204.383 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰6p¹",
      "Oxidation States": "+3, +1",
      "Electronegativity": "1.62",
      "Atomic Radius": "196 pm"
  };
  showPopup("Thallium (Tl)", propertiesTl);
});

document.getElementById("Pb").addEventListener("click", function() {
  const propertiesPb = {
      "Atomic Number": 82,
      "Atomic Mass": "207 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰6p²",
      "Oxidation States": "+4, +2",
      "Electronegativity": "2.33",
      "Atomic Radius": "202 pm"
  };
  showPopup("Lead (Pb)", propertiesPb);
});

document.getElementById("Bi").addEventListener("click", function() {
  const propertiesBi = {
      "Atomic Number": 83,
      "Atomic Mass": "208.98040 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰6p³",
      "Oxidation States": "+5, +3",
      "Electronegativity": "2.02",
      "Atomic Radius": "207 pm"
  };
  showPopup("Bismuth (Bi)", propertiesBi);
});

document.getElementById("Po").addEventListener("click", function() {
  const propertiesPo = {
      "Atomic Number": 84,
      "Atomic Mass": "208.98243 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰6p⁴",
      "Oxidation States": "+4, +2",
      "Electronegativity": "2",
      "Atomic Radius": "197 pm"
  };
  showPopup("Polonium (Po)", propertiesPo);
});

document.getElementById("At").addEventListener("click", function() {
  const propertiesAt = {
      "Atomic Number": 85,
      "Atomic Mass": "209.98715 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰6p⁵",
      "Oxidation States": "+5, +3, +1, -1",
      "Electronegativity": "2.2",
      "Atomic Radius": "202 pm"
  };
  showPopup("Astatine (At)", propertiesAt);
});

document.getElementById("Rn").addEventListener("click", function() {
  const propertiesRn = {
      "Atomic Number": 86,
      "Atomic Mass": "222.01758 u",
      "Standard State": "Gas",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹⁰6p⁶",
      "Oxidation States": "0",
      "Electronegativity": "0",
      "Atomic Radius": "220 pm"
  };
  showPopup("Radon (Rn)", propertiesRn);
});

document.getElementById("Fr").addEventListener("click", function() {
  const propertiesFr = {
      "Atomic Number": 87,
      "Atomic Mass": "223.01973 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s¹",
      "Oxidation States": "+1",
      "Electronegativity": "0.7",
      "Atomic Radius": "348 pm"
  };
  showPopup("Francium (Fr)", propertiesFr);
});

document.getElementById("Ra").addEventListener("click", function() {
  const propertiesRa = {
      "Atomic Number": 88,
      "Atomic Mass": "226.02541 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²",
      "Oxidation States": "+2",
      "Electronegativity": "0.9",
      "Atomic Radius": "283 pm"
  };
  showPopup("Radium (Ra)", propertiesRa);
});

document.getElementById("Ac").addEventListener("click", function() {
  const propertiesAc = {
      "Atomic Number": 89,
      "Atomic Mass": "227.02775 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²6d¹",
      "Oxidation States": "+3",
      "Electronegativity": "1.1",
      "Atomic Radius": "260 pm"
  };
  showPopup("Actinium (Ac)", propertiesAc);
});

document.getElementById("Rf").addEventListener("click", function() {
  const propertiesRf = {
      "Atomic Number": 104,
      "Atomic Mass": "267.122 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d²",
      "Oxidation States": "+4"
  };
  showPopup("Rutherfordium (Rf)", propertiesRf);
});

document.getElementById("Db").addEventListener("click", function() {
  const propertiesDb = {
      "Atomic Number": 105,
      "Atomic Mass": "270.133 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁴",
      "Oxidation States": "+5, +4, +3"
  };
  showPopup("Dubnium (Db)", propertiesDb);
});

document.getElementById("Sg").addEventListener("click", function() {
  const propertiesSg = {
      "Atomic Number": 106,
      "Atomic Mass": "271.134 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁶",
      "Oxidation States": "+6, +5, +4, +3, 0"
  };
  showPopup("Seaborgium (Sg)", propertiesSg);
});

document.getElementById("Bh").addEventListener("click", function() {
  const propertiesBh = {
      "Atomic Number": 107,
      "Atomic Mass": "270.133 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁵",
      "Oxidation States": "+7, +5, +4, +3"
  };
  showPopup("Bohrium (Bh)", propertiesBh);
});

document.getElementById("Hs").addEventListener("click", function() {
  const propertiesHs = {
      "Atomic Number": 108,
      "Atomic Mass": "277.161 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁸",
      "Oxidation States": "+8, +6, +4, +2, 0"
  };
  showPopup("Hassium (Hs)", propertiesHs);
});

document.getElementById("Mt").addEventListener("click", function() {
  const propertiesMt = {
      "Atomic Number": 109,
      "Atomic Mass": "276.151 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁷",
      "Oxidation States": "+9, +8, +6,+4, +3, +1"
  };
  showPopup("Meitnerium (Mt)", propertiesMt);
});

document.getElementById("Ds").addEventListener("click", function() {
  const propertiesDs = {
      "Atomic Number": 110,
      "Atomic Mass": "281.165 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁸",
      "Oxidation States": "+8, +6, +4, +2, 0"
  };
  showPopup("Darmstadtium (Ds)", propertiesDs);
});

document.getElementById("Rg").addEventListener("click", function() {
  const propertiesRg = {
      "Atomic Number": 111,
      "Atomic Mass": "280.165 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d⁹",
      "Oxidation States": "+5, +3, 1, -1"
  };
  showPopup("Roentgenium (Rg)", propertiesRg);
});

document.getElementById("Cn").addEventListener("click", function() {
  const propertiesCn = {
      "Atomic Number": 112,
      "Atomic Mass": "285.177 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d¹⁰",
      "Oxidation States": "+2, +1, 0"
  };
  showPopup("Copernicium (Cn)", propertiesCn);
});

document.getElementById("Nh").addEventListener("click", function() {
  const propertiesNh = {
      "Atomic Number": 113,
      "Atomic Mass": "286.182 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]5f¹⁴6d¹⁰7s²7p¹"
  };
  showPopup("Nihonium (Nh)", propertiesNh);
});

document.getElementById("Fl").addEventListener("click", function() {
  const propertiesFl = {
      "Atomic Number": 114,
      "Atomic Mass": "290.192 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²7p²5f¹⁴6d¹⁰"
  };
  showPopup("Flerovium (Fl)", propertiesFl);
});

document.getElementById("Mc").addEventListener("click", function() {
  const propertiesMc = {
      "Atomic Number": 115,
      "Atomic Mass": "290.196 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²7p³5f¹⁴6d¹⁰"
  };
  showPopup("Moscovium (Mc)", propertiesMc);
});

document.getElementById("Lv").addEventListener("click", function() {
  const propertiesLv = {
      "Atomic Number": 116,
      "Atomic Mass": "293.205 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²7p⁴5f¹⁴6d¹⁰"
  };
  showPopup("Livermorium (Lv)", propertiesLv);
});

document.getElementById("Ts").addEventListener("click", function() {
  const propertiesTs = {
      "Atomic Number": 117,
      "Atomic Mass": "294.211 u",
      "Standard State": "Solid (Expected)",
      "Electron Configuration": "[Rn]7s²7p⁵5f¹⁴6d¹⁰"
  };
  showPopup("Tennessine (Ts)", propertiesTs);
});

document.getElementById("Og").addEventListener("click", function() {
  const propertiesOg = {
      "Atomic Number": 118,
      "Atomic Mass": "295.216 u",
      "Standard State": "Gas (Expected)",
      "Electron Configuration": "[Rn]7s²7p⁶5f¹⁴6d¹⁰"
  };
  showPopup("Oganesson (Og)", propertiesOg);
});

document.getElementById("Ce").addEventListener("click", function() {
  const propertiesCe = {
      "Atomic Number": 58,
      "Atomic Mass": "140.116 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁵5d¹",
      "Oxidation States": "+4, +3",
      "Electronegativity (Pauling Scale)": 1.12,
      "Atomic Radius": "235 pm"
  };
  showPopup("Cerium (Ce)", propertiesCe);
});

document.getElementById("Pr").addEventListener("click", function() {
  const propertiesPr = {
      "Atomic Number": 59,
      "Atomic Mass": "140.90766 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f³",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.13,
      "Atomic Radius": "239 pm"
  };
  showPopup("Praseodymium (Pr)", propertiesPr);
});

document.getElementById("Nd").addEventListener("click", function() {
  const propertiesNd = {
      "Atomic Number": 60,
      "Atomic Mass": "144.24 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f⁴",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.14,
      "Atomic Radius": "229 pm"
  };
  showPopup("Neodymium (Nd)", propertiesNd);
});

document.getElementById("Pm").addEventListener("click", function() {
  const propertiesPm = {
      "Atomic Number": 61,
      "Atomic Mass": "144.91276 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f⁵",
      "Oxidation States": "+3",
      "Atomic Radius": "236 pm"
  };
  showPopup("Promethium (Pm)", propertiesPm);
});

document.getElementById("Sm").addEventListener("click", function() {
  const propertiesSm = {
      "Atomic Number": 62,
      "Atomic Mass": "150.4 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f⁶",
      "Oxidation States": "+3, +2",
      "Electronegativity (Pauling Scale)": 1.17,
      "Atomic Radius": "229 pm"
  };
  showPopup("Samarium (Sm)", propertiesSm);
});

document.getElementById("Eu").addEventListener("click", function() {
  const propertiesEu = {
      "Atomic Number": 63,
      "Atomic Mass": "151.964 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f⁷",
      "Oxidation States": "+3, +2",
      "Atomic Radius": "233 pm"
  };
  showPopup("Europium (Eu)", propertiesEu);
});

document.getElementById("Gd").addEventListener("click", function() {
  const propertiesGd = {
      "Atomic Number": 64,
      "Atomic Mass": "157.2 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f⁷5d¹",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.2,
      "Atomic Radius": "237 pm"
  };
  showPopup("Gadolinium (Gd)", propertiesGd);
});

document.getElementById("Tb").addEventListener("click", function() {
  const propertiesTb = {
      "Atomic Number": 65,
      "Atomic Mass": "158.92535 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f⁹",
      "Oxidation States": "+3",
      "Atomic Radius": "221 pm"
  };
  showPopup("Terbium (Tb)", propertiesTb);
});

document.getElementById("Dy").addEventListener("click", function() {
  const propertiesDy = {
      "Atomic Number": 66,
      "Atomic Mass": "162.500 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁰",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.22,
      "Atomic Radius": "229 pm"
  };
  showPopup("Dysprosium (Dy)", propertiesDy);
});

document.getElementById("Ho").addEventListener("click", function() {
  const propertiesHo = {
      "Atomic Number": 67,
      "Atomic Mass": "164.93033 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹¹",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.23,
      "Atomic Radius": "216 pm"
  };
  showPopup("Holmium (Ho)", propertiesHo);
});

document.getElementById("Er").addEventListener("click", function() {
  const propertiesEr = {
      "Atomic Number": 68,
      "Atomic Mass": "167.26 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹²",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.24,
      "Atomic Radius": "235 pm"
  };
  showPopup("Erbium (Er)", propertiesEr);
});

document.getElementById("Tm").addEventListener("click", function() {
  const propertiesTm = {
      "Atomic Number": 69,
      "Atomic Mass": "168.93422 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹³",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.25,
      "Atomic Radius": "227 pm"
  };
  showPopup("Thulium (Tm)", propertiesTm);
});

document.getElementById("Yb").addEventListener("click", function() {
  const propertiesYb = {
      "Atomic Number": 70,
      "Atomic Mass": "173.05 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴",
      "Oxidation States": "+3, +2",
      "Atomic Radius": "242 pm"
  };
  showPopup("Ytterbium (Yb)", propertiesYb);
});

document.getElementById("Lu").addEventListener("click", function() {
  const propertiesLu = {
      "Atomic Number": 71,
      "Atomic Mass": "174.9668 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Xe]6s²4f¹⁴5d¹",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.27,
      "Atomic Radius": "221 pm"
  };
  showPopup("Lutetium (Lu)", propertiesLu);
});

document.getElementById("Th").addEventListener("click", function() {
  const propertiesTh = {
      "Atomic Number": 90,
      "Atomic Mass": "232.038 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²6d²",
      "Oxidation States": "+4",
      "Electronegativity (Pauling Scale)": 1.3,
      "Atomic Radius": "237 pm"
  };
  showPopup("Thorium (Th)", propertiesTh);
});

document.getElementById("Pa").addEventListener("click", function() {
  const propertiesPa = {
      "Atomic Number": 91,
      "Atomic Mass": "231.03588 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f²6d¹",
      "Oxidation States": "+5, +4",
      "Electronegativity (Pauling Scale)": 1.5,
      "Atomic Radius": "243 pm"
  };
  showPopup("Protactinium (Pa)", propertiesPa);
});

document.getElementById("U").addEventListener("click", function() {
  const propertiesU = {
      "Atomic Number": 92,
      "Atomic Mass": "238.0289 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f³6d¹",
      "Oxidation States": "+6, +5, +4, +3",
      "Electronegativity (Pauling Scale)": 1.38,
      "Atomic Radius": "240 pm"
  };
  showPopup("Uranium (U)", propertiesU);
});

document.getElementById("Np").addEventListener("click", function() {
  const propertiesNp = {
      "Atomic Number": 93,
      "Atomic Mass": "237.048172 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f⁴6d¹",
      "Oxidation States": "+6, +5, +4, +3",
      "Electronegativity (Pauling Scale)": 1.36,
      "Atomic Radius": "221 pm"
  };
  showPopup("Neptunium (Np)", propertiesNp);
});

document.getElementById("Pu").addEventListener("click", function() {
  const propertiesPu = {
      "Atomic Number": 94,
      "Atomic Mass": "244.06420 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f⁶",
      "Oxidation States": "+6, +5, +4, +3",
      "Electronegativity (Pauling Scale)": 1.28,
      "Atomic Radius": "243 pm"
  };
  showPopup("Plutonium (Pu)", propertiesPu);
});

document.getElementById("Am").addEventListener("click", function() {
  const propertiesAm = {
      "Atomic Number": 95,
      "Atomic Mass": "243.061380 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f⁷",
      "Oxidation States": "+6, +5, +4, +3",
      "Electronegativity (Pauling Scale)": 1.3,
      "Atomic Radius": "244 pm"
  };
  showPopup("Americium (Am)", propertiesAm);
});

document.getElementById("Cm").addEventListener("click", function() {
  const propertiesCm = {
      "Atomic Number": 96,
      "Atomic Mass": "247.07035 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f⁷6d¹",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.3,
      "Atomic Radius": "245 pm"
  };
  showPopup("Curium (Cm)", propertiesCm);
});

document.getElementById("Bk").addEventListener("click", function() {
  const propertiesBk = {
      "Atomic Number": 97,
      "Atomic Mass": "247.07031 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f⁹",
      "Oxidation States": "+4, +3",
      "Electronegativity (Pauling Scale)": 1.3,
      "Atomic Radius": "244 pm"
  };
  showPopup("Berkelium (Bk)", propertiesBk);
});

document.getElementById("Cf").addEventListener("click", function() {
  const propertiesCf = {
      "Atomic Number": 98,
      "Atomic Mass": "251.07959 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁰",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.3,
      "Atomic Radius": "245 pm"
  };
  showPopup("Californium (Cf)", propertiesCf);
});

document.getElementById("Es").addEventListener("click", function() {
  const propertiesEs = {
      "Atomic Number": 99,
      "Atomic Mass": "252.0830 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹¹",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.3,
      "Atomic Radius": "245 pm"
  };
  showPopup("Einsteinium (Es)", propertiesEs);
});

document.getElementById("Fm").addEventListener("click", function() {
  const propertiesFm = {
      "Atomic Number": 100,
      "Atomic Mass": "257.09511 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]5f¹²7s²",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.3
  };
  showPopup("Fermium (Fm)", propertiesFm);
});

document.getElementById("Md").addEventListener("click", function() {
  const propertiesMd = {
      "Atomic Number": 101,
      "Atomic Mass": "258.09843 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹³",
      "Oxidation States": "+3, +2",
      "Electronegativity (Pauling Scale)": 1.3
  };
  showPopup("Mendelevium (Md)", propertiesMd);
});

document.getElementById("No").addEventListener("click", function() {
  const propertiesNo = {
      "Atomic Number": 102,
      "Atomic Mass": "259.10100 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴",
      "Oxidation States": "+3, +2",
      "Electronegativity (Pauling Scale)": 1.3
  };
  showPopup("Nobelium (No)", propertiesNo);
});

document.getElementById("Lr").addEventListener("click", function() {
  const propertiesLr = {
      "Atomic Number": 103,
      "Atomic Mass": "266.120 u",
      "Standard State": "Solid",
      "Electron Configuration": "[Rn]7s²5f¹⁴6d¹",
      "Oxidation States": "+3",
      "Electronegativity (Pauling Scale)": 1.3
  };
  showPopup("Lawrencium (Lr)", propertiesLr);
});

document.getElementById("close-popup").addEventListener("click", function() {
  hidePopup();
});


function changeElementNameStyle(style) {
  const elementName = document.getElementById("property-info").getElementsByTagName("strong")[0];
  for (const property in style) {
      elementName.style[property] = style[property];
  }
}

function showPopup(title, properties) {
  let popupContent = `<strong>${title}</strong><br>`;
  popupContent += `Atomic Number: ${properties["Atomic Number"]}<br><br><hr><br>`;
  
  for (const prop in properties) {
      if (prop !== "Atomic Number") {
          popupContent += `${prop}: <span style="color: #0d6efd">${properties[prop]}</span><br>`;
      }
  }
  
  document.getElementById("property-info").innerHTML = popupContent;
  document.getElementById("popup").style.display = "flex";
  changeElementNameStyle(elementNameStyle);
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}