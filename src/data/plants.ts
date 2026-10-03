export type Plant = {
  id: string;
  plant_number: string;
  common_name: string;
  other_common_names: string[];
  scientific_name: string;
  family: string | null;
  origin: string | null;
  uses_significance: string | null;
  description: string;
};

/**
 * SOANS FARM PLANT CATALOGUE DATA
 * ============================================================================
 * Instructions for adding new plant records:
 * 1. Add a new object to the `plants` array below.
 * 2. `id` and `plant_number` should be string representations formatted with
 *    four digits (e.g., "0016", "0017").
 * 3. `other_common_names` is an array of strings (e.g., ["Kali Mirch", "Black Gold"]).
 * 4. Optional fields (`family`, `origin`, `uses_significance`) can be set to `null`
 *    or omitted as strings if unknown.
 * 5. Do NOT add obsolete fields like `genus`, `coordinates`, or `habitat`.
 * ============================================================================
 */

export const plants: Plant[] = [
  {
    id: "0001",
    plant_number: "0001",
    common_name: "Linaloe Tree",
    other_common_names: ["Indian Lavender"],
    scientific_name: "Bursera linanoe",
    family: "Burseraceae",
    origin: "Native to Mexico",
    uses_significance:
      "Essential oil Linaloe is extracted from berries and wood.",
    description:
      "The Linaloe Tree is a member of the Burseraceae family, native to Mexico. It is widely recognized for its aromatic wood and berries, which serve as the primary source for extracting fragrant Linaloe essential oil. The plant typically exhibits woody growth characteristics typical of the genus, featuring aromatic resin canals and compound leaves. Its fragrant profile makes it a notable botanical specimen in collection gardens.",
  },
  {
    id: "0002",
    plant_number: "0002",
    common_name: "Elephant Tree",
    other_common_names: [],
    scientific_name: "Bursera microphylla",
    family: "Burseraceae",
    origin: "Native to southwestern United States and northwestern Mexico",
    uses_significance: null,
    description:
      "The Elephant Tree is a distinct succulent-like shrub or small tree native to the arid regions of the southwestern United States and northwestern Mexico. It features a stout, swollen trunk and branches adapted for water storage in dry environments. The bark is typically papery and peeling, revealing greenish photosynthetic layers underneath. It produces small, pinnate leaves and inconspicuous flowers, reflecting specialized adaptations to desert ecosystems.",
  },
  {
    id: "0003",
    plant_number: "0003",
    common_name: "Cat’s claw creeper",
    other_common_names: [],
    scientific_name: "Bignonia gracilis",
    family: "Bignoniaceae",
    origin: null,
    uses_significance: null,
    description:
      "Cat’s claw creeper is a climbing vine belonging to the Bignoniaceae family. It is characterized by its slender stems and specialized tendrils that resemble claws, allowing the plant to securely attach to surfaces and climb structures or host trees. The foliage consists of compound leaves, and the vine produces tubular flowers typical of its family, contributing to its climbing habit in tropical and subtropical settings.",
  },
  {
    id: "0004",
    plant_number: "0004",
    common_name: "Asparagus fern",
    other_common_names: ["Emerald feather"],
    scientific_name: "Asparagus plumosus",
    family: "Asparagaceae",
    origin: null,
    uses_significance: null,
    description:
      "Asparagus fern, also known as emerald feather, is an evergreen climbing perennial featuring fine, feathery cladodes that create a soft, delicate texture. Despite its common name, it is not a true fern but a member of the Asparagaceae family. It produces slender, branching stems with needle-like foliage, small white flowers, and dark berries, making it a popular ornamental plant for its graceful, cascading appearance.",
  },
  {
    id: "0005",
    plant_number: "0005",
    common_name: "Javanese Long pepper",
    other_common_names: ["Hippali", "Gajahippali", "Chavya"],
    scientific_name: "Piper retrofractum",
    family: "Piperaceae",
    origin: null,
    uses_significance: "Medicinal for cough & phlegm.",
    description:
      "Javanese Long pepper is a climbing woody vine in the Piperaceae family, valued in traditional medicine for treating cough and phlegm. It features alternate, glossy green leaves with prominent veins and dense spikes of tiny flowers that develop into textured, cylindrical fruit spikes. The plant thrives in humid, tropical environments and is recognized for its spicy, pungent properties.",
  },
  {
    id: "0006",
    plant_number: "0006",
    common_name: "Indian Long pepper",
    other_common_names: ["Hippali"],
    scientific_name: "Piper longum",
    family: "Piperaceae",
    origin: null,
    uses_significance: "Medicinal for cough and phlegm.",
    description:
      "Indian Long pepper is a slender aromatic climbing vine belonging to the Piperaceae family. It is traditionally utilized for its medicinal properties, specifically in remedies for cough and phlegm. The plant produces heart-shaped, alternate leaves and small, catkin-like flower spikes that mature into aromatic, fused fruit spikes containing pungent compounds.",
  },
  {
    id: "0007",
    plant_number: "0007",
    common_name: "Swiss cheese plant",
    other_common_names: ["Monstera"],
    scientific_name: "Monstera deliciosa",
    family: "Araceae",
    origin: null,
    uses_significance: null,
    description:
      "Swiss cheese plant is a robust epiphyte and climber belonging to the Araceae family, native to tropical rainforests. It is easily recognized by its large, glossy, heart-shaped leaves that naturally develop characteristic holes and splits as they mature. The plant produces aerial roots to anchor itself to tree trunks and bears unusual, cone-like edible composite fruits when mature under optimal conditions.",
  },
  {
    id: "0008",
    plant_number: "0008",
    common_name: "Tooth ache plant",
    other_common_names: ["Hallu novu gida"],
    scientific_name: "Spilanthes sp.",
    family: "Asteraceae",
    origin: null,
    uses_significance: "Local anaesthetic.",
    description:
      "The tooth ache plant is a low-growing herbaceous annual in the Asteraceae family, traditionally used as a local anaesthetic. It features simple, opposite leaves and distinctive, button-like flower heads lacking petals, often displaying a contrasting yellow and red center. Chewing the leaves or flower heads produces a tingling, numbing sensation due to active alkylamide compounds present in the plant tissue.",
  },
  {
    id: "0009",
    plant_number: "0009",
    common_name: "Waterhyssop",
    other_common_names: ["Neer Brahmi"],
    scientific_name: "Bacopa monnieri",
    family: "Plantaginaceae",
    origin: null,
    uses_significance: "Medicinal, well known for memory enhancing property.",
    description:
      "Waterhyssop is a creeping, succulent perennial herb found naturally in damp, marshy environments. It features small, oblong, succulent leaves arranged oppositely along creeping stems and bears small, light blue or white bell-shaped flowers. Widely recognized in traditional healthcare systems, it is celebrated for its memory-enhancing properties and cognitive support applications.",
  },
  {
    id: "0010",
    plant_number: "0010",
    common_name: "Stevia",
    other_common_names: [],
    scientific_name: "Stevia raboudiana",
    family: "Compositae",
    origin: null,
    uses_significance: "Calorie free sugar substitute.",
    description:
      "Stevia is a tender perennial herb belonging to the Compositae family, widely cultivated for its intensely sweet leaves. It produces small, simple leaves arranged oppositely on branching stems, along with clusters of small, white tubular flowers. The leaves contain natural glycosides that provide a high-potency, calorie-free alternative to conventional cane sugar.",
  },
  {
    id: "0011",
    plant_number: "0011",
    common_name: "Common Rue",
    other_common_names: ["Sadapu", "Nagadaali"],
    scientific_name: "Ruta graveolens",
    family: "Rutaceae",
    origin: null,
    uses_significance: "Medicinal.",
    description:
      "Common Rue is a strong-scented evergreen subshrub in the Rutaceae family, featuring blue-green, deeply divided compound leaves dotted with oil glands. It produces clusters of small, yellow flowers with distinctive central pistils. The foliage emits a pungent, characteristic aroma when bruised and has a long history of use in traditional herbal medicine.",
  },
  {
    id: "0012",
    plant_number: "0012",
    common_name: "Holy Basil",
    other_common_names: ["Tulasi", "Tulsi"],
    scientific_name: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    origin: null,
    uses_significance: null,
    description:
      "Holy Basil is an aromatic herbaceous plant in the Lamiaceae family, highly revered in traditional cultures and households. It features hairy stems, opposite aromatic leaves with serrated margins, and slender terminal whorls of small purple or white flowers. The plant produces volatile essential oils that give it a distinctive, spicy fragrance and wide cultural significance.",
  },
  {
    id: "0013",
    plant_number: "0013",
    common_name: "Krishna Tulsi",
    other_common_names: ["Kari tulasi"],
    scientific_name: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    origin: null,
    uses_significance: null,
    description:
      "Krishna Tulsi is a distinct variant of Holy Basil characterized by its deep purplish-dark coloration on both stems and leaves. Belonging to the Lamiaceae family, it shares the characteristic square stems and aromatic foliage of the species. The plant is valued for its distinct visual appearance, intense fragrance, and traditional uses.",
  },
  {
    id: "0014",
    plant_number: "0014",
    common_name: "Sweet Flag",
    other_common_names: ["Baje"],
    scientific_name: "Acorus calamus",
    family: "Acoraceae",
    origin: null,
    uses_significance: "Contains psychoactive chemicals.",
    description:
      "Sweet Flag is a wetland monocotyledonous perennial herb featuring sword-shaped, aromatic leaves that arise from creeping rhizomes. It produces a specialized fleshy flower spike known as a spadix, wrapped in a leaf-like spathe. The plant contains complex chemical compounds in its tissues, including psychoactive constituents, and emits a sweet, spicy scent when crushed.",
  },
  {
    id: "0015",
    plant_number: "0015",
    common_name: "False ashoka",
    other_common_names: [],
    scientific_name: "Polyalthia longifolia",
    family: "Annonaceae",
    origin: null,
    uses_significance:
      "Vertically growing shade tree often confused with flowering Ashoka.",
    description:
      "False ashoka is an evergreen, tall-growing tropical tree belonging to the Annonaceae family, characterized by its symmetrical, narrow, columnar canopy. It features drooping, glossy, lanceolate wavy-margined leaves and greenish-yellow flowers followed by clusters of fruit. Often planted as an avenue or shade tree, its distinctive weeping habit makes it easily distinguishable from the true flowering Ashoka.",
  },
  {
    id: "0016",
    plant_number: "0016",
    common_name: "Heart-leaved moonseed",
    other_common_names: ["Amrutha balli", "Guduchi"],
    scientific_name: "Tinospora cordifolia",
    family: "Menispermaceae",
    origin: null,
    uses_significance: null,
    description:
      "Heart-leaved moonseed is a large, deciduous climbing shrub with succulent, corky bark and slender aerial roots. Belonging to the Menispermaceae family, it features simple, alternate, heart-shaped leaves and small yellow flowers, followed by red aggregate fruits. The vine climbs extensively over other vegetation and is widely recognized in traditional botanical collections.",
  },
  {
    id: "0017",
    plant_number: "0017",
    common_name: "Butterfly pea",
    other_common_names: ["Shanka pushpa", "Aparajitha"],
    scientific_name: "Clitoria ternatea var. plenifolia",
    family: "Fabaceae",
    origin: "Native to Indonesian island of Ternate",
    uses_significance: null,
    description:
      "Butterfly pea is a perennial twining climber native to the Indonesian island of Ternate, featuring compound leaves with several pairs of leaflets. It produces striking, vibrant flowers with a distinctive double-petal form in this specific variety. The plant readily climbs fences or supports, producing flat pods containing several seeds.",
  },
  {
    id: "0018",
    plant_number: "0018",
    common_name: "Flame lily",
    other_common_names: ["Agni shike", "Kenkanna"],
    scientific_name: "Gloriosa superba",
    family: "Colchicaceae",
    origin: null,
    uses_significance: "Medicinal.",
    description:
      "Flame lily is a striking herbaceous climber that supports itself using tendrils formed at the tips of its bright green, lance-shaped leaves. Belonging to the Colchicaceae family, it grows from underground tubers and produces large, brilliant flowers with reflexed, wavy petals that transition from yellow to vivid red. The entire plant contains active chemical constituents utilized in traditional medicine.",
  },
  {
    id: "0019",
    plant_number: "0019",
    common_name: "Pride of Burma",
    other_common_names: ["Amherstia"],
    scientific_name: "Amherstia nobilis",
    family: "Leguminosae",
    origin: "Native to Burma",
    uses_significance: "Flowering tree.",
    description:
      "Pride of Burma is an exceptional, medium-sized flowering tree native to Burma, belonging to the Leguminosae family. It features large, pinnate leaves with drooping leaflets that emerge in soft bronze tones. The tree is celebrated for its magnificent, pendulous racemes of striking bright red and yellow orchid-like flowers, making it one of the most ornamental tropical trees.",
  },
  {
    id: "0020",
    plant_number: "0020",
    common_name: "White garland lily",
    other_common_names: ["Sugandhi"],
    scientific_name: "Hedychium coronarium",
    family: "Zingiberaceae",
    origin: null,
    uses_significance: null,
    description:
      "White garland lily is a perennial herbaceous plant growing from fleshy rhizomes, belonging to the Zingiberaceae family. It features erect leafy stems with lance-shaped leaves and produces terminal spikes of pure white, fragrant flowers characterized by delicate, butterfly-like petals. The blossoms emit a sweet, intense perfume, particularly in the evening hours.",
  },
  {
    id: "0021",
    plant_number: "0021",
    common_name: "Betel leaf",
    other_common_names: ["Veelyadha yele"],
    scientific_name: "Piper betle",
    family: "Piperaceae",
    origin: null,
    uses_significance: "Leaf chewed with betle nut & lime (calcium).",
    description:
      "Betel leaf is an evergreen, perennial root-climbing vine in the Piperaceae family, featuring glossy, heart-shaped alternate leaves and spiking inflorescences. The leaves possess a pungent aroma and spicy taste, and are traditionally chewed alongside betel nut and slaked lime (calcium) in various cultural practices across South and Southeast Asia.",
  },
  {
    id: "0022",
    plant_number: "0022",
    common_name: "Bread fruit",
    other_common_names: ["Dheevi halasu"],
    scientific_name: "Artocarpus altilis",
    family: "Moraceae",
    origin: "South Sea Island",
    uses_significance: "Mature fruit used as vegetable.",
    description:
      "Bread fruit is a large, handsome evergreen tree native to South Sea Islands, belonging to the Moraceae family. It features deeply lobed, glossy dark green leaves and large, round aggregate fruits with a starchy texture. The mature fruit is widely harvested and cooked for use as a staple starchy vegetable in tropical cuisines.",
  },
  {
    id: "0023",
    plant_number: "0023",
    common_name: "Arrowroot",
    other_common_names: ["Koove"],
    scientific_name: "Maranta arundinacea",
    family: "Marantaceae",
    origin: null,
    uses_significance: null,
    description:
      "Arrowroot is a perennial herbaceous plant growing up to a meter in height, belonging to the Marantaceae family. It features broad, lance-shaped green leaves and slender stems bearing small white flowers. The plant produces subterranean tubers filled with easily digestible starch, which has traditionally been extracted for culinary and soothing dietary purposes.",
  },
  {
    id: "0024",
    plant_number: "0024",
    common_name: "Red ginger",
    other_common_names: [],
    scientific_name: "Alpinia purpurata",
    family: "Zingiberaceae",
    origin: null,
    uses_significance: null,
    description:
      "Red ginger is a striking tropical perennial plant featuring erect, leafy stems and vibrant, showy inflorescences. Belonging to the Zingiberaceae family, it displays large, bright red bracts that closely resemble flowers, while the true small white flowers emerge delicately between them. Its lush foliage and long-lasting colored bracts make it a prominent feature in tropical landscapes.",
  },
  {
    id: "0025",
    plant_number: "0025",
    common_name: "Rosy Trumpet Tree",
    other_common_names: [],
    scientific_name: "Tabebuia rosea",
    family: "Bignoniaceae",
    origin: null,
    uses_significance: null,
    description:
      "Rosy Trumpet Tree is a medium to large deciduous tree in the Bignoniaceae family, recognized for its impressive canopy display. It features compound palmate leaves with several leaflets and produces abundant clusters of large, funnel-shaped flowers ranging in color from light pink to rose-purple, often blooming profusely before the new leaves emerge.",
  },
  {
    id: "0026",
    plant_number: "0026",
    common_name: "Pale Trumpet Tree",
    other_common_names: ["Cuban Pink Trumpet Tree"],
    scientific_name: "Tabebuia pallida",
    family: "Bignoniaceae",
    origin: null,
    uses_significance: null,
    description:
      "Pale Trumpet Tree, also known as Cuban Pink Trumpet Tree, is a flowering tree belonging to the Bignoniaceae family. It features palmately compound leaves and produces clusters of pale pink to nearly white trumpet-shaped flowers. The tree adapts well to tropical conditions, offering a delicate floral display during its blooming season.",
  },
  {
    id: "0027",
    plant_number: "0027",
    common_name: "Yellow Tabebuia",
    other_common_names: [],
    scientific_name: "Tabebuia argentea",
    family: "Bignoniaceae",
    origin: null,
    uses_significance: null,
    description:
      "Yellow Tabebuia is a small to medium-sized deciduous tree in the Bignoniaceae family, distinguished by its silvery-green foliage. The compound leaves possess a distinct metallic or silvery sheen caused by fine scales. During the flowering phase, the tree drops its leaves to showcase dense clusters of bright yellow, trumpet-shaped blossoms.",
  },
  {
    id: "0028",
    plant_number: "0028",
    common_name: "Pink Trumpet Tree",
    other_common_names: [],
    scientific_name: "Tabebuia avellanedae",
    family: "Bignoniaceae",
    origin: null,
    uses_significance: null,
    description:
      "Pink Trumpet Tree is a robust tree belonging to the Bignoniaceae family, noted for its striking canopy of tubular flowers. It features palmately compound leaves with distinct leaflets and produces dense clusters of vibrant pink-to-magenta flowers with yellowish throats, creating a prominent visual contrast in the landscape.",
  },
  {
    id: "0029",
    plant_number: "0029",
    common_name: "Red Jade Vine",
    other_common_names: [],
    scientific_name: "Mucuna bennettii",
    family: "Fabaceae",
    origin: null,
    uses_significance: null,
    description:
      "Red Jade Vine is a woody, vigorous tropical climber in the Fabaceae family, celebrated for its dramatic, hanging inflorescences. It features compound trifoliate leaves and produces long, cascading clusters of claw-shaped flowers in a vivid, intense scarlet-red color that attracts nectar-feeding birds and wildlife.",
  },
  {
    id: "0030",
    plant_number: "0030",
    common_name: "Singapore cherry",
    other_common_names: ["Panama berry"],
    scientific_name: "Muntingia calabura",
    family: "Elaeocarpaceae",
    origin: null,
    uses_significance: "Shade, edible fruits, attracts birds.",
    description:
      "Singapore cherry is a fast-growing, small tree with horizontal branches and soft, hairy leaves. Belonging to the Elaeocarpaceae family, it provides dense shade and produces small, round, sweet red edible fruits that are heavily favored by fruit-eating birds. It flowers continuously with small white blossoms throughout the year.",
  },
  {
    id: "0031",
    plant_number: "0031",
    common_name: "Brahma kamala",
    other_common_names: ["Queen of the Night"],
    scientific_name: "Epiphyllum oxypetalum",
    family: "Cactaceae",
    origin: null,
    uses_significance: "Blooms nocturnally.",
    description:
      "Brahma kamala is a unique epiphytic cactus species characterized by flattened, leaf-like succulent stems that branch out from a woody base. Belonging to the Cactaceae family, it is renowned for producing large, highly fragrant white flowers that open exclusively at night and fade by morning, offering a fleeting nocturnal display.",
  },
  {
    id: "0032",
    plant_number: "0032",
    common_name: "7-layer Jasmine",
    other_common_names: ["7 sutthina mallige"],
    scientific_name: "Jasminum sambac",
    family: "Oleaceae",
    origin: null,
    uses_significance: null,
    description:
      "7-layer Jasmine is a scrambling evergreen shrub belonging to the Oleaceae family, featuring glossy, dark green opposite leaves. This specific cultivar produces highly fragrant, multi-layered white flowers with numerous petals arranged in dense rosettes. The intensely perfumed blossoms are widely appreciated for their fragrance and traditional use.",
  },
  {
    id: "0033",
    plant_number: "0033",
    common_name: "Indian crocus",
    other_common_names: ["Nela sampige", "Bhumi Champa"],
    scientific_name: "Kaempferia rotunda",
    family: "Zingiberaceae",
    origin: null,
    uses_significance: null,
    description:
      "Indian crocus is a tuberous herbaceous perennial belonging to the Zingiberaceae family. It produces patterned, variegated leaves that emerge directly from the ground after flowering. The plant bears delicate, fragrant flowers featuring white and deep violet petals that sit close to the soil surface before the foliage fully develops.",
  },
  {
    id: "0034",
    plant_number: "0034",
    common_name: "Rose Myrtle",
    other_common_names: [],
    scientific_name: "Rhodomyrtus tomentosa",
    family: "Myrtaceae",
    origin: null,
    uses_significance: null,
    description:
      "Rose Myrtle is an evergreen shrub in the Myrtaceae family, featuring opposite, leathery leaves with downy, grayish undersides. It produces solitary or clustered flowers with delicate pink petals and numerous stamens, followed by edible, purplish-black berries that attract local wildlife and birds.",
  },
  {
    id: "0035",
    plant_number: "0035",
    common_name: "Yellow bell plant",
    other_common_names: [],
    scientific_name: "Allamanda cathartica",
    family: "Apocynaceae",
    origin: null,
    uses_significance: null,
    description:
      "Yellow bell plant is a sprawling evergreen shrub or climber belonging to the Apocynaceae family, featuring whorled, glossy green leaves. It produces large, trumpet-shaped bright yellow flowers with subtle throat markings, blooming profusely in tropical climates and adding vibrant color to garden landscapes.",
  },
  {
    id: "0036",
    plant_number: "0036",
    common_name: "Climbing Aroid",
    other_common_names: ["Arke booru"],
    scientific_name: "Pothos scandens",
    family: "Araceae",
    origin: null,
    uses_significance: null,
    description:
      "Climbing Aroid is an evergreen epiphyte in the Araceae family that clings to tree trunks using aerial roots. It features glossy, alternate green leaves with distinct petiole structures and produces inconspicuous flowers enclosed in a small spathe. Its climbing habit makes it a common fixture in dense tropical woodland ecosystems.",
  },
  {
    id: "0037",
    plant_number: "0037",
    common_name: "Sessile Joyweed",
    other_common_names: ["Honagone soppu", "Stalkless Joyweed"],
    scientific_name: "Alternanthera sessilis",
    family: "Amaranthaceae",
    origin: null,
    uses_significance: "Leafy vegetable.",
    description:
      "Sessile Joyweed is a prostrate or creeping annual or perennial herb belonging to the Amaranthaceae family, commonly found in damp places and agricultural fields. It features narrow, opposite leaves along branching stems and small, whitish clustered flowers in the leaf axils. The tender shoots and leaves are traditionally harvested and consumed as a leafy vegetable.",
  },
  {
    id: "0038",
    plant_number: "0038",
    common_name: "Culantro",
    other_common_names: ["Sawtooth Coriander"],
    scientific_name: "Eryngium foetidum",
    family: "Apiaceae",
    origin: null,
    uses_significance: null,
    description:
      "Culantro is a tropical perennial herb in the Apiaceae family, characterized by a low-growing rosette of elongated, lance-shaped leaves with finely serrated, spiny margins. It emits a pungent, herbaceous aroma similar to coriander and produces branching floral stems with small greenish flower clusters.",
  },
  {
    id: "0039",
    plant_number: "0039",
    common_name: "Horsetail plant",
    other_common_names: ["Puzzlegrass"],
    scientific_name: "Equisetum sp.",
    family: "Equisetaceae",
    origin: null,
    uses_significance: null,
    description:
      "Horsetail plant is a primitive, spore-bearing perennial plant belonging to the ancient family Equisetaceae. It features jointed, hollow green stems with whorls of fine, needle-like branches resembling a horse's tail. The plant accumulates silica in its stems, giving them a distinctly rough texture.",
  },
  {
    id: "0040",
    plant_number: "0040",
    common_name: "Red vein Abutilon",
    other_common_names: [],
    scientific_name: "Abutilon pictum",
    family: "Malvaceae",
    origin: null,
    uses_significance: null,
    description:
      "Red vein Abutilon is a shrubby perennial in the Malvaceae family, featuring maple-like lobed leaves and slender, upright stems. It produces bell-shaped hanging flowers with delicate orange or yellow petals marked by a distinct network of prominent red veins, adding ornamental value to gardens.",
  },
  {
    id: "0041",
    plant_number: "0041",
    common_name: "Scarlet rosemallow",
    other_common_names: [],
    scientific_name: "Hibiscus coccineus",
    family: "Malvaceae",
    origin: null,
    uses_significance: null,
    description:
      "Scarlet rosemallow is a tall, herbaceous perennial wetland plant belonging to the Malvaceae family, featuring deeply palmately divided leaves. It produces striking, large, five-petaled flowers of a brilliant scarlet-red color with prominent central staminal columns, attracting pollinators like hummingbirds and butterflies.",
  },
  {
    id: "0042",
    plant_number: "0042",
    common_name: "Yesterday-today-tomorrow",
    other_common_names: [],
    scientific_name: "Brunfelsia Americana",
    family: "Solanaceae",
    origin: null,
    uses_significance: null,
    description:
      "Yesterday-today-tomorrow is an evergreen shrub in the Solanaceae family, known for its unique flowering pattern. It features smooth, dark green alternate leaves and produces fragrant flowers that open in shades of purple or violet, gradually fading to lavender and finally to white over successive days, resulting in multiple flower colors on the bush simultaneously.",
  },
];
