import * as MOQD from "../../assets/raids/midnight-raids/MoQD/import-MoQD-images"
import * as TVSP from "../../assets/raids/midnight-raids/TVSP/import-TVSP-images"
import * as TDRFT from "../../assets/raids/midnight-raids/TDRFT/import-TDRFT-images"

const MIDNIGHT_RAIDS = [
  {
    raidName: "The Voidspire",
    bossList: ["Imperator Averzian", "Vorasius", "Fallen-King Salhadaar", "Vaelgor & Ezzorak", "Lightblinded Vanguard", "Crown of the Cosmos"],
    images: [TVSP.hostGeneral, TVSP.kaiju, TVSP.salhadaar, TVSP.dragonDuo, TVSP.paladinTrio, TVSP.alleria]
  },
  {
    raidName: "March on Quel'danas",
    bossList: ["Belo'ren, Child of Al'ar", "Midnight Falls"],
    images: [MOQD.beloren, MOQD.lura]
  },
  {
    raidName: "The Dreamrift",
    bossList: ["Chimaerus"],
    images: [TDRFT.chimaerus]
  }
];

export default MIDNIGHT_RAIDS;