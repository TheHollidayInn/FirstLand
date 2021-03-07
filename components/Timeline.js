import React from "react"
import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
      {
        "title": 1823,
        "cardTitle": "Johnson v. M’Intosh",
        "cardSubtitle": "Johnson v. M'Intosh, 21 U.S. (8 Wheat.) 543 (1823)",
        "cardDetailedText": "Some informations",
        "Link": "https://www.oyez.org/cases/1789-1850/21us543"
      },
      {
        "title": 1831,
        "cardTitle": "Cherokee Nation v. Georgia",
        "cardSubtitle": "Cherokee Nation v. Georgia, 30 U.S. (5 Pet.) 1\n(1831)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/30/1/"
      },
      {
        "title": 1832,
        "cardTitle": "Worcester v. Georgia",
        "cardSubtitle": "Worcester v. Georgia, 31 U.S. 515 (1832)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/31/515/"
      },
      {
        "title": 1883,
        "cardTitle": "Ex Parte Crow Dog",
        "cardSubtitle": "Ex Parte Crow Dog, 109 U.S. 556 (1883)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/109/556/"
      },
      {
        "title": 1886,
        "cardTitle": "United States v. Kagama,",
        "cardSubtitle": "United States v. Kagama, 118 U.S. 375 (1886)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/118/375/"
      },
      {
        "title": 1896,
        "cardTitle": "Talton v. Mayes",
        "cardSubtitle": "Talton v. Mayes, 163 U.S. 376 (1896)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/163/376/"
      },
      {
        "title": 1903,
        "cardTitle": "Lone Wolf v. Hitchcock",
        "cardSubtitle": "Lone Wolf v. Hitchcock, 187 U.S. 553 (1903)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/187/553/"
      },
      {
        "title": 1913,
        "cardTitle": "United States v. Sandoval",
        "cardSubtitle": "United States v. Sandoval, 231 U.S. 28 (1913)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/231/28/"
      },
      {
        "title": 1942,
        "cardTitle": "Seminole Nation v. United States",
        "cardSubtitle": "Seminole Nation v. United States, 316 U.S. 310 (1942)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/316/310/"
      },
      {
        "title": 1959,
        "cardTitle": "Williams v. Lee",
        "cardSubtitle": "Williams v. Lee, 358 U.S. 217 (1959)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/358/217/"
      },
      {
        "title": 1976,
        "cardTitle": "Bryan v. Itasca County",
        "cardSubtitle": "Bryan v. Itasca County, 426 U.S. 373 (1976)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/426/373/"
      },
      {
        "title": 1978,
        "cardTitle": "Oliphant v. Suquamish Indian Tribe",
        "cardSubtitle": "Oliphant v. Suquamish Indian Tribe, 435 U.S. 191 (1978)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/435/191/"
      },
      {
        "title": 1978,
        "cardTitle": "United States v. Wheeler",
        "cardSubtitle": "United States v. Wheeler, 435 U.S. 313 (1978)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/435/313/"
      },
      {
        "title": 1978,
        "cardTitle": "Santa Clara Pueblo v Martinez",
        "cardSubtitle": "Santa Clara Pueblo v. Martinez, 436 U.S. 49 (1978)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/436/49/"
      },
      {
        "title": 1980,
        "cardTitle": "Washington v. Confederated Tribes",
        "cardSubtitle": "Washington v. Confederated Tribes, 447 U.S. 134 (1980)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/447/134/"
      },
      {
        "title": 1981,
        "cardTitle": "Montana v United States",
        "cardSubtitle": "Montana v. United States, 450 U.S. 544 (1981)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/450/544/"
      },
      {
        "title": 1982,
        "cardTitle": "Merrion v. Jicarilla Apache Tribe",
        "cardSubtitle": "Merrion v. Jicarilla Apache Tribe, 455 U.S. 130 (1982)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/455/130/"
      },
      {
        "title": 1984,
        "cardTitle": "Solem v. Bartlett",
        "cardSubtitle": "Solem v. Bartlett, 465 U.S. 463 (1984)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/465/463/"
      },
      {
        "title": 1985,
        "cardTitle": "Nat'l Farmers Union Ins. v. Crow Tribe",
        "cardSubtitle": "Nat'l Farmers Union Ins. v. Crow Tribe, 468 U.S. 1315 (1984)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/468/1315/"
      },
      {
        "title": 1985,
        "cardTitle": "Montana v. Blackfeet Tribe",
        "cardSubtitle": "Montana v. Blackfeet Tribe, 471 U.S. 759 (1985)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/471/759/"
      },
      {
        "title": 1985,
        "cardTitle": "Lyng v. Northwest Indian Cemetery",
        "cardSubtitle": "Lyng v. Northwest Indian Cemetery, 485 U.S. 439 (1988)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/485/439/"
      },
      {
        "title": 1987,
        "cardTitle": "California v. Cabazon Band of Indians",
        "cardSubtitle": "California v. Cabazon Band of Indians, 480 U.S. 202 (1987)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/480/202/"
      },
      {
        "title": 1989,
        "cardTitle": "Brendale v. Confederated Tribes and Bands of Yakima",
        "cardSubtitle": "Brendale v. Confederated Tribes, 492 U.S. 408 (1989)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/492/408/"
      },
      {
        "title": 1989,
        "cardTitle": "Mississippi Choctaw Indians v. Holyfield",
        "cardSubtitle": "Mississippi Choctaw Indians v. Holyfield, 490 U.S. 30 (1989)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/490/30/"
      },
      {
        "title": 1990,
        "cardTitle": "Duro v. Reina",
        "cardSubtitle": "Duro v. Reina, 495 U.S. 676 (1990)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/495/676/"
      },
      {
        "title": 1990,
        "cardTitle": "Employment Div. v. Smith",
        "cardSubtitle": "Employment Div. v. Smith, 494 U.S. 872 (1990)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/494/872/"
      },
      {
        "title": 1997,
        "cardTitle": "Strate v. A-1 Contractors",
        "cardSubtitle": "Strate v. A-1 Contractors, 520 U.S. 438 (1997)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/520/438/"
      },
      {
        "title": 2001,
        "cardTitle": "Nevada v. Hicks",
        "cardSubtitle": "Nevada v. Hicks, 533 U.S. 353 (2001)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/533/353/"
      },
      {
        "title": 2004,
        "cardTitle": "United States v. Lara",
        "cardSubtitle": "United States v. Lara, 541 U.S. 193 (2004)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/541/193/"
      },
      {
        "title": 2005,
        "cardTitle": "Wagnon v. Prairie Band Potawatomi Nation",
        "cardSubtitle": "Wagnon v. Prairie Band Potawatomi Nation, 546 U.S. 95 (2005)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/546/95/"
      },
      {
        "title": 2008,
        "cardTitle": "Plains Commerce Bank v. Long Family Land & Cattle Co.",
        "cardSubtitle": "Plains Commerce Bank v. Long Family Land & Cattle Co., 554 U.S. 316 (2008)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/554/316/"
      },
      {
        "title": 2009,
        "cardTitle": "Carcieri v Salazar",
        "cardSubtitle": "Carcieri v. Salazar, 555 U.S. 379 (2009)",
        "cardDetailedText": "",
        "Link": "https://supreme.justia.com/cases/federal/us/555/379/"
      },
    
    // {
    //   title: "May 1940",
    //   cardTitle: "Dunkirk",
    //   cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    //   cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url: "http://someurl/image.jpg"
    //     }
    //   }
    // },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono 
        items={items}
        mode="VERTICAL_ALTERNATING"
        theme={{primary: "#737661", secondary: "#DAD1C1", cardBgColor: "#fff", cardForeColor: "#737661" }}
      />
    </div>
  )
}

export default TimeLine