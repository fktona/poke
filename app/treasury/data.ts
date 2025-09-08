export type Card = {
  title: string;
  setTitle: string;
  imageUrl: string;
  gradeLabel?: string;
  price: string; // formatted currency
  isTrendUp: boolean;
  trendPercent: string; // e.g. "+1.2%" or "-0.5%"
  href: string;
};

export const cards: Card[] = [
    {
      title: "Charizard",
      setTitle: "Pokemon Base Set 2",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/f141ce7b33be8548f731cb34ac3902967ba11542360cf71fced102e5de252624/1600.jpg",
      gradeLabel: "PSA 9",
      price: "$909.11",
      isTrendUp: false,
      trendPercent: "-0.6%",
      href: "https://www.pricecharting.com/game/pokemon-base-set-2/charizard-4",
    },
    {
      title: "Magneton",
      setTitle: "Pokemon Fossil",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/7755740097e29a3c94350f441694b8c09f5157a6bb5c8da3a9bd049cb19a0e19/1600.jpg",
      gradeLabel: "PSA 9",
      price: "$91.25",
      isTrendUp: true,
      trendPercent: "0.0%",
      href: "https://www.pricecharting.com/game/pokemon-fossil/magneton-1st-edition-11",
    },
    {
      title: "Articuno",
      setTitle: "Pokemon Fossil",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/5004b50e68592170e1f385fdb907c47a1cbb78c9004676e63d85ba7ef9f89f0c/1600.jpg",
      gradeLabel: "PSA 9",
      price: "$419.81",
      isTrendUp: true,
      trendPercent: "0.0%",
      href: "https://www.pricecharting.com/game/pokemon-fossil/articuno-1st-edition-2",
    },
    {
      title: "Chansey",
      setTitle: "Pokemon Base Set",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/va2mjhk5v2rtxxe3/1600.jpg",
      gradeLabel: "PSA 9",
      price: "$99.08",
      isTrendUp: true,
      trendPercent: "3.5%",
      href: "https://www.pricecharting.com/game/pokemon-base-set/chansey-3",
    },
    {
      title: "Lucario VSTAR",
      setTitle: "Pokemon Promo",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/bd39c907899cb6784dd0726fccc12dfe65699ea912e269e4471f4b16460efcd4/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$125.25",
      isTrendUp: true,
      trendPercent: "+12.2%",
      href: "https://www.pricecharting.com/game/pokemon-promo/lucario-vstar-swsh291",
    },
    {
      title: "Hypno",
      setTitle: "Pokemon Fossil",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/d05b24c6603b4e499c1b101c083bf7b2a5dda53c73cbad4c29528b0926ee8d57/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$468.92",
      isTrendUp: true,
      trendPercent: "0.0%",
      href: "https://www.pricecharting.com/game/pokemon-fossil/hypno-8",
    },
    {
      title: "Rocket's Sneak Attack",
      setTitle: "Pokemon Team Rocket",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/eb929027b8f76c7587303c202544fe606d0a5d611344337f1bc5c4b9d7b14b15/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$154.57",
      isTrendUp: true,
      trendPercent: "+0.2%",
      href: "https://www.pricecharting.com/game/pokemon-team-rocket/rocket's-sneak-attack-16",
    },
    {
      title: "Here Comes Team Rocket",
      setTitle: "Pokemon Team Rocket",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/f712579b47056e9faab064052043d249f2ef3c92ba8752ae1ecea2467d88efcb/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$175.00",
      isTrendUp: false,
      trendPercent: "-14.5%",
      href: "https://www.pricecharting.com/game/pokemon-team-rocket/here-comes-team-rocket-15",
    },
    {
      title: "Team Rocket's Wobbuffet",
      setTitle: "Pokemon Promo",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/xzv3pmfo3ceylfot/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$473.93",
      isTrendUp: false,
      trendPercent: "-0.2%",
      href: "https://www.pricecharting.com/game/pokemon-promo/team-rocket's-wobbuffet-pokemon-center-203",
    },
    {
      title: "Ethan's Ho-Oh Ex",
      setTitle: "Pokemon Destined Rivals",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/qa24zph4ud2igr2l/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$473.80",
      isTrendUp: true,
      trendPercent: "+1.1%",
      href: "https://www.pricecharting.com/game/pokemon-destined-rivals/ethan's-ho-oh-ex-230",
    },
    {
      title: "Sylveon",
      setTitle: "Pokemon Prismatic Evolutions",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/4ezajguq4zdzrruc/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$790.87",
      isTrendUp: false,
      trendPercent: "-1.1%",
      href: "https://www.pricecharting.com/game/pokemon-prismatic-evolutions/sylveon-ex-156",
    },
    {
      title: "Chansey",
      setTitle: "Pokemon Twilight Masquerade",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/4936f6f735ae012bdea7a541182b8ee6150124665fa3df2238dd6bff17c48f32/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$117.87",
      isTrendUp: true,
      trendPercent: "+2.4%",
      href: "https://www.pricecharting.com/game/pokemon-twilight-masquerade/chansey-187",
    },
    {
      title: "Gengar VMAX",
      setTitle: "Pokemon Fusion Strike",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/0a567e2f780e0f3a3bda3e169707d54bb8fbdf154a00f44fe77e6e598261a4bb/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$1,855.00",
      isTrendUp: true,
      trendPercent: "+3.0%",
      href: "https://www.pricecharting.com/game/pokemon-fusion-strike/gengar-vmax-271",
    },
    {
      title: "Magikarp",
      setTitle: "Pokemon Paldea Evolved",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/ho6df7bfsbozmti3/1600.jpg",
      gradeLabel: "PSA 10",
      price: "$1,891.79",
      isTrendUp: true,
      trendPercent: "+0.2%",
      href: "https://www.pricecharting.com/game/pokemon-paldea-evolved/magikarp-203",
    },
    {
      title: "Reshiram & Zekrom GX",
      setTitle: "Pokemon Cosmic Eclipse",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/12f6e0b320d7344fbab89a322844b4b925b4566c396eee61086a1aacbb44da50/1600.jpg",
      gradeLabel: "PSA 8",
      price: "$81.00",
      isTrendUp: true,
      trendPercent: "0.0%",
      href: "https://www.pricecharting.com/game/pokemon-cosmic-eclipse/reshiram-&-zekrom-gx-157",
    },
    {
      title: "Rocket's Mewtwo",
      setTitle: "Pokemon Gym Challenge",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/2264a746c1b060c9239fd827297fb71669c430509b90d26c1eea06f8de9b610e/1600.jpg",
      gradeLabel: "PSA 7",
      price: "$160.97",
      isTrendUp: true,
      trendPercent: "0.0%",
      href: "https://www.pricecharting.com/game/pokemon-gym-challenge/rocket's-mewtwo-14",
    },
    {
      title: "Blastoise",
      setTitle: "Pokemon Scarlet & Violet 151",
      imageUrl:
        "https://storage.googleapis.com/images.pricecharting.com/gepbas2zhhded6oi/1600.jpg",
      gradeLabel: undefined,
      price: "$317.50",
      isTrendUp: true,
      trendPercent: "0.2%",
      href: "https://www.pricecharting.com/game/pokemon-scarlet-&-violet-151/blastoise-ex-200",
    },
  ];
