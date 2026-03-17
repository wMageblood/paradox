import * as VOTI from "../../assets/raids/dragonflight-raids/VotI/import-voti-images"
import * as ABERRUS from "../../assets/raids/dragonflight-raids/AtSC/import-aberrus-images"
import * as AMIRDRASSIL from "../../assets/raids/dragonflight-raids/AtDH/import-amirdrassil-images"


const DRAGONFLIGHT_RAIDS = [
  {
    raidName: "Vault of the Incarnates",
    bossList: ["Eranog", "Terros", "Elemental Council", "Wind Elemental", "Sennarth", "Kurog", "Diurna", "Raszageth"],
    images: [VOTI.eranog, VOTI.terros, VOTI.council, VOTI.windelemental, VOTI.sennarth, VOTI.kurog, VOTI.diurna, VOTI.raszageth]
  },
  {
    raidName: "Aberrus, the Shadowed Crucible",
    bossList: ["Kazzara", "Amalgamation Chamber", "Forgotten Experiments", "Assault of Zaqalis Forces", "Rashok", "Zskarn", "Magmorax", "Neltharion", "Sarkareth"],
    images: [ABERRUS.kazzara, ABERRUS.amalgamation, ABERRUS.forgottenexperiments, ABERRUS.zaqali, ABERRUS.rashok, ABERRUS.zskarn, ABERRUS.magmorax, ABERRUS.neltharion, ABERRUS.sarkareth]
  },
  {
    raidName: "Amirdrassil, the Dream's Hope",
    bossList: ["Gnarlroot", "Igira", "Volcoross", "Larodar", "Dreamcouncil", "Nymue", "Smolderon", "Tindral", "Fyrakk"],
    images: [AMIRDRASSIL.gnarlroot, AMIRDRASSIL.igira, AMIRDRASSIL.volcoross, AMIRDRASSIL.larodar, AMIRDRASSIL.dreamcouncil, AMIRDRASSIL.nymue, AMIRDRASSIL.smolderon, AMIRDRASSIL.tindral, AMIRDRASSIL.fyrakk]
  },
];


export default DRAGONFLIGHT_RAIDS;