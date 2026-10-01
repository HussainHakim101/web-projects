/**
 * Zodiac Signs Data
 * Complete dataset for all 12 zodiac signs with detailed information.
 */

const ZODIAC_DATA = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    unicodeSymbol: "♈",
    dateRange: "March 21 – April 19",
    element: "Fire",
    elementIcon: "🔥",
    rulingPlanet: "Mars",
    modality: "Cardinal",
    symbolName: "The Ram",
    tagline: "The fearless trailblazer of the zodiac",
    luckyColors: ["Red", "Orange", "Gold"],
    luckyNumbers: [1, 8, 17],
    strengths: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic", "Honest", "Passionate"],
    weaknesses: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
    personality: "Aries is the first sign of the zodiac, and that's exactly how those born under this sign see themselves: first. Aries are the leaders of the pack, pioneers and trailblazers, boldly going where no one has gone before. Their upbeat and magnetic personality often entices others to follow their lead because Aries' personality exudes confidence and enthusiasm.",
    love: "In love, Aries are passionate and direct. They pursue their romantic interests with the same intensity they bring to everything else. They need a partner who can match their energy and isn't afraid of their fiery nature. Aries fall in love quickly and hard, bringing excitement and adventure to their relationships.",
    career: "Aries thrive in leadership roles and competitive environments. They excel as entrepreneurs, athletes, military leaders, and in any role that requires quick decision-making and bold action. Their natural leadership abilities and drive make them excellent managers and executives.",
    compatibility: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    facts: [
      "Aries is ruled by Mars, the planet of war and energy",
      "The Aries constellation is one of the faintest in the zodiac",
      "Famous Aries include Leonardo da Vinci, Lady Gaga, and Robert Downey Jr.",
      "Aries season marks the beginning of spring in the Northern Hemisphere"
    ],
    accentColor: "#FF4136",
    glowColor: "rgba(255, 65, 54, 0.4)",
    gradientColors: ["#FF4136", "#FF6B35", "#FF8C42"],
    constellation: [
      [30, 25], [45, 30], [55, 45], [50, 60], [60, 75]
    ]
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    unicodeSymbol: "♉",
    dateRange: "April 20 – May 20",
    element: "Earth",
    elementIcon: "🌍",
    rulingPlanet: "Venus",
    modality: "Fixed",
    symbolName: "The Bull",
    tagline: "The steadfast guardian of earthly pleasures",
    luckyColors: ["Green", "Pink", "Copper"],
    luckyNumbers: [2, 6, 9, 12, 24],
    strengths: ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
    weaknesses: ["Stubborn", "Possessive", "Uncompromising", "Materialistic"],
    personality: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Taurus is ruled by Venus, the enchanting planet that governs love, beauty, and money.",
    love: "Taurus values loyalty and commitment above all in relationships. They are devoted partners who show love through physical affection, thoughtful gifts, and creating a beautiful shared life. They seek stability and security, preferring long-term partnerships over casual flings.",
    career: "Taurus excels in careers related to finance, art, music, and agriculture. Their patient and methodical approach makes them excellent accountants, bankers, architects, and chefs. They thrive in environments where they can build something tangible and lasting.",
    compatibility: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    facts: [
      "Taurus is the second sign of the zodiac and is ruled by Venus",
      "The Taurus constellation contains the famous Pleiades star cluster",
      "Famous Taureans include Queen Elizabeth II, Adele, and Dwayne Johnson",
      "Taurus is associated with the myth of Zeus transforming into a bull"
    ],
    accentColor: "#2ECC40",
    glowColor: "rgba(46, 204, 64, 0.4)",
    gradientColors: ["#2ECC40", "#27AE60", "#1ABC9C"],
    constellation: [
      [25, 20], [35, 35], [50, 30], [65, 25], [55, 50], [45, 60], [70, 55]
    ]
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    unicodeSymbol: "♊",
    dateRange: "May 21 – June 20",
    element: "Air",
    elementIcon: "💨",
    rulingPlanet: "Mercury",
    modality: "Mutable",
    symbolName: "The Twins",
    tagline: "The curious messenger of infinite minds",
    luckyColors: ["Yellow", "Light Green", "Silver"],
    luckyNumbers: [5, 7, 14, 23],
    strengths: ["Gentle", "Affectionate", "Curious", "Adaptable", "Quick learner", "Witty"],
    weaknesses: ["Nervous", "Inconsistent", "Indecisive", "Superficial"],
    personality: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative, and ready for fun, with a tendency to suddenly get serious, thoughtful, and restless. Gemini are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything.",
    love: "Gemini needs intellectual stimulation in love. They are attracted to wit, humor, and intelligence. Communication is their love language, and they need a partner who can keep up with their ever-changing interests. They bring excitement, variety, and endless conversation to relationships.",
    career: "Gemini thrives in roles that involve communication, variety, and mental stimulation. They excel as writers, journalists, teachers, public speakers, and in marketing. Their adaptability makes them valuable in fast-paced, ever-changing work environments.",
    compatibility: ["Libra", "Aquarius", "Aries", "Leo"],
    facts: [
      "Gemini is represented by the Twins Castor and Pollux from Greek mythology",
      "The Gemini constellation is home to several notable deep-sky objects",
      "Famous Gemini include Marilyn Monroe, Kanye West, and Johnny Depp",
      "Gemini is the most talkative sign of the zodiac"
    ],
    accentColor: "#FFDC00",
    glowColor: "rgba(255, 220, 0, 0.4)",
    gradientColors: ["#FFDC00", "#F0C040", "#E8A830"],
    constellation: [
      [30, 15], [30, 35], [30, 55], [30, 75], [60, 15], [60, 35], [60, 55], [60, 75], [45, 45]
    ]
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    unicodeSymbol: "♋",
    dateRange: "June 21 – July 22",
    element: "Water",
    elementIcon: "💧",
    rulingPlanet: "Moon",
    modality: "Cardinal",
    symbolName: "The Crab",
    tagline: "The intuitive protector of hearts and home",
    luckyColors: ["White", "Silver", "Sea Green"],
    luckyNumbers: [2, 3, 15, 20],
    strengths: ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic", "Persuasive"],
    weaknesses: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
    personality: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close, reflecting the nurturing and protective nature of the crab.",
    love: "Cancer is deeply romantic and values emotional security above all. They are nurturing partners who create warm, comfortable homes filled with love. They seek deep emotional connections and are incredibly loyal once they commit. Their ideal partner is someone who appreciates their caring nature.",
    career: "Cancer excels in caregiving professions such as nursing, teaching, social work, and hospitality. Their intuitive nature also makes them excellent in human resources, real estate, and creative arts. They thrive in environments where they can nurture and support others.",
    compatibility: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    facts: [
      "Cancer is ruled by the Moon, governing emotions and intuition",
      "The Cancer constellation is the faintest of the zodiac constellations",
      "Famous Cancers include Princess Diana, Tom Hanks, and Meryl Streep",
      "Cancer season coincides with the summer solstice in the Northern Hemisphere"
    ],
    accentColor: "#B8D4E3",
    glowColor: "rgba(184, 212, 227, 0.4)",
    gradientColors: ["#B8D4E3", "#89B4C8", "#5A9AB5"],
    constellation: [
      [35, 30], [45, 40], [55, 35], [65, 45], [50, 55]
    ]
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    unicodeSymbol: "♌",
    dateRange: "July 23 – August 22",
    element: "Fire",
    elementIcon: "🔥",
    rulingPlanet: "Sun",
    modality: "Fixed",
    symbolName: "The Lion",
    tagline: "The radiant ruler with a heart of gold",
    luckyColors: ["Gold", "Orange", "Red"],
    luckyNumbers: [1, 3, 10, 19],
    strengths: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
    weaknesses: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
    personality: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant, and extremely difficult to resist. They can achieve anything they want, whether it's about work or personal life. Leo is a fire sign, and their warmth and enthusiasm spread to everyone around them.",
    love: "Leo loves being in love. They are generous, romantic partners who enjoy grand gestures and passionate displays of affection. They need admiration and appreciation from their partner. In return, they offer unwavering loyalty, warmth, and protection to those they love.",
    career: "Leo shines in roles that put them center stage. They excel as actors, entertainers, CEOs, politicians, and creative directors. Their natural charisma and leadership abilities make them effective in management positions. They thrive when they can inspire and lead others.",
    compatibility: ["Aries", "Sagittarius", "Gemini", "Libra"],
    facts: [
      "Leo is ruled by the Sun, the center of our solar system",
      "The Leo constellation contains the bright star Regulus",
      "Famous Leos include Barack Obama, Madonna, and Jennifer Lopez",
      "Leo is associated with the Nemean Lion from Greek mythology"
    ],
    accentColor: "#FF851B",
    glowColor: "rgba(255, 133, 27, 0.4)",
    gradientColors: ["#FF851B", "#FFB347", "#FFD700"],
    constellation: [
      [25, 20], [35, 30], [50, 25], [60, 35], [55, 50], [65, 60], [50, 70], [40, 55]
    ]
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    unicodeSymbol: "♍",
    dateRange: "August 23 – September 22",
    element: "Earth",
    elementIcon: "🌍",
    rulingPlanet: "Mercury",
    modality: "Mutable",
    symbolName: "The Maiden",
    tagline: "The meticulous architect of perfection",
    luckyColors: ["Navy Blue", "Grey", "Beige"],
    luckyNumbers: [5, 14, 15, 23, 32],
    strengths: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical", "Detail-oriented"],
    weaknesses: ["Shyness", "Worry", "Overly critical", "All work and no play"],
    personality: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. Virgo's precision and clarity of thought makes them invaluable in any situation requiring careful analysis.",
    love: "Virgo approaches love with the same thoughtfulness they bring to everything else. They show affection through acts of service and attention to their partner's needs. They seek a partner who appreciates their dedication and doesn't take advantage of their giving nature.",
    career: "Virgo excels in careers that require precision and attention to detail. They make excellent doctors, nurses, editors, writers, analysts, and accountants. Their methodical nature and desire to help others make them invaluable in healthcare and service-oriented professions.",
    compatibility: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    facts: [
      "Virgo is the largest constellation of the zodiac",
      "The brightest star in Virgo is Spica, a blue-white giant",
      "Famous Virgos include Beyoncé, Keanu Reeves, and Mother Teresa",
      "Virgo is the only feminine figure among the zodiac constellations"
    ],
    accentColor: "#7FDBFF",
    glowColor: "rgba(127, 219, 255, 0.4)",
    gradientColors: ["#7FDBFF", "#5BC0DE", "#3A9FBF"],
    constellation: [
      [20, 25], [30, 40], [45, 35], [55, 50], [65, 40], [75, 55], [60, 65], [45, 70]
    ]
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    unicodeSymbol: "♎",
    dateRange: "September 23 – October 22",
    element: "Air",
    elementIcon: "💨",
    rulingPlanet: "Venus",
    modality: "Cardinal",
    symbolName: "The Scales",
    tagline: "The elegant harmonizer of cosmic balance",
    luckyColors: ["Pink", "Blue", "Lavender"],
    luckyNumbers: [4, 6, 13, 15, 24],
    strengths: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social", "Charming"],
    weaknesses: ["Indecisive", "Avoids confrontation", "Self-pity", "People-pleasing"],
    personality: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, seeking someone with the ability to be their mirror. These individuals are fascinated by balance and symmetry, constantly chasing justice and equality, realizing through life that the only thing that should truly be important to them is their inner core of personality.",
    love: "Libra is in love with the idea of love. They are romantic, charming partners who seek harmony and balance in relationships. They are natural peacemakers who avoid conflict and strive to create beautiful, harmonious partnerships. Their ideal relationship is one of equal partnership and mutual respect.",
    career: "Libra thrives in careers that involve diplomacy, aesthetics, and social interaction. They excel as lawyers, diplomats, designers, art directors, and counselors. Their ability to see multiple perspectives makes them excellent mediators and negotiators.",
    compatibility: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    facts: [
      "Libra is the only zodiac sign represented by an inanimate object",
      "The scales of Libra were originally part of the Scorpio constellation",
      "Famous Libras include Mahatma Gandhi, Kim Kardashian, and John Lennon",
      "Libra season marks the autumn equinox in the Northern Hemisphere"
    ],
    accentColor: "#F78DA7",
    glowColor: "rgba(247, 141, 167, 0.4)",
    gradientColors: ["#F78DA7", "#E066A0", "#C94C90"],
    constellation: [
      [30, 40], [45, 25], [60, 40], [45, 55], [30, 65], [60, 65]
    ]
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    unicodeSymbol: "♏",
    dateRange: "October 23 – November 21",
    element: "Water",
    elementIcon: "💧",
    rulingPlanet: "Pluto & Mars",
    modality: "Fixed",
    symbolName: "The Scorpion",
    tagline: "The intense alchemist of transformation",
    luckyColors: ["Scarlet", "Black", "Maroon"],
    luckyNumbers: [8, 11, 18, 22],
    strengths: ["Resourceful", "Brave", "Passionate", "Stubborn", "Strategic", "Loyal"],
    weaknesses: ["Distrusting", "Jealous", "Secretive", "Violent", "Manipulative"],
    personality: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions, navigating the depths of the psyche with fearless determination.",
    love: "Scorpio loves with an intensity that few other signs can match. They are deeply passionate, fiercely loyal, and protective of their partners. Trust is paramount for Scorpio, and once earned, they give themselves completely. They seek transformative, all-consuming connections.",
    career: "Scorpio excels in careers that involve investigation, research, and transformation. They make excellent surgeons, detectives, psychologists, researchers, and financial advisors. Their intensity and focus make them formidable in any career they choose.",
    compatibility: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    facts: [
      "Scorpio is ruled by Pluto, the planet of transformation and regeneration",
      "The Scorpio constellation contains the red supergiant star Antares",
      "Famous Scorpios include Leonardo DiCaprio, Bill Gates, and Marie Curie",
      "Scorpio is the sign most associated with the concept of rebirth"
    ],
    accentColor: "#DC143C",
    glowColor: "rgba(220, 20, 60, 0.4)",
    gradientColors: ["#DC143C", "#8B0000", "#4A0020"],
    constellation: [
      [20, 30], [30, 40], [40, 35], [50, 45], [60, 40], [70, 50], [75, 60], [80, 55]
    ]
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    unicodeSymbol: "♐",
    dateRange: "November 22 – December 21",
    element: "Fire",
    elementIcon: "🔥",
    rulingPlanet: "Jupiter",
    modality: "Mutable",
    symbolName: "The Archer",
    tagline: "The adventurous seeker of universal truth",
    luckyColors: ["Purple", "Dark Blue", "Plum"],
    luckyNumbers: [3, 7, 9, 12, 21],
    strengths: ["Generous", "Idealistic", "Great sense of humor", "Adventurous", "Optimistic"],
    weaknesses: ["Promises more than can deliver", "Impatient", "Tactless", "Restless"],
    personality: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is an extrovert, always optimistic, full of enthusiasm, and ready for changes. They transform their thoughts into concrete actions and will do anything to achieve their goals.",
    love: "Sagittarius approaches love as another great adventure. They are fun, spontaneous, and passionate partners who value freedom and independence. They need a partner who can keep up with their adventurous spirit and doesn't try to cage them. They bring joy, humor, and excitement to relationships.",
    career: "Sagittarius thrives in careers that offer freedom, travel, and intellectual stimulation. They excel as professors, philosophers, travel writers, ambassadors, and in import/export businesses. Their optimism and vision make them excellent entrepreneurs.",
    compatibility: ["Aries", "Leo", "Libra", "Aquarius"],
    facts: [
      "Sagittarius is ruled by Jupiter, the largest planet in our solar system",
      "The center of the Milky Way lies in the direction of Sagittarius",
      "Famous Sagittarians include Taylor Swift, Bruce Lee, and Walt Disney",
      "Sagittarius is associated with the centaur Chiron from Greek mythology"
    ],
    accentColor: "#B10DC9",
    glowColor: "rgba(177, 13, 201, 0.4)",
    gradientColors: ["#B10DC9", "#8E44AD", "#6C3483"],
    constellation: [
      [25, 20], [35, 35], [45, 25], [55, 40], [50, 55], [65, 50], [60, 70]
    ]
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    unicodeSymbol: "♑",
    dateRange: "December 22 – January 19",
    element: "Earth",
    elementIcon: "🌍",
    rulingPlanet: "Saturn",
    modality: "Cardinal",
    symbolName: "The Sea-Goat",
    tagline: "The disciplined mountaineer of ambition",
    luckyColors: ["Brown", "Black", "Dark Green"],
    luckyNumbers: [4, 8, 13, 22],
    strengths: ["Responsible", "Disciplined", "Self-control", "Good managers", "Ambitious"],
    weaknesses: ["Know-it-all", "Unforgiving", "Condescending", "Pessimistic"],
    personality: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time.",
    love: "Capricorn approaches love with the same seriousness they bring to their career. They are loyal, committed partners who show love through providing security and stability. They may not be the most expressive, but their actions speak volumes. They seek a partner who shares their values and ambitions.",
    career: "Capricorn is the most career-oriented sign of the zodiac. They excel as CEOs, politicians, financial managers, engineers, and administrators. Their discipline and ambition drive them to the top of whatever field they choose. They are natural strategists who think long-term.",
    compatibility: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    facts: [
      "Capricorn is ruled by Saturn, the planet of discipline and maturity",
      "The Capricorn constellation is one of the oldest recognized constellations",
      "Famous Capricorns include Martin Luther King Jr., Michelle Obama, and LeBron James",
      "Capricorn season spans the winter solstice in the Northern Hemisphere"
    ],
    accentColor: "#85744E",
    glowColor: "rgba(133, 116, 78, 0.4)",
    gradientColors: ["#85744E", "#6B5B3F", "#524430"],
    constellation: [
      [25, 30], [35, 20], [50, 25], [65, 30], [70, 45], [60, 55], [45, 60], [30, 50]
    ]
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    unicodeSymbol: "♒",
    dateRange: "January 20 – February 18",
    element: "Air",
    elementIcon: "💨",
    rulingPlanet: "Uranus & Saturn",
    modality: "Fixed",
    symbolName: "The Water Bearer",
    tagline: "The visionary rebel of the future",
    luckyColors: ["Electric Blue", "Turquoise", "Silver"],
    luckyNumbers: [4, 7, 11, 22, 29],
    strengths: ["Progressive", "Original", "Independent", "Humanitarian", "Inventive"],
    weaknesses: ["Runs from emotional expression", "Temperamental", "Uncompromising", "Aloof"],
    personality: "Aquarius-born are shy and quiet, but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They feel comfortable being a group of people and are able to see without prejudice, on both sides, which makes them people who can easily solve problems. They are progressive, original, and independent thinkers who champion humanitarian causes.",
    love: "Aquarius approaches love with an intellectual curiosity. They need mental stimulation and friendship as the foundation of any relationship. They value independence and need a partner who respects their need for space. They show love through shared ideals and intellectual connection.",
    career: "Aquarius thrives in careers that involve innovation, technology, and humanitarian work. They excel as scientists, inventors, programmers, social workers, and activists. Their forward-thinking nature makes them excellent in technology and research-oriented fields.",
    compatibility: ["Gemini", "Libra", "Aries", "Sagittarius"],
    facts: [
      "Despite its name, Aquarius is an Air sign, not a Water sign",
      "Aquarius is ruled by Uranus, the planet of innovation and rebellion",
      "Famous Aquarians include Abraham Lincoln, Oprah Winfrey, and Bob Marley",
      "The Age of Aquarius is a concept in astrology referring to a new era of enlightenment"
    ],
    accentColor: "#00D4FF",
    glowColor: "rgba(0, 212, 255, 0.4)",
    gradientColors: ["#00D4FF", "#0099CC", "#006699"],
    constellation: [
      [20, 25], [30, 40], [40, 30], [55, 45], [65, 35], [75, 50], [70, 65]
    ]
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    unicodeSymbol: "♓",
    dateRange: "February 19 – March 20",
    element: "Water",
    elementIcon: "💧",
    rulingPlanet: "Neptune & Jupiter",
    modality: "Mutable",
    symbolName: "The Fish",
    tagline: "The dreamy mystic of infinite compassion",
    luckyColors: ["Mauve", "Lilac", "Sea Green"],
    luckyNumbers: [3, 9, 12, 15, 18, 24],
    strengths: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
    weaknesses: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality", "Can be a victim or a martyr"],
    personality: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity. They are the most intuitive sign of the zodiac, possessing an almost psychic connection to the emotional undercurrents around them.",
    love: "Pisces are hopeless romantics who love deeply and unconditionally. They are empathetic, compassionate partners who intuitively understand their loved one's needs. They seek a soulmate connection and are willing to sacrifice for love. Their ideal relationship is deeply spiritual and emotionally fulfilling.",
    career: "Pisces thrives in creative and healing professions. They excel as musicians, artists, photographers, therapists, nurses, and spiritual leaders. Their intuitive nature and empathy make them excellent healers and counselors. They find fulfillment in work that serves a higher purpose.",
    compatibility: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    facts: [
      "Pisces is the last sign of the zodiac, embodying the wisdom of all signs",
      "The Pisces constellation represents two fish tied together swimming in opposite directions",
      "Famous Pisces include Albert Einstein, Rihanna, and Steve Jobs",
      "Pisces season marks the end of winter and the approach of spring"
    ],
    accentColor: "#9B59B6",
    glowColor: "rgba(155, 89, 182, 0.4)",
    gradientColors: ["#9B59B6", "#8E44AD", "#6C3483"],
    constellation: [
      [20, 40], [30, 30], [40, 45], [50, 35], [60, 50], [70, 40], [75, 55], [65, 65]
    ]
  }
];

/* Element color mapping for badges */
const ELEMENT_COLORS = {
  Fire:  { bg: "rgba(255, 65, 54, 0.2)", border: "rgba(255, 65, 54, 0.5)", text: "#FF6B6B" },
  Earth: { bg: "rgba(46, 204, 64, 0.2)", border: "rgba(46, 204, 64, 0.5)", text: "#6BFF8A" },
  Air:   { bg: "rgba(127, 219, 255, 0.2)", border: "rgba(127, 219, 255, 0.5)", text: "#7FDBFF" },
  Water: { bg: "rgba(155, 89, 182, 0.2)", border: "rgba(155, 89, 182, 0.5)", text: "#BB8FCE" }
};
