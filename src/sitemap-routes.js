import React from 'react';
import { Route } from 'react-router';

//Hacer (copy OBJECT en la consola del FIREFOX) Paste en las variables.
//Cambiar si hace falta abajo "/פרוייקטים/"
//npm run sitemap

let pages = 
    [
        {
          "id": "3",
          "status": "0",
          "title": "עמוד הבית",
          "seo": {
            "friendly": "עמוד_הבית",
            "description": "אביסרור בונים מאהבה",
            "method": "index",
            "canonical": "https://avisror.ak-digital.co.il/welcome/index",
            "controller": "welcome"
          }
        },
        {
          "id": "7",
          "status": "0",
          "title": "שגיאה 404 דף לא נמצא",
          "seo": {
            "friendly": "שגיאה_404_דף_לא_נמצא",
            "description": null,
            "method": "error404",
            "canonical": "",
            "controller": "welcome"
          }
        },
        {
          "id": "9",
          "status": "0",
          "title": "הצהרת נגישות",
          "seo": {
            "friendly": "הצהרת_נגישות",
            "description": null,
            "method": "accessibility",
            "canonical": "",
            "controller": "welcome"
          }
        },
        {
          "id": "16",
          "status": "0",
          "title": "צור קשר",
          "seo": {
            "friendly": "צור_קשר",
            "description": null,
            "method": "contact",
            "canonical": "https://avisror.ak-digital.co.il/welcome/contact",
            "controller": "welcome"
          }
        },
        {
          "id": "21",
          "status": "0",
          "title": "תקנון",
          "seo": {
            "friendly": "תקנון",
            "description": null,
            "method": "takanon",
            "canonical": "https://dalhom.ak-digital.co.il/welcome/takanon",
            "controller": "welcome"
          }
        },
        {
          "id": "23",
          "status": "0",
          "title": "פרויקטים",
          "seo": {
            "friendly": "פרויקטים",
            "description": "אלה הפרויקטים שלנו",
            "method": "projects",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects",
            "controller": "welcome"
          }
        },
        {
          "id": "24",
          "status": "0",
          "title": "שגיאה",
          "seo": {
            "friendly": "שגיאה",
            "description": null,
            "method": "error404Page",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/error404Page",
            "controller": "welcome"
          }
        },
        {
          "id": "25",
          "status": "0",
          "title": "אביסרור סנטר",
          "seo": {
            "friendly": "אביסרור_סנטר",
            "description": null,
            "method": "center",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/center",
            "controller": "welcome"
          }
        },
        {
          "id": "26",
          "status": "0",
          "title": "כתבו עלינו",
          "seo": {
            "friendly": "כתבו_עלינו",
            "description": null,
            "method": "articles",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/articles",
            "controller": "welcome"
          }
        },
        {
          "id": "27",
          "status": "0",
          "title": "אודות",
          "seo": {
            "friendly": "אודות",
            "description": null,
            "method": "about",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/about",
            "controller": "welcome"
          }
        },
        {
          "id": "28",
          "status": "0",
          "title": "דרושים",
          "seo": {
            "friendly": "דרושים",
            "description": null,
            "method": "jobs",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/jobs",
            "controller": "welcome"
          }
        },
        {
          "id": "29",
          "status": "0",
          "title": "מחשבון משכנתא",
          "seo": {
            "friendly": "מחשבון_משכנתא",
            "description": null,
            "method": "calc",
            "canonical": "https://avisror.ak-digital.co.il/appi/welcome/calc",
            "controller": "welcome"
          }
        }
      ];


let ProjetsLow = [
    {
      "data": {
        "id": "30",
        "name": "אביסרור על המים",
        "statusProj": "פרויקטים בשיווק",
        "city": "אשקלון",
        "smallPic": "5dd11b85e2f2d.jpg"
      },
      "seo": {
        "friendly": "אביסרור_על_המים_30",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/30",
        "controller": false
      }
    },
    {
      "data": {
        "id": "5",
        "name": "מגדלי אביסרור",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dcd49e20db5d.jpg"
      },
      "seo": {
        "friendly": "מגדלי_אביסרור_5",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/5",
        "controller": false
      }
    },
    {
      "data": {
        "id": "25",
        "name": "אביסרור בנווה נוי",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dc41761276b7.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בנווה_נוי_25",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/25",
        "controller": false
      }
    },
    {
      "data": {
        "id": "27",
        "name": "צמרת אביסרור בנווה זאב",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dc41a47267fe.jpg"
      },
      "seo": {
        "friendly": "צמרת_אביסרור_בנווה_זאב_27",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/27",
        "controller": false
      }
    },
    {
      "data": {
        "id": "28",
        "name": "גרנד אביסרור טוביהו",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dc41cae03871.jpg"
      },
      "seo": {
        "friendly": "גרנד_אביסרור_טוביהו_28",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/28",
        "controller": false
      }
    },
    {
      "data": {
        "id": "32",
        "name": "אביסרור בנאות הדרים",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dc421a8acf2e.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בנאות_הדרים_32",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/32",
        "controller": false
      }
    },
    {
      "data": {
        "id": "34",
        "name": "אביסרור בפארק",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dc4238c736ef.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בפארק_34",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/34",
        "controller": false
      }
    },
    {
      "data": {
        "id": "44",
        "name": "אביסרור למשתכן בבאר שבע",
        "statusProj": "פרויקטים בשיווק",
        "city": "באר שבע",
        "smallPic": "5dc7d9ad9c544.jpg"
      },
      "seo": {
        "friendly": "אביסרור_למשתכן_בבאר_שבע_44",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/44",
        "controller": false
      }
    },
    {
      "data": {
        "id": "33",
        "name": "אביסרור על הפארק",
        "statusProj": "פרויקטים בשיווק",
        "city": "יבנה",
        "smallPic": "5dc42298cee54.jpg"
      },
      "seo": {
        "friendly": "אביסרור_על_הפארק_33",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/33",
        "controller": false
      }
    },
    {
      "data": {
        "id": "17",
        "name": "אביסרור במערב רחובות",
        "statusProj": "פרויקטים בשיווק",
        "city": "רחובות",
        "smallPic": "5dc3ff66bb658.jpg"
      },
      "seo": {
        "friendly": "אביסרור_במערב_רחובות_17",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/17",
        "controller": false
      }
    },
    {
      "data": {
        "id": "31",
        "name": "אביסרור מגדלי המדע 2",
        "statusProj": "פרויקטים בשיווק",
        "city": "רחובות",
        "smallPic": "5dc420cd039ec.jpg"
      },
      "seo": {
        "friendly": "אביסרור_מגדלי_המדע_2_31",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/31",
        "controller": false
      }
    },
    {
      "data": {
        "id": "41",
        "name": "תאומי אביסרור 2",
        "statusProj": "פרויקטים עתידים",
        "city": "אשדוד",
        "smallPic": "5dc7d0cbc9512.jpg"
      },
      "seo": {
        "friendly": "תאומי_אביסרור_2_41",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/41",
        "controller": false
      }
    },
    {
      "data": {
        "id": "40",
        "name": "אביסרור באשקלון",
        "statusProj": "פרויקטים עתידים",
        "city": "אשקלון",
        "smallPic": "5dc7d3ed38cc6.jpg"
      },
      "seo": {
        "friendly": "אביסרור_באשקלון_40",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/40",
        "controller": false
      }
    },
    {
      "data": {
        "id": "43",
        "name": "אביסרור למשתכן באשקלון",
        "statusProj": "פרויקטים עתידים",
        "city": "אשקלון",
        "smallPic": "5dc7d6335d5e9.jpg"
      },
      "seo": {
        "friendly": "אביסרור_למשתכן_באשקלון_43",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/43",
        "controller": false
      }
    },
    {
      "data": {
        "id": "38",
        "name": "אביסרור בבני ברק",
        "statusProj": "פרויקטים עתידים",
        "city": "בני ברק",
        "smallPic": "5dc7ce45ed774.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בבני_ברק_38",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/38",
        "controller": false
      }
    },
    {
      "data": {
        "id": "35",
        "name": "אביסרור בבת ים",
        "statusProj": "פרויקטים עתידים",
        "city": "בת ים",
        "smallPic": "5dc7c24c7142d.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בבת_ים_35",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/35",
        "controller": false
      }
    },
    {
      "data": {
        "id": "42",
        "name": "אביסרור בירושלים",
        "statusProj": "פרויקטים עתידים",
        "city": "ירושלים",
        "smallPic": "5dc7d2287a468.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בירושלים_42",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/42",
        "controller": false
      }
    },
    {
      "data": {
        "id": "39",
        "name": "אביסרור במודיעין",
        "statusProj": "פרויקטים עתידים",
        "city": "מודיעין",
        "smallPic": "5dc7cebd14a7b.jpg"
      },
      "seo": {
        "friendly": "אביסרור_במודיעין_39",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/39",
        "controller": false
      }
    },
    {
      "data": {
        "id": "36",
        "name": "אביסרור בפתח תקווה",
        "statusProj": "פרויקטים עתידים",
        "city": "פתח תקווה",
        "smallPic": "5dc7c3c5dd27e.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בפתח_תקווה_36",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/36",
        "controller": false
      }
    },
    {
      "data": {
        "id": "37",
        "name": "אביסרור בנרקיסים",
        "statusProj": "פרויקטים עתידים",
        "city": "ראשון לציון",
        "smallPic": "5dc7cd339e2fc.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בנרקיסים_37",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/37",
        "controller": false
      }
    },
    {
      "data": {
        "id": "45",
        "name": "אביסרור למשתכן בראשון לציון",
        "statusProj": "פרויקטים עתידים",
        "city": "ראשון לציון",
        "smallPic": "5dc7db47957a5.jpg"
      },
      "seo": {
        "friendly": "אביסרור_למשתכן_בראשון_לציון_45",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/45",
        "controller": false
      }
    },
    {
      "data": {
        "id": "18",
        "name": "תאומי אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "אשדוד",
        "smallPic": "5dc401503b1d5.jpg"
      },
      "seo": {
        "friendly": "תאומי_אביסרור_18",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/18",
        "controller": false
      }
    },
    {
      "data": {
        "id": "12",
        "name": "אביסרור באגמים",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "אשקלון",
        "smallPic": "5dc3e69f9540d.jpg"
      },
      "seo": {
        "friendly": "אביסרור_באגמים_12",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/12",
        "controller": false
      }
    },
    {
      "data": {
        "id": "6",
        "name": "פנינת אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "באר שבע",
        "smallPic": "5dc14998a4121.jpg"
      },
      "seo": {
        "friendly": "פנינת_אביסרור_6",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/6",
        "controller": false
      }
    },
    {
      "data": {
        "id": "7",
        "name": "נופי אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "באר שבע",
        "smallPic": "5dc14d0daf243.jpg"
      },
      "seo": {
        "friendly": "נופי_אביסרור_7",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/7",
        "controller": false
      }
    },
    {
      "data": {
        "id": "8",
        "name": "מדורגי אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "באר שבע",
        "smallPic": "5dc14e35cd9cd.jpg"
      },
      "seo": {
        "friendly": "מדורגי_אביסרור_8",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/8",
        "controller": false
      }
    },
    {
      "data": {
        "id": "9",
        "name": "רמת אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "באר שבע",
        "smallPic": "5dc3df473cfbe.jpg"
      },
      "seo": {
        "friendly": "רמת_אביסרור_9",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/9",
        "controller": false
      }
    },
    {
      "data": {
        "id": "29",
        "name": "נופי אביסרור 2",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "באר שבע",
        "smallPic": "5dc41e3f0af50.jpg"
      },
      "seo": {
        "friendly": "נופי_אביסרור_2_29",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/29",
        "controller": false
      }
    },
    {
      "data": {
        "id": "20",
        "name": "אביסרור באזורי גדרה",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "גדרה",
        "smallPic": "5dc404e1d076b.jpg"
      },
      "seo": {
        "friendly": "אביסרור_באזורי_גדרה_20",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/20",
        "controller": false
      }
    },
    {
      "data": {
        "id": "21",
        "name": "אביסרור בגדרה",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "גדרה",
        "smallPic": "5dc408f571a52.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בגדרה_21",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/21",
        "controller": false
      }
    },
    {
      "data": {
        "id": "22",
        "name": "דה סנטר - גדרה",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "גדרה",
        "smallPic": "5dc4104510264.jpg"
      },
      "seo": {
        "friendly": "דה_סנטר_גדרה_22",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/22",
        "controller": false
      }
    },
    {
      "data": {
        "id": "16",
        "name": "צמרת אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "יבנה",
        "smallPic": "5dc3fda102cfb.jpg"
      },
      "seo": {
        "friendly": "צמרת_אביסרור_16",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/16",
        "controller": false
      }
    },
    {
      "data": {
        "id": "26",
        "name": "תאומי אביסרור ביבנה",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "יבנה",
        "smallPic": "5dc418cdea5d2.jpg"
      },
      "seo": {
        "friendly": "תאומי_אביסרור_ביבנה_26",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/26",
        "controller": false
      }
    },
    {
      "data": {
        "id": "14",
        "name": "מרומי אביסרור",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "ירושלים",
        "smallPic": "5dc3ee54e4b5c.jpg"
      },
      "seo": {
        "friendly": "מרומי_אביסרור_14",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/14",
        "controller": false
      }
    },
    {
      "data": {
        "id": "15",
        "name": "אביסרור בפארק ירושלים",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "ירושלים",
        "smallPic": "5dc3f2b95454d.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בפארק_ירושלים_15",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/15",
        "controller": false
      }
    },
    {
      "data": {
        "id": "23",
        "name": "ג'רוזלם פארק תלפיות",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "ירושלים",
        "smallPic": "5dc413cf9db6b.jpg"
      },
      "seo": {
        "friendly": "גרוזלם_פארק_תלפיות_23",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/23",
        "controller": false
      }
    },
    {
      "data": {
        "id": "13",
        "name": "אביסרור בבוכמן",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "מודיעין",
        "smallPic": "5dc3ecca6abe0.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בבוכמן_13",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/13",
        "controller": false
      }
    },
    {
      "data": {
        "id": "24",
        "name": "אביסרור בציפור 2",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "מודיעין",
        "smallPic": "5dc41554bf648.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בציפור_2_24",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/24",
        "controller": false
      }
    },
    {
      "data": {
        "id": "19",
        "name": "אביסרור בראש העין",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "ראש העין",
        "smallPic": "5dc4039ebe153.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בראש_העין_19",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/19",
        "controller": false
      }
    },
    {
      "data": {
        "id": "10",
        "name": "אביסרור מגדלי המדע",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "רחובות",
        "smallPic": "5dc3e23e77cc1.jpg"
      },
      "seo": {
        "friendly": "אביסרור_מגדלי_המדע_10",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/10",
        "controller": false
      }
    },
    {
      "data": {
        "id": "11",
        "name": "אביסרור בשוהם",
        "statusProj": "פרויקטים שאוכלסו",
        "city": "שוהם",
        "smallPic": "5dc3e56f59583.jpg"
      },
      "seo": {
        "friendly": "אביסרור_בשוהם_11",
        "method": "projects",
        "canonical": "https://avisror.ak-digital.co.il/appi/welcome/projects/11",
        "controller": false
      }
    }
  ]


export default (
    <Route>
	<Route path='/' />

    {pages.map(pageData => (
          <Route key={pageData.id} exact path={'/' + pageData.seo.friendly}/> )
    )}

    {ProjetsLow.map(projectsData => (
                  
        <Route 
            key={'proj' + projectsData.data.id } exact path={'/פרויקטים/' + projectsData.seo.friendly }
        />  
        )
    )}

	
    </Route>
);