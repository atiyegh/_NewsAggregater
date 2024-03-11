
//As there are no apis to get categories for those three apis that I have used and the data set is small, I make a hard code
// array of categories manually but in large scale and real world we absolutely need an api for getting categories which is updated real time.
export const categories=[
    {
        value:"Tesla",
        label:"Tesla"
    },
    {
        value:"Football",
        label:"Football"
    },
    {
        value:"US news",
        label:"US news"
    },
    {
        value:"UK news",
        label:"UK news"
    },
    {
        value:"World news",
        label:"World news"
    },
    {
        value:"Politics",
        label:"Politics"
    },
    {
        value:"Sport",
        label:"Sport"
    },
    {
        value:"Culture",
        label:"Culture"
    },
    {
        value:"Business",
        label:"Business"
    },
    {
        value:"Arts",
        label:"Arts"
    },
    {
        value:"Movies",
        label:"Movies"
    },
    {
        value:"Theater",
        label:"Theater"
    },
    {
        value:"Books",
        label:"Books"
    },
    {
        value:"US",
        label:"US"
    },
    {
        value:"World",
        label:"World"
    }
]

//This is a mock data for convertedData I have used to not call apis too much for testing some scenarios
export const convertedDta=[
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/football/live/2024/mar/10/liverpool-v-manchester-city-premier-league-live",
        "title": "Liverpool 1-1 Manchester City: Premier League – live reaction",
        "category": "Football",
        "imgSrc": "https://www.theguardian.com/football/live/2024/mar/10/liverpool-v-manchester-city-premier-league-live#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/books/2024/mar/10/gunnel-ingham-obituary",
        "title": "Gunnel Ingham obituary",
        "category": "Books",
        "imgSrc": "https://www.theguardian.com/books/2024/mar/10/gunnel-ingham-obituary#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/business/2024/mar/10/gordon-brown-uk-war-footing-economic-growth-treasury",
        "title": "Gordon Brown: UK has to get on war footing for economic growth",
        "category": "Business",
        "imgSrc": "https://www.theguardian.com/business/2024/mar/10/gordon-brown-uk-war-footing-economic-growth-treasury#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/football/live/2024/mar/10/tottenham-v-manchester-city-womens-fa-cup-quarter-final-live",
        "title": "Tottenham 1-1 Manchester City (4-3 pens): Women’s FA Cup quarter-final – live reaction",
        "category": "Football",
        "imgSrc": "https://www.theguardian.com/football/live/2024/mar/10/tottenham-v-manchester-city-womens-fa-cup-quarter-final-live#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/world/2024/mar/10/gaza-aid-ship-carrying-200-tons-of-food-ready-to-leave-cyprus-say-officials",
        "title": "Gaza aid ship carrying 200 tons of food ready to leave Cyprus, say officials",
        "category": "World news",
        "imgSrc": "https://www.theguardian.com/world/2024/mar/10/gaza-aid-ship-carrying-200-tons-of-food-ready-to-leave-cyprus-say-officials#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/sport/live/2024/mar/10/wales-v-france-six-nations-2024-live",
        "title": "Wales 24-45 France: Six Nations 2024 – as it happened",
        "category": "Sport",
        "imgSrc": "https://www.theguardian.com/sport/live/2024/mar/10/wales-v-france-six-nations-2024-live#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/music/2024/mar/10/paul-anderson-obituary",
        "title": "Paul Anderson obituary",
        "category": "Music",
        "imgSrc": "https://www.theguardian.com/music/2024/mar/10/paul-anderson-obituary#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/sport/2024/mar/10/wales-france-six-nations-match-report",
        "title": "Late Taofifénua and Lucu tries seal emphatic win for France against Wales",
        "category": "Sport",
        "imgSrc": "https://www.theguardian.com/sport/2024/mar/10/wales-france-six-nations-match-report#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/us-news/2024/mar/10/buttigieg-biden-age-election",
        "title": "Buttigieg defends Biden’s age: ‘What matters is the age of a leader’s ideas’",
        "category": "US news",
        "imgSrc": "https://www.theguardian.com/us-news/2024/mar/10/buttigieg-biden-age-election#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": null,
        "source": "theguardian",
        "url": "https://www.theguardian.com/news/2024/mar/10/uk-anti-islamophobia-body-has-not-met-for-four-years-despite-hate-rise",
        "title": "UK anti-Islamophobia body has not met for four years despite hate crime rise",
        "category": "News",
        "imgSrc": "https://www.theguardian.com/news/2024/mar/10/uk-anti-islamophobia-body-has-not-met-for-four-years-despite-hate-rise#img-1",
        "publishDate": "2024-03-10"
    },
    {
        "author": "Kris Holt",
        "description": "Stellantis\r\n is the latest manufacturer to commit to using Tesla’s NACS (North American Charging Standard). The company was the last remaining holdout among major automakers, meaning the NACS is becoming a true common standard.\nAccording to a press release\r\n,…",
        "source": "Engadget",
        "url": "https://www.engadget.com/tesla-has-won-the-ev-charging-wars-155726724.html",
        "title": "Tesla has won the EV charging wars",
        "category": null,
        "imgSrc": "https://s.yimg.com/ny/api/res/1.2/5gs2rVU07wParCpFZnhvVA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/7001e0f0-c9bc-11ee-bfeb-9782a05a18ea",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Aarian Marshall",
        "description": "This week, Stellantis became the last major North American automaker to announce its move to the Tesla-invented charging connector. But there’s still work to do before the US has a truly great charging network.",
        "source": "Wired",
        "url": "https://www.wired.com/story/tesla-wins-ev-charging-now-what/",
        "title": "Tesla Wins EV Charging: All Car Companies Using NACS",
        "category": null,
        "imgSrc": "https://media.wired.com/photos/65cb8fab865d893f90616b2d/191:100/w_1280,c_limit/Tesla-Wins-EV-Charging!-Now-What--Gear.jpg",
        "publishDate": "2024-02-13"
    },
    {
        "author": "Andrew J. Hawkins",
        "description": "US automakers made the most progress in eliminating carbon emissions, environmental harms, and human rights violations from their supply chains.",
        "source": "The Verge",
        "url": "https://www.theverge.com/2024/2/27/24084576/ford-mercedes-tesla-ev-supply-chain-leaderboard-climate",
        "title": "Ford, Mercedes, and Tesla have the least problematic EV supply chains",
        "category": null,
        "imgSrc": "https://cdn.vox-cdn.com/thumbor/lT7TqrY2_EbJec_UDbnQPQdtDig=/0x0:4000x2667/1200x628/filters:focal(2000x1334:2001x1335)/cdn.vox-cdn.com/uploads/chorus_asset/file/25307520/1243489684.jpg",
        "publishDate": "2024-02-27"
    },
    {
        "author": "Lucas Ropek",
        "description": "For the past several months, Tesla has been locked in a battle of wills with the labor unions of Sweden. The company’s refusal to ratify a collective bargaining agreement with a small number of workers associated with the Swedish union IF Metall has led to bo…",
        "source": "Gizmodo.com",
        "url": "https://gizmodo.com/elon-musk-tesla-swedish-unions-if-metall-charging-stati-1851280130",
        "title": "Elon Musk's Battle with Swedish Unions Is Now Impacting Tesla's Charging Stations",
        "category": null,
        "imgSrc": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/d5d9ffa9c3235d14f762162b50c3a975.jpg",
        "publishDate": "2024-02-23"
    },
    {
        "author": "Pranav Dixit",
        "description": "Ten years, billions of dollars, multiple leadership changes, and dozens of rumors later, the Apple Car project is dead. A new report from Bloomberg’s Mark Gurman says that Apple has officially canceled the car, breaking the news to nearly 2,000 employees who …",
        "source": "Engadget",
        "url": "https://www.engadget.com/the-apple-car-project-is-reportedly-dead-203012885.html",
        "title": "The Apple Car project is reportedly dead",
        "category": null,
        "imgSrc": "https://s.yimg.com/ny/api/res/1.2/qNPs8xPwpmNuSC9six9ZBg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04Njk-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/0bef1360-d5ad-11ee-aebb-a26dce47afc0",
        "publishDate": "2024-02-27"
    },
    {
        "author": "Aarian Marshall",
        "description": "The Rivian R2, a new smaller EV, will cost “around” $45,000 and be available in 2026, the troubled electric automaker said at an event in California today. Two crossovers, the R3 and R3X, will follow.",
        "source": "Wired",
        "url": "https://www.wired.com/story/rivian-r2-r3-r3x-announced/",
        "title": "Rivian R2, R3, R3X: Price, Specs, Release Date",
        "category": null,
        "imgSrc": "https://media.wired.com/photos/65ea0ef00bfb96bb0b1f3fd6/191:100/w_1280,c_limit/10_Rivian_R2.jpg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Carlton Reid",
        "description": "Who knew stainless steel might not be such a good idea for the exterior of an electric SUV? The entire automotive industry, that's who.",
        "source": "Wired",
        "url": "https://www.wired.com/story/this-is-why-teslas-stainless-steel-cybertrucks-may-be-rusting/",
        "title": "This Is Why Tesla's Stainless Steel Cybertrucks May Be Rusting",
        "category": null,
        "imgSrc": "https://media.wired.com/photos/65cf7bf6772127cb091d7c40/191:100/w_1280,c_limit/This-Is-Why-Tesla's-Stainless-Steel-Cybertrucks-May-Be-Rusting-Gear-GettyImages-1848128124.jpg",
        "publishDate": "2024-02-16"
    },
    {
        "author": "Jess Weatherbed",
        "description": "Euro NCAP is encouraging car makers to stop using dashboard touchscreens and infotainment systems for basic functions like directional indicators and hazard lights",
        "source": "The Verge",
        "url": "https://www.theverge.com/2024/3/5/24091043/euro-ncap-safety-rating-europe-2026-touchscreen-buttons-dials",
        "title": "Cars will need fewer screens and more buttons to earn 5-star safety rating in Europe",
        "category": null,
        "imgSrc": "https://cdn.vox-cdn.com/thumbor/lx2YU-DnQj24MZHSQZ-TJIH3n74=/0x0:6048x4024/1200x628/filters:focal(1982x1802:1983x1803)/cdn.vox-cdn.com/uploads/chorus_asset/file/25319080/1456788171.jpg",
        "publishDate": "2024-03-05"
    },
    {
        "author": "Elizabeth Lopatto",
        "description": "OpenAI has responded to a lawsuit filed by Elon Musk, saying Musk supported a closed-source, for-profit venture but wanted total control over it.",
        "source": "The Verge",
        "url": "https://www.theverge.com/2024/3/5/24091773/openai-response-elon-musk-breach-of-contract-lawsuit",
        "title": "OpenAI says Elon Musk wanted ‘absolute control’ of the company",
        "category": null,
        "imgSrc": "https://cdn.vox-cdn.com/thumbor/mu1msO0wrGzvOzp11GRF5P0JZKI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23382325/VRG_Illo_STK022_K_Radtke_Musk_Money.jpg",
        "publishDate": "2024-03-06"
    },
    {
        "author": "Matt Novak",
        "description": "Elon Musk has shared a new video on Saturday featuring Optimus, the robot Tesla has been working on since 2021. But anyone who tries to watch the video will immediately notice something weird. The clip of Optimus is so low quality and pixelated that it looks …",
        "source": "Gizmodo.com",
        "url": "https://gizmodo.com/elon-musks-latest-robot-video-looks-like-it-was-shot-on-1851284228",
        "title": "Elon Musk's Latest Robot Video Looks Like It Was Shot on a Phone From 2002",
        "category": null,
        "imgSrc": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e9aa7f70e4b1f4b2b118a51f60054c6e.gif",
        "publishDate": "2024-02-24"
    },
    {
        "author": "Thomas Germain",
        "description": "The Cybertruck was such a misfire for Tesla that Elon Musk, close to tears, told investors “we dug our own grave” in the effort to launch the vehicle. But after years of delays, failed promises, and on-stage gaffs, the truck finally made it onto the streets a…",
        "source": "Gizmodo.com",
        "url": "https://gizmodo.com/cybertruck-drivers-humiliating-themselves-are-the-bigge-1851320392",
        "title": "Cybertruck Drivers Humiliating Themselves Are the Biggest Threat to Tesla's Future",
        "category": null,
        "imgSrc": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6f1fbfc0da69c1d923556df4581a1565.gif",
        "publishDate": "2024-03-08"
    },
    {
        "author": "Aarian Marshall",
        "description": "Any tech company moving into the auto space needs a manufacturing partner. But the Apple's EV died as it lived: alone.",
        "source": "Wired",
        "url": "https://www.wired.com/story/rip-apple-car-this-is-why-it-died/",
        "title": "RIP Apple Car. This Is Why It Died",
        "category": null,
        "imgSrc": "https://media.wired.com/photos/65de3f5c8f177b35ceaa4d78/191:100/w_1280,c_limit/Death-Of-The-Apple-Car-Gear-AP19148216961071.jpg",
        "publishDate": "2024-02-28"
    },
    {
        "author": "Jonathan M. Gitlin",
        "description": "The adapter is free if you order it before June 30, or $230 if you wait.",
        "source": "Ars Technica",
        "url": "https://arstechnica.com/cars/2024/02/ford-evs-gain-access-to-tesla-superchargers-starting-today/",
        "title": "Ford EVs gain access to Tesla Superchargers starting today",
        "category": null,
        "imgSrc": "https://cdn.arstechnica.net/wp-content/uploads/2024/02/Fast20Charging20Adapter2028NACS29_03-760x380.jpg",
        "publishDate": "2024-02-29"
    },
    {
        "author": "Jonathan M. Gitlin",
        "description": "The Dodge and Ram owner is adopting J3400 for DC charging.",
        "source": "Ars Technica",
        "url": "https://arstechnica.com/cars/2024/02/stellantis-will-finally-adopt-tesla-style-fast-charger-plug/",
        "title": "Stellantis will finally adopt Tesla-style fast charger plug",
        "category": null,
        "imgSrc": "https://cdn.arstechnica.net/wp-content/uploads/2024/02/FT024_003FH-760x380.jpg",
        "publishDate": "2024-02-13"
    },
    {
        "author": "Maxwell Zeff",
        "description": "Andrej Karpathy, a leading researcher in the AI community and a founding member of OpenAI, left the company on Monday, as first reported by The Information. Karpathy later confirmed his departure.Read more...",
        "source": "Gizmodo.com",
        "url": "https://gizmodo.com/founding-openai-member-andrej-karpathy-leaves-company-1851255288",
        "title": "Founding OpenAI Member Andrej Karpathy Leaves Company",
        "category": null,
        "imgSrc": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/4b2984f6d5ecd0ddaf5575d36f06d071.jpg",
        "publishDate": "2024-02-14"
    },
    {
        "author": "Devindra Hardawar",
        "description": "This week, Cherlynn and Devindra discuss some of the editorial changes happening at Engadget. We’ve lost some amazing colleagues, but we’re still here aiming to deliver the best tech coverage possible. As for this week’s news, we chat about the reported death…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_686fc060-fbfa-4a27-88e3-4ca48cb4d230",
        "title": "Engadget Podcast: Farewell, Apple Car",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-01"
    },
    {
        "author": "Grace Kay",
        "description": "The Dawn Project aired anti-Tesla Super Bowl ads for the second consecutive year.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/super-bowl-ad-tesla-boycott-tech-ceo-2024-2",
        "title": "Tesla didn't run a Super Bowl ad. But a tech CEO calling for a boycott of the carmaker did.",
        "category": null,
        "imgSrc": "https://i.insider.com/65ca3750610ab33aa5deffe1?width=1200&format=jpeg",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Faith Foushee",
        "description": "The newest battery from the industry leader packs a bigger punch. Here's what it can do and what it costs.",
        "source": "CNET",
        "url": "https://www.cnet.com/home/energy-and-utilities/tesla-powerwall-3-is-now-available-heres-how-to-get-yours/",
        "title": "Tesla Powerwall 3 Is Now Available: Here's How to Get Yours - CNET",
        "category": null,
        "imgSrc": "https://www.cnet.com/a/img/resize/a92ca104877335aa6b7214dc55a4978c4d11ee9b/hub/2024/03/06/345ddaca-5e36-433e-8164-4660a0cb1070/powerwall3-99.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Jyoti Mann",
        "description": "Judge rules that owners who accused Tesla of exaggerating driving ranges must undergo individual arbitrations.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-owners-lawsuit-battery-range-evs-2024-3",
        "title": "Tesla drivers suffer a blow after their class-action suit over driving ranges is thrown out",
        "category": null,
        "imgSrc": "https://i.insider.com/65eae8bace7f1785b2e7b3e6?width=1200&format=jpeg",
        "publishDate": "2024-03-08"
    },
    {
        "author": "Grace Kay",
        "description": "Tesla Cybertruck owner Ben Levin compared camping with the truck to \"glamping\" and documented his experience on YouTube.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-cybertruck-owner-camping-trip-video-2024-2",
        "title": "What it's like to take the Cybertruck camping",
        "category": null,
        "imgSrc": "https://i.insider.com/65c530e0917a1dae02449df4?width=1200&format=jpeg",
        "publishDate": "2024-02-10"
    },
    {
        "author": "Grace Kay,Madeline Berg",
        "description": "Kim Kardashian might have a new ride. The billionaire took to Instagram to show off a Tesla Cybertruck.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/kim-kardashian-tesla-cybertruck-celebrity-2024-2",
        "title": "Kim Kardashian seems to be the latest celebrity to join the ranks of Cybertruck owners",
        "category": null,
        "imgSrc": "https://i.insider.com/65d50baaf533b039a8856744?width=1200&format=jpeg",
        "publishDate": "2024-02-20"
    },
    {
        "author": "Tom Carter",
        "description": "Tesla is offering a $1,000 discount on some of its Model Y cars in the US through February.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/elon-musk-tesla-model-y-winter-discount-2024-2",
        "title": "Tesla knocks $1,000 off the price of its Model Y cars in the US to boost sales",
        "category": null,
        "imgSrc": "https://i.insider.com/659cb5a6ec62ab5daf81c394?width=1200&format=jpeg",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Hasan Chowdhury",
        "description": "Tesla chair Robyn Denholm came in for criticism in a legal ruling that voided Elon Musk's $55.8 billion compensation plan.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-chair-robyn-denholm-lets-elon-musk-take-the-spotlight-2024-2",
        "title": "The Tesla chair was meant to rein in Elon Musk, but she's shunned the spotlight. A court ruling has dragged her into it.",
        "category": null,
        "imgSrc": "https://i.insider.com/65d5fb3ef533b039a8858e89?width=1200&format=jpeg",
        "publishDate": "2024-02-21"
    },
    {
        "author": "Antuan Goodwin",
        "description": "The lower starting price, and incentives aimed at cutting ownership costs, close the gap between Lucid's 400-mile EV and the comparable Tesla Model S.",
        "source": "CNET",
        "url": "https://www.cnet.com/roadshow/news/lucid-slashes-air-prices-long-range-ev-now-as-much-as-8000-cheaper/",
        "title": "Lucid Slashes Air Prices, Long Range EV Now as Much as $8,000 Cheaper - CNET",
        "category": null,
        "imgSrc": "https://www.cnet.com/a/img/resize/604c3918da8d94ce937004e19bf3f573f83396b5/hub/2022/11/14/aad86384-29d3-4dd1-976b-1e9e253f499c/ogi-lucid-air-touring-pure-2023-739974.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishDate": "2024-02-15"
    },
    {
        "author": "ktangalakislippert@businessinsider.com (Katherine Tangalakis-Lippert,Hannah Getahun)",
        "description": "Tesla hasn't acknowledged the death of an employee driving one of its cars in what may have been the first fatality linked to its self-driving feature.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-employee-died-full-self-driving-fatal-crash-2024-2",
        "title": "Wife of Tesla employee who died in what may have been the first 'full self-driving' crash said she and her husband were 'guinea pigs'",
        "category": null,
        "imgSrc": "https://i.insider.com/65cc35d194aa8ee8e84b2027?width=1200&format=jpeg",
        "publishDate": "2024-02-14"
    },
    {
        "author": "Tom Carter",
        "description": "Elon Musk's company sells regulatory credits to rival automakers that didn't make enough EVs to meet emissions rules.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-9-billion-revenue-selling-regulatory-credits-to-other-carmakers-2024-2",
        "title": "Tesla made $1.8 billion last year from a side hustle",
        "category": null,
        "imgSrc": "https://i.insider.com/65ca0a2f917a1dae024565e3?width=1200&format=jpeg",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Alexandra Bacon",
        "description": "In a new clip, the humanoid robot demonstrated its upgraded walking ability, resulting in smoother — but still not quite natural — movements.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/teslas-optimus-humanoid-robot-walking-elon-musk-2024-2",
        "title": "Tesla's Optimus bot is looking a little steadier on its feet. Maybe the yoga stretches are paying off.",
        "category": null,
        "imgSrc": "https://i.insider.com/65dc8d2a90413ab8e1d6bb68?width=1200&format=jpeg",
        "publishDate": "2024-02-27"
    },
    {
        "author": "Matt Novak",
        "description": "Donald Trump delivered a speech at the National Religious Broadcasters convention Thursday night in Nashville that touched on all his greatest hits. The Democrats are “evil,” the U.S. is now a “Communist state,” and Hungary’s authoritarian Prime Minister, Vik…",
        "source": "Gizmodo.com",
        "url": "https://gizmodo.com/donald-trump-pledges-to-protect-am-radio-in-rambling-sp-1851281843",
        "title": "Donald Trump Pledges to Protect AM Radio in Rambling Speech to Christian Broadcasters",
        "category": null,
        "imgSrc": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/97bcf82ca61756aa7e19ca19d5a239ad.jpg",
        "publishDate": "2024-02-23"
    },
    {
        "author": "Camilo Fonseca",
        "description": "Elon Musk says the new Tesla Roadster will have a record-breaking acceleration, but Bugatti's CEO warned that may require some design compromises.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-roadster-acceleration-records-bugatti-musk-rimac-2024-3",
        "title": "Bugatti CEO responds to Elon Musk's claim that Tesla Roadster will be able to do 0-60 mph in under a second",
        "category": null,
        "imgSrc": "https://i.insider.com/65e5f5f890413ab8e1d8d9db?width=1200&format=jpeg",
        "publishDate": "2024-03-04"
    },
    {
        "author": "Jyoti Mann",
        "description": "A member of a Cybertruck owners' forum says they were warned that rain could cause their vehicle to rust when collecting their Tesla.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-cybertruck-owners-starting-rust-rain-orange-specks-elon-musk-2024-2",
        "title": "Some Cybertruck owners say their Teslas are starting to rust in the rain",
        "category": null,
        "imgSrc": "https://i.insider.com/65cc8ef6f533b039a8836b4f?width=1200&format=jpeg",
        "publishDate": "2024-02-14"
    },
    {
        "author": "Ana Altchek",
        "description": "A Tesla can now automatically warm up its charging port on its way to a station, which should help prevent chargers from getting stuck in cold weather.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-software-update-auto-warm-charging-port-inlet-cold-weather-2024-2",
        "title": "Tesla's new update is designed to make charging in the cold less of a headache",
        "category": null,
        "imgSrc": "https://i.insider.com/65ce5306f533b039a8840d93?width=1200&format=jpeg",
        "publishDate": "2024-02-15"
    },
    {
        "author": "Andrew Lambrecht",
        "description": "Andrew Lambrecht's Tesla Model 3 has 94,000 miles on it, but he says it's still an enjoyable, affordable car with plenty of performance.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/bought-used-tesla-model-3-high-mileage-happy-2024-3",
        "title": "I bought a used Tesla Model 3 for $26,000. Despite its high mileage, I'm happy with my car.",
        "category": null,
        "imgSrc": "https://i.insider.com/65e8c34090413ab8e1d9e4c2?width=1200&format=jpeg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Ana Altchek",
        "description": "OpenAI posted a series of emails from Elon Musk that call into question his motive for a lawsuit against the startup.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/elon-musk-wanted-tesla-to-merge-with-openai-according-to-his-emails-2024-3",
        "title": "Elon Musk's private emails reveal he pushed to make OpenAI part of Tesla",
        "category": null,
        "imgSrc": "https://i.insider.com/65e8c233ce7f1785b2e6fe4e?width=1200&format=jpeg",
        "publishDate": "2024-03-06"
    },
    {
        "author": "Kelsey Vlamis",
        "description": "Elon Musk is urging corporations to flee Delaware after a judge voided his Tesla pay package, but legal experts doubt other businesses will follow.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/elon-musk-done-with-delaware-other-corporations-unlikely-to-follow-2024-2",
        "title": "Elon Musk may be done with Delaware, but don't expect other corporations to follow his crusade",
        "category": null,
        "imgSrc": "https://i.insider.com/65d567d3a610a9069d5ac725?width=1200&format=jpeg",
        "publishDate": "2024-02-21"
    },
    {
        "author": "Katie Balevic",
        "description": "Elon Musk once claimed that his Tesla cars are an \"appreciating asset\" that would gain value after driving off the lot. That claim has flopped.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/musks-claim-teslas-appreciate-value-post-purchase-flopped-2024-3",
        "title": "Elon Musk claimed Teslas would appreciate in value post-purchase, but predictably, they've lost value",
        "category": null,
        "imgSrc": "https://i.insider.com/65e4e3dfce7f1785b2e5c11f?width=1200&format=jpeg",
        "publishDate": "2024-03-03"
    },
    {
        "author": "gkay@insider.com (Grace Kay)",
        "description": "Cybertruck owners have already begun flipping their electric pickup trucks and some of them are turning a hefty profit.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-cybertruck-auction-resold-double-price-2024-2",
        "title": "A Tesla Cybertruck was resold for more than twice its price",
        "category": null,
        "imgSrc": "https://i.insider.com/65e0c7826080194819fb4953?width=1200&format=jpeg",
        "publishDate": "2024-03-01"
    },
    {
        "author": "Jyoti Mann",
        "description": "The new paint wraps for Tesla's EV are only available at four service centers in California.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-cybertruck-three-new-colors-2024-2",
        "title": "You can now get Tesla's Cybertruck in 3 more colors, including 'satin abyss blue,' if you're willing to pay up to $6,500 more",
        "category": null,
        "imgSrc": "https://i.insider.com/65d71c12f533b039a885df70?width=1200&format=jpeg",
        "publishDate": "2024-02-22"
    },
    {
        "author": "Jordan Hart",
        "description": "Some Tesla, Porsche and Audi EV owners in the western US can earn $1,000 by switching to an electric BMW, according to a CarsDirect report.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/bmw-may-give-money-to-switch-to-its-evs-report-2024-3",
        "title": "Own a Tesla? BMW will give you $1,000 off one of its electric cars if you switch, report says.",
        "category": null,
        "imgSrc": "https://i.insider.com/65e890c1ce7f1785b2e6cb8a?width=1200&format=jpeg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Lloyd Lee,Jack Newsham",
        "description": "Angela Chao, sister of Elaine Chao, made a mistake while making a three-point turn in her Tesla Model X, The Wall Street Journal reported.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/angela-chao-foremost-group-death-tesla-gearshift-reverse-drowning-accident-2024-3",
        "title": "Angela Chao may have died after accidentally putting her Tesla in reverse, a mistake she made before, WSJ reports",
        "category": null,
        "imgSrc": "https://i.insider.com/65ebe2df90413ab8e1db274e?width=1200&format=jpeg",
        "publishDate": "2024-03-09"
    },
    {
        "author": "Lauren Steussy",
        "description": "Elon Musk vowed to take Space X's business out of Delaware after a judge voided his pay package.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/spacex-relocate-to-texas-after-delaware-ruling-against-elon-musk-2024-2",
        "title": "SpaceX files to relocate to Texas after Elon Musk's spat with Delaware over pay package",
        "category": null,
        "imgSrc": "https://i.insider.com/65cd5c52f533b039a883db41?width=1200&format=jpeg",
        "publishDate": "2024-02-15"
    },
    {
        "author": "Mat Smith",
        "description": "This website first began on March 2, 2004. It’s older than YouTube, the iPhone, Uber, Tesla cars, Spotify and a whole lot more. It’s even roughly a month older than the word ‘podcast.’\nTo mark the 20th anniversary of Engadget, we’re taking a longer look at ho…",
        "source": "Engadget",
        "url": "https://www.engadget.com/the-morning-after-20-years-of-engadget-121611170.html",
        "title": "The Morning After: 20 years of Engadget",
        "category": null,
        "imgSrc": "https://s.yimg.com/ny/api/res/1.2/xPhDU9IhLIF9mn8xG8rllg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/7fc3f870-d727-11ee-a96d-85a98fddc12a",
        "publishDate": "2024-03-04"
    },
    {
        "author": "Jonathan M. Gitlin",
        "description": "Producing cars in Mexico would make it cheaper for BYD to sell cars in the US.",
        "source": "Ars Technica",
        "url": "https://arstechnica.com/cars/2024/02/byd-may-build-electric-vehicle-factory-in-mexico-for-us-market/",
        "title": "BYD may build electric vehicle factory in Mexico for US market",
        "category": null,
        "imgSrc": "https://cdn.arstechnica.net/wp-content/uploads/2024/02/GettyImages-1933820815-760x380.jpg",
        "publishDate": "2024-02-14"
    },
    {
        "author": "Lloyd Lee",
        "description": "A judge recently sunk Elon Musk's $55B compensation package. It likely won't impact executives' pay given the \"unique\" situation, experts say.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/elon-musk-compensation-package-tesla-executive-pay-corporate-governance-experts-2024-3",
        "title": "Elon Musk might not get to keep his $55 billion Tesla package. But overall, CEOs shouldn't panic about their paydays.",
        "category": null,
        "imgSrc": "https://i.insider.com/65e92717ce7f1785b2e7363d?width=1200&format=jpeg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Theron Mohamed",
        "description": "Shares of Elon Musk's Tesla are down nearly 30% this year, leaving the EV maker on the verge of losing a Netflix or a Coke's worth of market value.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-stock-price-elon-musk-mcdonalds-disney-ev-market-cap-2024-3",
        "title": "Tesla's value has slumped by $234 billion this year — that's more than McDonald's, Disney, or Nike are worth",
        "category": null,
        "imgSrc": "https://i.insider.com/5a97765daae60521008b45c2?width=1200&format=jpeg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Kwan Wei Kevin Tan",
        "description": "\"The natural state of a car company is dead,\" Elon Musk said in response to news of Apple shuttering its electric car project.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/apple-car-dead-elon-musk-speaking-at-its-funeral-2024-2",
        "title": "The Apple Car is dead, and Elon Musk is speaking at its funeral",
        "category": null,
        "imgSrc": "https://i.insider.com/65de966a6080194819faaa68?width=1200&format=jpeg",
        "publishDate": "2024-02-28"
    },
    {
        "author": "Jyoti Mann",
        "description": "A burning pylon caused power outages in the area surrounding Tesla's gigafactory near Berlin, Brandenburg police said.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-germany-gigafactory-production-halted-power-outage-police-suspect-arson-2024-3",
        "title": "Power cut reportedly halts production at Tesla's gigafactory in Germany after suspected arson, police say",
        "category": null,
        "imgSrc": "https://i.insider.com/65e6f69990413ab8e1d92423?width=1200&format=jpeg",
        "publishDate": "2024-03-05"
    },
    {
        "author": "Grace Kay",
        "description": "Cybertruck engineer Wes Morrill addressed claims Tesla's truck rusts in the rain and clarified that the specks of rust are the size of a \"pinhead.\"",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/cybertruck-engineer-addresses-claims-the-tesla-evs-rust-in-rain-2024-2",
        "title": "Cybertruck engineer addresses claims the Tesla EVs rust in the rain",
        "category": null,
        "imgSrc": "https://i.insider.com/65d36424f533b039a88518c5?width=1200&format=jpeg",
        "publishDate": "2024-02-19"
    },
    {
        "author": "Andrew J. Hawkins",
        "description": "Rivian’s new R2 vehicle is coming, but the company will need to overcome numerous hurdles if it hopes to survive long enough to put it into production.",
        "source": "The Verge",
        "url": "https://www.theverge.com/2024/3/6/24091419/rivian-r2-ev-crossover-suv-profit-earnings-future",
        "title": "Rivian blazed a trail with its adventure EVs — can it stay on top?",
        "category": null,
        "imgSrc": "https://cdn.vox-cdn.com/thumbor/IQYxIYwdjzdp4VrezUWb4w8SfwA=/0x0:1080x1350/1200x628/filters:focal(540x675:541x676)/cdn.vox-cdn.com/uploads/chorus_asset/file/25319695/GH2F_CObYAEQNrL.jpeg",
        "publishDate": "2024-03-06"
    },
    {
        "author": "Rubén Chicharro",
        "description": "Elon Musk tiene la costumbre de adelantar algunas de las prestaciones claves de los próximos Tesla, así como de otros productos de alguna de sus compañías, a través de publicaciones en X (anteriormente Twitter) y de respuestas a las preguntas que los usuarios…",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/02/tesla-roadster-elon-musk-confirma-cuando-llegara-y-su-aceleracion",
        "title": "Elon Musk revela cuándo llegará el Tesla Roadster y confirma su velocidad de aceleración",
        "category": null,
        "imgSrc": "https://imgs.hipertextual.com/wp-content/uploads/2021/01/tesla-roadster-1.jpg",
        "publishDate": "2024-02-28"
    },
    {
        "author": "Ana Altchek",
        "description": "BYD's Yangwang U9 is expected to compete against luxury supercar-makers like Ferrari later this summer.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/byd-electric-supercar-u9-cost-ferrari-vibes-2024-2",
        "title": "Check out Tesla rival BYD's $233K electric supercar that has Ferrari and McLaren vibes",
        "category": null,
        "imgSrc": "https://i.insider.com/65dcae516080194819fa1990?width=1200&format=jpeg",
        "publishDate": "2024-02-26"
    },
    {
        "author": "Eduardo Arcos",
        "description": "Tesla está ultimando detalles para desembarcar en Colombia. Tras su llegada y apertura de su primera tienda en Santiago de Chile, la marca de vehículos eléctricos está planeando su llegada al segundo país sudamericano y tercero en Latinoamérica. De acuerdo al…",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/02/tesla-colombia-confirmado",
        "title": "Tesla llega a Colombia, confirmado: los detalles de la llegada de los coches eléctricos de Elon Musk al país",
        "category": null,
        "imgSrc": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/Model3_57-scaled.jpg",
        "publishDate": "2024-02-24"
    },
    {
        "author": "Sebastian Espinoza Ortiz",
        "description": "El Tesla Model Y es un coche SUV crossover compacto 100 % eléctrico presentado en marzo de 2019, con las primeras entregas realizadas en marzo de 2020. Tras su puesta en venta, fue un éxito instantáneo, convirtiéndose en el coche más vendido de 2023. No solo …",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/02/tesla-model-y-juniper-todo-lo-que-sabemos",
        "title": "Tesla Model Y Juniper: Todo lo que sabemos del rediseño del coche más popular del mundo",
        "category": null,
        "imgSrc": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/model-y-juniper-1.jpg",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Luis Miranda",
        "description": "BYD planea construir su primera fábrica en México con miras a exportar sus coches eléctricos a Estados Unidos. La compañía china está efectuando un estudio de viabilidad para edificar una planta en territorio mexicano. Con ello reforzaría su presencia en el p…",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/02/byd-construira-fabrica-mexico-coches-electricos-competir-tesla",
        "title": "BYD sigue los pasos de Tesla y construirá su próxima fábrica de coches eléctricos en México",
        "category": null,
        "imgSrc": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/12/byd.jpeg?fit=2000%2C1040&quality=70&strip=all&ssl=1",
        "publishDate": "2024-02-14"
    },
    {
        "author": "Huileng Tan",
        "description": "Bezos is the world's richest person with a net worth of $200 billion after Amazon shares surged 90% from a year ago.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/jeff-bezos-richest-person-billionaire-thanks-amazon-tech-share-rally-2024-3",
        "title": "Jeff Bezos is once again the world's richest person thanks to the Big Tech rally",
        "category": null,
        "imgSrc": "https://i.insider.com/65e68b9f6080194819fc6f75?width=1200&format=jpeg",
        "publishDate": "2024-03-05"
    },
    {
        "author": "Andrew J. Hawkins",
        "description": "Lucid Motors slashed prices on most of its models for the third time in seven months. The company has struggled with customer demand.",
        "source": "The Verge",
        "url": "https://www.theverge.com/2024/2/15/24073233/lucid-motor-price-cut-air-pure-charging-allowance",
        "title": "Lucid slashes prices for its luxury EVs for the third time in seven months",
        "category": null,
        "imgSrc": "https://cdn.vox-cdn.com/thumbor/hPP50FlL3JYWy_fFziOiPZvdFOM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24289218/226446_Lucid_Air_TStevens_0008.jpg",
        "publishDate": "2024-02-15"
    },
    {
        "author": "Katherine Tangalakis-Lippert",
        "description": "OpenAI in a blog post published emails between the company and Elon Musk and says it intends to move to dismiss his lawsuit.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/sam-altman-brings-receipts-elon-musk-involvement-openai-lawsuit-2024-3",
        "title": "The OpenAI Files: Sam and co bring the receipts on Elon's involvement",
        "category": null,
        "imgSrc": "https://i.insider.com/65e7f3836080194819fce73d?width=1200&format=jpeg",
        "publishDate": "2024-03-06"
    },
    {
        "author": "Joe Rossignol",
        "description": "Bloomberg's Mark Gurman and Drake Bennett today published an in-depth report examining Apple's decade-long attempt at creating an electric vehicle. The project was reportedly canceled last week after many challenges and setbacks.\n\n\n\n\n\nThe report provides a va…",
        "source": "MacRumors",
        "url": "https://www.macrumors.com/2024/03/06/apple-car-history-bloomberg-report/",
        "title": "Apple Car's Decade of Development and 'Failure' Detailed in New Report",
        "category": null,
        "imgSrc": "https://images.macrumors.com/t/HFSNzdZ3uIDcR_H3unjaFQDN4Ro=/2500x/article-new/2022/03/Apple-car-wheel-icon-Kevin-Lynch-feature-blue-revamp.jpg",
        "publishDate": "2024-03-06"
    },
    {
        "author": "Robert Burnson / Bloomberg",
        "description": "The lawsuit was first filed in 2017 by a Tesla worker who claimed that the factory production floor was a “hotbed of racist behavior.”",
        "source": "Time",
        "url": "https://time.com/6836236/tesla-racism-lawsuit-black-workers-california/",
        "title": "Tesla to Face Nearly 6,000 Black Workers in Factory Racism Lawsuit",
        "category": null,
        "imgSrc": "https://api.time.com/wp-content/uploads/2024/02/Tesla-Fremont-Factory.jpg?quality=85",
        "publishDate": "2024-02-29"
    },
    {
        "author": "Jyoti Mann",
        "description": "Cyberbeast, the tri-motor version of the Cybertruck, reached the top of the 6.5-mile route in Utah.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-cybertruck-hells-revenge-wild-trail-utah-2024-3",
        "title": "Tesla shares wild footage of a Cybertruck scaling a steep, off-road trail known as Hell's Revenge",
        "category": null,
        "imgSrc": "https://i.insider.com/65e98e62ce7f1785b2e73b57?width=1200&format=jpeg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Camilo Fonseca",
        "description": "Elon Musk didn't seem fazed when another AI startup announced a collaboration with OpenAI to develop AI machines.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/elon-musk-comments-figure-ai-rival-openai-robot-machines-2024-3",
        "title": "Elon Musk welcomes competition from humanoid robot rivals: 'Bring it on'",
        "category": null,
        "imgSrc": "https://i.insider.com/65e200526080194819fb9f80?width=1200&format=jpeg",
        "publishDate": "2024-03-01"
    },
    {
        "author": "Rubén Chicharro",
        "description": "OpenAI no ha querido quedarse callada tras la demanda de Elon Musk. En un comunicado compartido apenas una semana después de conocerse que el magnate iba a denunciar a la empresa alegando que ya no buscan el bien de la humanidad, la compañía especializada en …",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/03/openai-tacha-de-hipocrita-a-elon-musk-queria-el-control-absoluto",
        "title": "OpenAI tacha de hipócrita a Elon Musk: quería el control absoluto y una fusión con Tesla",
        "category": null,
        "imgSrc": "https://imgs.hipertextual.com/wp-content/uploads/2024/03/OpenAI-Elon-Musk.jpg",
        "publishDate": "2024-03-06"
    },
    {
        "author": "Nicolás Rivera",
        "description": "El Apple Car ha sido uno de los proyectos más misteriosos de la compañía estadounidense. De él se ha hablado en innumerables ocasiones durante la última década, aunque nunca de manera oficial. La compañía jamás ha confirmado su existencia públicamente. Pero e…",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/03/apple-car-nuevos-detalles-prototipo-compra-tesla-mclaren-mercedes-benz",
        "title": "Revelan más detalles del Apple Car, incluyendo la compra fallida de Tesla y McLaren",
        "category": null,
        "imgSrc": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/apple-car-concept.jpg",
        "publishDate": "2024-03-07"
    },
    {
        "author": "Suswati Basu",
        "description": "Apple Inc. plans to wind down its electric car project to shift focus to artificial intelligence (AI), with Tesla’s CEO […]\nThe post Apple to scrap electric car project, much to Elon Musk’s delight appeared first on ReadWrite.",
        "source": "ReadWrite",
        "url": "https://readwrite.com/apple-to-scrap-electric-car-project-much-to-elon-musks-delight/",
        "title": "Apple to scrap electric car project, much to Elon Musk’s delight",
        "category": null,
        "imgSrc": "https://readwrite.com/wp-content/uploads/2024/02/Apple-to-scrap-multibillion-dollar-electric-car-project-much-to-Teslas-delight.png",
        "publishDate": "2024-02-28"
    },
    {
        "author": "Graeme Hanna",
        "description": "Elon Musk has been ordered to answer to a federal judge concerning his takeover of Twitter in an ongoing US […]\nThe post Elon Musk ordered to testify in Twitter takeover investigation appeared first on ReadWrite.",
        "source": "ReadWrite",
        "url": "https://readwrite.com/elon-musk-ordered-to-testify-in-twitter-takeover-investigation/",
        "title": "Elon Musk ordered to testify in Twitter takeover investigation",
        "category": null,
        "imgSrc": "https://readwrite.com/wp-content/uploads/2024/02/elon-musk-7769494_1280.jpg",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Aaron Souppouris",
        "description": "This Saturday, on March 2, 2024, Engadget turns 20. Originally founded by Peter Rojas — you can read more about those early days here — the site has had eight editors-in-chief and, to my count, seven parent organizations to answer to. What started as a truly …",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3a9816a1-6562-450a-817b-1464788efda1",
        "title": "Engadget is turning 20",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-01"
    },
    {
        "author": "Javier Pastor",
        "description": "El lanzamiento de Sora por parte de OpenAI sigue provocando todo tipo de reacciones. Este modelo de IA generativa es capaz de crear vídeos de un minuto a partir de prompts de texto y hacerlo con resultados que a menudo son espectaculares. Para Elon Musk, no o…",
        "source": "Xataka.com",
        "url": "https://www.xataka.com/robotica-e-ia/elon-musk-afirma-que-tesla-tiene-mejor-modelo-mundo-para-crear-video-dificil-creer",
        "title": "Elon Musk afirma que Tesla tiene \"el mejor modelo del mundo\" para crear vídeo. Es difícil de creer",
        "category": null,
        "imgSrc": "https://i.blogs.es/39425f/musk12/840_560.jpeg",
        "publishDate": "2024-02-19"
    },
    {
        "author": "Eduardo Arcos",
        "description": "Apple canceló el desarrollo de su propio coche eléctrico tras diez años intentando conseguir lanzarlo. Conocido como Project Titan, la idea era desarrollar un vehículo que reflejara todos los principios de la compañía, junto a toda la tecnología y sobre todo …",
        "source": "Hipertextual",
        "url": "http://hipertextual.com/2024/02/por-que-apple-cancelo-el-apple-car-project-titan",
        "title": "Los 3 motivos por los que Apple canceló el Apple Car, su coche eléctrico y autónomo",
        "category": null,
        "imgSrc": "https://imgs.hipertextual.com/wp-content/uploads/2024/02/apple-car-1-scaled.jpg",
        "publishDate": "2024-02-29"
    },
    {
        "author": "Juli Clover",
        "description": "Apple spent more than $10 billion working on the Apple Car over the last decade, according to a report from The New York Times that details the issues the project faced during development. Apple first launched the project in 2014 and let it flounder for more …",
        "source": "MacRumors",
        "url": "https://www.macrumors.com/2024/02/28/apple-car-10-billion-spent/",
        "title": "Apple Spent More Than $10 Billion on Apple Car Before Canceling Project",
        "category": null,
        "imgSrc": "https://images.macrumors.com/t/giU-nsNl3nz4XcWhHArFx41hixg=/2500x/article-new/2020/12/Apple-car-wheel-icon-feature-teal.jpg",
        "publishDate": "2024-02-29"
    },
    {
        "author": null,
        "description": null,
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_cb8f4bcc-c871-457f-9472-1d1a8de9cf91",
        "title": "Tesla temporarily slashes prices for some Model Y cars in the US",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-02-10"
    },
    {
        "author": null,
        "description": "Environmentalists in Germany have occupied part of a forest earmarked for clearance.",
        "source": "BBC News",
        "url": "https://www.bbc.co.uk/news/av/world-europe-68464382",
        "title": "Tesla factory expansion plan sparks treetop protest",
        "category": null,
        "imgSrc": "https://ichef.bbci.co.uk/news/1024/branded_news/32D5/production/_132831031_p0hgg5yh.jpg",
        "publishDate": "2024-03-04"
    },
    {
        "author": "Rubén Andrés",
        "description": "Amanj Ali es el propietario de un pequeño local en el centro de Bury, una población a 15 km al norte de Manchester. Según publica el DailyMail británico, cuando en mayo de 2020 decidió abrir su local, pensó un nombre con chispa y que la gente pudiera recordar…",
        "source": "Xataka.com",
        "url": "https://www.xataka.com/empresas-y-economia/ingles-llamo-tesla-a-su-restaurante-a-elon-musk-no-le-gusto-se-ha-quedado-su-marca-multa-14-000-euros",
        "title": "Un inglés llamó Tesla a su restaurante. Se ha quedado sin su marca y con una multa de 14.000 euros",
        "category": null,
        "imgSrc": "https://i.blogs.es/b05262/tesla-pollo-frito/840_560.jpeg",
        "publishDate": "2024-02-12"
    },
    {
        "author": "Alberto de la Torre",
        "description": "Tesla ha detenido su producción de vehículos eléctricos en Alemania. No lo ha hecho por falta de piezas llegadas desde el Mar Rojo, como sí sucedió en el pasado mes de enero. Esta vez ha sido como consecuencia de un \"acto de sabotaje\" cometido por el grupo de…",
        "source": "Xataka.com",
        "url": "https://www.xataka.com/movilidad/tesla-detiene-su-produccion-alemania-grupo-extrema-izquierda-ha-saboteado-sus-lineas-electricas",
        "title": "Tesla detiene su producción en Alemania: un grupo de extrema izquierda ha saboteado sus líneas eléctricas",
        "category": null,
        "imgSrc": "https://i.blogs.es/0c0d50/4_gigafactoryberlinbrandenburg_04/840_560.jpeg",
        "publishDate": "2024-03-05"
    },
    {
        "author": "Nora Naughton",
        "description": "In order to deal with slowing EV demand, dealers and manufacturers are pouring on the discounts.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/electric-cars-evs-biggest-discounts-2024-2",
        "title": "The 10 most deeply discounted electric cars right now",
        "category": null,
        "imgSrc": "https://i.insider.com/65d8eef06080194819f9d544?width=1200&format=jpeg",
        "publishDate": "2024-02-25"
    },
    {
        "author": "Grace Kay",
        "description": "Twitter employees monitored Elon Musk's jets via a social-media account to anticipate when their boss was visiting the office,  a new book says.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/twitter-employees-elon-musk-jet-tracking-account-2024-2",
        "title": "Twitter employees monitored Elon Musk's jet-tracking account to see when he'd be in the office",
        "category": null,
        "imgSrc": "https://i.insider.com/65cbb0db6fcb546d2d4f379d?width=1200&format=jpeg",
        "publishDate": "2024-02-20"
    },
    {
        "author": "Jyoti Mann",
        "description": "The OpenAI chief gave a seemingly sarcastic response after Elon Musk filed a lawsuit against the company.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/sam-altman-elon-musk-twitter-post-lawsuit-filing-2024-3",
        "title": "Sam Altman appeared to troll Elon Musk by dredging up a years-old Twitter post",
        "category": null,
        "imgSrc": "https://i.insider.com/65e5a9dd90413ab8e1d8b1fc?width=1200&format=jpeg",
        "publishDate": "2024-03-04"
    },
    {
        "author": "Nora Naughton",
        "description": "Cybertruck's pesky smudges and unwanted attention are among one reporter's complaints.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/tesla-cybertruck-early-reviews-complaints-unique-2024-2",
        "title": "Cybertruck reviews are in, and the complaints are just as unique as Tesla's truck itself",
        "category": null,
        "imgSrc": "https://i.insider.com/65e0b9fc90413ab8e1d7e339?width=1200&format=jpeg",
        "publishDate": "2024-02-29"
    },
    {
        "author": "Matthew Fox",
        "description": "About 84% of Bezos' wealth is tied to his ownership stake in Amazon, which was worth $167 billion on Monday.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/jeff-bezos-beats-elon-musk-worlds-richest-person-200-billion-2024-3",
        "title": "Jeff Bezos surpasses Elon Musk to retake the world's richest person crown with a $200 billion fortune",
        "category": null,
        "imgSrc": "https://i.insider.com/65e74202ce7f1785b2e6551d?width=1200&format=jpeg",
        "publishDate": "2024-03-05"
    },
    {
        "author": "Reuters",
        "description": "Filed under:\n Green,Tesla,Car Buying,Electric\n Continue reading Tesla cuts prices by $1,000 for some Model Y cars in the U.S.\nTesla cuts prices by $1,000 for some Model Y cars in the U.S. originally appeared on Autoblog on Mon, 12 Feb 2024 10:27:00 EST. Pleas…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_caf7fa21-d4ec-44c0-87f2-7b462b489ad9",
        "title": "Tesla cuts prices by $1,000 for some Model Y cars in the U.S.",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-02-12"
    },
    {
        "author": "Reuters",
        "description": "Filed under:\n Green,Tesla,Crossover,SUV,Electric\n Continue reading Tesla raises prices of some Model Y vehicles in US\nTesla raises prices of some Model Y vehicles in US originally appeared on Autoblog on Fri, 1 Mar 2024 08:37:00 EST. Please see our terms for …",
        "source": "Autoblog",
        "url": "https://www.autoblog.com/2024/03/01/tesla-raises-prices-of-some-model-y-vehicles-in-us/",
        "title": "Tesla raises prices of some Model Y vehicles in US",
        "category": null,
        "imgSrc": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/03/01081954/ModelY_74.jpg",
        "publishDate": "2024-03-01"
    },
    {
        "author": "Reuters",
        "description": "Filed under:\n Green,Tesla,Electric\n Continue reading Tesla rolls out new incentives in China as price war escalates\nTesla rolls out new incentives in China as price war escalates originally appeared on Autoblog on Sat, 2 Mar 2024 08:00:00 EST. Please see our …",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_97f98d85-8f96-405a-aed7-b4bcf32f1c34",
        "title": "Tesla rolls out new incentives in China as price war escalates",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-02"
    },
    {
        "author": "Bloomberg",
        "description": "Filed under:\n Green,Tesla,Quick Spins,Electric\n Continue reading Tesla Cybertruck Quick Spin: It’s weird. It’s brash. It’s not bad\nTesla Cybertruck Quick Spin: It’s weird. It’s brash. It’s not bad originally appeared on Autoblog on Wed, 28 Feb 2024 12:19:00 E…",
        "source": "Autoblog",
        "url": "https://www.autoblog.com/2024/02/28/tesla-cybertruck-quick-spin-its-weird-its-brash-its-not-bad/",
        "title": "Tesla Cybertruck Quick Spin: It’s weird. It’s brash. It’s not bad",
        "category": null,
        "imgSrc": "https://s.aolcdn.com/images/dims3/GLOB/crop/1508x848+75+0/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2024/02/28114719/Cybertruck2.jpg",
        "publishDate": "2024-02-28"
    },
    {
        "author": "Kim Yonick",
        "description": "Filed under:\n Green,Honda,Lexus,Tesla,Car Buying,Economy Cars,Electric,Luxury,Performance\n Continue reading Tesla and Honda most searched vehicles ahead of spring market\nTesla and Honda most searched vehicles ahead of spring market originally appeared on Auto…",
        "source": "Autoblog",
        "url": "https://www.autoblog.com/article/tesla-and-honda-most-searched-vehicles-ahead-of-spring-market/",
        "title": "Tesla and Honda most searched vehicles ahead of spring market",
        "category": null,
        "imgSrc": "https://s.aolcdn.com/images/dims3/GLOB/crop/2976x1674+510+532/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2024/02/27133348/Model3-66.jpg",
        "publishDate": "2024-02-27"
    },
    {
        "author": "Chris Teague",
        "description": "Filed under:\n Green,Ford,Tesla,Ownership,Electric,Infrastructure\n Continue reading Ford's free Tesla NACS adapter surfaces online\nFord's free Tesla NACS adapter surfaces online originally appeared on Autoblog on Sun, 25 Feb 2024 09:00:00 EST. Please see our t…",
        "source": "Autoblog",
        "url": "https://www.autoblog.com/2024/02/25/ford-nacs-adapter-leak/",
        "title": "Ford's free Tesla NACS adapter surfaces online",
        "category": null,
        "imgSrc": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/02/23095134/GG4YFckboAA3Ygt.jpg",
        "publishDate": "2024-02-25"
    },
    {
        "author": "Joel Stocksdale",
        "description": "Filed under:\n Green,Chicago Auto Show,Tesla,Electric,Sedan,Driveway Tests\n Continue reading Tesla Model 3 Highland First Look: Exterior and Interior Review\nTesla Model 3 Highland First Look: Exterior and Interior Review originally appeared on Autoblog on Fri,…",
        "source": "Autoblog",
        "url": "https://www.autoblog.com/article/tesla-model-3-highland-preview/",
        "title": "Tesla Model 3 Highland First Look: Exterior and Interior Review",
        "category": null,
        "imgSrc": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/02/15162917/IMG_7591-copy.jpg",
        "publishDate": "2024-02-16"
    },
    {
        "author": "Chris Teague",
        "description": "Filed under:\n Tesla,Auctions,Car Dealers,Used Car Buying,Truck,Electric\n Continue reading Florida dealer lists used Tesla Cybertruck for almost $300,000\nFlorida dealer lists used Tesla Cybertruck for almost $300,000 originally appeared on Autoblog on Tue, 5 M…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_5fa952eb-4b03-4a22-9529-2b0281543295",
        "title": "Florida dealer lists used Tesla Cybertruck for almost $300,000",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-05"
    },
    {
        "author": "Reuters",
        "description": "Filed under:\n Government/Legal,Green,Plants/Manufacturing,Tesla\n Continue reading Tesla production in Germany halted after power outage as police suspect arson\nTesla production in Germany halted after power outage as police suspect arson originally appeared o…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d4590d56-881e-4bbb-afe0-5f72ef2103fe",
        "title": "Tesla production in Germany halted after power outage as police suspect arson",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-05"
    },
    {
        "author": "Yahoo Finance",
        "description": "Filed under:\n Green,Ford,Tesla,Ownership,Electric,Infrastructure\n Continue reading Ford EV owners can now use Tesla Superchargers — here's how it works\nFord EV owners can now use Tesla Superchargers — here's how it works originally appeared on Autoblog on Thu…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8f4aff9b-9033-4006-af2c-ee6a267f7ada",
        "title": "Ford EV owners can now use Tesla Superchargers — here's how it works",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-02-29"
    },
    {
        "author": "Reuters",
        "description": "Filed under:\n Green,Tesla,Convertible,Electric,Future Vehicles,Performance\n Continue reading Tesla aims to ship new Roadster next year, Musk says\nTesla aims to ship new Roadster next year, Musk says originally appeared on Autoblog on Wed, 28 Feb 2024 08:20:00…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_51473249-0d2c-479f-a256-5b525af8b2ce",
        "title": "Tesla aims to ship new Roadster next year, Musk says",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-02-28"
    },
    {
        "author": "Alberto de la Torre",
        "description": "Europa se ha lanzado a los brazos del coche eléctrico. Aunque, finalmente, se admitirán otras propuestas en el futuro, como el uso de combustibles sintéticos o la quema de hidrógeno (siempre que ambos sean neutros en carbono), a partir de 2035, lo cierto es q…",
        "source": "Xataka.com",
        "url": "https://www.xataka.com/movilidad/hubo-dia-que-toyota-tesla-desarrollaron-coche-electrico-juntos-fue-espejo-su-situacion-actual",
        "title": "Hubo un día en el que Toyota y Tesla desarrollaron un coche eléctrico juntos. Y fue un espejo de su situación actual",
        "category": null,
        "imgSrc": "https://i.blogs.es/e0ab9b/toyota-rav4_ev-2013-1600-02/840_560.jpeg",
        "publishDate": "2024-02-10"
    },
    {
        "author": "dpa",
        "description": "Wegen einer Zwangspause der Fertigung sieht die IG Metall bei der Tesla-Betriebsratswahl die Chancengleichheit in Gefahr. Der Wahlvorstand widerspricht.",
        "source": "heise online",
        "url": "https://www.heise.de/news/Tesla-Gruenheide-Streit-um-Wahl-des-Betriebsrats-9625016.html",
        "title": "Tesla Grünheide: Streit um Wahl des Betriebsrats",
        "category": null,
        "imgSrc": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/0/5/3/4/shutterstock_1491230117-36b47cfcfa304a88.jpg",
        "publishDate": "2024-02-11"
    },
    {
        "author": "Martin Franz, mit Material der dpa",
        "description": "In einem Bürgerentscheid hat sich eine Mehrheit gegen den Ausbau des Tesla-Werks in Grünheide entschieden. Die Pläne sind damit aber noch nicht vom Tisch.​",
        "source": "heise online",
        "url": "https://www.heise.de/news/Tesla-in-Gruenheide-Buerger-gegen-weiteren-Ausbau-9634156.html",
        "title": "Tesla in Grünheide: Bürger gegen weiteren Ausbau​",
        "category": null,
        "imgSrc": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/5/4/0/6/ModelY_76-60b9044332621e2e.jpg",
        "publishDate": "2024-02-21"
    },
    {
        "author": "Associated Press",
        "description": "Filed under:\n Government/Legal,Green,Plants/Manufacturing,Tesla,Electric\n Continue reading Germany's top prosecutor takes over Tesla fire investigation, suspecting terrorism\nGermany's top prosecutor takes over Tesla fire investigation, suspecting terrorism or…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_eb973abd-92f3-4d89-8468-e629e24498a9",
        "title": "Germany's top prosecutor takes over Tesla fire investigation, suspecting terrorism",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-08"
    },
    {
        "author": "Hartley Charlton",
        "description": "AI server makers are hoping to obtain orders from Apple ahead of its highly anticipated unveiling of new AI features later this year, according to Taiwanese research firm TrendForce.\n\n\n\n\n\nServer manufacturer Supermicro is reportedly \"aggressively expanding\" i…",
        "source": "MacRumors",
        "url": "https://www.macrumors.com/2024/02/29/ios-18-ai-server-industry-aiming-to-win-business/",
        "title": "iOS 18: AI Server Industry Aiming to Win Business From Apple",
        "category": null,
        "imgSrc": "https://images.macrumors.com/t/X8Mvv4-ay3fM6NWUohr6lbyLJmM=/1600x/article-new/2022/03/hey-siri-banner-apple.jpg",
        "publishDate": "2024-02-29"
    },
    {
        "author": "Kwan Wei Kevin Tan",
        "description": "\"I've watched Nvidia all my career actually since it's gone public. It's a very cyclical stock,\" Wood told The Wall Street Journal's Dan Rabouin.",
        "source": "Business Insider",
        "url": "https://www.businessinsider.com/cathie-wood-says-nvidia-has-become-check-the-box-stock-2024-2",
        "title": "Tesla investor Cathie Wood says she's been selling Nvidia stock for some time: 'It has become a check-the-box stock'",
        "category": null,
        "imgSrc": "https://i.insider.com/65d419a9f533b039a885241a?width=1200&format=jpeg",
        "publishDate": "2024-02-20"
    },
    {
        "author": "Engadget",
        "description": "Filed under:\n Government/Legal,Green,Technology,Electric,Infrastructure\n Continue reading Tesla has won the EV charging wars\nTesla has won the EV charging wars originally appeared on Autoblog on Tue, 13 Feb 2024 09:50:00 EST. Please see our terms for use of f…",
        "source": "Autoblog",
        "url": "https://www.autoblog.com/2024/02/13/tesla-has-won-the-ev-charging-wars/",
        "title": "Tesla has won the EV charging wars",
        "category": null,
        "imgSrc": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/02/13094736/file_photo__tesla_cars_charge_at_charging_stations_in_beijing.jpg",
        "publishDate": "2024-02-13"
    },
    {
        "author": "Suswati Basu",
        "description": "Elon Musk is suing OpenAI, its CEO Sam Altman, as well as others, accusing them of violating contractual commitments established […]\nThe post Elon Musk sues OpenAI and CEO Sam Altman over breach of contract appeared first on ReadWrite.",
        "source": "ReadWrite",
        "url": "https://readwrite.com/elon-musk-sues-openai-and-ceo-sam-altman-over-breach-of-contract/",
        "title": "Elon Musk sues OpenAI and CEO Sam Altman over breach of contract",
        "category": null,
        "imgSrc": "https://readwrite.com/wp-content/uploads/2024/03/Elon-Musk-sues-OpenAI-and-CEO-Sam-Altman-over-breach-of-contract.png",
        "publishDate": "2024-03-01"
    },
    {
        "author": "Rubén Andrés",
        "description": "La compra de X es un buen ejemplo de que cuando a Elon Musk se le pone algo entre ceja y ceja, termina por cumplirlo. Aunque la mayor parte de su entorno le aconsejara alejarse de la red social.\n<!-- BREAK 1 -->\nEn esta ocasión, el millonario sudafricano la e…",
        "source": "Xataka.com",
        "url": "https://www.xataka.com/empresas-y-economia/elon-musk-sigue-empenado-mover-sus-empresas-delaware-spacex-neuralink-tributan-texas",
        "title": "Elon Musk sigue empeñado en mover sus empresas de Delaware. SpaceX y Neuralink ya tributan en Texas",
        "category": null,
        "imgSrc": "https://i.blogs.es/5539d0/elon-musk/840_560.jpeg",
        "publishDate": "2024-02-15"
    },
    {
        "author": "Autoblog Staff, Autoblog",
        "description": "Filed under:\n Design/Style,Green,Podcasts,BMW,GM,Honda,Tesla,Automotive History,Electric\n We also discuss a couple of BMWsContinue reading Tesla Cybertruck, Honda Prologue and GM on hybrids and EVs | Autoblog Podcast #821\nTesla Cybertruck, Honda Prologue and …",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_9616d7b2-7370-4443-9125-31d04e184ff2",
        "title": "Tesla Cybertruck, Honda Prologue and GM on hybrids and EVs | Autoblog Podcast #821",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-03-01"
    },
    {
        "author": "Reuters",
        "description": "Filed under:\n Government/Legal,Green,Hirings/Firings/Layoffs,Plants/Manufacturing,Tesla\n Continue reading Tesla must face class action claims by 6,000 US workers in race bias case\nTesla must face class action claims by 6,000 US workers in race bias case origi…",
        "source": "Yahoo Entertainment",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_1857dcf9-d4ac-40d4-91c7-b77a7da6631f",
        "title": "Tesla must face class action claims by 6,000 US workers in race bias case",
        "category": null,
        "imgSrc": null,
        "publishDate": "2024-02-29"
    },
    {
        "author": "Ricardo Aguilar",
        "description": "Si el coche eléctrico quiere triunfar en España tiene que abaratarse, no hay demasiadas dudas a este respecto. Tesla lleva tiempo siendo cada vez más agresivo con su estrategia, llegando a rebajar hasta 10.000 euros sus principales modelos.\n<!-- BREAK 1 -->\nV…",
        "source": "Xataka.com",
        "url": "https://www.xataka.com/movilidad/volkswagen-continua-su-contraataque-a-tesla-rebaja-forma-agresiva-sus-coches-electricos",
        "title": "Volkswagen continua su contraataque a Tesla y rebaja de forma agresiva sus coches eléctricos",
        "category": null,
        "imgSrc": "https://i.blogs.es/ff77c9/id3/840_560.jpeg",
        "publishDate": "2024-02-14"
    },
    {
        "author": "By Maggie Astor",
        "description": "Amid Criticism, Britt Seeks to Defend Her Misleading Border Comments",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/us/politics/katie-britt-sotu-response-border.html",
        "title": "Katie Britt, a Republican senator from Alabama, suggested on Fox News that viewers should have parsed her wording to determine that a sex-trafficking case she referred to wasn’t recent.",
        "category": "U.S.",
        "imgSrc": "https://www.nytimes.com/images/2024/03/10/multimedia/10pol-swiper-britt-bkpq/10pol-swiper-britt-bkpq-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Shivani Gonzalez",
        "description": "Oscars 2024 Winners: Updating List",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/movies/oscars-winners-list.html",
        "title": "The list of winners for the 96th Academy Awards.",
        "category": "Movies",
        "imgSrc": "https://www.nytimes.com/images/2024/03/10/multimedia/10oscar-winners-list-03-mlhb/10oscar-winners-list-03-mlhb-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Megan Specia",
        "description": "A Sudden Turn in Voter Sentiment Helped Quash Changes to Ireland’s Constitution",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/world/europe/ireland-constitution-change-voters.html",
        "title": "The vote against the changes dealt a blow to a government that had hoped for an easy victory. But the outcome does not necessarily reflect a turn toward a more conservative electorate.",
        "category": "World",
        "imgSrc": "https://www.nytimes.com/images/2024/03/10/multimedia/10ireland-referendum-01-gkvq/10ireland-referendum-01-gkvq-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Callie Holtermann",
        "description": "On Oscars Carpet, Red Pins Planned to Call for Cease-Fire in Gaza",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/style/red-pins-gaza-ceasefire-oscars.html",
        "title": "Artists4Ceasefire asked many attendees to wear red lapel pins that also represent a call for increased humanitarian aid and the release of “all hostages.” Which stars will wear them remains to be seen.",
        "category": "Style",
        "imgSrc": "https://www.nytimes.com/images/2024/03/10/multimedia/10OSCARS-CEASEFIRE-PINS3-jpvc/10OSCARS-CEASEFIRE-PINS3-jpvc-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Sam Roberts",
        "description": "Kathy Goldman, Who Fought Hunger in New York City, Dies at 92",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/nyregion/kathy-goldman-dead.html",
        "title": "She helped introduce free breakfasts and lunches for schoolchildren and open pantries and soup kitchens for the poor.",
        "category": "New York",
        "imgSrc": "https://www.nytimes.com/images/2024/04/07/multimedia/07Goldman-5-zpjv/07Goldman-5-zpjv-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": null,
        "description": "Listening to the Homeless in America",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/opinion/homeless-in-america.html",
        "title": "Responses to a special Sunday Opinion feature. Also: The rewards of being a chef; atoning for past horrors.",
        "category": "Opinion",
        "imgSrc": "https://www.nytimes.com/images/2024/02/27/multimedia/27chefs-cover3-qfjm/27chefs-cover3-qfjm-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Sam Sifton",
        "description": "Your Grilled Cheese Needs Toum",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/dining/your-grilled-cheese-needs-toum.html",
        "title": "Just as your leeks need miso, and as your barley soup could use some kielbasa.",
        "category": "Food",
        "imgSrc": "https://www.nytimes.com/images/2023/01/27/multimedia/he-toum-grilled-cheese-mghb/he-toum-grilled-cheese-mghb-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Ali Watkins",
        "description": "New York State Trooper Among Those Killed in Military Helicopter Crash",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/us/helicopter-crash-texas-soldiers.html",
        "title": "John M. Grassia III was one of three people killed when a National Guard helicopter crashed along the U.S.-Mexico border in Texas.",
        "category": "U.S.",
        "imgSrc": "https://www.nytimes.com/images/2024/03/10/multimedia/10xp-soldiers1/10xp-soldiers1-articleLarge.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Shawn Hubler, Robert Chiarito and Alessandro Marazzi Sassoon",
        "description": "Who Needs Paper? Many Students Embrace the All-Digital SAT.",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/us/sat-digital-exam-students-reaction.html",
        "title": "Several test takers across the country found themselves in favor of the new format of the college admissions exam — even with some technical glitches.",
        "category": "U.S.",
        "imgSrc": "https://www.nytimes.com/images/2024/03/09/multimedia/09nat-SAT-voices1-pmfc/09nat-SAT-voices1-pmfc-articleLarge-v2.jpg",
        "publishDate": "2024-03-10"
    },
    {
        "author": "By Ezra Klein",
        "description": "Fine, Call It a Comeback",
        "source": "The New York Times",
        "url": "https://www.nytimes.com/2024/03/10/opinion/biden-state-union-message.html",
        "title": "The best line in Biden’s State of the Union was a surprise.",
        "category": "Opinion",
        "imgSrc": "https://www.nytimes.com/images/2024/03/10/multimedia/10klein1-ljbp/10klein1-ljbp-articleLarge.jpg",
        "publishDate": "2024-03-10"
    }
]

