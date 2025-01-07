const membership = [
    {
        title: "Exclusive access to all Ensemble listings ",
        description:
            "View pricing for 4 or more of the same item for group dances",
    },
    {
        title: "Shipping is simple",
        description:
            "Our prepaid shipping label is delivered right to your inbox when your items sell",
    },
    {
        title: "All pieces ship at the same time",
        description:
            "Receiving partial orders from confusing costume companies is a thing of the past.",
    },
    {
        title: "Peace of mind and protection with our GoShimmy Guarantee ",
        description: "Your items will be what you ordered or your money back.",
    },
    {
        title: "Working towards a more equitable future",
        description:
            "A portion of every Ensemble Membership is donated to non-profit organizations creating change in the lives of children and teens, through dance, music, and art.",
    },
    {
        title: "Business expansion",
        description:
            "Get access to a free virtual course teaching you how to create your own profitable costume database.",
    },
];
const membershipPhotoList = [
    {
        img: "member1",
        description: `Fundraising for competition teams or booster 
clubs - dance families are often happy to donate 
costumes that are sitting in their closets and can 
be sold on GoShimmy`,
    },
    {
        img: "member2",
        description: `Group costume purchases allow you to control 
your own markup - costumes bought on 
GoShimmy can become a profitable revenue 
stream for your business. Savings for your studio, 
savings for your community`,
    },
    {
        img: "member3",
        description: ` Issuing students costume credits or other perks 
for returned costumes at the end of the season is 
a great way to save your families money - those 
costumes can then be sold on GoShimmy, and 
loved again by another studio`,
    },
];
const categoryOptions = [
    { id: "leotards", label: "Leotards" },
    { id: "unitards", label: "Unitards" },
    { id: "dresses", label: "Dresses" },
    { id: "two-piece-sets-suits", label: "Two-Piece Sets & Suits" },
    { id: "jackets-coats", label: "Jackets & Coats" },
    { id: "shirts-tops", label: "Shirts & Tops" },
    { id: "skirts-tutus", label: "Skirts & Tutus" },
    { id: "pants-leggings", label: "Pants & Leggings" },
    { id: "shorts", label: "Shorts" },
    { id: "warm-ups", label: "Warm-ups" },
    { id: "tights", label: "Tights" },
    { id: "shoes", label: "Shoes" },
    { id: "accessories", label: "Accessories" },
];
const genreOptions = [
    { id: "ballet", label: "Ballet" },
    { id: "ballroom", label: "Ballroom" },
    { id: "belly-dance", label: "Belly Dance" },
    { id: "character", label: "Character" },
    { id: "cheerleading-dance-team", label: "Cheerleading / Dance Team" },
    { id: "contemporary-modern", label: "Contemporary / Lyrical / Modern" },
    { id: "figure-skating", label: "Figure Skating" },
    { id: "folk-cultural-dance", label: "Folk / Cultural Dance" },
    { id: "hip-hop-street-styles", label: "Hip Hop / Street Styles" },
    { id: "holiday", label: "Holiday" },
    { id: "jazz", label: "Jazz" },
    { id: "tap", label: "Tap" },
];
const conditionOptions = [
    { id: "new-with-tags", label: "New with tags" },
    { id: "new-without-tags", label: "New without tags" },
    {
        id: "excellent-used-condition",
        label: "Excellent used condition",
    },
    {
        id: "good-used-condition",
        label: "Good used condition",
    },
    {
        id: "fair-used-condition",
        label: "Fair used condition",
    },
    { id: "repair-condition", label: "Repair condition" },
]
const colorOptions = [
    "#262122",
    "#7F7F7F",
    "#653919",
    "#CC9B70",
    "#F8E5CE",
    "#FFFFFF",
    "#FFC3D0",
    "#FF1A00",
    "#FF922F",
    "#FFFB43",
    "#0031F8",
    "#67358D",
    "#D1D4D3",
    "#CD8B43",
]
const accordionItems = [
    { id: "categories", label: "Categories", content: categoryOptions },
    { id: "genres", label: "Genre", content: genreOptions },
    {
        id: "tagged",
        label: "Tagged",
        content: [
            { id: "girls", label: "Girls" },
            { id: "women", label: "Women" },
            { id: "boys", label: "Boys" },
            { id: "men", label: "Men" },
            { id: "unisex_youth", label: "Unisex Youth" },
            { id: "unisex_adult", label: "Unisex Adult" }
        ]
    }
    ,
    {
        id: "size",
        label: "Size",
        content: [
            { id: "xs", label: "XS" },
            { id: "s", label: "S" },
            { id: "m", label: "M" },
            { id: "l", label: "L" },
            { id: "xl", label: "XL" },
            { id: "2", label: "2" },
            { id: "4", label: "4" },
            { id: "6", label: "6" },
            { id: "8", label: "8" }
        ]
    },
    { id: "brands", label: "Brands", content: [], isBrands: true },
    {
        id: "custom", label: "Custom", content: [
            { id: "custom_semi_custom_couture", label: "Custom / Semi-Custom / Couture" }
        ]
    },
    { id: "color", label: "Color", content: colorOptions, isColor: true },
    { id: "condition", label: "Condition", content: conditionOptions },
];

export { membership, membershipPhotoList, categoryOptions, genreOptions, conditionOptions, colorOptions, accordionItems }