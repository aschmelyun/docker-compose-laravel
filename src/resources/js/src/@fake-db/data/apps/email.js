import mock from '@/@fake-db/mock'

/* eslint-disable global-require */
const data = {
  emails: [
    {
      id: 1,
      from: {
        email: 'tommys@mail.com',
        name: 'Tommy Sicilia',
        avatar: require('@/assets/images/avatars/1.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@mail.com',
        },
      ],
      subject: 'Theme Update',
      cc: [],
      bcc: [],
      message:
        '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
      attachments: [
        {
          fileName: 'log.txt',
          thumbnail: require('@/assets/images/icons/txt.png'),
          url: '',
          size: '5mb',
        },
        {
          fileName: 'performance.xls',
          thumbnail: require('@/assets/images/icons/xls.png'),
          url: '',
          size: '10mb',
        },
      ],
      isStarred: false,
      labels: ['private'],
      time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true,
    },
    {
      id: 2,
      from: {
        email: 'tressag@mail.com',
        name: 'Tressa Gass',
        avatar: require('@/assets/images/avatars/2.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@mail.com',
        },
      ],
      subject: 'Company Report',
      cc: ['vrushankbrahmshatriya@mail.com'],
      bcc: ['menka@mail.com'],
      message:
        ' <p>Hello John,</p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p>Regrads</p><p>Tressa Gass</p>',
      attachments: [],
      isStarred: true,
      labels: ['company', 'private'],
      time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true,
    },
    {
      id: 3,
      from: {
        email: 'hettiem@mail.com',
        name: 'Hettie Mcerlean',
        avatar: require('@/assets/images/avatars/3.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@mail.com',
        },
        {
          name: 'Pixinvent',
          email: 'hello@pixinvent.net',
        },
      ],
      subject: 'Order Delivered',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John,</p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p>Regrads</p><p>Hettie Mcerlean</p>',
      attachments: [],
      isStarred: false,
      labels: ['company'],
      time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: true,
    },
    {
      id: 4,
      from: {
        email: 'louettae@mail.com',
        name: 'Louetta Esses',
        avatar: require('@/assets/images/avatars/4.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@mail.com',
        },
      ],
      subject: 'Waterfall Model Update',
      cc: [],
      bcc: [],
      message:
        '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
      attachments: [
        {
          fileName: 'report.doc',
          thumbnail: require('@/assets/images/icons/doc.png'),
          url: '',
          size: '32mb',
        },
      ],
      isStarred: false,
      labels: ['important'],
      time: 'Mon Dec 11 2018 09:04:10 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true,
    },
    {
      id: 5,
      from: {
        email: 'bposvner0@zdnet.com',
        name: 'Bobbie Posvner',
        avatar: require('@/assets/images/avatars/11.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@dot.gov',
        },
      ],
      subject: 'Re-contextualized zero administration toolset',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John,</p><p>Epiboly henbill hemichorea composedness resequent hearthpenny racialization freeboard Reboulia Albuginaceae Violales Trisagion resinlike plumlet insalubrious Urocoptis Orthoceratidae ogmic plateaux reinsist preconsumption rattener venipuncture Rhadamanthine</p><p>perversely corpusculated theophoric uncemented weiring myolipoma gudesire dramatics trichomaphyte adventitious video polychaete glossorrhaphy bestially zoospore nonnotional sawbones unprejudiciable wali collaborative coppled shammish manless predisorder</p>',
      attachments: [],
      isStarred: true,
      labels: ['private'],
      time: 'Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: true,
    },
    {
      id: 6,
      from: {
        email: 'rgilder1@illinois.edu',
        name: 'Rebecca Gilder',
        avatar: require('@/assets/images/avatars/6.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@google.co.uk',
        },
      ],
      subject: 'Integrated bi-directional help-desk',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>irretraceably indestructibility sisi fiddle pyretic Gerbera vocable hoped Chartreux thinglet whister fetiferous Guhayna overloud yuca suggestibly atmiatrics serioludicrous prehaustorium androgenic betulin chiropterite sprittail atrochal</p><p>stopper acinaceous bandcutter unprostituted undependableness Saffarid parasympathetic dishonorer embryogeny overscrupulous deicidal Tapuya roupily devotee alfet sophiologic hydrobromide onlook preverb Dottore primitial frostlike overbig Monocyclica</p>',
      attachments: [],
      isStarred: false,
      labels: ['personal'],
      time: 'Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'trash',
      isRead: true,
    },
    {
      id: 7,
      from: {
        email: 'swilby2@yandex.ru',
        name: 'Shawn Wilby',
        avatar: require('@/assets/images/avatars/1.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@altervista.org',
        },
      ],
      subject: 'Devolved regional product',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>scalpellum unisometrical emend esotrope gether separatical passionwise cringe flawful annotinous jiboa thrombotic essoinment successional backrope oligohemia gitaligenin formulaic bradycinesia paralgesic eumycetic receptoral eyrie yearly</p><p>atomistical semischolastic clour discardment pseudelytron cheson path Bennet Herat pinchem Tho extravagantly shaking procidence flocker amidoketone gyric Moi petrolific clink immunization estrepement spalder poitrail</p>',
      attachments: [],
      isStarred: false,
      labels: ['company'],
      time: 'Fri Dec 14 2018 04:49:23 GMT+0000 (GMT)',
      replies: [],
      folder: 'draft',
      isRead: true,
    },
    {
      id: 8,
      from: {
        email: 'wmannering3@mozilla.org',
        name: 'Waldemar Mannering',
        avatar: require('@/assets/images/avatars/11.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@sciencedaily.com',
        },
      ],
      subject: 'Quality-focused methodical flexibility',
      cc: [],
      bcc: [],
      message:
        '<p>Hi John, </p><p>wartproof ketoheptose incomplicate hyomental organal supermaterial monogene sophister nizamate rightle multifilament phloroglucic overvehement boatloading derelictly probudgeting archantiquary unknighted pallograph Volcanalia Jacobitiana ethyl neth Jugatae</p><p>noumenalize irredential energeia phlebotomist galp dactylitis unparticipated solepiece demure metarhyolite toboggan unpleased perilaryngeal binoxalate rabbitry atomic duali dihexahedron Pseudogryphus boomboat obelisk undreaded unadmired podometer</p>',
      attachments: [],
      isStarred: false,
      labels: ['private'],
      time: 'Tue Dec 15 2018 11:02:28 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false,
    },
    {
      id: 9,
      from: {
        email: 'hfrostdyke4@scientificamerican.com',
        name: 'Heath Frostdyke',
        avatar: require('@/assets/images/avatars/9.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@weibo.com',
        },
      ],
      subject: 'Secured optimal algorithm',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>prefertility volumetrical subdivision Alpinist hypostomous foreyard lede knuckling Agade viking protometallic unsting palaeobiologist trierarchic bigheartedness Slartibartfast tabitude popadam idioplasm fabulous arsenite cingle backhandedness denizenship</p><p>argo trickish dependingly unhouseled aegeriid ophthalmophlebotomy crazy freedwoman unspinsterlike clinical epistemologically hermodactyl humbugger misogynist plunder Sabbathly tabule feckless cerite porringer benumb duograph propatagian pressman</p>',
      attachments: [],
      isStarred: true,
      labels: ['personal'],
      time: 'Tue Jan 01 2018 18:31:19 GMT+0000 (GMT)',
      replies: [],
      folder: 'trash',
      isRead: false,
    },
    {
      id: 10,
      from: {
        email: 'pjentzsch5@tamu.edu',
        name: 'Paulita Jentzsch',
        avatar: require('@/assets/images/avatars/7.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@skype.com',
        },
      ],
      subject: 'Profound user-facing frame',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>unstintedly septifarious prevalid implicative esere Kedarite Nekkar encampment Issedones Saururus Turkize Tshi misengrave lamnid benzamine rigidulous octonion hydrophilous coxalgic nasturtium epileptogenic biporose undenominationalism widu</p><p>melioration pager infiltrate plouky tribesmanship transudate heinous exhibitionistic klendusic lienocele tractate unemotioned castigate selenate appealable Palladianism chloracetate penna moellon detector halcyon amidofluorid damascene hollaite</p>',
      attachments: [
        {
          fileName: 'UtNulla.xls',
          thumbnail: require('@/assets/images/icons/xls.png'),
          url: '',
          size: '1mb',
        },
      ],
      isStarred: true,
      labels: ['important'],
      time: 'Tue Jan 03 2018 08:05:33 GMT+0000 (GMT)',
      replies: [],
      folder: 'draft',
      isRead: false,
    },
    {
      id: 11,
      from: {
        email: 'lminghetti6@yale.edu',
        name: 'Lowell Minghetti',
        avatar: require('@/assets/images/avatars/4.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@fda.gov',
        },
      ],
      subject: 'Reactive full-range encryption',
      cc: [],
      bcc: [],
      message:
        '<p>Hi John, </p><p>Jaime stadimeter reshearer adfix exaristate herby chrysomonad ostentous Abrahamic Marsipobranchii skil linguodental relaster restbalk enhorror glycerizine foremelt difficultness Ostreidae Euphues panduriform howler Finmark primordality</p><p>semicurvilinear skeet sociogenetic dicephalism ghalva ethnicon katagenesis tasklike triachenium abuser henbane strubbly streetway Ramaism besetting saccos enzymically wickiup inopulent poetship Miranda hemianesthesia sphericle oariopathy</p>',
      attachments: [
        {
          fileName: 'ElementumLigula.js',
          thumbnail: require('@/assets/images/icons/js.png'),
          url: '',
          size: '29mb',
        },
      ],
      isStarred: false,
      labels: ['company'],
      time: 'Tue Jan 03 2018 01:05:20 GMT+0000 (GMT)',
      replies: [],
      folder: 'trash',
      isRead: true,
    },
    {
      id: 12,
      from: {
        email: 'efinessy7@sbwire.com',
        name: 'Eugenie Finessy',
        avatar: require('@/assets/images/avatars/2.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@odnoklassniki.ru',
        },
      ],
      subject: 'Polarised holistic protocol',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>nonmotile generale punctated humanify escharine unlatch alrighty unshepherding standstill upcrane unilobular prefrontal primate fluviatic premundane tritocone compaternity dolina phonautographic cobby corse neurohypnotic cyrtopia wreathy</p><p>slanderousness Lemosi myxochondroma haemogram electrothermostat piperonyl spital reappeal pyopneumothorax Yunca eyoty forecourse extensive kickout germanization vigilant Criophoros muss aortostenosis Berchta phonophotoscopic precorrespondence rigidist castling</p>',
      attachments: [],
      isStarred: false,
      labels: ['personal'],
      time: 'Tue Jan 04 2018 21:26:54 GMT+0000 (GMT)',
      replies: [],
      folder: 'sent',
      isRead: true,
    },
    {
      id: 13,
      from: {
        email: 'tmckeurton8@163.com',
        name: 'Tadio McKeurton',
        avatar: require('@/assets/images/avatars/10.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@nifty.com',
        },
      ],
      subject: 'Down-sized transitional intranet',
      cc: [],
      bcc: [],
      message:
        '<p>Hey John, </p><p>calcimine gramineal nonfreezable interradial setula undertakable Abranchiata ultrasystematic spectroelectric Astarte Abraham bedsite enantiopathia exlex precoincident thiocarbamic mesenteriform daturism thioantimoniate tripudiate unsultry predynastic benzidino doxasticon</p><p>overstale confessory glossed jane smoodger modernization Dehkan progymnospermic gangliectomy volumenometry Paulinistically tippy Gelfomino hive preredemption coccygine horrendous unintrusted plainer interrelatedly tearer arrojadite incircumspectly yokemating</p>',
      attachments: [],
      isStarred: false,
      labels: ['important'],
      time: 'Tue Jan 05 2018 19:00:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'draft',
      isRead: true,
    },
    {
      id: 14,
      from: {
        email: 'ebegg9@wikia.com',
        name: 'Eb Begg',
        avatar: require('@/assets/images/avatars/12.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@51.la',
        },
      ],
      subject: 'Organized value-added model',
      cc: [],
      bcc: [],
      message:
        '<p>Hello Sir, </p><p>Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardation</p><p>allocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimical oligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie larigo sociometry align</p>',
      attachments: [],
      isStarred: false,
      labels: ['company'],
      time: 'Tue Jan 06 2018 23:12:13 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: true,
    },
    {
      id: 15,
      from: {
        email: 'mspata@sina.com.cn',
        name: 'Modestine Spat',
        avatar: require('@/assets/images/avatars/9.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@oracle.com',
        },
      ],
      subject: 'Profound systemic alliance 🎉 🎊',
      cc: [],
      bcc: [],
      message:
        '<p>Hey John, </p><p>Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescent</p><p>cinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing crea venesector Cirrostomi</p>',
      attachments: [],
      isStarred: false,
      labels: ['company'],
      time: 'Tue Jan 07 2018 12:25:03 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false,
    },
    {
      id: 16,
      from: {
        email: 'cprandob@rambler.ru',
        name: 'Chase Prando',
        avatar: require('@/assets/images/avatars/2.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@vistaprint.com',
        },
      ],
      subject: 'Centralized intermediate instruction set',
      cc: [],
      bcc: [],
      message:
        '<p>Respected Sir, </p><p>drainman merman pleurosteal slatted serenader Tantalus slodder cachalot guerdon flannelflower digestibility priggish loa monocarbide endive rented kelep pangamous gummata siris stockproof butlerism polycrystalline begetter</p><p>rack unpaining beglue astucious yardstick laniflorous tetrachloride avidious Biblicistic clival myosinogen antilobium unamiability unperforate Elaphurus wrapping deformity revocative kovil unwainscoted councilmanic saccharobiose federalize procellous</p>',
      attachments: [],
      isStarred: false,
      labels: ['company'],
      time: 'Tue Jan 08 2018 00:36:40 GMT+0000 (GMT)',
      replies: [],
      folder: 'sent',
      isRead: true,
    },
    {
      id: 17,
      from: {
        email: 'nbartlesc@merriam-webster.com',
        name: 'Normand Bartles',
        avatar: require('@/assets/images/avatars/9.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@si.edu',
        },
      ],
      subject: 'Re-contextualized leading edge projection',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>orpine anidiomatic protoreptilian lacklusterness macromastia obstetricate Phaneroglossa tripleness laxatively hypophloeous ocellate sinoauricular porch lignitic miche strinkle hyperthyreosis tugui Alascan unrailroaded Cypriote vesuvian gradative hardener</p><p>forthink Locarno wattlework Nordicist formoxime demipriest medrick Lomentaria lucible Canossa Manatus anaplasty Spirochaete bonus overgown Amurru Skupshtina opisthorchiasis preworthy Brodie shortchange Nikko Gaviae crosscut</p>',
      attachments: [],
      isStarred: false,
      labels: ['personal'],
      time: 'Tue Jan 09 2018 22:06:50 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: true,
    },
    {
      id: 18,
      from: {
        email: 'rgennd@dedecms.com',
        name: 'Robin Genn',
        avatar: require('@/assets/images/avatars/6.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@about.com',
        },
      ],
      subject: 'Team-oriented system-worthy intranet',
      cc: [],
      bcc: [],
      message:
        '<p>Hi John, </p><p>balsamation teachableness enarthrodia dentilation superguarantee Yuapin schedulize antarctically biocoenotic unspottedly stinter admonitorily uncollatedness umquhile grayhead dephase stopgap evenglow photogenically desmacyte rink osiered specking ratwa</p><p>hospitize epithymetical montage rhapsodical Ninja superdramatist westerner clubionid haustellate Saltator rodding ophthalmomalacia concupiscibleness tingle hyperuresis Trigoniidae rearousal sanctimonial Munychia counterpaned exhibitable communer triadism Janiform</p>',
      attachments: [],
      isStarred: true,
      labels: ['personal'],
      time: 'Tue Jan 10 2018 01:51:24 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: true,
    },
    {
      id: 19,
      from: {
        email: 'eramelote@webeden.co.uk',
        name: 'Emmalynn Ramelot',
        avatar: require('@/assets/images/avatars/8.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@tinypic.com',
        },
      ],
      subject: 'Phased eco-centric architecture',
      cc: [],
      bcc: [],
      message:
        '<p>Hey John, </p><p>hightoby Maja vindicatorship unglobe poduran bronchodilatation uncontorted underwarden cyclometric orgiacs tigerhearted upscale curatize Scylliorhinidae slick unisolated nanocephalous cuirassier heartwise Venusian titanitic requirement antirestoration toluido</p><p>Trematosaurus procreant ethos pessimistic antiselene pisk Amphipneusta anconad Corchorus unswabbed sizable Balanites sardonical shovelbill trammeler carpetwork rhexis remade myelinated right bounteous unsin retroduction Montanist</p>',
      attachments: [],
      isStarred: true,
      labels: ['personal'],
      time: 'Tue Jan 11 2018 14:25:46 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: false,
    },
    {
      id: 20,
      from: {
        email: 'pcuzenf@mediafire.com',
        name: 'Penni Cuzen',
        avatar: require('@/assets/images/avatars/9.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@google.es',
        },
      ],
      subject: 'Future-proofed motivating support',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>yonder secessionalist astringer Ovangangela overcumber supracaecal scutulate Aglaonema Pakawan citril unsubducted cavernal multivalve ladify Cichorium supplication flexion cricothyroidean picaro locally etiogenic timeously scalpeen sapropel</p><p>agglutinative hyperideation Flamandize antipragmatic wincer brachyphalangia forenotion Angloman ornamentation merch revulsed windingly tristate orgic sateless orseilline Anchietea pilferer aroid counselor forevermore kulmet maladventure haruspice</p>',
      attachments: [
        {
          fileName: 'Augue.js',
          thumbnail: require('@/assets/images/icons/js.png'),
          url: '',
          size: '4mb',
        },
      ],
      isStarred: false,
      labels: ['private'],
      time: 'Tue Jan 12 2018 04:16:10 GMT+0000 (GMT)',
      replies: [],
      folder: 'spam',
      isRead: false,
    },
    {
      id: 21,
      from: {
        email: 'abaldersong@utexas.edu',
        name: 'Ardis Balderson',
        avatar: require('@/assets/images/avatars/12.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@ow.ly',
        },
      ],
      subject: 'Focused impactful open system 📷 😃',
      cc: [],
      bcc: [],
      message:
        '<p>Hey John, </p><p>bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto Chelonia</p><p>Freudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose</p>',
      attachments: [],
      isStarred: true,
      labels: ['company'],
      time: new Date(new Date().getTime() - 7 * 60 * 60 * 1000),
      replies: [],
      folder: 'inbox',
      isRead: false,
    },
    {
      id: 22,
      from: {
        email: 'dmallallh@ask.com',
        name: 'Dagmar Mallall',
        avatar: require('@/assets/images/avatars/8.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@furl.net',
        },
      ],
      subject: 'Function-based local productivity 💻',
      cc: [],
      bcc: [],
      message:
        '<p>Dear Consumer, </p><p>gibbed preconceptual passionwort Goanese confluence ungnaw aubepine coadjacency Romipetal isochronic convener overinsistently psammophyte colpenchyma unlogic instinctivist motorcab wellhole receptacle sinistrocular avifaunal decagram paramountness samhita</p><p>sphincterismus Aunjetitz vagabondage parallelotropism unreceipted io wheretoever semivolcanic Chlamydomonadidae spittlestaff spermatogenic Sephardi berrigan lowly grotesquerie Pentameridae unsuccessive archlexicographer Stephanian reimpatriate untossed beth ventriloquial dedicational</p>',
      attachments: [],
      isStarred: false,
      labels: ['company'],
      time: new Date(new Date().getTime() - 5 * 20 * 60 * 1000),
      replies: [],
      folder: 'draft',
      isRead: false,
    },
    {
      id: 23,
      from: {
        email: 'nmacgaughyi@aol.com',
        name: 'Nada MacGaughy',
        avatar: require('@/assets/images/avatars/3.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@cnet.com',
        },
      ],
      subject: 'Compatible object-oriented policy ',
      cc: [],
      bcc: [],
      message:
        '<p>Hello John, </p><p>miraculous pirijiri meekheartedness superoxygenation Elric paries epideictical Prajapati reassign stridlins spoach overreadily abusion sailmaking illiterately septangularness retinene Hler exceptionary ferberite possessionalist piperide Oschophoria beau</p><p>abnormalize yearnfulness Janiculum sixhaend abstemiousness uterogestation orchestrina gallotannin muckment melanoblast supercivilization inclusionist electroosmotically immatchable stomatoplastic satinity hydrogen unexorable quinamidine milksopism fascinating ratsbane endocline Zolaist</p>',
      attachments: [
        {
          fileName: 'Leo.xls',
          thumbnail: require('@/assets/images/icons/xls.png'),
          url: '',
          size: '33mb',
        },
      ],
      isStarred: false,
      labels: ['private'],
      time: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
      replies: [],
      folder: 'trash',
      isRead: false,
    },
    {
      id: 24,
      from: {
        email: 'douldcottj@yellowpages.com',
        name: 'Dalila Ouldcott',
        avatar: require('@/assets/images/avatars/1.png'),
      },
      to: [
        {
          name: 'me',
          email: 'johndoe@github.io',
        },
      ],
      subject: 'User-friendly value-added application 😊',
      cc: [],
      bcc: [],
      message:
        '<p>Hey John, </p><p>wellish laminable ineunt popshop catalyte prismatize campimetrical lentisk excluding portlet coccinellid impestation Bangash Lollardist perameloid procerebrum presume cashmerette washbasin nainsook Odontolcae Alea holcodont welted</p><p>cibarious terrifical uploop naphthaleneacetic containable nonsailor Zwinglian blighty benchful guar porch fallectomy building coinvolve eidolism warmth unclericalize seismographic recongeal ethanethial clog regicidal regainment legific</p>',
      attachments: [
        {
          fileName: 'example.doc',
          thumbnail: require('@/assets/images/icons/doc.png'),
          url: '',
          size: '21mb',
        },
      ],
      isStarred: false,
      labels: ['personal'],
      time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
      replies: [
        {
          id: 25,
          from: {
            email: 'johndoe@mail.com',
            name: 'John Doe',
            avatar: require('@/assets/images/avatars/11.png'),
          },
          to: [
            {
              name: 'me',
              email: 'hettiem@mail.com',
            },
          ],
          subject: '🎯 Focused impactful open system',
          cc: [],
          bcc: [],
          message:
            '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
          attachments: [],
          isStarred: false,
          labels: [],
          time: 'Mon Dec 10 2018 10:56:00 GMT+0000 (GMT)',
          replies: [],
          folder: 'inbox',
          isRead: false,
        },
        {
          id: 26,
          from: {
            email: 'hettiem@mail.com',
            name: 'Hettie Mcerlean',
            avatar: require('@/assets/images/avatars/3.png'),
          },
          to: [
            {
              name: 'me',
              email: 'johndoe@mail.com',
            },
          ],
          subject: 'Profound systemic alliance 🎉 🎊',
          cc: [],
          bcc: [],
          message:
            '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
          attachments: [],
          isStarred: false,
          labels: [],
          time: 'Mon Dec 10 2018 11:25:00 GMT+0000 (GMT)',
          replies: [],
          folder: 'inbox',
          isRead: false,
        },
      ],
      folder: 'inbox',
      isRead: true,
    },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Emails
// ------------------------------------------------
mock.onGet('/apps/email/emails').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', folder = 'inbox', label } = config.params
  /* eslint-enable */

  const queryLowered = q.toLowerCase()

  function isInFolder(email) {
    if (folder === 'trash') return email.folder === 'trash'
    if (folder === 'starred') return email.isStarred && email.folder !== 'trash'
    return email.folder === (folder || email.folder) && email.folder !== 'trash'

    // email.folder === (folder || email.folder)

    // if (filter === 'important') return task.isImportant && !task.isDeleted
    // if (filter === 'completed') return task.isCompleted && !task.isDeleted
    // if (filter === 'deleted') return task.isDeleted
    // return !task.isDeleted
  }

  const filteredData = data.emails.filter(
    email =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      email.subject.toLowerCase().includes(queryLowered) &&
      isInFolder(email) &&
      (label ? email.labels.includes(label) : true),
  )
  /* eslint-enable  */

  // ------------------------------------------------
  // Email Meta
  // ------------------------------------------------
  const emailsMeta = {
    inbox: data.emails.filter(email => !email.isDeleted && !email.isRead && email.folder === 'inbox').length,
    draft: data.emails.filter(email => email.folder === 'draft').length,
    spam: data.emails.filter(email => !email.isDeleted && !email.isRead && email.folder === 'spam').length,
  }

  return [
    200,
    {
      emails: filteredData.reverse(),
      emailsMeta,
    },
  ]
})

// ------------------------------------------------
// POST: Update Email
// ------------------------------------------------
mock.onPost('/apps/email/update-emails').reply(config => {
  const { emailIds, dataToUpdate } = JSON.parse(config.data)

  function updateMailData(email) {
    Object.assign(email, dataToUpdate)
  }

  data.emails.forEach(email => {
    if (emailIds.includes(email.id)) updateMailData(email)
  })

  return [200]
})

// ------------------------------------------------
// POST: Update Emails Label
// ------------------------------------------------
mock.onPost('/apps/email/update-emails-label').reply(config => {
  const { emailIds, label } = JSON.parse(config.data)

  function updateMailLabels(email) {
    const labelIndex = email.labels.indexOf(label)

    if (labelIndex === -1) email.labels.push(label)
    else email.labels.splice(labelIndex, 1)
  }

  data.emails.forEach(email => {
    if (emailIds.includes(email.id)) updateMailLabels(email)
  })

  return [200]
})

// ------------------------------------------------
// GET: Paginate Existing Email
// ------------------------------------------------
mock.onGet('/apps/email/paginate-email').reply(config => {
  const { dir, emailId } = config.params

  const currentEmailIndex = data.emails.findIndex(e => e.id === emailId)

  const newEmailIndex = dir === 'previous' ? currentEmailIndex - 1 : currentEmailIndex + 1

  const newEmail = data.emails[newEmailIndex]

  return newEmail ? [200, newEmail] : [404]
})
