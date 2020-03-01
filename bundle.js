var puppuri = (function (exports) {
	'use strict';

	var A1 = [
		"Agile",
		"Automation",
		"Backend",
		"Business",
		"Chief",
		"Clean",
		"Cloud",
		"Concept",
		"Customer",
		"Data",
		"Deputy",
		"Digital",
		"Financial",
		"Frontend",
		"Full-time",
		"Head",
		"HR",
		"Information",
		"Infrastructure",
		"International",
		"Junior",
		"Key",
		"Marketing",
		"Mechanical",
		"Medical",
		"Mobile",
		"Office",
		"Part-time",
		"Personal",
		"Portfolio",
		"Pre-sales",
		"Process",
		"Product",
		"Production",
		"Regional",
		"Regulatory",
		"Sales",
		"Seasonal",
		"Senior",
		"Service",
		"Social",
		"Student",
		"Summer",
		"Technical",
		"Group",
		"Future"
	];
	var B1 = [
		"Writing",
		"Work",
		"UX",
		"Transition",
		"Training",
		"Testing",
		"Team",
		"System",
		"Support",
		"Solution",
		"Simulation",
		"Service",
		"Security",
		"Scheduling",
		"Risk",
		"Research",
		"Recruitment",
		"Quality",
		"Project",
		"Profile",
		"Procurement",
		"Process",
		"Planning",
		"Optimization",
		"Operations",
		"Material",
		"Marketing",
		"Logistics",
		"Licensing",
		"Investment",
		"Installation",
		"Engagement",
		"Documentation",
		"Development",
		"Design",
		"Data",
		"Conversion",
		"Content",
		"Communications",
		"Cloud",
		"Care",
		"Business",
		"Brand",
		"Acquisition",
		"Account"
	];
	var C1 = [
		"Administrator",
		"Advisor",
		"Agent",
		"Ambassador",
		"Analyst",
		"Architect",
		"Assistant",
		"Associate",
		"Attendant",
		"Consultant",
		"Controller",
		"Coordinator",
		"Creator",
		"Designer",
		"Developer",
		"Director",
		"Engineer",
		"Generalist",
		"Inspector",
		"Intern",
		"Leader",
		"Manager",
		"Modeler",
		"Negotiator",
		"Ninja",
		"Officer",
		"Operator",
		"Partner",
		"Pioneer",
		"Planner",
		"Professor",
		"Recruiter",
		"Representative",
		"Researcher",
		"Scientist",
		"Secretary",
		"Specialist",
		"Substitute",
		"Technician",
		"Trainee",
		"Supervisor",
		"Trainer",
		"Accountant",
		"Mechanic",
		"Promoter",
		"Producer"
	];
	var D1 = [
		"huikea",
		"innovatiivinen",
		"laaja-alainen",
		"kokonaisvaltainen",
		"erinomainen",
		"tehokas",
		"asiakaslähtöinen",
		"itsenäinen",
		"ekstensiivinen",
		"harvinaislaatuinen",
		"merkityksellinen",
		"vetovoimainen",
		"lämmin henkinen",
		"intohimoinen",
		"kunnianhimoinen",
		"esimerkillinen",
		"ainutlaatuinen",
		"itseohjautuva",
		"innokas",
		"tulisieluinen",
		"joustava",
		"älykäs",
		"asiakaslähtöinen",
		"rohkea",
		"tulosnälkäinen",
		"aktiivinen",
		"yhteistyökykyinen",
		"energinen",
		"toimeenpanokykyinen",
		"idearikas",
		"kehityshaluinen",
		"sosiaalisesti lahjakas",
		"sisukas",
		"ratkaisukeskeinen",
		"oma-aloitteinen"
	];
	var E1 = [
		"huikea",
		"innovatiivinen",
		"laaja-alainen",
		"kokonaisvaltainen",
		"erinomainen",
		"tehokas",
		"asiakaslähtöinen",
		"itsenäinen",
		"ekstensiivinen",
		"harvinaislaatuinen",
		"merkityksellinen",
		"vetovoimainen",
		"lämmin henkinen",
		"intohimoinen",
		"kunnianhimoinen",
		"esimerkillinen",
		"ainutlaatuinen",
		"itseohjautuva",
		"innokas",
		"tulisieluinen",
		"joustava",
		"älykäs",
		"asiakaslähtöinen",
		"rohkea",
		"tulosnälkäinen",
		"aktiivinen",
		"yhteistyökykyinen",
		"energinen",
		"toimeenpanokykyinen",
		"idearikas",
		"kehityshaluinen",
		"sosiaalisesti lahjakas",
		"sisukas",
		"ratkaisukeskeinen",
		"oma-aloitteinen"
	];
	var F1 = [
		"neuvottelutaidot",
		"tiimityöskentelytaidot",
		"esiintymistaidot",
		"kommunikointitaidot",
		"organisointikyvyt"
	];
	var G1 = [
		"visionääri",
		"muutosjohtaja",
		"sparraaja",
		"teknologian supersankari",
		"mentori",
		"fasilitoija",
		"ongelmanratkaisija",
		"brändääjä"
	];
	var H1 = [
		"hands-on mentaliteetti",
		"yläfemmat",
		"balanssi",
		"määrätietoinen toimeliaisuus",
		"epämukavuusalue",
		"asiakaslähtöisyys",
		"itsenäisyys",
		"\"Take Responsibility\"",
		"\"Always Deliver\"",
		"\"Be Creative\"",
		"\"Share Fun\"",
		"\"Jump Right In\"",
		"\"pilke silmäkulmassa\"",
		"brändäys",
		"rajapinnat"
	];
	var I1 = [
		"yhteistyökumppanuus",
		"partnerivetoisuus",
		"rajapinnat",
		"arvoverkostotyö",
		"innovaatioekosysteemit",
		"matriisiorganisaatio"
	];
	var J1 = [
		"huikea",
		"innovatiivinen",
		"laaja-alainen",
		"kokonaisvaltainen",
		"erinomainen",
		"tehokas",
		"asiakaslähtöinen",
		"itsenäinen",
		"ekstensiivinen",
		"harvinaislaatuinen",
		"merkityksellinen",
		"vetovoimainen",
		"lämmin henkinen",
		"intohimoinen",
		"kunnianhimoinen",
		"esimerkillinen",
		"ainutlaatuinen",
		"itseohjautuva",
		"innokas",
		"tulisieluinen",
		"joustava",
		"älykäs",
		"asiakaslähtöinen",
		"rohkea",
		"tulosnälkäinen",
		"aktiivinen",
		"yhteistyökykyinen",
		"energinen",
		"toimeenpanokykyinen",
		"monipuolinen",
		"nopeatempoinen"
	];
	var K1 = [
		"brändäys",
		"ilmapiiri",
		"hyvinvointi",
		"innovointi",
		"kehittäminen",
		"työskentelykulttuuri",
		"prosessikehitys"
	];
	var L1 = [
		"lounasedut",
		"vapaa-ajan vakuutus",
		"tiimipäivät",
		"palaverit",
		"bilismatsit",
		"Team Eventit",
		"urakehitys",
		"laadun optimointi"
	];
	var M1 = [
		"tiimipelaajaa",
		"huipputyyppiä",
		"moniosaajaa",
		"huippuammattilaista",
		"luottotyyppiä"
	];
	var N1 = [
		"huikea",
		"innovatiivinen",
		"laaja-alainen",
		"kokonaisvaltainen",
		"erinomainen",
		"tehokas",
		"asiakaslähtöinen",
		"itsenäinen",
		"ekstensiivinen",
		"harvinaislaatuinen",
		"merkityksellinen",
		"vetovoimainen",
		"lämmin henkinen",
		"intohimoinen",
		"kunnianhimoinen",
		"esimerkillinen",
		"ainutlaatuinen",
		"itseohjautuva",
		"innokas",
		"huima",
		"kehittymishakuinen",
		"mahtava"
	];
	var O1 = [
		"työskentelyote",
		"mediasuhde",
		"tahtotila",
		"paineensietokyky",
		"ilmaisuvoima",
		"kiireensietokyky"
	];
	var P1 = [
		"Sytytätkö",
		"Sytytteletkö"
	];
	var Q1 = [
		"pieniä",
		"suuria",
		"keskikokoisia",
		"valtavia"
	];
	var R1 = [
		"tulipaloja",
		"metsäpaloja",
		"tulitornadoja",
		"brändipaloja",
		"roskispaloja",
		"sydämenpaloja",
		"innovaation kipinöitä"
	];
	var S1 = [
		"projektipäällikkö",
		"yrittäjä",
		"brändilähettiläs",
		"digininja",
		"kyberninja",
		"pilvininja",
		"roboninja",
		"asiantuntija",
		"muutosjohtaja"
	];
	var T1 = [
		"neukkari",
		"palaveri",
		"työkulttuuri",
		"big data",
		"projekti",
		"muutosmatka",
		"kilpailukyky",
		"uramahdollisuus",
		"kasvumatka",
		"kasvuyritys",
		"mahdollisuus",
		"markkinointiaktiviteettejä",
		"buukkihetket"
	];
	var U1 = [
		"oppimistahto",
		"tahtotila",
		"kiireensietokyky",
		"paineensietokyky",
		"taito koskettaa",
		"vastuunottokyky",
		"asiakaskeskeisyyttä korostava työskentelyasenne",
		"kyky itsenäiseen työskentelyyn",
		"vuorovaikutustaidot",
		"draivia",
		"nuoruuden innokkuutta",
		"vahvat rutiinit"
	];
	var V1 = [
		"tarinankerronnalliseen viestintään",
		"tekemisen meininkiin",
		"markkinoinnin lainalaisuuksiin",
		"yritysviestintään",
		"projektidiileihin",
		"pilvipohjaisten ratkaisujen saloihin",
		"vastuunottokykyyn",
		"monikanavaiseen viestintään"
	];
	var W1 = [
		"vastuunottokykyyn",
		"projektinhallintaan",
		"työskentelytapojen uudistamiseen",
		"kauppojen kloussaamiseen",
		"brändäämiseen",
		"vakuuttavaan kommunikointiin"
	];
	var X1 = [
		"tulevaisuuden ratkaisuihin ",
		"viestintämaailman saloihin",
		"kehitysprojekteihin"
	];
	var Y1 = [
		"markkinoinnin alalta",
		"business",
		"tekniseltä alalta",
		"kaupalliselta alalta",
		"AMK",
		"viestinnän alalta",
		"johtamisen alalta",
		"YAMK"
	];
	var Z1 = [
		"yhden",
		"kahden",
		"kolmen",
		"neljän",
		"viiden",
		"kuuden",
		"seitsemän",
		"kahdeksan",
		"yhdeksän",
		"kymmenen"
	];
	var AA = [
		"Erinomaista",
		"Tyydyttävää",
		"Hyvää",
		"Sujuvaa"
	];
	var AB = [
		"Suomenkielen",
		"suomenkielen",
		"suomen kielen"
	];
	var AC = [
		"ruotsin kielen",
		"englannin kielen",
		"lakijargonin",
		"pöhinäpuheen",
		"markkinointijargonin",
		"slush slangin"
	];
	var AD = [
		"Office-ohjelmista",
		"markkinoinnin lainalaisuuksista",
		"Microsoft-teknologioista",
		"viestinnän lainalaisuuksista",
		"konsultatiivisista otteista"
	];
	var AE = [
		"B2B-yrityksistä",
		"yritysviestinnästä",
		"teknologiaviestinnästä",
		"taittamisesta",
		"viestinnästä",
		"kuvallisesta ilmaisusta",
		"graafisesta suunnitelusta",
		"pilvipalveluratkaisuista"
	];
	var AF = [
		"asiakaskeskeisyyttä korostava työskentelyasennetta",
		"määrätietoista toimeliaisuutta",
		"henkilökohtaisesti kehittymisestään kiinnostuneisuutta",
		"taitoa tuottaa kiinnostavia tekstisisältöjä",
		"kehitysorientoitunutta asennetta",
		"diginatiiviutta"
	];
	var AG = [
		"tekemisen meininkiä",
		"datasta innostumista",
		"arjen sytyttämistä"
	];
	var AH = [
		"huikea",
		"innovatiivinen",
		"kokonaisvaltainen",
		"erinomainen",
		"tehokas",
		"asiakaslähtöinen",
		"itsenäinen",
		"ekstensiivinen",
		"harvinaislaatuinen",
		"merkityksellinen",
		"vetovoimainen",
		"lämmin henkinen",
		"intohimoinen",
		"kunnianhimoinen",
		"esimerkillinen",
		"ainutlaatuinen",
		"itseohjautuva",
		"innokas",
		"tulisieluinen",
		"joustava",
		"älykäs",
		"asiakaslähtöinen",
		"rohkea",
		"tulosnälkäinen",
		"aktiivinen",
		"yhteistyökykyinen",
		"energinen",
		"toimeenpanokykyinen",
		"idearikas",
		"kehityshaluinen",
		"proaktiivinen",
		"siirappinen",
		"futuristinen",
		"vahva"
	];
	var AI = [
		"digininja",
		"ongelmanratkaisija",
		"tiimipelaaja",
		"asiantuntija"
	];
	var AJ = [
		"huikeamman",
		"paremman",
		"mahtavamman",
		"tehokkaamman",
		"ketterämmän"
	];
	var AK2 = [
		"digitaalinen",
		"innovatiivinen",
		"tehokas",
		"kunnianhimoinen",
		"vetovoimainen",
		"ekstensiivinen",
		"intohimoinen",
		"esimerkillinen",
		"itseohjautuva",
		"asiakaslähtöinen",
		"yhteistyökykyinen"
	];
	var AL2 = [
		"kouluttaminen",
		"ongelmanratkaisu",
		"brändääminen",
		"kouluttaminen",
		"markkinointi",
		"viestintä",
		"konsultointi",
		"arvoverkostotyö",
		"kehittäminen",
		"prosessikehitys",
		"muutosjohtaminen"
	];
	var AM2 = [
		"Nautitko",
		"Etkö pitäisi",
		"Oletko innoissasi",
		"Sytytkö"
	];
	var AN2 = [
		"lämpimistä",
		"innovatiivisista",
		"pitkistä",
		"tehokkaista",
		"joustavista",
		"tulosnälkäisistä",
		"intohimoisista",
		"asiantuntevista",
		"älykkäistä",
		"energisistä",
		"ainutlaatuisista"
	];
	var AO2 = [
		"lounaista",
		"palavereista",
		"neuvotteluista",
		"bilismatseista",
		"after workeistä",
		"lean-sessioista",
		"pilvipalveluratkaisuista",
		"rajapinnoista",
		"mahdollisuuksista",
		"buukkihetkistä",
		"kehitysprojekteista"
	];
	var AP2 = [
		"moderni",
		"nykyaikainen",
		"ajanhermolla oleva",
		"kurantti"
	];
	var AQ2 = [
		"partnerivetoinen",
		"monikansallinen",
		"pieni",
		"keskikokoinen",
		"laajasti verkostoitunut"
	];
	var AR2 = [
		"firma",
		"yritys",
		"yhtiö",
		"start-up",
		"organisaatio",
		"matriisiorganisaatio",
		"toimija",
		"kasvuyritys"
	];
	var AS2 = [
		"tanssii",
		"pyörii",
		"liikkuu",
		"vaeltaa",
		"polttelee",
		"seilaa",
		"ninjailee",
		"ajelehtii",
		"askeltaa",
		"toimii",
		"painii",
		"urakoi"
	];
	var AT2 = [
		"viestinnän",
		"kehittämisen",
		"markkinoinnin",
		"myynnin",
		"talouden",
		"globaalin talouden",
		"brändien",
		"innovaatioekosysteemien",
		"kilpailukyvyn",
		"markkinatalouden",
		"yritysviestinnän",
		"organisaatioviestinnän",
		"konsultoinnin",
		"Big Datan"
	];
	var AU2 = [
		"rajapinnoilla",
		"frameworkeillä",
		"risteyskohdissa",
		"painepisteessä"
	];
	var AV2 = [
		"muutama vuosi",
		"muutama kuukausi",
		"puoli vuotta",
		"jokunen vuosi"
	];
	var AW2 = [
		"ykkönen",
		"paras",
		"innovatiivisin",
		"nuorekkain",
		"tehokkain",
		"tunnetuin",
		"luotetuin",
		"käytetyin",
		"arvostetuin",
		"hektisin"
	];
	var AX2 = [
		"innovointi",
		"kehittäminen",
		"pöhinäpuhe",
		"prosessikehitys",
		"palveluntuottaminen",
		"monikanavainen viestintä",
		"ongelmanratkaisu",
		"johtaminen",
		"hands-on mentaliteetti",
		"yläfemmaaminen",
		"balansoiminen",
		"määrätietoinen toimeliaisuus",
		"brändääminen",
		"asiakaslähtöisyys",
		"projektinhallinta"
	];
	var AY2 = [
		"kunnianhimoiseen",
		"esimerkilliseen",
		"intohimoiseen",
		"huikeaan",
		"innovatiiviseen",
		"kokonaisvaltaiseen",
		"erinomaiseen",
		"tehokkaaseen",
		"asiakaslähtöiseen",
		"itsenäiseen",
		"ekstensiiviseen",
		"harvinaislaatuiseen",
		"merkitykselliseen",
		"vetovoimaiseen",
		"lämmin henkiseen",
		"ainutlaatuiseen",
		"itseohjautuvaan",
		"innokkaaseen",
		"tulisieluiseen",
		"joustavaan",
		"älykkääseen",
		"rohkeaan",
		"tulosnälkäiseen",
		"aktiiviseen",
		"yhteistyökykyseen",
		"energiseen",
		"toimeenpanokykyiseen",
		"idearikkaaseen",
		"proaktiiviseen",
		"tarinankerronnalliseen",
		"vauhdikkaaseen",
		"huumorintajuiseen"
	];
	var AZ2 = [
		"kasvumatkaan",
		"viestintämaailmaan",
		"yhteistyöhön",
		"viestintään",
		"toimintaan",
		"markkinointiin",
		"palveluun",
		"yrityskulttuuriin",
		"työnantajakuvaan",
		"asiakahankintaan",
		"menoon",
		"menestykseen",
		"johtamiseen",
		"asiantuntijuuteen",
		"kehitykseen",
		"työntekijäkokemukseen",
		"käsien heilutteluun"
	];
	var BA2 = [
		"visionääri",
		"muutosjohtaja",
		"sparraaja",
		"teknologian supersankari",
		"mentori",
		"fasilitoija",
		"ongelmanratkaisija",
		"brändääjä",
		"digininja",
		"ongelmanratkaisija",
		"tiimipelaaja",
		"asiantuntija",
		"projektipäällikkö",
		"yrittäjä",
		"brändilähettiläs",
		"kyberninja",
		"pilvininja",
		"roboninja",
		"asiantuntija",
		"muutosjohtaja",
		"huipputyyppi",
		"moniosaaja",
		"huippuammattilainen",
		"luottotyyppi",
		"diginatiivi"
	];
	var BB2 = [
		"mainetta ja kunniaa",
		"vastuuta",
		"tiimityöskentelyä",
		"vaativia asiakkaita",
		"kontaktointia",
		"uusia haasteita",
		"katsekontaktia",
		"muutosta"
	];
	var BC2 = [
		"kasvumatkaan",
		"viestintämaailman kohtaamiseen",
		"yhteistyöhön",
		"viestintään",
		"toimintaan",
		"markkinointiin",
		"palveluun",
		"yrityskulttuurin rakentamiseen",
		"työnantajakuvan luontiin",
		"asiakahankintaan",
		"menoon",
		"menestykseen",
		"johtamiseen",
		"asiantuntijuuteen",
		"kehitykseen",
		"työntekijäkokemuksen esille tuontiin",
		"käsien heilutteluun",
		"määrätietoiseen toimeliaisuuteen",
		"itseilmaisuun"
	];
	var BD2 = [
		"kouluttamisesta",
		"ongelmanratkaisusta",
		"brändäämisestä",
		"kouluttamisesta",
		"markkinoinnista",
		"viestinnästä",
		"konsultoinnista",
		"arvoverkostotyöstä",
		"kehittämisestä",
		"prosessikehityksestä",
		"muutosjohtamisesta",
		"asiakashankinnasta",
		"markkinnoinnin lainalaisuuksista",
		"viestinnän lainalaisuuksista",
		"globalisaatiosta",
		"verkostoitumisesta",
		"johtamisesta",
		"B2B-yrityksistä",
		"yritysviestinnästä",
		"teknologiaviestinnästä",
		"taittamisesta",
		"viestinnästä",
		"kuvallisesta ilmaisusta",
		"graafisesta suunnitelusta",
		"pilvipalveluratkaisuista"
	];
	var BE2 = [
		"kunnianhimoisesti",
		"esimerkillisesti",
		"intohimoisesti",
		"huikeasti",
		"innovatiivisesti",
		"kokonaisvaltaisesti",
		"erinomaisesti",
		"tehokkaasti",
		"asiakaslähtöisesti",
		"itsenäisesti",
		"ekstensiivisesti",
		"harvinaislaatuisesti",
		"merkityksellisesti",
		"vetovoimaisesti",
		"lämmin henkisesti",
		"ainutlaatuisesti",
		"itseohjautuvasti",
		"innokkaasti",
		"tulisieluisesti",
		"joustavasti",
		"älykkäästi",
		"rohkeasti",
		"tulosnälkäisesti",
		"aktiivisesti",
		"yhteistyökykyisesti",
		"energisesti",
		"toimeenpanokykyisesti",
		"idearikkaasti",
		"proaktiivisesti",
		"tarinankerronnallisesti",
		"vauhdikkaasti",
		"huumorintajuisesti",
		"vahvasti",
		"vaikuttavasti"
	];
	var BF2 = [
		"tieteen",
		"taiteen",
		"viestinnän",
		"markkinatalouden",
		"sovellusten",
		"yritysten"
	];
	var BG2 = [
		"hurttia huumoria",
		"kivoja työkavereita",
		"uusia haasteita",
		"haastavia asiakkaita",
		"tarttua toimeen",
		"vaan teet"
	];
	var BH2 = [
		"oppimistahto",
		"tahtotila",
		"kiireensietokyky",
		"paineensietokyky",
		"taito koskettaa",
		"vastuunottokyky",
		"asiakaskeskeisyyttä korostava työskentelyasenne",
		"kyky itsenäiseen työskentelyyn",
		"draivi",
		"nuoruuden innokkuus"
	];
	var BI2 = [
		"kunnianhimoisuutta",
		"esimerkillisyyttä",
		"intohimoisuutta",
		"huikeutta",
		"innovatiivisuutta",
		"kokonaisvaltaisuutta",
		"erinomaisuutta",
		"tehokkuutta",
		"asiakaslähtöisyyttä",
		"itsenäisyyttä",
		"ekstensiivisyyttä",
		"harvinaislaatuisuutta",
		"merkityksellisyyttä",
		"vetovoimaisuutta",
		"lämmin henkisyyttä",
		"ainutlaatuisuutta",
		"itseohjautuvuutta",
		"innokkuutta",
		"tulisieluisuutta",
		"joustavuutta",
		"älykkyyttä",
		"rohkeutta",
		"tulosnälkäisyyttä",
		"aktiivisuutta",
		"yhteistyökykyisyyttä",
		"energisyyttä",
		"toimeenpanokykyisyyttä",
		"idearikkautta",
		"proaktiivisuutta",
		"tarinankerronnallisuutta",
		"vauhdikkuutta",
		"huumorintajuisuutta",
		"vahvuutta",
		"vaikuttavuutta"
	];
	var BJ2 = [
		"oppimistahtoa",
		"tahtotila",
		"kiireensietokykyä",
		"paineensietokykyä",
		"taitoa koskettaa",
		"vastuunottokykyä",
		"asiakaskeskeisyyttä korostavaa työskentelyasennetta",
		"kykyä itsenäiseen työskentelyyn",
		"draivia",
		"nuoruuden innokkuutta",
		"asiakaspalveluhalukkuutta",
		"määrätietoista toimeliaisuutta",
		"tekemisen meininkiä",
		"hands on -mentaliteettia"
	];
	var BK2 = [
		"suomeksi",
		"ruotsiksi",
		"englanniksi",
		"monikielisesti"
	];
	var BL2 = [
		"sujuvat",
		"kivat",
		"hauskat",
		"loistavat",
		"parhaat",
		"mukavat",
		"upeat",
		"mahtavat",
		"monipuoliset",
		"joustavat",
		"kannustavat",
		"maksuttomat"
	];
	var BM2 = [
		"henkilöstöedut",
		"kulttuuripalvelut",
		"työmatkat",
		"työskentelyolosuhteet",
		"työkokemukset",
		"edut",
		"työterveyspalvelut",
		"pilvipalvelut"
	];
	var BN2 = [
		"kivat",
		"hauskat",
		"loistavat",
		"parhaat",
		"mukavat",
		"upeat",
		"kannustavat",
		"lämmin henkiset",
		"mahtavat"
	];
	var BO2 = [
		"osaamistasi",
		"johtajuuttasi",
		"asiantuntijuuttasi",
		"ongelmanratkaisukykyjäsi",
		"itseäsi",
		"työtäsi",
		"työskentelymetodejasi",
		"ihmisyyttäsi",
		"brändiosaamistasi",
		"ilmaisuvoimaasi"
	];
	var BP2 = [
		"sopimuksen",
		"TES:n",
		"tuloksen",
		"kehityksen",
		"toiveen"
	];
	var BQ2 = [
		"Kouvolan",
		"Helsingin",
		"Kirkkonummen",
		"Tampereen",
		"Joensuun",
		"Kontiolahden",
		"Vaasan",
		"Mikkelin",
		"Rovaniemen",
		"Vantaan",
		"Salon",
		"Turun",
		"Espoon",
		"Jyväskylän",
		"Oulun",
		"Kauhavan",
		"Kajaanin"
	];
	var BR2 = [
		"\"Take Responsibility!\"",
		"\"Always Deliver!\"",
		"\"Be Creative!\"",
		"\"Share Fun!\"",
		"\"Jump Right In!\""
	];
	var words = {
		A1: A1,
		B1: B1,
		C1: C1,
		D1: D1,
		E1: E1,
		F1: F1,
		G1: G1,
		H1: H1,
		I1: I1,
		J1: J1,
		K1: K1,
		L1: L1,
		M1: M1,
		N1: N1,
		O1: O1,
		P1: P1,
		Q1: Q1,
		R1: R1,
		S1: S1,
		T1: T1,
		U1: U1,
		V1: V1,
		W1: W1,
		X1: X1,
		Y1: Y1,
		Z1: Z1,
		AA: AA,
		AB: AB,
		AC: AC,
		AD: AD,
		AE: AE,
		AF: AF,
		AG: AG,
		AH: AH,
		AI: AI,
		AJ: AJ,
		AK2: AK2,
		AL2: AL2,
		AM2: AM2,
		AN2: AN2,
		AO2: AO2,
		AP2: AP2,
		AQ2: AQ2,
		AR2: AR2,
		AS2: AS2,
		AT2: AT2,
		AU2: AU2,
		AV2: AV2,
		AW2: AW2,
		AX2: AX2,
		AY2: AY2,
		AZ2: AZ2,
		BA2: BA2,
		BB2: BB2,
		BC2: BC2,
		BD2: BD2,
		BE2: BE2,
		BF2: BF2,
		BG2: BG2,
		BH2: BH2,
		BI2: BI2,
		BJ2: BJ2,
		BK2: BK2,
		BL2: BL2,
		BM2: BM2,
		BN2: BN2,
		BO2: BO2,
		BP2: BP2,
		BQ2: BQ2,
		BR2: BR2
	};

	const delimiters = ['{{', '}}'];
	const keySearchRegExp = new RegExp(delimiters[0] + '(\\w+)' + delimiters[1], 'gm');
	const requiredFormFields = ['company', 'jobTitle'];

	function getRandomInt(min, max) {
		//The maximum is exclusive and the minimum is inclusive
	  	min = Math.ceil(min);
	  	max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min)) + min; 
	}

	function getRandomWord(key) {
		const group = words[key];
		if (!group) throw new Error(`Invalid word group "${key}"`);
		return group[getRandomInt(0, group.length)];
	}

	function toggleElement(el, state) {
		el.style.display = state ? 'block' : 'none';
	}

	function setElementDisabled(el, state) {
		if (state) {
			el.setAttribute('disabled', true);
		} else {
			el.removeAttribute('disabled');
		}
	}

	function isValidForm(formData) {
		return requiredFormFields.every(field => {
			const value = formData.get(field);
			if (field === 'jobTitle' && formData.get('randomTitle')) return true;
			return value && value.length > 0;
		});
	}

	function formatTemplate(template) {
		return template.replace(/(\\r|\\n|\\t)/g, '');
	}

	function getTemplateKey(key) {
		if (!key) throw new Error(`Invalid template key "${key}"`);
		return delimiters[0] + key.trim() + delimiters[1];
	}

	function getKeysFromTemplate(template) {
		return template
			.match(keySearchRegExp)
			.map(key => 
				key.replace(delimiters[0], '').replace(delimiters[1], '')
			);
	}

	var templates = [
		"<h3>{{company}} rekrytoi!</h3>\r\n<p>Onko {{AK2}} {{AL2}} sinulle tuttua? {{AM2}} {{AN2}} {{AO2}}?</p>\r\n<p><strong>{{A1}} {{B1}} {{C1}}</strong> voi olla juuri sinun hommasi!</p>\r\n<p>{{company}} on {{AP2}} {{AQ2}} {{AR2}}, joka {{AS2}} {{AT2}} {{AU2}}. Meillä on takana vasta {{AV2}}, mutta tavoitteenamme on olla alamme {{AW2}}. Toimintamme ydintä on {{AH}} {{AX2}} ja tähtäämme {{AY2}} {{AZ2}}. Etsimämme työntekijä on {{D1}} {{BA2}}, joka ei välttele {{BB2}}. Tässä tehtävässä sinulla on mahdollisuus {{AY2}} {{BC2}}.</p>\r\n<p><strong>Menestyt tehtävässä kun...</strong></p>\r\n<ul>\r\n\t<li>Sinulla on {{AH}} ymmärrys {{BD2}} ja {{BD2}}.</li>\r\n\t<li>Kommunikoit {{BE2}} {{BF2}} rajapinnoilla.</li>\r\n\t<li>Et pelkää {{BG2}}.</li>\r\n\t<li>Sinulla on {{N1}} {{BH2}}.</li>\r\n\t<li>Olet {{N1}} ja {{N1}}.</li>\r\n</ul>\r\n<p><strong>Me odotamme sinulta...</strong></p>\r\n<ul>\r\n\t<li>{{BI2}} ja {{BJ2}}.</li>\r\n\t<li>Soveltuvaa koulutusta tai työkokemusta esim. {{Y1}}.</li>\r\n</ul>\r\n<p>Työtä tehdään {{BK2}}, mutta muistathan mainita muista taidoistasi hakemuksessasi.</p>\r\n<p>Tarjoamme sinulle mm. {{BL2}} {{BM2}}, {{BN2}} kollegat ja työn, jossa voit kehittää {{BO2}}. Palkkaus {{BP2}} mukaan. Toimipaikkasi on pääkonttorillamme {{BQ2}} keskustassa.</p>\r\n<p>{{BR2}}</p>\r\n",
		"<h3>Sinustako meidän seuraava {{A1}} {{B1}} {{C1}}?</h3>\r\n\r\n<p>\r\nOletko {{D1}} ja {{E1}}, {{F1}} omaava {{G1}}? Kuvaako sinua hyvin {{H1}}?\r\nMiltä kuulostaa {{I1}}, {{J1}} {{K1}} ja {{L1}}? \r\nEtsimme {{M1}}, jolla on {{N1}} {{O1}}. \r\n{{P1}} usein {{Q1}} {{R1}}?  Oletko oman elämäsi {{S1}}? \r\nMeillä on {{T1}}, onko sinulla {{U1}}?\r\n</p>\r\n<p>Tehtäväsi painottuu {{V1}}, {{W1}} ja {{X1}}. Tehtävänkuvaa voidaan määrittää myös kiinnostuksesi mukaan.</p>\r\n<h4>Toivomme sinulta:</h4>\r\n<ul>\r\n\t<li>Soveltuvaa tutkintoa esim. {{Y1}} ja {{Z1}} vuoden työkokemusta.</li>\r\n\t<li>{{AA}} suullista ja kirjallista {{AB}} taitoa, {{AC}} taito katsotaan eduksi.</li>\r\n\t<li>Lisäksi arvostamme aiempaa kokemusta {{AD}} ja {{AE}}.</li>\r\n</ul>\r\n<p>Tehtävässä menestyminen edellyttää {{AF}} ja {{AG}}. Lisäksi meille on tärkeää, että olet {{AH}} {{AI}}, joka haluaa tehdä työpaikastamme entistä {{AJ}} toimijan alallamme.</p>\r\n<p>Me tarjoamme sinulle työn, jossa saat mahtavat edut ja voit kehittää osaamistasi täysin uudelle tasolle.</p>\r\n"
	];

	var images = [
		"hivan-arvizu-soyhivan-MAnhvw0nDDY-unsplash.jpg",
		"sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg",
		"linkedin-sales-navigator-YDVdprpgHv4-unsplash.jpg"
	];

	const assetsPath = '/assets/';

	let state = {
		formData: null
	};

	function setRandomBackground() {
		const el = document.getElementById('stock-photo');
		el.style.backgroundImage = `url("${assetsPath + images[getRandomInt(0, images.length)]}")`;
	}

	function onSubmitForm(event) {
		event.preventDefault();
		const formData = new FormData(document.forms.namedItem("job-form"));
		if (!isValidForm(formData)) return false;
		state = { formData };
		createJobApplication();
		return false;
	}

	function createJobApplication() {
		let template = (' ' + templates[getRandomInt(0, templates.length)]).slice(1).trim();
		template = formatTemplate(template);
		template = replaceFormValues(template);

		const keys = getKeysFromTemplate(template);
		template = replaceKeys(template, keys);

		renderTemplate(template);
		showTemplate();
	}

	function replaceFormValues(template) {
		const {formData} = state;
		const randomTitle = formData.get('randomTitle');
		if (!randomTitle) {
			const jobTitle = formData.get('jobTitle');
			template = template.replace(`{{A1}} {{B1}} {{C1}}`, jobTitle);
		}

		return template.replace(new RegExp(getTemplateKey('company'), 'gm'), formData.get('company'));
	}

	function replaceKeys(template, keys) {
		const usedWords = [];
		const wordsUsedInGroup = {};

		return keys.reduce((tmpl, key) => {
			let chosenWord = getRandomWord(key);
			const group = words[key];
			while(wordsUsedInGroup[key] !== group.length && usedWords.includes(chosenWord)) {
				chosenWord = getRandomWord(key);
			}
			usedWords.push(chosenWord);
			wordsUsedInGroup[key] += 1;
			return tmpl.replace(getTemplateKey(key), chosenWord)
		}, template);
	}

	function renderTemplate(template) {
		const templateEl = document.getElementById('result');
		templateEl.innerHTML = template;
	}

	function showTemplate() {
		const formEl = document.getElementById('job-form');
		const resultEl = document.getElementById('result-container');
		toggleElement(formEl, false);
		toggleElement(resultEl, true);
	}

	function showForm() {
		const formEl = document.getElementById('job-form');
		const resultEl = document.getElementById('result-container');
		toggleElement(resultEl, false);
		toggleElement(formEl, true);
	}

	function init() {
		setRandomBackground();

		const formEl = document.getElementById('job-form');
		formEl.addEventListener('submit', onSubmitForm, false);
		formEl.addEventListener('input', event => {
			const formData = new FormData(document.forms.namedItem("job-form"));
			const submitButton = document.getElementById('submit-button');
			setElementDisabled(submitButton, !isValidForm(formData));
		}, false);


		const randomTitleCheckbox = document.getElementById('random-title');
		randomTitleCheckbox.addEventListener('click', function(event) {
			setElementDisabled(document.getElementById('job-title'), this.checked);
		});

		const resetButton = document.getElementById('reset-button');
		resetButton.addEventListener('click', event => {
			event.preventDefault(); 
			showForm();
		});

		const refreshButton = document.getElementById('refresh-button');
		refreshButton.addEventListener('click', event => {
			event.preventDefault(); 
			createJobApplication();
		});
	}

	document.addEventListener('DOMContentLoaded', init);

	exports.createJobApplication = createJobApplication;
	exports.init = init;
	exports.onSubmitForm = onSubmitForm;
	exports.renderTemplate = renderTemplate;
	exports.replaceFormValues = replaceFormValues;
	exports.replaceKeys = replaceKeys;
	exports.setRandomBackground = setRandomBackground;
	exports.showForm = showForm;
	exports.showTemplate = showTemplate;

	return exports;

}({}));
