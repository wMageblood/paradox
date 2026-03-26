import * as NP from "../../assets/raids/tww-raids/NP/import-NP-images"
import * as LOU from "../../assets/raids/tww-raids/LoU/import-LoU-images"
import * as MFO from "../../assets/raids/tww-raids/MFO/import-MFO-images"


const THE_WAR_WITHIN_RAIDS = [
  {
    raidName: "Nerub'ar Palace",
    bossList: ["Ulgrax", "The Bloodbound Horror", "Sikran", "Rasha'nan", "Broodtwister Ovinax", "Kyveza", "Silken Court", "Queen Ansurek"],
    images: [NP.ulgrax, NP.bloodbound, NP.sikran, NP.rashanan, NP.ovinax, NP.kyveza, NP.council, NP.ansurek]
  },
  {
    raidName: "Liberation of Undermine",
    bossList: ["Vexie", "Clash", "Rik Reverb", "Stix", "Sprocketmonger", "Bandit", "Mug'zee", "Gallywix"],
    images: [LOU.vexie, LOU.clash, LOU.rikReverb, LOU.stix, LOU.sprocketmonger, LOU.bandit, LOU.mugzee, LOU.gallywix]
  },
  {
    raidName: "Manaforge Omega",
    bossList: ["Plexus-Sentinel", "Soulbinder Naazindhri", "Loom'ithar", "Forgeweaver Araz", "Fractillus", "DH Council", "Nexus-King Salhadaar", "Dimensius, the All-Devouring"],
    images: [MFO.plexus, MFO.soulbinder, MFO.loomithar, MFO.araz, MFO.fractillus, MFO.dhcouncil, MFO.salhadaar, MFO.dimensius]
  }
];


export default THE_WAR_WITHIN_RAIDS;