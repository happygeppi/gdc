const data = {
  topNav: [
    {
      title: "Willkommen",
      href: "index.html",
    },
    {
      title: "Schulorganisation",
      href: "Schulorganisation/schulorganisation.html",
    },
    {
      title: "Schulgemeinschaft",
      href: "Schulgemeinschaft/schulgemeinschaft.html",
    },
    {
      title: "Unterricht",
      href: "Unterricht/unterricht.html",
    },
    {
      title: "Au&szlig;erunterrichtliches",
      href: "Ausserunterrichtliches/ausserunterrichtliches.html",
    },
    {
      title: "F&ouml;rderverein",
      href: "Foerderverein/foerderverein.html",
    },
  ],
  sideNav: [
    [
      // Willkommen
      {
        title: "Login (Lehrer intern)",
        href: "Willkommen/login-lehrer.html",
      },
      {
        title: "Logout",
        href: "Willkommen/logout.html",
      },
      {
        title: "Impressum",
        href: "Willkommen/impressum.html",
      },
    ],
    [
      // Schulorganisation
      {
        title: "Unterrichtszeiten",
        href: "Schulorganisation/unterrichtszeiten.html",
      },
      {
        title: "Hausordnung",
        href: "Schulorganisation/hausordnung.html",
      },
      {
        title: "COVID-19",
        href: "Schulorganisation/covid-19.html",
      },
      {
        title: "Auslagerung &ndash; Sch&uuml;lerverkehr",
        href: "Schulorganisation/auslagerung.html",
      },
      {
        title: "Elternbriefe",
        href: "Schulorganisation/elternbriefe.html",
      },
      {
        title: "Login",
        href: "Schulorganisation/login.html",
      },
      {
        title: "Logout",
        href: "Schulorganisation/logout.html",
      },
      {
        title: "Sekretariat",
        href: "Schulorganisation/sekretariat.html",
      },
    ],
    [
      // Schulgemeinschaft
      {
        title: "Sch&uuml;lerinnen und Sch&uuml;ler",
        href: "Schulgemeinschaft/schueler.html",
      },
      {
        title: "Sch&uuml;lervertretung",
        href: "Schulgemeinschaft/schuelervertretung.html",
      },
      {
        title: "Lehrerinnen und Lehrer",
        href: "Schulgemeinschaft/lehrer.html",
      },
      {
        title: "Elternvertretung",
        href: "Schulgemeinschaft/elternvertretung.html",
      },
      {
        title: "Ansprechpartner",
        href: "Schulgemeinschaft/ansprechpartner.html",
      },
      {
        title: "Schulsozialarbeit",
        href: "Schulgemeinschaft/schulsozialarbeit.html",
      },
      {
        title: "Unser Schulhaus",
        href: "Schulgemeinschaft/schulhaus.html",
      },
      {
        title: "Schulprogramm",
        href: "Schulgemeinschaft/schulprogramm.html",
      },
      {
        title: "StandWithUkraine",
        href: "Schulgemeinschaft/standWithUkraine.html",
      },
      {
        title: "Login",
        href: "Schulorganisation/login.html",
      },
      {
        title: "Logout",
        href: "Schulorganisation/logout.html",
      },
    ],
    [
      // Unterricht
      {
        title: "Sprachenangebot",
        href: "Unterricht/sprachenangebot.html",
      },
      {
        title: "Profile",
        href: "Unterricht/profile.html",
      },
      {
        title: "Bl&auml;serprojekt",
        href: "Unterricht/Blaeserprojekt.html",
      },
      {
        title: "Schulpartnerschaften",
        href: "Schulorganisation/schulpartnerschaften.html",
      },
      {
        title: "Eindr&uuml;cke aus dem Fachunterricht",
        href: "Schulorganisation/eindruecke.html",
      },
      {
        title: "Sek. I",
        href: "Schulorganisation/sek1.html",
      },
      {
        title: "Sek. II",
        href: "Schulorganisation/sek2.html",
      },
      {
        title: "Login",
        href: "Schulorganisation/login.html",
      },
      {
        title: "Logout",
        href: "Schulorganisation/logout.html",
      },
    ],
    [
      // Ausserunterrichtliches
      {
        title: "Besonderheiten am GDC",
        href: "Unterricht/besonderheiten.html",
      },
      {
        title: "&Uuml;bersicht zu den GTA",
        href: "Unterricht/gta.html",
      },
      {
        title: "Bl&auml;serprojekt",
        href: "Unterricht/Blaeserprojekt.html",
      },
      {
        title: "Schulpartnerschaften",
        href: "Schulorganisation/schulpartnerschaften.html",
      },
      {
        title: "Login",
        href: "Schulorganisation/login.html",
      },
      {
        title: "Logout",
        href: "Schulorganisation/logout.html",
      },
    ],
    [
      // Foerderverein
      {
        title: "Dokumente",
        href: "Foerderverein/dokumente.html",
      },
      {
        title: "GDC-WEB-SHOP",
        href: "Foerderverein/gdcwebshop.html",
      },
      {
        title: "Kontaktformular",
        href: "Foerderverein/kontaktformular.html",
      },
      {
        title: "2012/2013",
        href: "Foerderverein/2012-2013.html",
      },
    ]
  ]
};

let path = window.location.href.split("/");
path.splice(0, path.length - 2);

let index;

function Init() {
  index = GetIndex();

  CreateTitle();
  CreateLogo();
  CreateTopNav();
  CreateSideNav();
}

function GetIndex() {
  let index = [null, "main"];

  data.topNav.forEach((page, i) => {
    if (page.href.split("/")[0] == path[0]) index[0] = i;
  });

  if (index[0] == null) index[0] = 0;

  data.sideNav[index[0]].forEach((subpage, i) => {
    if (subpage.href.split("/")[1] == path[1]) index[1] = i;
  });

  return index;
}

function CreateTitle() {
  let title = data.topNav[index[0]].title;
  if (index[1] != "main") title = data.sideNav[index[0]][index[1]].title;
  
  const umlaute = [["&szlig;", "ß"],["&auml;","a"],["&Auml;","A"],["&ouml;","o"],["&Ouml;","O"],["&uuml;","u"],["&Uuml;","U"]];
  // for (const uml of umlaute) title = title.replace(uml[0], uml[1]);
  
  document.title = `${title} | Gymnasium Dresden-Cotta`;

  const H1 = document.createElement("h1");
  H1.innerHTML = title;
  $("main-container").insertBefore(H1, $$$("#main-container > *")[0]);
}

function CreateLogo() {
  const HeadContent = document.createElement("div");
  HeadContent.id = "head-content";
  $("container").insertBefore(HeadContent, $("main-page"));

  const LogoContainer = document.createElement("a");
  LogoContainer.id = "logo";
  HeadContent.append(LogoContainer);

  const ObjectContainer = document.createElement("div");
  ObjectContainer.id = "logo-object-container";
  LogoContainer.append(ObjectContainer);

  const Logo = document.createElement("object");
  Logo.type = "text/html";
  Logo.data = "../logo.html";
  if (index[0] === 0) Logo.data = "logo.html";
  ObjectContainer.append(Logo);

  const H1 = document.createElement("h1");
  H1.innerHTML = "Gymnasium Dresden-Cotta";
  LogoContainer.append(H1);
}

function CreateTopNav() {
  const HeadContent = $("head-content");
  const Nav = document.createElement("nav");
  Nav.id = "top-nav";
  HeadContent.append(Nav);

  let i = 0;
  for (const page of data.topNav) {
    const A = document.createElement("a");
    A.href = "../" + page.href;
    if (index[0] === 0) A.href = page.href;
    A.innerHTML = page.title;
    if (index[1] == "main" && index[0] == i) A.classList.add("current");
    Nav.append(A);
    i++;
  }
}

function CreateSideNav() {
  const Page = $("main-page");
  const Nav = document.createElement("nav");
  Nav.id = "side-nav";
  Page.insertBefore(Nav, $("main-container"));

  let i = 0;
  for (const page of data.sideNav[index[0]]) {
    const A = document.createElement("a");
    A.href = page.href;
    if (index[0] !== 0) A.href = page.href.split("/")[1];
    A.innerHTML = page.title;
    if (index[1] == i) A.classList.add("current");
    Nav.append(A);
    i++;
  }
}

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (query) => document.querySelectorAll(query);

function GalleryImageSize() {
  const galleries = $$$(".gallery");
  
  galleries.forEach((g, i) => {
    const n = $$$(`.gallery:nth-of-type(${i+1}) > *`).length;
    g.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`;
  });
}

Init();
GalleryImageSize();
