const products = [
    {
        id: 1,
        nameItem: "HyperX Cloud-Alpha",
        category: "Headset",
        img: [
            "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_black_1_main_900x.jpg?v=1662420668",
            "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_black_2_side_900x.jpg?v=1662420668",
            "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_black_3_front_900x.jpg?v=1662420668",
            "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_alpha_black_4_main_detachable_900x.jpg?v=1662420668"
          ],
        price: 100.00
    },
    {
        id: 2,
        nameItem: "Logitech G733 LILA",
        category: "Headset",
        img: [
            "https://http2.mlstatic.com/D_NQ_NP_731148-MLU77961895551_072024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_780764-MLU77961837741_072024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_965316-MLU77961837753_072024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_857605-MLU77741512010_072024-O.webp"
          ],
        price: 150.00
    },
    {
        id: 3,
        nameItem: "JBL Quantum 400",
        category: "Headset",
        img: [
            "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwe2102f4c/JBL_Quantum_400_Product%20Image_Hero%2002.png?sw=537&sfrm=png",
            "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwc2f2ed69/JBL_Quantum_400_Product%20Image_Angle.png?sw=537&sfrm=png",
            "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw8447aa64/JBL_Quantum_400_Product%20Image_Cushions.png?sw=537&sfrm=png",
            "https://www.jbl.com.ar/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw29a6281a/JBL_Quantum_400_Product%20Image_Front.png?sw=537&sfrm=png"
        ],
        price: 130.00
    },
    {
        id: 4,
        nameItem: "Razer Kraken Kitty Edition V2 Pro",
        category: "Headset",
        img: [
            "https://http2.mlstatic.com/D_NQ_NP_754577-MLU74267962879_012024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_728614-MLU74268106597_012024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_868480-MLU74156673764_012024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_910182-MLU74268106613_012024-O.webp"
        ],
        price: 90.00
    },
    {
        id: 5,
        nameItem: "Logitech G433",
        category: "Headset",
        img: [
            "https://images.megatone.net/Articulos/zoom2x/350/MKT1481EBX-1.jpg",
            "https://images.megatone.net/Articulos/zoom2x/350/MKT1481EBX-2.jpg",
            "https://images.megatone.net/Articulos/zoom2x/350/MKT1481EBX-3.jpg",
            "https://http2.mlstatic.com/D_NQ_NP_669619-MLU74972613170_032024-O.webp"
        ],
        price: 50.00
    },
    {
        id: 5,
        nameItem: "Logitech Astro A10 - Gen2",
        category: "Headset",
        img: [
            "https://http2.mlstatic.com/D_NQ_NP_797386-MLA73284832537_122023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_883055-MLA73199231194_122023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_926278-MLA74676700016_022024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_892619-MLA74807972709_022024-O.webp"
        ],
        price: 95.00
    },
    {
        id: 6,
        nameItem : "Logitech G502 HERO",
        category : "Mouse",
        img : [
        "https://resource.logitechg.com/w_900,h_900,c_limit,q_auto,f_auto,dpr_1.0/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-1.png",
        "https://resource.logitechg.com/w_900,h_900,c_limit,q_auto,f_auto,dpr_1.0/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-2.png",
        "https://resource.logitechg.com/w_900,h_900,c_limit,q_auto,f_auto,dpr_1.0/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-3.png"
        ],
        price: 49.99
    },
    {
        id: 7,
        nameItem : "Razer DeathAdder V2",
        category : "Mouse",
        img : [
        "https://http2.mlstatic.com/D_NQ_NP_774535-MLU72611761209_112023-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_931638-MLU78749563535_082024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_867860-MLU72542005492_112023-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_843969-MLU74135774216_012024-O.webp"
        ],
        price: 69.99
    },
    {
        id: 8,
        nameItem : "Corsair Dark Core RGB",
        category : "Mouse",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_898983-MLU78219300979_082024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_600193-MLU78219575089_082024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_828200-MLU78219575123_082024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_988812-MLU78219301037_082024-O.webp"
        ],
        price: 79.99
    },
    {
        id: 9,
        nameItem : "SteelSeries Rival 600",
        category : "Mouse",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_819895-MLA32844423486_112019-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_771752-MLU75358397363_032024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_707891-MLU75358368193_032024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_712804-MLU75358368229_032024-O.webp"
        ],
        price: 89.99
    },
    {
        id: 10,
        nameItem : "Glorious Model O",
        category : "Mouse",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_990029-MLU74825738649_022024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_666847-MLA79728491167_102024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_722471-MLU74825738663_022024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_797076-MLU74825738657_022024-O.webp"
        ],
        price: 49.99
    },
    {
        id: 11,
        nameItem : "Corsair K95 RGB Platinum",
        category : "Keyboard",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_900036-MLA47887983872_102021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_885742-MLA47887983870_102021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_612460-MLA47887983873_102021-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_607074-MLA47888168467_102021-O.webp"
        ],
        price: 199.99
    },
    {
        id: 12,
        nameItem : "Razer BlackWidow V3",
        category : "Keyboard",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_618440-MLU72576646352_112023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_861588-MLU72576666048_112023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_674708-MLU74245598929_012024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_690823-MLU72605015388_112023-O.webp"
        ],
        price: 139.99
    },
    {
        id: 13,
        nameItem : "Logitech G Pro X",
        category : "Keyboard",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_903204-MLU76657116382_062024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_641947-MLU76656941066_062024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_908044-MLU76656941094_062024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_969603-MLU76657164986_062024-O.webp"
        ],
        price: 129.99
    },
    {
        id: 14,
        nameItem : "SteelSeries Apex Pro",
        category : "Keyboard",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_880592-MLU73089406964_112023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_683572-MLU77965239054_082024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_649675-MLU73172102397_112023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_636611-MLU73172197315_112023-O.webp"
        ],
        price: 199.99
    },
    {
        id: 15,
        nameItem : "HyperX Alloy FPS Pro",
        category : "Keyboard",
        img : [
            "https://http2.mlstatic.com/D_NQ_NP_767936-MLU72570631972_112023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_741180-MLA51631455572_092022-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_840997-MLU78780267792_092024-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_835836-MLU72570700770_112023-F.webp"
        ],
        price: 79.99
    }
    
];

export default products;