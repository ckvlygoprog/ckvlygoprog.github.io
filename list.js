
const monsters = 
[
    {cardType: "Monster", cardName: "CELTIC GUARDIAN"},
    {cardType: "Monster/Effect", cardName: "CYBER JAR"},
    {cardType: "Monster/Effect", cardName: "DREAM CLOWN"},
    {cardType: "Monster/Effect", cardName: "JINZO"},
    {cardType: "Monster/Effect", cardName: "WITCH OF THE BLACK FOREST"},
    {cardType: "Monster/Effect", cardName: "DES LACOODA"},
    {cardType: "Monster/Effect", cardName: "SWARM OF SCARABS"},
    {cardType: "Monster/Effect", cardName: "EXILED FORCE"},
    {cardType: "Monster/Effect", cardName: "SANGAN"},
    {cardType: "Monster/Effect", cardName: "MOBIUS THE FROST MONARCH"},
    {cardType: "Monster/Effect", cardName: "MAGICAL SCIENTIST"},
    {cardType: "Monster/Effect", cardName: "CYBER DRAGON"},
    {cardType: "Monster/Effect", cardName: "SILVA WARLORD OF DARK WORLD"},
    {cardType: "Monster/Effect", cardName: "NIGHT ASSAILANT"},
    {cardType: "Monster/Effect", cardName: "CHAOS SORCERER"},
    {cardType: "Monster/Effect", cardName: "TREEBORN FROG"},
    {cardType: "Monster/Effect", cardName: "SNIPE HUNTER"},
    {cardType: "Monster/Effect", cardName: "NEO-SPACIAN GRAND MOLE"},
    {cardType: "Monster/Effect", cardName: "GLADIATOR BEAST BESTIARI"},
    {cardType: "Monster/Effect", cardName: "HONEST"},
    {cardType: "Monster/Effect", cardName: "CHAOS EMPEROR DRAGON - ENVOY OF THE END"},
    {cardType: "Monster/Effect", cardName: "BLACK LUSTER SOLDIER - ENVOY OF THE BEGINNING"},
    {cardType: "Monster/Effect", cardName: "MYSTIC TOMATO"},
    {cardType: "Monster/Effect", cardName: "PLAGUESPREADER ZOMBIE"},
    {cardType: "Monster/Effect", cardName: "LYLA, LIGHTSWORN SORCERESS"},
    {cardType: "Monster/Effect", cardName: "LONFIRE BLOSSOM"},
    {cardType: "Monster/Effect", cardName: "ELEMENTAL HERO NEOS ALIUS"},
    {cardType: "Monster/Effect", cardName: "BLACKWING - GALE THE WHIRLWIND"},
    {cardType: "Monster/Effect", cardName: "BLACKWING - KALUT THE MOON SHADOW"},
    {cardType: "Monster/Effect", cardName: "RESCUE CAT"},
    {cardType: "Monster/Effect", cardName: "SWAP FROG"},
    {cardType: "Monster/Effect", cardName: "GRAVEKEEPER'S SPY"},
    {cardType: "Monster/Effect", cardName: "RAIZA THE STORM MONARCH"},
    {cardType: "Monster/Effect", cardName: "GRANDMASTER OF THE SIX SAMURAI"},
    {cardType: "Monster/Effect", cardName: "LEGENDARY SIX SAMURAI - MIZUHO"},
    {cardType: "Monster/Effect", cardName: "RESCUE RABBIT"},
    {cardType: "Monster/Effect", cardName: "T.G. RUSH RHINO"},
    {cardType: "Monster/Effect", cardName: "INZEKTOR DRAGONFLY"},
    {cardType: "Monster/Effect", cardName: "GENEX ALLY BIRDMAN"},
    {cardType: "Monster/Effect", cardName: "T.G. STRIKER"},
    {cardType: "Monster/Effect", cardName: "KYCOO THE GHOST DESTROYER"},
    {cardType: "Monster/Effect", cardName: "REDOX, DRAGON RULER OF BOULDERS"},
    {cardType: "Monster/Effect", cardName: "TIDAL, DRAGON RULER OF WATERFALLS"},
    {cardType: "Monster/Effect", cardName: "DJINN, RELEASER OF RITUALS"},
    {cardType: "Monster/Effect", cardName: "STAR SERAPH SCEPTER"},
    {cardType: "Monster/Effect", cardName: "HEROIC CHALLENGER - THOUSAND BLADES"},
    {cardType: "Monster/Effect", cardName: "PERFORMAGE DAMAGE JUGGLER"},
    {cardType: "Monster/Effect", cardName: "PERFORMAPAL MONKEYBOARD"},
    {cardType: "Monster/Effect", cardName: "FAIRY TAIL - SNOW"},
    {cardType: "Monster/Effect", cardName: "GOUKI SUPREX"},
    {cardType: "Monster/Effect", cardName: "BLACKWING - GOFU THE VAGUE SHADOW"},
    {cardType: "Monster/Effect", cardName: "FLUFFAL BEAR"},
    {cardType: "Monster/Effect", cardName: "D.D. CROW"},
    {cardType: "Monster/Effect", cardName: "ORCUST CYMBAL SKELETON"},
    {cardType: "Monster/Effect", cardName: "DESTINY HERO - MALICIOUS"},
    {cardType: "Monster/Effect", cardName: "ORCUST KNIGHTMARE"},
    {cardType: "Monster/Effect", cardName: "WHITE DRAGON WYVERBURSTER"},
    {cardType: "Monster/Effect", cardName: "ALEISTER THE INVOKER"},
    {cardType: "Monster/Effect", cardName: "PSY-FRAMEGEAR GAMMA"},
    {cardType: "Monster/Effect", cardName: "TEARLAMENTS MERRLI"},
    {cardType: "Monster/Effect", cardName: "TEARLAMENTS HAVNIS"},
    {cardType: "Monster/Effect", cardName: "ASH BLOSSOM & JOYOUS SPRING"},
    {cardType: "Monster/Fusion", cardName: "THOUSAND-EYES RESTRICT"},
    {cardType: "Monster/Fusion", cardName: "EL SHADDOLL CONSTRUCT"},
    {cardType: "Monster/Fusion", cardName: "GEM-KNIGHT SERAPHINITE"},
    {cardType: "Monster/Synchro", cardName: "BLACK ROSE DRAGON"},
    {cardType: "Monster/Synchro", cardName: "GOYO GUARDIAN"},
    {cardType: "Monster/Synchro", cardName: "BRIONAC, DRAGON OF THE ICE BARRIER"},
    {cardType: "Monster/Synchro", cardName: 'KARAKURI SHOGUN MDL 00 "BUREI"'},
    {cardType: "Monster/Synchro", cardName: "LEGENDARY SIX SAMURAI - SHI EN"},
    {cardType: "Monster/Synchro", cardName: "STARDUST DRAGON"},
    {cardType: "Monster/Synchro", cardName: "NATURIA BEAST"},
    {cardType: "Monster/Synchro", cardName: "PSY-FRAMELORD OMEGA"},
    {cardType: "Monster/XYZ", cardName: "LAVAVAL CHAIN"},
    {cardType: "Monster/XYZ", cardName: "KING OF THE FERAL IMPS"},
    {cardType: "Monster/XYZ", cardName: "EVILSWARM EXCITON KNIGHT"},
    {cardType: "Monster/XYZ", cardName: "NUMBER 101: SILENT HONOR ARK"},
    {cardType: "Monster/XYZ", cardName: "TOADALLY AWESOME"},
    {cardType: "Monster/XYZ", cardName: "ZOODIAC DRIDENT"},
    {cardType: "Monster/XYZ", cardName: "NUMBER 41: BAGOOSKA THE TERRIBLY TIRED TAPIR"},
    {cardType: "Monster/XYZ", cardName: "GIGANTIC SPRIGHT"},
    {cardType: "Monster/Link", cardName: "TOPOLOGIC BOMBER DRAGON"},
    {cardType: "Monster/Link", cardName: "KNIGHTMARE GOBLIN"},
    {cardType: "Monster/Link", cardName: "SKY STRIKER ACE - KAGARI"},
    {cardType: "Monster/Link", cardName: "MEKK-KNIGHT CRUSADIA AVRAMAX"},
    {cardType: "Monster/Link", cardName: "BORRELSWORD DRAGON"},
    {cardType: "Monster/Link", cardName: "APOLLOUSA, BOW OF THE GODDESS"},
    {cardType: "Monster/Link", cardName: "UNCHAINED ABOMINATION"},
    {cardType: "Monster/Link", cardName: "ACCESSCODE TALKER"},
    {cardType: "Monster/Link", cardName: "CRYSTRON HALQIFIBRAX"}
];

const spells = 
[
    {cardType: "Spell", cardName: "POT OF GREED"},
    {cardType: "Spell", cardName: "FISSURE"},
    {cardType: "Spell", cardName: "RAIGEKI"},
    {cardType: "Spell", cardName: "HEAVY STORM"},
    {cardType: "Spell", cardName: "SNATCH STEAL"},
    {cardType: "Spell", cardName: "VENGEFUL BOG SPIRIT"},
    {cardType: "Spell", cardName: "WAVE-MOTION CANNON"},
    {cardType: "Spell", cardName: "NOBLEMAN OF CROSSOUT"},
    {cardType: "Spell", cardName: "LEVEL LIMIT - AREA B"},
    {cardType: "Spell", cardName: "A LEGENDARY OCEAN"},
    {cardType: "Spell", cardName: "PREMATURE BURIAL"},
    {cardType: "Spell", cardName: "CHANGE OF HEART"},
    {cardType: "Spell", cardName: "MIRAGE OF NIGHTMARE"},
    {cardType: "Spell", cardName: "LAST WILL"},
    {cardType: "Spell", cardName: "PAINFUL CHOICE"},
    {cardType: "Spell", cardName: "CONFISCATION"},
    {cardType: "Spell", cardName: "LIGHTNING VORTEX"},
    {cardType: "Spell", cardName: "BRAIN CONTROL"},
    {cardType: "Spell", cardName: "MONSTER REINCARNATION"},
    {cardType: "Spell", cardName: "SWORDS OF REVEALING LIGHT"},
    {cardType: "Spell", cardName: "BLACK WHIRLWIND"},
    {cardType: "Spell", cardName: "COLD WAVE"},
    {cardType: "Spell", cardName: "SOLIDARITY"},
    {cardType: "Spell", cardName: "HARPIE'S FEATHER DUSTER"},
    {cardType: "Spell", cardName: "BOOK OF MOON"},
    {cardType: "Spell", cardName: "MYSTICAL SPACE TYPHOON"},
    {cardType: "Spell", cardName: "MONSTER REBORN"},
    {cardType: "Spell", cardName: "DELINQUENT DUO"},
    {cardType: "Spell", cardName: "POT OF AVARICE"},
    {cardType: "Spell", cardName: "SPELLBOOK OF POWER"},
    {cardType: "Spell", cardName: "REKINDLING"},
    {cardType: "Spell", cardName: "FIRE FORMATION - TENKI"},
    {cardType: "Spell", cardName: "SUPER REJUVENATION"},
    {cardType: "Spell", cardName: "SOUL CHARGE"},
    {cardType: "Spell", cardName: "ENEMY CONTROLLER"},
    {cardType: "Spell", cardName: "KAISER COLOSSEUM"},
    {cardType: "Spell", cardName: "DIMENSIONAL FISSURE"},
    {cardType: "Spell", cardName: "TERRAFORMING"},
    {cardType: "Spell", cardName: "GOUKI RE-MATCH"},
    {cardType: "Spell", cardName: "FOOLISH BURIAL GOODS"},
    {cardType: "Spell", cardName: "CALLED BY THE GRAVE"},
    {cardType: "Spell", cardName: "THE FORCEFUL SENTRY"},
    {cardType: "Spell", cardName: "PRANK-KIDS PANDEMONIUM"}
];

const traps = 
[
    {cardType: "Trap", cardName: "ROBBIN' GOBLIN"},
    {cardType: "Trap", cardName: "FAIRY BOX"},
    {cardType: "Trap", cardName: "IMPERIAL ORDER"},
    {cardType: "Trap", cardName: "GRAVITY BIND"},
    {cardType: "Trap", cardName: "TORRENTIAL TRIBUTE"},
    {cardType: "Trap", cardName: "TRAP DUSTSHOOT"},
    {cardType: "Trap", cardName: "RING OF DESTRUCTION"},
    {cardType: "Trap", cardName: "RAIGEKI BREAK"},
    {cardType: "Trap", cardName: "OJAMA TRIO"},
    {cardType: "Trap", cardName: "SKILL DRAIN"},
    {cardType: "Trap", cardName: "WALL OF REVEALING LIGHT"},
    {cardType: "Trap", cardName: "SAKURETSU ARMOR"},
    {cardType: "Trap", cardName: "RECKLESS GREED"},
    {cardType: "Trap", cardName: "MACRO COSMOS"},
    {cardType: "Trap", cardName: "SOLEMN JUDGMENT"},
    {cardType: "Trap", cardName: "CALL OF THE HAUNTED"},
    {cardType: "Trap", cardName: "ROYAL OPPRESSION"},
    {cardType: "Trap", cardName: "MIRROR FORCE"},
    {cardType: "Trap", cardName: "TRAP STUN"},
    {cardType: "Trap", cardName: "SOLEMN WARNING"},
    {cardType: "Trap", cardName: "BOTTOMLESS TRAP HOLE"},
    {cardType: "Trap", cardName: "BLACK HORN OF HEAVEN"},
    {cardType: "Trap", cardName: "FIENDISH CHAIN"},
    {cardType: "Trap", cardName: "KARMA CUT"},
    {cardType: "Trap", cardName: "VANITY'S EMPTINESS"},
    {cardType: "Trap", cardName: "RETURN FROM THE DIFFERENT DIMENSION"},
    {cardType: "Trap", cardName: "COMPULSORY EVACUATION DEVICE"},
    {cardType: "Trap", cardName: "TIME-SPACE TRAP HOLE"},
    {cardType: "Trap", cardName: "METALFOES COUNTER"},
    {cardType: "Trap", cardName: "DIMENSIONAL BARRIER"},
    {cardType: "Trap", cardName: "QUAKING MIRROR FORCE"},
    {cardType: "Trap", cardName: "TIME PENDULUMGRAPH"},
    {cardType: "Trap", cardName: "PALEOZOIC DINOMISCHUS"},
    {cardType: "Trap", cardName: "TRUE DRACO APOCALYPSE"},
    {cardType: "Trap", cardName: "SUMMON LIMIT"},
    {cardType: "Trap", cardName: "TRI-BRIGADE REVOLT"},
    {cardType: "Trap", cardName: "GOZEN MATCH"}
];

function loadTable(data){
    const table = document.getElementById('forbiddenlist');
    data.forEach(element => {
        let row = table.insertRow();
        switch(element.cardType){
            case "Monster":
                row.className = "cardlist_monster";
                break;
            case "Monster/Effect":
                row.className = "cardlist_effect";
                break;
            case "Monster/Fusion":
                row.className = "cardlist_fusion";
                break;
            case "Monster/Synchro":
                row.className = "cardlist_synchro";
                break;
            case "Monster/XYZ":
                row.className = "cardlist_xyz";
                break;
            case "Spell":
                row.className = "cardlist_spell";
                break;
            case "Trap":
                row.className = "cardlist_trap";
                break;
            case "Monster/Link":
                row.className = "cardlist_link";
            default:
                break;
        }
        let type = row.insertCell(0);
        type.innerHTML = element.cardType;
        let name = row.insertCell(1);
        name.innerHTML = element.cardName;
        let advanced = row.insertCell(2);
        advanced.innerHTML = "Forbidden"
        let traditional = row.insertCell(3);
        traditional.innerHTML = "Limited"
        let remarks = row.insertCell(4);
        remarks.innerHTML = "&nbsp;" //remarks
    });
}
document.getElementById('updated_date').innerHTML="Updated: 9/14/2024";
document.getElementById('effective_date').innerHTML="Effective from September 14, 2024";
loadTable(monsters);
loadTable(spells);
loadTable(traps);