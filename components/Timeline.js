import React from "react"
import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
      {
        "title": 1823,
        "cardTitle": "Johnson v. M’Intosh",
        "cardSubtitle": "Johnson v. M'Intosh, 21 U.S. (8 Wheat.) 543 (1823)",
        "cardDetailedText": "Johnson v. M'Intosh, 21 U.S. 543, is a landmark decision of the U.S. Supreme Court that held that private citizens could not purchase lands from Native Americans.",
        "Link": "https://i.ytimg.com/vi/iIUa0yDFQ20/hqdefault.jpg",
        media: {
          type: "IMAGE",
          source: {
            url: "https://embed-ssl.wistia.com/deliveries/3e5ba86bec7bdfded1f5f7029c088c8f44933557.jpg?image_play_button=true&image_resize=750",
          }
        }
      },
      {
        "title": 1831,
        "cardTitle": "Cherokee Nation v. Georgia",
        "cardSubtitle": "Cherokee Nation v. Georgia, 30 U.S. (5 Pet.) 1\n(1831)",
        "cardDetailedText": "Cherokee Nations v. Georgia, 30 U.S. (5 Pet.) 1 (1831), was a United States Supreme Court case. The Cherokee Nation sought a federal injunction against laws passed by the U.S. state of Georgia depriving them of rights within its boundaries, but the Supreme Court did not hear the case on its merits.",
        "Link": "https://supreme.justia.com/cases/federal/us/30/1/",
        media: {
          source: {
            url: "https://images.bwbcovers.com/089/Cherokee-Nation-V-Georgia-9780894908569.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1832,
        "cardTitle": "Worcester v. Georgia",
        "cardSubtitle": "Worcester v. Georgia, 31 U.S. 515 (1832)",
        "cardDetailedText": "Worcester v. Georgia, 31 U.S. 515, was a landmark case in which the United States Supreme Court vacated the conviction of Samuel Worcester and held that the Georgia criminal statute that prohibited non-Native Americans from being present on Native American lands without a license from the state was unconstitutional.",
        "Link": "https://supreme.justia.com/cases/federal/us/31/515/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1883,
        "cardTitle": "Ex Parte Crow Dog",
        "cardSubtitle": "Ex Parte Crow Dog, 109 U.S. 556 (1883)",
        "cardDetailedText": "Ex parte Crow Dog, 109 U.S. 556 (1883), is a landmark decision of the Supreme Court of the United States that followed the death of one member of a Native American tribe at the hands of another on reservation land. Crow Dog was a member of the Brulé band of the Lakota Sioux.",
        "Link": "https://supreme.justia.com/cases/federal/us/109/556/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/CrowDog%26Horse1898.jpg/200px-CrowDog%26Horse1898.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1886,
        "cardTitle": "United States v. Kagama",
        "cardSubtitle": "United States v. Kagama, 118 U.S. 375 (1886)",
        "cardDetailedText": "United States v. Kagama, 118 U.S. 375 (1886), was a United States Supreme Court case that upheld the constitutionality of the Major Crimes Act of 1885. This Congressional act gave the federal courts jurisdiction in certain cases of Indian-on-Indian crimes, even if the crimes were committed on an Indian reservation.",
        "Link": "https://supreme.justia.com/cases/federal/us/118/375/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Crow-dog-by-schleier.jpg/150px-Crow-dog-by-schleier.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1896,
        "cardTitle": "Talton v. Mayes",
        "cardSubtitle": "Talton v. Mayes, 163 U.S. 376 (1896)",
        "cardDetailedText": "Talton v. Mayes, 163 U.S. 376 (1896), was a United States Supreme Court case, in which the court decided that the individual rights protections, which limit federal, and later, state governments, do not apply to tribal government. It reaffirmed earlier decisions, such as the 1831 Cherokee Nation v.",
        "Link": "https://supreme.justia.com/cases/federal/us/163/376/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Supreme_Court_of_the_United_States.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1903,
        "cardTitle": "Lone Wolf v. Hitchcock",
        "cardSubtitle": "Lone Wolf v. Hitchcock, 187 U.S. 553 (1903)",
        "cardDetailedText": "Lone Wolf v. Hitchcock, 187 U.S. 553 (1903), was a United States Supreme Court case brought against the US government by the Kiowa chief Lone Wolf, who charged that Native American tribes under the Medicine Lodge Treaty had been defrauded of land by Congressional actions in violation of the treaty.",
        "Link": "https://supreme.justia.com/cases/federal/us/187/553/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Lone_Wolf._Kiowas_-_NARA_-_519060.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1913,
        "cardTitle": "United States v. Sandoval",
        "cardSubtitle": "United States v. Sandoval, 231 U.S. 28 (1913)",
        "cardDetailedText": "United States v. Sandoval, 231 U.S. 28 (1913), was a United States Supreme Court case deciding whether the federal government's law prohibiting liquor on the land of Santa Clara Pueblo impermissibly infringed on the State of New Mexico's police power under the equal footing doctrine.",
        "Link": "https://supreme.justia.com/cases/federal/us/231/28/",
        media: {
          source: {
            url: "https://en.wikipedia.org/wiki/File:Holm_Bursum.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1942,
        "cardTitle": "Seminole Nation v. United States",
        "cardSubtitle": "Seminole Nation v. United States, 316 U.S. 310 (1942)",
        "cardDetailedText": "This suit to adjudicate certain claims of the Seminole Nation against the United States growing out of various treaties, agreements, and acts of Congress is now before us for the second time.",
        "Link": "https://supreme.justia.com/cases/federal/us/316/310/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1959,
        "cardTitle": "Williams v. Lee",
        "cardSubtitle": "Williams v. Lee, 358 U.S. 217 (1959)",
        "cardDetailedText": "Williams v. Lee, 358 U.S. 217 (1959), was a landmark case in which the Supreme Court of the United States held that the State of Arizona does not have jurisdiction to try a civil case between a non-Indian doing business on a reservation with tribal members who reside on the reservation, the proper forum for such cases being the tribal court.",
        "Link": "https://supreme.justia.com/cases/federal/us/358/217/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Members_Of_The_Alamo_Navajo_Reservation.jpg/230px-Members_Of_The_Alamo_Navajo_Reservation.jpg"
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1976,
        "cardTitle": "Bryan v. Itasca County",
        "cardSubtitle": "Bryan v. Itasca County, 426 U.S. 373 (1976)",
        "cardDetailedText": "Bryan v. Itasca County, 426 U.S. 373 (1976), was a case in which the Supreme Court of the United States held that a state did not have the right to assess a tax on the property of a Native American (Indian) living on tribal land absent a specific Congressional grant of authority to do so.",
        "Link": "https://supreme.justia.com/cases/federal/us/426/373/",
        media: {
          source: {
            url: "https://en.wikipedia.org/wiki/File:US_Supreme_Court_Justice_William_Brennan_-_1976_official_portrait.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1978,
        "cardTitle": "Oliphant v. Suquamish Indian Tribe",
        "cardSubtitle": "Oliphant v. Suquamish Indian Tribe, 435 U.S. 191 (1978)",
        "cardDetailedText": "Oliphant v. Suquamish Indian Tribe, 435 U.S. 191 (1978), is a United States Supreme Court case deciding that Indian tribal courts have no criminal jurisdiction over non-Indians. The case was decided on March 6, 1978 with a 6-2 majority.",
        "Link": "https://supreme.justia.com/cases/federal/us/435/191/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thurgood-marshall-2.jpg/220px-Thurgood-marshall-2.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1978,
        "cardTitle": "United States v. Wheeler",
        "cardSubtitle": "United States v. Wheeler, 435 U.S. 313 (1978)",
        "cardDetailedText": "United States v. Wheeler, 435 U.S. 313 (1978), was a United States Supreme Court case in which the Court held the Double Jeopardy Clause does not bar the federal prosecution of a Native American (Indian) who has already been prosecuted by the tribe.",
        "Link": "https://supreme.justia.com/cases/federal/us/435/313/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1978,
        "cardTitle": "Santa Clara Pueblo v Martinez",
        "cardSubtitle": "Santa Clara Pueblo v. Martinez, 436 U.S. 49 (1978)",
        "cardDetailedText": "Santa Clara Pueblo v. Martinez, 436 U.S. 49 (1978), was a landmark case in the area of federal Indian law involving issues of great importance to the meaning of tribal sovereignty in the contemporary United States. The Supreme Court sustained a law passed by the governing body of the Santa Clara Pueblo that explicitly discriminated on the basis of sex.",
        "Link": "https://supreme.justia.com/cases/federal/us/436/49/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1980,
        "cardTitle": "Washington v. Confederated Tribes",
        "cardSubtitle": "Washington v. Confederated Tribes, 447 U.S. 134 (1980)",
        "cardDetailedText": "Washington v. Confederated Bands and Tribes of the Yakima Indian Nation, 439 U.S. 463 (1979), was a case in which the Supreme Court of the United States held that the State of Washington's imposition of partial jurisdiction over certain actions on an Indian reservation, when not requested by the tribe, was valid under Public Law 280.",
        "Link": "https://supreme.justia.com/cases/federal/us/447/134/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Yakima_Indian_Reservation_map.png/200px-Yakima_Indian_Reservation_map.png",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1981,
        "cardTitle": "Montana v United States",
        "cardSubtitle": "Montana v. United States, 450 U.S. 544 (1981)",
        "cardDetailedText": "United States, 450 U.S. 544 (1981), was a Supreme Court case that addressed two issues: (1) Whether the title of the Big Horn Riverbed rested with the United States, in trust for the Crow Nation or passed to the State of Montana upon becoming a state and (2) Whether Crow Nation retained the power to regulate hunting and fishing on tribal lands owned in fee-simple by a non-tribal member.",
        "Link": "https://supreme.justia.com/cases/federal/us/450/544/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1982,
        "cardTitle": "Merrion v. Jicarilla Apache Tribe",
        "cardSubtitle": "Merrion v. Jicarilla Apache Tribe, 455 U.S. 130 (1982)",
        "cardDetailedText": "Merrion v. Jicarilla Apache Tribe, 455 U.S. 130 (1982), was a case in which the Supreme Court of the United States holding that an Indian tribe has the authority to impose taxes on non-Indians that are conducting business on the reservation as an inherent power under their tribal sovereignty.",
        "Link": "https://supreme.justia.com/cases/federal/us/455/130/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/52/Apachean_present.png",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1984,
        "cardTitle": "Solem v. Bartlett",
        "cardSubtitle": "Solem v. Bartlett, 465 U.S. 463 (1984)",
        "cardDetailedText": "Solem v. Bartlett, 465 U.S. 463 (1984), was a United States Supreme Court case involving Indian country jurisdiction in the United States that decided that opening up reservation lands for settlement by non-Indians does not constitute the intent to diminish reservation boundaries.",
        "Link": "https://supreme.justia.com/cases/federal/us/465/463/",
        media: {
          source: {
            url: "https://www.justice.gov/enrd/ENRD_Assets/Sitanka.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1985,
        "cardTitle": "Nat'l Farmers Union Ins. v. Crow Tribe",
        "cardSubtitle": "Nat'l Farmers Union Ins. v. Crow Tribe, 468 U.S. 1315 (1984)",
        "cardDetailedText": "https://supreme.justia.com/cases/federal/us/468/1315",
        "Link": "https://supreme.justia.com/cases/federal/us/468/1315/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1985,
        "cardTitle": "Montana v. Blackfeet Tribe",
        "cardSubtitle": "Montana v. Blackfeet Tribe, 471 U.S. 759 (1985)",
        "cardDetailedText": "Respondent Blackfeet Tribe filed this suit in the United States District Court for the District of Montana challenging the application of several Montana taxes 1 to the Tribe's royalty interests in oil and gas produced under leases issued by the Tribe.",
        "Link": "https://supreme.justia.com/cases/federal/us/471/759/",
        // media: {
        //   source: {
        //     url: "https://bloximages.chicago2.vip.townnews.com/sidneyherald.com/content/tncms/assets/v3/editorial/5/c5/5c543374-84e1-11e5-8e95-6ff09cffb603/563d3d3e8931c.image.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1985,
        "cardTitle": "Lyng v. Northwest Indian Cemetery",
        "cardSubtitle": "Lyng v. Northwest Indian Cemetery, 485 U.S. 439 (1988)",
        "cardDetailedText": "Lyng v. Northwest Indian Cemetery Protective Association, 485 U.S. 439 (1988), was a United States Supreme Court landmark case in which the Court ruled on the applicability of the Free Exercise Clause to the practice of religion on Native American sacred lands, specifically in the Chimney Rock area of the Six Rivers National Forest in California.",
        "Link": "https://supreme.justia.com/cases/federal/us/485/439/",
        media: {
          source: {
            url: "https://christianpodcastcentral.com/wp-content/uploads/2017/09/Lyng-v.-Northwest-Indian-Cemetery-Protective-Association-Newspaper.png",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1987,
        "cardTitle": "California v. Cabazon Band of Indians",
        "cardSubtitle": "California v. Cabazon Band of Indians, 480 U.S. 202 (1987)",
        "cardDetailedText": "California v. Cabazon Band of Mission Indians, 480 U.S. 202 (1987), was a United States Supreme Court case involving the development of Native American gaming. The Supreme Court's decision effectively overturned the existing laws restricting gaming/gambling on U.S. Indian reservations.",
        "Link": "https://supreme.justia.com/cases/federal/us/480/202/",
        media: {
          source: {
            url: "http://ecx.images-amazon.com/images/I/51g9ZJwDPnL._SY291_BO1,204,203,200_QL40_.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1989,
        "cardTitle": "Brendale v. Confederated Tribes and Bands of Yakima",
        "cardSubtitle": "Brendale v. Confederated Tribes, 492 U.S. 408 (1989)",
        "cardDetailedText": "Confederated Tribes and Bands of Yakima Indian Nation v. Whiteside, 828 F.2d 529, 531 (CA9 1987). 'The complaint in this case did not allege that non-Indian hunting and fishing on reservation lands has impaired' the tribe's hunting and fishing rights. Montana, 450 U.S. at 450 U. S. 558, n. 6.",
        "Link": "https://supreme.justia.com/cases/federal/us/492/408/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1989,
        "cardTitle": "Mississippi Choctaw Indians v. Holyfield",
        "cardSubtitle": "Mississippi Choctaw Indians v. Holyfield, 490 U.S. 30 (1989)",
        "cardDetailedText": "Mississippi Band of Choctaw Indians v. Holyfield, 490 U.S. 30 (1989), was a case in which the Supreme Court of the United States held that the Indian Child Welfare Act governed adoptions of Indian children.",
        "Link": "https://supreme.justia.com/cases/federal/us/490/30/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 1990,
        "cardTitle": "Duro v. Reina",
        "cardSubtitle": "Duro v. Reina, 495 U.S. 676 (1990)",
        "cardDetailedText": "Duro v. Reina, 495 U.S. 676 (1990), was a United States Supreme Court case in which the Court concluded that Indian tribes could not prosecute Indians who were members of other tribes for crimes committed by those nonmember Indians on their reservations. The decision was not well received by the tribes, because it defanged their criminal codes by depriving them of the power to enforce them ..",
        "Link": "https://supreme.justia.com/cases/federal/us/495/676/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Maricopa_County_Incorporated_and_Planning_areas_SRPMIC_highlighted.svg/220px-Maricopa_County_Incorporated_and_Planning_areas_SRPMIC_highlighted.svg.png",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1990,
        "cardTitle": "Employment Div. v. Smith",
        "cardSubtitle": "Employment Div. v. Smith, 494 U.S. 872 (1990)",
        "cardDetailedText": "Employment Division, Department of Human Resources of Oregon v. Smith, 494 U.S. 872 (1990), is a United States Supreme Court case that held that the state could deny unemployment benefits to a person fired for violating a state prohibition on the use of peyote, even though the use of the drug was part of a religious ritual.",
        "Link": "https://supreme.justia.com/cases/federal/us/494/872/",
        media: {
          source: {
            url: "https://www.aclu-or.org/sites/default/files/smith.jpg",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 1997,
        "cardTitle": "Strate v. A-1 Contractors",
        "cardSubtitle": "Strate v. A-1 Contractors, 520 U.S. 438 (1997)",
        "cardDetailedText": "Strate v. A-1 Contractors, 520 U.S. 438 (1997), is a United States Supreme Court case addressing Tribal courts ' adjudicatory authority over civil matters between nonmembers of the Tribe that take place on public highways in Indian Country.",
        "Link": "https://supreme.justia.com/cases/federal/us/520/438/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 2001,
        "cardTitle": "Nevada v. Hicks",
        "cardSubtitle": "Nevada v. Hicks, 533 U.S. 353 (2001)",
        "cardDetailedText": "Nevada v. Hicks, 533 U.S. 353 (2001), is a United States Supreme Court case regarding the jurisdiction of Tribal Courts when state officials are sued by tribal members in tribal court.",
        "Link": "https://supreme.justia.com/cases/federal/us/533/353/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 2004,
        "cardTitle": "United States v. Lara",
        "cardSubtitle": "United States v. Lara, 541 U.S. 193 (2004)",
        "cardDetailedText": "United States v. Lara, 541 U.S. 193 (2004), was a United States Supreme Court landmark case which held that both the United States and a Native American (Indian) tribe could prosecute an Indian for the same acts that constituted crimes in both jurisdictions.",
        "Link": "https://supreme.justia.com/cases/federal/us/541/193/",
        media: {
          source: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/SpiritLakeRes1892.png/1200px-SpiritLakeRes1892.png",
          },
          type: "IMAGE",
        },
      },
      {
        "title": 2005,
        "cardTitle": "Wagnon v. Prairie Band Potawatomi Nation",
        "cardSubtitle": "Wagnon v. Prairie Band Potawatomi Nation, 546 U.S. 95 (2005)",
        "cardDetailedText": "This report discusses the U.S. Supreme Court decison, in Wagnon v. Prairie Band Potawatomi Nation (No. 94-631), which upheld the application of a non-discriminatory Kansas motor fuels tax to gasoline sold by off-reservation distributors to Indian tribal retailers for on-reservation sales.",
        "Link": "https://supreme.justia.com/cases/federal/us/546/95/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 2008,
        "cardTitle": "Plains Commerce Bank v. Long Family Land & Cattle Co.",
        "cardSubtitle": "Plains Commerce Bank v. Long Family Land & Cattle Co., 554 U.S. 316 (2008)",
        "cardDetailedText": "Plains Commerce Bank v. Long Family Land and Cattle Co., Inc., 554 U.S. 316 (2008), is a decision by the Supreme Court of the United States holding that a tribal court had no jurisdiction to hear a case for discrimination against an Indian in the sale of non-Indian fee land located on a reservation.",
        "Link": "https://supreme.justia.com/cases/federal/us/554/316/",
        // media: {
        //   source: {
        //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Worcester.jpg/1200px-Worcester.jpg",
        //   },
        //   type: "IMAGE",
        // },
      },
      {
        "title": 2009,
        "cardTitle": "Carcieri v Salazar",
        "cardSubtitle": "Carcieri v. Salazar, 555 U.S. 379 (2009)",
        "cardDetailedText": "Carcieri v. Salazar, 555 U.S. 379 (2009), was a case in which the Supreme Court of the United States held that the federal government could not take land into trust that was acquired by the Narragansett Tribe in the late 20th century, as it was not federally recognized until 1983.",
        "Link": "https://supreme.justia.com/cases/federal/us/555/379/",
        media: {
          source: {
            url: "https://i.ytimg.com/vi/Xo9MxY-5Qi0/hqdefault.jpg",
          },
          type: "IMAGE",
        },
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