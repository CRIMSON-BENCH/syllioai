export interface InternationalSchool {
  name: string;
  slug: string;
  city: string;
  country: string;
  countrySlug: string;
  citySlug: string;
  continent: 'europe' | 'asia' | 'north-america' | 'south-america' | 'africa' | 'oceania' | 'middle-east';
  enrollment: number;
  grades: string;
  type: 'public' | 'grammar' | 'academy' | 'comprehensive' | 'international' | 'private';
  curriculum: string;
}

type ST = [string, string, string, string, string, string, InternationalSchool['continent'], number, string, InternationalSchool['type'], string];

const raw: ST[] = [
  // ── UNITED KINGDOM — London ──
  ['Newstead Wood School', 'newstead-wood-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1300, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Henrietta Barnett School', 'henrietta-barnett-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1100, 'Years 7–13', 'grammar', 'A-Levels'],
  ["Queen Elizabeth's School Barnet", 'queen-elizabeths-school-barnet', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1500, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Latymer School Edmonton', 'latymer-school-edmonton', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1200, 'Years 7–13', 'grammar', 'A-Levels'],
  ["St Olave's Grammar School", 'st-olaves-grammar-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 900, 'Years 7–13', 'grammar', 'A-Levels'],
  ["Wilson's School", 'wilsons-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1350, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Tiffin School', 'tiffin-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1200, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Tiffin Girls School', 'tiffin-girls-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1150, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Lady Eleanor Holles School', 'lady-eleanor-holles-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 900, 'Years 7–13', 'private', 'A-Levels'],
  ['Grey Coat Hospital', 'grey-coat-hospital', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1100, 'Years 7–13', 'academy', 'A-Levels'],
  ['Watford Grammar School for Boys', 'watford-grammar-school-for-boys', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1400, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Watford Grammar School for Girls', 'watford-grammar-school-for-girls', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1300, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Latymer Upper School', 'latymer-upper-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1200, 'Years 7–13', 'private', 'A-Levels'],
  ['City of London School', 'city-of-london-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 950, 'Years 7–13', 'private', 'A-Levels'],
  ['City of London School for Girls', 'city-of-london-school-for-girls', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 750, 'Years 7–13', 'private', 'A-Levels'],
  ['Westminster School', 'westminster-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 750, 'Years 7–13', 'private', 'A-Levels'],
  ['St Paul\'s School London', 'st-pauls-school-london', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 850, 'Years 7–13', 'private', 'A-Levels'],
  ['King\'s College School Wimbledon', 'kings-college-school-wimbledon', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 850, 'Years 7–13', 'private', 'A-Levels'],

  // ── UNITED KINGDOM — South East ──
  ['Reading School', 'reading-school', 'Reading', 'United Kingdom', 'united-kingdom', 'reading', 'europe', 1100, 'Years 7–13', 'grammar', 'A-Levels'],
  ["Dr Challoner's Grammar School", 'dr-challoners-grammar-school', 'Reading', 'United Kingdom', 'united-kingdom', 'reading', 'europe', 1000, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Judd School', 'judd-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 950, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Simon Langton Grammar School for Boys', 'simon-langton-grammar-school-for-boys', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1100, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Aylesbury Grammar School', 'aylesbury-grammar-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1050, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Beaconsfield High School', 'beaconsfield-high-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 900, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Tonbridge Grammar School', 'tonbridge-grammar-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 900, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Weald of Kent Grammar School', 'weald-of-kent-grammar-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 1050, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Skinners\' School', 'skinners-school', 'London', 'United Kingdom', 'united-kingdom', 'london', 'europe', 850, 'Years 7–13', 'grammar', 'A-Levels'],

  // ── UNITED KINGDOM — Midlands ──
  ['King Edward\'s School Birmingham', 'king-edwards-school-birmingham', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 850, 'Years 7–13', 'private', 'A-Levels'],
  ['King Edward VI High School for Girls', 'king-edward-vi-high-school-for-girls', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 600, 'Years 7–13', 'private', 'A-Levels'],
  ['Handsworth Grammar School', 'handsworth-grammar-school', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 1200, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Sutton Coldfield Grammar School for Girls', 'sutton-coldfield-grammar-school-for-girls', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 1000, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Wolverhampton Grammar School', 'wolverhampton-grammar-school', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 900, 'Years 7–13', 'private', 'A-Levels'],
  ['Lawrence Sheriff School', 'lawrence-sheriff-school', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 850, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Rugby High School', 'rugby-high-school', 'Birmingham', 'United Kingdom', 'united-kingdom', 'birmingham', 'europe', 900, 'Years 7–13', 'grammar', 'A-Levels'],

  // ── UNITED KINGDOM — North West ──
  ['Manchester Grammar School', 'manchester-grammar-school', 'Manchester', 'United Kingdom', 'united-kingdom', 'manchester', 'europe', 1500, 'Years 7–13', 'private', 'A-Levels'],
  ['Altrincham Grammar School for Boys', 'altrincham-grammar-school-for-boys', 'Manchester', 'United Kingdom', 'united-kingdom', 'manchester', 'europe', 1200, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Altrincham Grammar School for Girls', 'altrincham-grammar-school-for-girls', 'Manchester', 'United Kingdom', 'united-kingdom', 'manchester', 'europe', 1150, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Sale Grammar School', 'sale-grammar-school', 'Manchester', 'United Kingdom', 'united-kingdom', 'manchester', 'europe', 1100, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Stretford Grammar School', 'stretford-grammar-school', 'Manchester', 'United Kingdom', 'united-kingdom', 'manchester', 'europe', 1000, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Urmston Grammar School', 'urmston-grammar-school', 'Manchester', 'United Kingdom', 'united-kingdom', 'manchester', 'europe', 1050, 'Years 7–13', 'grammar', 'A-Levels'],

  // ── UNITED KINGDOM — Yorkshire ──
  ['Bradford Grammar School', 'bradford-grammar-school', 'Leeds', 'United Kingdom', 'united-kingdom', 'leeds', 'europe', 1100, 'Years 7–13', 'private', 'A-Levels'],
  ['Leeds Grammar School', 'leeds-grammar-school', 'Leeds', 'United Kingdom', 'united-kingdom', 'leeds', 'europe', 1200, 'Years 7–13', 'private', 'A-Levels'],
  ["Ermysted's Grammar School", 'ermysteds-grammar-school', 'Leeds', 'United Kingdom', 'united-kingdom', 'leeds', 'europe', 750, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Ripon Grammar School', 'ripon-grammar-school', 'Leeds', 'United Kingdom', 'united-kingdom', 'leeds', 'europe', 900, 'Years 7–13', 'grammar', 'A-Levels'],
  ["Skipton Girls' High School", 'skipton-girls-high-school', 'Leeds', 'United Kingdom', 'united-kingdom', 'leeds', 'europe', 850, 'Years 7–13', 'grammar', 'A-Levels'],
  ['Pocklington School', 'pocklington-school', 'Leeds', 'United Kingdom', 'united-kingdom', 'leeds', 'europe', 800, 'Years 7–13', 'private', 'A-Levels'],

  // ── UNITED KINGDOM — Scotland ──
  ["George Watson's College", 'george-watsons-college', 'Edinburgh', 'United Kingdom', 'united-kingdom', 'edinburgh', 'europe', 2500, 'Years 1–13', 'private', 'Scottish Highers'],
  ["George Heriot's School", 'george-heriots-school', 'Edinburgh', 'United Kingdom', 'united-kingdom', 'edinburgh', 'europe', 1700, 'Years 1–13', 'private', 'Scottish Highers'],
  ['Edinburgh Academy', 'edinburgh-academy', 'Edinburgh', 'United Kingdom', 'united-kingdom', 'edinburgh', 'europe', 1000, 'Years 5–13', 'private', 'Scottish Highers'],
  ["Hutchesons' Grammar School", 'hutchesons-grammar-school', 'Glasgow', 'United Kingdom', 'united-kingdom', 'glasgow', 'europe', 1900, 'Years 1–13', 'private', 'Scottish Highers'],
  ['High School of Glasgow', 'high-school-of-glasgow', 'Glasgow', 'United Kingdom', 'united-kingdom', 'glasgow', 'europe', 1100, 'Years 5–13', 'private', 'Scottish Highers'],
  ['Aberdeen Grammar School', 'aberdeen-grammar-school', 'Aberdeen', 'United Kingdom', 'united-kingdom', 'edinburgh', 'europe', 1400, 'Years 7–13', 'public', 'Scottish Highers'],
  ['Jordanhill School', 'jordanhill-school', 'Glasgow', 'United Kingdom', 'united-kingdom', 'glasgow', 'europe', 1300, 'Years 1–13', 'public', 'Scottish Highers'],
  ['St Aloysius\' College', 'st-aloysius-college', 'Glasgow', 'United Kingdom', 'united-kingdom', 'glasgow', 'europe', 1300, 'Years 1–13', 'private', 'Scottish Highers'],
  ['Dollar Academy', 'dollar-academy', 'Edinburgh', 'United Kingdom', 'united-kingdom', 'edinburgh', 'europe', 1200, 'Years 5–13', 'private', 'Scottish Highers'],
  ['Dundee High School', 'dundee-high-school', 'Edinburgh', 'United Kingdom', 'united-kingdom', 'edinburgh', 'europe', 1100, 'Years 1–13', 'private', 'Scottish Highers'],

  // ── UNITED KINGDOM — Wales ──
  ['Cardiff Sixth Form College', 'cardiff-sixth-form-college', 'Cardiff', 'United Kingdom', 'united-kingdom', 'cardiff', 'europe', 350, 'Years 12–13', 'private', 'A-Levels'],
  ['Ysgol Gyfun Gymraeg Glantaf', 'ysgol-gyfun-gymraeg-glantaf', 'Cardiff', 'United Kingdom', 'united-kingdom', 'cardiff', 'europe', 1100, 'Years 7–13', 'public', 'A-Levels'],
  ['St John\'s College Cardiff', 'st-johns-college-cardiff', 'Cardiff', 'United Kingdom', 'united-kingdom', 'cardiff', 'europe', 400, 'Years 12–13', 'private', 'A-Levels'],
  ['Christ College Brecon', 'christ-college-brecon', 'Cardiff', 'United Kingdom', 'united-kingdom', 'cardiff', 'europe', 450, 'Years 7–13', 'private', 'A-Levels'],

  // ── AUSTRALIA — NSW ──
  ['James Ruse Agricultural High School', 'james-ruse-agricultural-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1050, 'Years 7–12', 'public', 'HSC'],
  ['Baulkham Hills High School', 'baulkham-hills-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1400, 'Years 7–12', 'public', 'HSC'],
  ['Normanhurst Boys High School', 'normanhurst-boys-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1050, 'Years 7–12', 'public', 'HSC'],
  ['Normanhurst Girls High School', 'normanhurst-girls-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 900, 'Years 7–12', 'public', 'HSC'],
  ['North Sydney Boys High School', 'north-sydney-boys-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1100, 'Years 7–12', 'public', 'HSC'],
  ['North Sydney Girls High School', 'north-sydney-girls-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1050, 'Years 7–12', 'public', 'HSC'],
  ['Fort Street High School', 'fort-street-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 950, 'Years 7–12', 'public', 'HSC'],
  ['Sydney Boys High School', 'sydney-boys-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1050, 'Years 7–12', 'public', 'HSC'],
  ['Sydney Girls High School', 'sydney-girls-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 950, 'Years 7–12', 'public', 'HSC'],
  ['Hunters Hill High School', 'hunters-hill-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 900, 'Years 7–12', 'public', 'HSC'],
  ['Hornsby Girls High School', 'hornsby-girls-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 950, 'Years 7–12', 'public', 'HSC'],
  ['Penrith High School', 'penrith-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1100, 'Years 7–12', 'public', 'HSC'],
  ['Caringbah High School', 'caringbah-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1200, 'Years 7–12', 'public', 'HSC'],
  ['Gosford High School', 'gosford-high-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1000, 'Years 7–12', 'public', 'HSC'],
  ['Cranbrook School Sydney', 'cranbrook-school-sydney', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1100, 'Years 5–12', 'private', 'HSC'],
  ['Knox Grammar School', 'knox-grammar-school', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 2000, 'Years 5–12', 'private', 'HSC'],
  ['Newington College', 'newington-college', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1900, 'Years 5–12', 'private', 'HSC'],
  ['Scots College Sydney', 'scots-college-sydney', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1200, 'Years 5–12', 'private', 'HSC'],
  ['Sydney Church of England Grammar', 'sydney-church-of-england-grammar', 'Sydney', 'Australia', 'australia', 'sydney', 'oceania', 1800, 'Years 7–12', 'private', 'HSC'],

  // ── AUSTRALIA — Victoria ──
  ['Melbourne High School', 'melbourne-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 1600, 'Years 9–12', 'public', 'VCE'],
  ['MacRobertson Girls High School', 'macrobertson-girls-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 1200, 'Years 9–12', 'public', 'VCE'],
  ['Nossal High School', 'nossal-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 900, 'Years 9–12', 'public', 'VCE'],
  ['Suzanne Cory High School', 'suzanne-cory-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 800, 'Years 9–12', 'public', 'VCE'],
  ['Scotch College Melbourne', 'scotch-college-melbourne', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 1900, 'Years 5–12', 'private', 'VCE'],
  ['Wesley College Melbourne', 'wesley-college-melbourne', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 3300, 'Years 5–12', 'private', 'VCE'],
  ['Camberwell High School', 'camberwell-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 1400, 'Years 7–12', 'public', 'VCE'],
  ['Box Hill High School', 'box-hill-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 1500, 'Years 7–12', 'public', 'VCE'],
  ['Balwyn High School', 'balwyn-high-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 2100, 'Years 7–12', 'public', 'VCE'],
  ['Trinity Grammar School Melbourne', 'trinity-grammar-school-melbourne', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 2100, 'Years 5–12', 'private', 'VCE'],
  ['Mentone Grammar School', 'mentone-grammar-school', 'Melbourne', 'Australia', 'australia', 'melbourne', 'oceania', 1400, 'Years 5–12', 'private', 'VCE'],

  // ── AUSTRALIA — Queensland ──
  ['Brisbane State High School', 'brisbane-state-high-school', 'Brisbane', 'Australia', 'australia', 'brisbane', 'oceania', 3200, 'Years 7–12', 'public', 'QCE'],
  ['Kelvin Grove State College', 'kelvin-grove-state-college', 'Brisbane', 'Australia', 'australia', 'brisbane', 'oceania', 2200, 'Years 7–12', 'public', 'QCE'],
  ['Brisbane Girls Grammar School', 'brisbane-girls-grammar-school', 'Brisbane', 'Australia', 'australia', 'brisbane', 'oceania', 950, 'Years 7–12', 'private', 'QCE'],
  ['Anglican Church Grammar School', 'anglican-church-grammar-school', 'Brisbane', 'Australia', 'australia', 'brisbane', 'oceania', 1900, 'Years 5–12', 'private', 'QCE'],
  ['Villanova College Brisbane', 'villanova-college-brisbane', 'Brisbane', 'Australia', 'australia', 'brisbane', 'oceania', 1300, 'Years 5–12', 'private', 'QCE'],

  // ── AUSTRALIA — WA & SA ──
  ['Perth Modern School', 'perth-modern-school', 'Perth', 'Australia', 'australia', 'perth', 'oceania', 2000, 'Years 7–12', 'public', 'WACE'],
  ['Shenton College', 'shenton-college', 'Perth', 'Australia', 'australia', 'perth', 'oceania', 1800, 'Years 7–12', 'public', 'WACE'],
  ['Hale School', 'hale-school', 'Perth', 'Australia', 'australia', 'perth', 'oceania', 1500, 'Years 5–12', 'private', 'WACE'],
  ['Christ Church Grammar School Perth', 'christ-church-grammar-school-perth', 'Perth', 'Australia', 'australia', 'perth', 'oceania', 2100, 'Years 5–12', 'private', 'WACE'],
  ['Scotch College Perth', 'scotch-college-perth', 'Perth', 'Australia', 'australia', 'perth', 'oceania', 2200, 'Years 5–12', 'private', 'WACE'],
  ['Adelaide High School', 'adelaide-high-school', 'Adelaide', 'Australia', 'australia', 'adelaide', 'oceania', 1400, 'Years 7–12', 'public', 'SACE'],
  ['Glenunga International High School', 'glenunga-international-high-school', 'Adelaide', 'Australia', 'australia', 'adelaide', 'oceania', 1600, 'Years 7–12', 'public', 'IB / SACE'],
  ['Unley High School', 'unley-high-school', 'Adelaide', 'Australia', 'australia', 'adelaide', 'oceania', 1400, 'Years 7–12', 'public', 'SACE'],

  // ── NEW ZEALAND ──
  ['Auckland Grammar School', 'auckland-grammar-school', 'Auckland', 'New Zealand', 'new-zealand', 'auckland', 'oceania', 2700, 'Years 9–13', 'public', 'NCEA'],
  ['Epsom Girls Grammar School', 'epsom-girls-grammar-school', 'Auckland', 'New Zealand', 'new-zealand', 'auckland', 'oceania', 2200, 'Years 9–13', 'public', 'NCEA'],
  ['Rangitoto College', 'rangitoto-college', 'Auckland', 'New Zealand', 'new-zealand', 'auckland', 'oceania', 3200, 'Years 9–13', 'public', 'NCEA'],
  ['Westlake Boys High School', 'westlake-boys-high-school', 'Auckland', 'New Zealand', 'new-zealand', 'auckland', 'oceania', 2400, 'Years 9–13', 'public', 'NCEA'],
  ['Westlake Girls High School', 'westlake-girls-high-school', 'Auckland', 'New Zealand', 'new-zealand', 'auckland', 'oceania', 2200, 'Years 9–13', 'public', 'NCEA'],
  ['Wellington College NZ', 'wellington-college-nz', 'Wellington', 'New Zealand', 'new-zealand', 'wellington', 'oceania', 1500, 'Years 9–13', 'public', 'NCEA'],
  ['Christchurch Boys High School', 'christchurch-boys-high-school', 'Christchurch', 'New Zealand', 'new-zealand', 'christchurch', 'oceania', 1700, 'Years 9–13', 'public', 'NCEA'],
  ['Otago Boys High School', 'otago-boys-high-school', 'Dunedin', 'New Zealand', 'new-zealand', 'dunedin', 'oceania', 1200, 'Years 9–13', 'public', 'NCEA'],

  // ── CANADA — Ontario ──
  ['Marc Garneau Collegiate Institute', 'marc-garneau-collegiate-institute', 'Toronto', 'Canada', 'canada', 'toronto', 'north-america', 1800, 'Grades 9–12', 'public', 'OSSD'],
  ['Lisgar Collegiate Institute', 'lisgar-collegiate-institute', 'Ottawa', 'Canada', 'canada', 'toronto', 'north-america', 1500, 'Grades 9–12', 'public', 'OSSD'],
  ['A.Y. Jackson Secondary School', 'ay-jackson-secondary-school', 'Toronto', 'Canada', 'canada', 'toronto', 'north-america', 1600, 'Grades 9–12', 'public', 'OSSD'],
  ['Waterloo Collegiate Institute', 'waterloo-collegiate-institute', 'Waterloo', 'Canada', 'canada', 'toronto', 'north-america', 1300, 'Grades 9–12', 'public', 'OSSD'],
  ['Glenforest Secondary School', 'glenforest-secondary-school', 'Toronto', 'Canada', 'canada', 'toronto', 'north-america', 1500, 'Grades 9–12', 'public', 'OSSD'],
  ['Upper Canada College', 'upper-canada-college', 'Toronto', 'Canada', 'canada', 'toronto', 'north-america', 1100, 'Grades 5–12', 'private', 'OSSD / IB'],
  ['University of Toronto Schools', 'university-of-toronto-schools', 'Toronto', 'Canada', 'canada', 'toronto', 'north-america', 650, 'Grades 7–12', 'private', 'OSSD'],
  ['Cameron Heights Collegiate Institute', 'cameron-heights-collegiate-institute', 'Waterloo', 'Canada', 'canada', 'toronto', 'north-america', 1400, 'Grades 9–12', 'public', 'OSSD'],

  // ── CANADA — British Columbia ──
  ['Lord Byng Secondary School', 'lord-byng-secondary-school', 'Vancouver', 'Canada', 'canada', 'vancouver', 'north-america', 1600, 'Grades 8–12', 'public', 'BC Dogwood'],
  ['Eric Hamber Secondary School', 'eric-hamber-secondary-school', 'Vancouver', 'Canada', 'canada', 'vancouver', 'north-america', 1700, 'Grades 8–12', 'public', 'BC Dogwood'],
  ['Kitsilano Secondary School', 'kitsilano-secondary-school', 'Vancouver', 'Canada', 'canada', 'vancouver', 'north-america', 1400, 'Grades 8–12', 'public', 'BC Dogwood'],
  ['Burnaby South Secondary School', 'burnaby-south-secondary-school', 'Vancouver', 'Canada', 'canada', 'vancouver', 'north-america', 1600, 'Grades 8–12', 'public', 'BC Dogwood'],
  ['Sir Charles Tupper Secondary School', 'sir-charles-tupper-secondary-school', 'Vancouver', 'Canada', 'canada', 'vancouver', 'north-america', 1300, 'Grades 8–12', 'public', 'BC Dogwood'],
  ['Sentinel Secondary School', 'sentinel-secondary-school', 'Vancouver', 'Canada', 'canada', 'vancouver', 'north-america', 1500, 'Grades 8–12', 'public', 'BC Dogwood'],

  // ── CANADA — Quebec ──
  ['College Jean-de-Brebeuf', 'college-jean-de-brebeuf', 'Montreal', 'Canada', 'canada', 'montreal', 'north-america', 1800, 'Secondary I–V + CEGEP', 'private', 'Quebec DEC'],
  ['College Andre-Grasset', 'college-andre-grasset', 'Montreal', 'Canada', 'canada', 'montreal', 'north-america', 2400, 'Secondary + CEGEP', 'private', 'Quebec DEC'],
  ['Champlain Regional College', 'champlain-regional-college', 'Montreal', 'Canada', 'canada', 'montreal', 'north-america', 4000, 'CEGEP', 'public', 'Quebec DEC'],
  ['Marianopolis College', 'marianopolis-college', 'Montreal', 'Canada', 'canada', 'montreal', 'north-america', 1400, 'CEGEP', 'private', 'Quebec DEC'],

  // ── CANADA — Alberta ──
  ['Harry Ainlay High School', 'harry-ainlay-high-school', 'Edmonton', 'Canada', 'canada', 'toronto', 'north-america', 2200, 'Grades 10–12', 'public', 'Alberta Diploma'],
  ['Old Scona Academic High School', 'old-scona-academic-high-school', 'Edmonton', 'Canada', 'canada', 'toronto', 'north-america', 700, 'Grades 10–12', 'public', 'Alberta Diploma'],
  ['Strathcona High School Edmonton', 'strathcona-high-school-edmonton', 'Edmonton', 'Canada', 'canada', 'toronto', 'north-america', 1800, 'Grades 10–12', 'public', 'Alberta Diploma'],
  ['Western Canada High School', 'western-canada-high-school', 'Calgary', 'Canada', 'canada', 'toronto', 'north-america', 2000, 'Grades 10–12', 'public', 'Alberta Diploma'],
  ['Ernest Manning High School', 'ernest-manning-high-school', 'Calgary', 'Canada', 'canada', 'toronto', 'north-america', 2400, 'Grades 10–12', 'public', 'Alberta Diploma'],

  // ── GERMANY ──
  ['Französisches Gymnasium Berlin', 'franzosisches-gymnasium-berlin', 'Berlin', 'Germany', 'germany', 'berlin', 'europe', 900, 'Klasse 7–13', 'public', 'Abitur'],
  ['Sophie-Charlotte-Gymnasium', 'sophie-charlotte-gymnasium', 'Berlin', 'Germany', 'germany', 'berlin', 'europe', 850, 'Klasse 7–12', 'public', 'Abitur'],
  ['Gymnasium Steglitz', 'gymnasium-steglitz', 'Berlin', 'Germany', 'germany', 'berlin', 'europe', 1000, 'Klasse 7–12', 'public', 'Abitur'],
  ['John-F.-Kennedy-Schule', 'john-f-kennedy-schule', 'Berlin', 'Germany', 'germany', 'berlin', 'europe', 1900, 'Klasse 1–13', 'public', 'Abitur / US Diploma'],
  ['Max-Gymnasium Munich', 'max-gymnasium-munich', 'Munich', 'Germany', 'germany', 'munich', 'europe', 900, 'Klasse 5–12', 'public', 'Abitur'],
  ['Wilhelm-Gymnasium Munich', 'wilhelm-gymnasium-munich', 'Munich', 'Germany', 'germany', 'munich', 'europe', 850, 'Klasse 5–12', 'public', 'Abitur'],
  ['Maximiliansgymnasium Munich', 'maximiliansgymnasium-munich', 'Munich', 'Germany', 'germany', 'munich', 'europe', 900, 'Klasse 5–12', 'public', 'Abitur'],
  ['Gelehrtenschule des Johanneums', 'gelehrtenschule-des-johanneums', 'Hamburg', 'Germany', 'germany', 'hamburg', 'europe', 1100, 'Klasse 5–12', 'public', 'Abitur'],
  ['Wilhelm-Gymnasium Hamburg', 'wilhelm-gymnasium-hamburg', 'Hamburg', 'Germany', 'germany', 'hamburg', 'europe', 1000, 'Klasse 5–12', 'public', 'Abitur'],
  ['Lessing-Gymnasium Frankfurt', 'lessing-gymnasium-frankfurt', 'Frankfurt', 'Germany', 'germany', 'frankfurt', 'europe', 900, 'Klasse 5–12', 'public', 'Abitur'],
  ['Goethe-Gymnasium Frankfurt', 'goethe-gymnasium-frankfurt', 'Frankfurt', 'Germany', 'germany', 'frankfurt', 'europe', 850, 'Klasse 5–12', 'public', 'Abitur'],
  ['Friedrich-Gymnasium Freiburg', 'friedrich-gymnasium-freiburg', 'Freiburg', 'Germany', 'germany', 'freiburg', 'europe', 750, 'Klasse 5–12', 'public', 'Abitur'],
  ['Wirtemberg-Gymnasium Stuttgart', 'wirtemberg-gymnasium-stuttgart', 'Stuttgart', 'Germany', 'germany', 'stuttgart', 'europe', 800, 'Klasse 5–12', 'public', 'Abitur'],
  ['Schiller-Gymnasium Cologne', 'schiller-gymnasium-cologne', 'Cologne', 'Germany', 'germany', 'cologne', 'europe', 900, 'Klasse 5–12', 'public', 'Abitur'],
  ['Kaiser-Wilhelm-Gymnasium Cologne', 'kaiser-wilhelm-gymnasium-cologne', 'Cologne', 'Germany', 'germany', 'cologne', 'europe', 850, 'Klasse 5–12', 'public', 'Abitur'],
  ['Leibniz-Gymnasium Dortmund', 'leibniz-gymnasium-dortmund', 'Bochum', 'Germany', 'germany', 'bochum', 'europe', 800, 'Klasse 5–12', 'public', 'Abitur'],
  ['Aldegrever-Gymnasium Soest', 'aldegrever-gymnasium-soest', 'Bochum', 'Germany', 'germany', 'bochum', 'europe', 750, 'Klasse 5–12', 'public', 'Abitur'],

  // ── FRANCE ──
  ['Lycée Louis-le-Grand', 'lycee-louis-le-grand', 'Paris', 'France', 'france', 'paris', 'europe', 2200, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ["Lycée Henri-IV", 'lycee-henri-iv', 'Paris', 'France', 'france', 'paris', 'europe', 2000, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée Janson-de-Sailly', 'lycee-janson-de-sailly', 'Paris', 'France', 'france', 'paris', 'europe', 2400, 'Seconde–Terminale', 'public', 'Baccalauréat'],
  ['Lycée Condorcet', 'lycee-condorcet', 'Paris', 'France', 'france', 'paris', 'europe', 1800, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée Buffon', 'lycee-buffon', 'Paris', 'France', 'france', 'paris', 'europe', 1700, 'Seconde–Terminale', 'public', 'Baccalauréat'],
  ['Lycée Carnot Paris', 'lycee-carnot-paris', 'Paris', 'France', 'france', 'paris', 'europe', 2000, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée Lakanal', 'lycee-lakanal', 'Paris', 'France', 'france', 'paris', 'europe', 1600, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée Hoche Versailles', 'lycee-hoche-versailles', 'Paris', 'France', 'france', 'paris', 'europe', 2100, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée du Parc Lyon', 'lycee-du-parc-lyon', 'Lyon', 'France', 'france', 'lyon', 'europe', 1900, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée Saint-Just Lyon', 'lycee-saint-just-lyon', 'Lyon', 'France', 'france', 'lyon', 'europe', 1500, 'Seconde–Terminale', 'private', 'Baccalauréat'],
  ['Lycée Pierre-de-Fermat Toulouse', 'lycee-pierre-de-fermat-toulouse', 'Toulouse', 'France', 'france', 'toulouse', 'europe', 2000, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée Montaigne Bordeaux', 'lycee-montaigne-bordeaux', 'Bordeaux', 'France', 'france', 'bordeaux', 'europe', 1700, 'Seconde–Terminale + CPGE', 'public', 'Baccalauréat'],
  ['Lycée International de Saint-Germain', 'lycee-international-de-saint-germain', 'Paris', 'France', 'france', 'paris', 'europe', 2200, 'Maternelle–Terminale', 'public', 'Baccalauréat / IB'],

  // ── SINGAPORE ──
  ['Raffles Institution', 'raffles-institution', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2400, 'Years 1–6 (Sec + JC)', 'public', 'A-Levels'],
  ['Hwa Chong Institution', 'hwa-chong-institution', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 3600, 'Years 1–6', 'public', 'A-Levels'],
  ['National Junior College', 'national-junior-college', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2200, 'JC 1–2', 'public', 'A-Levels'],
  ['Anglo-Chinese School (Independent)', 'anglo-chinese-school-independent', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2700, 'Years 1–6', 'public', 'IB / A-Levels'],
  ['Dunman High School', 'dunman-high-school', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2800, 'Years 1–6', 'public', 'A-Levels'],
  ["St Joseph's Institution Singapore", 'st-josephs-institution-singapore', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2200, 'Years 1–6', 'private', 'A-Levels'],
  ['Temasek Junior College', 'temasek-junior-college', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2400, 'JC 1–2', 'public', 'A-Levels'],
  ['Victoria Junior College Singapore', 'victoria-junior-college-singapore', 'Singapore', 'Singapore', 'singapore', 'singapore', 'asia', 2000, 'JC 1–2', 'public', 'A-Levels'],

  // ── HONG KONG ──
  ["St Paul's Co-educational College", 'st-pauls-co-educational-college', 'Hong Kong', 'China', 'china', 'hong-kong', 'asia', 1200, 'Forms 1–7', 'private', 'HKDSE / IB'],
  ['La Salle College Hong Kong', 'la-salle-college-hong-kong', 'Hong Kong', 'China', 'china', 'hong-kong', 'asia', 1400, 'Forms 1–7', 'private', 'HKDSE'],
  ["Diocesan Girls' School", 'diocesan-girls-school', 'Hong Kong', 'China', 'china', 'hong-kong', 'asia', 1100, 'Forms 1–7', 'private', 'HKDSE / IB'],
  ["Queen's College Hong Kong", 'queens-college-hong-kong', 'Hong Kong', 'China', 'china', 'hong-kong', 'asia', 1300, 'Forms 1–7', 'public', 'HKDSE'],
  ['CCC Kei Yuen College', 'ccc-kei-yuen-college', 'Hong Kong', 'China', 'china', 'hong-kong', 'asia', 1000, 'Forms 1–7', 'public', 'HKDSE'],

  // ── JAPAN ──
  ['Hibiya High School', 'hibiya-high-school', 'Tokyo', 'Japan', 'japan', 'tokyo', 'asia', 1100, 'Years 1–3 (Koto)', 'public', 'Japanese National Curriculum'],
  ['Nada School', 'nada-school', 'Osaka', 'Japan', 'japan', 'osaka', 'asia', 700, 'Middle + High School', 'private', 'Japanese National Curriculum'],
  ['Azabu High School', 'azabu-high-school', 'Tokyo', 'Japan', 'japan', 'tokyo', 'asia', 950, 'Middle + High School', 'private', 'Japanese National Curriculum'],
  ['Kaisei Academy', 'kaisei-academy', 'Tokyo', 'Japan', 'japan', 'tokyo', 'asia', 1200, 'Middle + High School', 'private', 'Japanese National Curriculum'],
  ['Tokyo Gakugei University High School', 'tokyo-gakugei-university-high-school', 'Tokyo', 'Japan', 'japan', 'tokyo', 'asia', 950, 'High School', 'public', 'Japanese National Curriculum'],
  ['Kyoto Prefectural Rakuhoku High School', 'kyoto-prefectural-rakuhoku-high-school', 'Kyoto', 'Japan', 'japan', 'kyoto', 'asia', 900, 'High School', 'public', 'Japanese National Curriculum'],
  ['Tennoji High School Osaka', 'tennoji-high-school-osaka', 'Osaka', 'Japan', 'japan', 'osaka', 'asia', 1000, 'High School', 'public', 'Japanese National Curriculum'],
  ['Naniwa Sogo High School', 'naniwa-sogo-high-school', 'Osaka', 'Japan', 'japan', 'osaka', 'asia', 1100, 'High School', 'public', 'Japanese National Curriculum'],
  ['Fukuoka Prefectural Chikushi High School', 'fukuoka-prefectural-chikushi-high-school', 'Fukuoka', 'Japan', 'japan', 'fukuoka', 'asia', 900, 'High School', 'public', 'Japanese National Curriculum'],

  // ── SOUTH KOREA ──
  ['Seoul Science High School', 'seoul-science-high-school', 'Seoul', 'South Korea', 'south-korea', 'seoul', 'asia', 500, 'Grades 10–12', 'public', 'Korean CSAT'],
  ['Daewon Foreign Language High School', 'daewon-foreign-language-high-school', 'Seoul', 'South Korea', 'south-korea', 'seoul', 'asia', 1200, 'Grades 10–12', 'private', 'Korean CSAT'],
  ['Minjok Leadership Academy', 'minjok-leadership-academy', 'Seoul', 'South Korea', 'south-korea', 'seoul', 'asia', 500, 'Grades 10–12', 'private', 'Korean CSAT / IB'],
  ['Hana Academy Seoul', 'hana-academy-seoul', 'Seoul', 'South Korea', 'south-korea', 'seoul', 'asia', 750, 'Grades 10–12', 'private', 'Korean CSAT'],
  ['Korea International School', 'korea-international-school', 'Seoul', 'South Korea', 'south-korea', 'seoul', 'asia', 900, 'K–12', 'private', 'US Diploma / IB'],

  // ── INDIA ──
  ['DPS RK Puram', 'dps-rk-puram', 'Delhi', 'India', 'india', 'delhi', 'asia', 6000, 'Classes 1–12', 'private', 'CBSE'],
  ['Modern School Barakhamba Road', 'modern-school-barakhamba-road', 'Delhi', 'India', 'india', 'delhi', 'asia', 4500, 'Classes 1–12', 'private', 'CBSE'],
  ['Sanskriti School Delhi', 'sanskriti-school-delhi', 'Delhi', 'India', 'india', 'delhi', 'asia', 2800, 'Classes 1–12', 'private', 'CBSE'],
  ['The Shri Ram School Aravali', 'the-shri-ram-school-aravali', 'Delhi', 'India', 'india', 'delhi', 'asia', 1800, 'Classes 1–12', 'private', 'CBSE'],
  ['Vasant Valley School', 'vasant-valley-school', 'Delhi', 'India', 'india', 'delhi', 'asia', 2200, 'Classes 1–12', 'private', 'CBSE'],
  ['Cathedral and John Connon School', 'cathedral-and-john-connon-school', 'Mumbai', 'India', 'india', 'mumbai', 'asia', 2000, 'Classes 1–12', 'private', 'ICSE'],
  ['Campion School Mumbai', 'campion-school-mumbai', 'Mumbai', 'India', 'india', 'mumbai', 'asia', 1600, 'Classes 1–12', 'private', 'ICSE'],
  ['Bombay Scottish School', 'bombay-scottish-school', 'Mumbai', 'India', 'india', 'mumbai', 'asia', 2400, 'Classes 1–12', 'private', 'ICSE'],
  ['Bishop Cotton Boys School', 'bishop-cotton-boys-school', 'Bangalore', 'India', 'india', 'bangalore', 'asia', 2000, 'Classes 1–12', 'private', 'ICSE'],
  ['National Public School Bangalore', 'national-public-school-bangalore', 'Bangalore', 'India', 'india', 'bangalore', 'asia', 3200, 'Classes 1–12', 'private', 'CBSE'],
  ['The Doon School', 'the-doon-school', 'Delhi', 'India', 'india', 'delhi', 'asia', 600, 'Classes 7–12', 'private', 'CBSE / IB'],
  ['Mayo College', 'mayo-college', 'Delhi', 'India', 'india', 'delhi', 'asia', 650, 'Classes 5–12', 'private', 'CBSE'],
  ['St Columba\'s School Delhi', 'st-columbas-school-delhi', 'Delhi', 'India', 'india', 'delhi', 'asia', 3500, 'Classes 1–12', 'private', 'CBSE'],
  ['Kendriya Vidyalaya IIT Delhi', 'kendriya-vidyalaya-iit-delhi', 'Delhi', 'India', 'india', 'delhi', 'asia', 2800, 'Classes 1–12', 'public', 'CBSE'],
  ['Ryan International School Mumbai', 'ryan-international-school-mumbai', 'Mumbai', 'India', 'india', 'mumbai', 'asia', 4000, 'Classes 1–12', 'private', 'CBSE'],

  // ── IRELAND ──
  ['Gonzaga College Dublin', 'gonzaga-college-dublin', 'Dublin', 'Ireland', 'ireland', 'dublin', 'europe', 700, 'Years 1–6', 'private', 'Leaving Certificate'],
  ['Blackrock College', 'blackrock-college', 'Dublin', 'Ireland', 'ireland', 'dublin', 'europe', 1100, 'Years 1–6', 'private', 'Leaving Certificate'],
  ['Belvedere College', 'belvedere-college', 'Dublin', 'Ireland', 'ireland', 'dublin', 'europe', 800, 'Years 1–6', 'private', 'Leaving Certificate'],
  ['Loreto College St Stephens Green', 'loreto-college-st-stephens-green', 'Dublin', 'Ireland', 'ireland', 'dublin', 'europe', 700, 'Years 1–6', 'private', 'Leaving Certificate'],
  ['Presentation College Cork', 'presentation-college-cork', 'Cork', 'Ireland', 'ireland', 'dublin', 'europe', 800, 'Years 1–6', 'private', 'Leaving Certificate'],

  // ── SWEDEN ──
  ['Katedralskolan Uppsala', 'katedralskolan-uppsala', 'Uppsala', 'Sweden', 'sweden', 'stockholm', 'europe', 1100, 'Gymnasiet Yr 1–3', 'public', 'Swedish Studentexamen'],
  ['Hvitfeldtska Gymnasiet Gothenburg', 'hvitfeldtska-gymnasiet-gothenburg', 'Gothenburg', 'Sweden', 'sweden', 'gothenburg', 'europe', 2000, 'Gymnasiet Yr 1–3', 'public', 'Swedish Studentexamen'],
  ['Norra Real Stockholm', 'norra-real-stockholm', 'Stockholm', 'Sweden', 'sweden', 'stockholm', 'europe', 900, 'Gymnasiet Yr 1–3', 'public', 'Swedish Studentexamen'],
  ['Östra Real Stockholm', 'ostra-real-stockholm', 'Stockholm', 'Sweden', 'sweden', 'stockholm', 'europe', 1000, 'Gymnasiet Yr 1–3', 'public', 'Swedish Studentexamen'],
  ['Kungsholmens Gymnasium', 'kungsholmens-gymnasium', 'Stockholm', 'Sweden', 'sweden', 'stockholm', 'europe', 2100, 'Gymnasiet Yr 1–3', 'public', 'Swedish Studentexamen'],

  // ── NETHERLANDS ──
  ['Vossius Gymnasium Amsterdam', 'vossius-gymnasium-amsterdam', 'Amsterdam', 'Netherlands', 'netherlands', 'amsterdam', 'europe', 900, 'Gymnasium Yr 1–6', 'public', 'VWO'],
  ['Stedelijk Gymnasium Leiden', 'stedelijk-gymnasium-leiden', 'Leiden', 'Netherlands', 'netherlands', 'amsterdam', 'europe', 800, 'Gymnasium Yr 1–6', 'public', 'VWO'],
  ['Christelijk Gymnasium Utrecht', 'christelijk-gymnasium-utrecht', 'Utrecht', 'Netherlands', 'netherlands', 'amsterdam', 'europe', 1000, 'Gymnasium Yr 1–6', 'private', 'VWO'],
  ['Gymnasium Haganum The Hague', 'gymnasium-haganum-the-hague', 'Amsterdam', 'Netherlands', 'netherlands', 'amsterdam', 'europe', 850, 'Gymnasium Yr 1–6', 'public', 'VWO'],

  // ── SOUTH AFRICA ──
  ['South African College Schools', 'south-african-college-schools', 'Cape Town', 'South Africa', 'south-africa', 'cape-town', 'africa', 1300, 'Grades 8–12', 'private', 'NSC / IB'],
  ['Diocesan College (Bishops)', 'diocesan-college-bishops', 'Cape Town', 'South Africa', 'south-africa', 'cape-town', 'africa', 1100, 'Grades 8–12', 'private', 'NSC / IB'],
  ['St John\'s College Johannesburg', 'st-johns-college-johannesburg', 'Johannesburg', 'South Africa', 'south-africa', 'johannesburg', 'africa', 1000, 'Grades 8–12', 'private', 'NSC / IB'],
  ['Pretoria Boys High School', 'pretoria-boys-high-school', 'Johannesburg', 'South Africa', 'south-africa', 'johannesburg', 'africa', 1200, 'Grades 8–12', 'public', 'NSC'],
  ['Hilton College Natal', 'hilton-college-natal', 'Johannesburg', 'South Africa', 'south-africa', 'johannesburg', 'africa', 500, 'Grades 8–12', 'private', 'NSC / IB'],

  // ── KENYA & NIGERIA ──
  ['Alliance High School Kenya', 'alliance-high-school-kenya', 'Nairobi', 'Kenya', 'kenya', 'nairobi', 'africa', 900, 'Forms 1–4', 'public', 'KCSE'],
  ['Nairobi School', 'nairobi-school', 'Nairobi', 'Kenya', 'kenya', 'nairobi', 'africa', 1100, 'Forms 1–4', 'public', 'KCSE'],
  ['Kenya High School', 'kenya-high-school', 'Nairobi', 'Kenya', 'kenya', 'nairobi', 'africa', 900, 'Forms 1–4', 'public', 'KCSE'],
  ["King's College Lagos", 'kings-college-lagos', 'Lagos', 'Nigeria', 'nigeria', 'lagos', 'africa', 2000, 'JSS 1 – SS 3', 'public', 'WAEC'],
  ['Corona Secondary School Lagos', 'corona-secondary-school-lagos', 'Lagos', 'Nigeria', 'nigeria', 'lagos', 'africa', 1200, 'JSS 1 – SS 3', 'private', 'WAEC'],
  ['Loyola Jesuit College Abuja', 'loyola-jesuit-college-abuja', 'Lagos', 'Nigeria', 'nigeria', 'lagos', 'africa', 700, 'JSS 1 – SS 3', 'private', 'WAEC'],

  // ── BRAZIL ──
  ['Colégio Bandeirantes São Paulo', 'colegio-bandeirantes-sao-paulo', 'São Paulo', 'Brazil', 'brazil', 'sao-paulo', 'south-america', 2000, 'Ensino Médio', 'private', 'ENEM'],
  ['Colégio Etapa São Paulo', 'colegio-etapa-sao-paulo', 'São Paulo', 'Brazil', 'brazil', 'sao-paulo', 'south-america', 5000, 'Fundamental + Médio', 'private', 'ENEM'],
  ['Colégio Anglo São Paulo', 'colegio-anglo-sao-paulo', 'São Paulo', 'Brazil', 'brazil', 'sao-paulo', 'south-america', 3000, 'Ensino Médio', 'private', 'ENEM'],
  ['Colégio Pedro II Rio de Janeiro', 'colegio-pedro-ii-rio-de-janeiro', 'Rio de Janeiro', 'Brazil', 'brazil', 'rio-de-janeiro', 'south-america', 4500, 'Fundamental + Médio', 'public', 'ENEM'],
  ['Colégio Militar do Rio de Janeiro', 'colegio-militar-do-rio-de-janeiro', 'Rio de Janeiro', 'Brazil', 'brazil', 'rio-de-janeiro', 'south-america', 2200, 'Ensino Médio', 'public', 'ENEM'],

  // ── MEXICO ──
  ['Colegio Madrid Mexico City', 'colegio-madrid-mexico-city', 'Mexico City', 'Mexico', 'mexico', 'mexico-city', 'north-america', 2000, 'Preparatoria', 'private', 'Mexican Bachillerato'],
  ['Instituto Tecnologico de Monterrey Prepa', 'instituto-tecnologico-de-monterrey-prepa', 'Monterrey', 'Mexico', 'mexico', 'mexico-city', 'north-america', 3000, 'Preparatoria', 'private', 'Mexican Bachillerato'],
  ['Colegio Americano Mexico City', 'colegio-americano-mexico-city', 'Mexico City', 'Mexico', 'mexico', 'mexico-city', 'north-america', 1200, 'K–12', 'private', 'IB / US Diploma'],

  // ── ARGENTINA ──
  ['Colegio Nacional de Buenos Aires', 'colegio-nacional-de-buenos-aires', 'Buenos Aires', 'Argentina', 'argentina', 'buenos-aires', 'south-america', 3500, 'Secondary 1–5', 'public', 'Argentine Bachillerato'],
  ['Colegio Carlos Pellegrini', 'colegio-carlos-pellegrini', 'Buenos Aires', 'Argentina', 'argentina', 'buenos-aires', 'south-america', 3000, 'Secondary 1–5', 'public', 'Argentine Bachillerato'],
  ['Lincoln International Academy Buenos Aires', 'lincoln-international-academy-buenos-aires', 'Buenos Aires', 'Argentina', 'argentina', 'buenos-aires', 'south-america', 800, 'K–12', 'private', 'IB'],

  // ── UAE & MIDDLE EAST ──
  ['GEMS Wellington Academy Dubai', 'gems-wellington-academy-dubai', 'Dubai', 'United Arab Emirates', 'united-arab-emirates', 'dubai', 'middle-east', 2400, 'Years 1–13', 'private', 'A-Levels / IB'],
  ['Dubai International Academy', 'dubai-international-academy', 'Dubai', 'United Arab Emirates', 'united-arab-emirates', 'dubai', 'middle-east', 1800, 'Years 1–13', 'private', 'IB'],
  ['Jumeirah College Dubai', 'jumeirah-college-dubai', 'Dubai', 'United Arab Emirates', 'united-arab-emirates', 'dubai', 'middle-east', 1500, 'Years 7–13', 'public', 'A-Levels'],
  ['Abu Dhabi International School', 'abu-dhabi-international-school', 'Abu Dhabi', 'United Arab Emirates', 'united-arab-emirates', 'dubai', 'middle-east', 1200, 'K–12', 'private', 'US Diploma / IB'],
  ['Choueifat International School Abu Dhabi', 'choueifat-international-school-abu-dhabi', 'Abu Dhabi', 'United Arab Emirates', 'united-arab-emirates', 'dubai', 'middle-east', 2200, 'K–12', 'private', 'SABIS'],
  ['American Community School Beirut', 'american-community-school-beirut', 'Beirut', 'Lebanon', 'lebanon', 'beirut', 'middle-east', 1400, 'K–12', 'private', 'IB / US Diploma'],
  ['Brummana High School', 'brummana-high-school', 'Beirut', 'Lebanon', 'lebanon', 'beirut', 'middle-east', 1000, 'K–12', 'private', 'IB / Lebanese Bac'],
];

export const internationalSchools: InternationalSchool[] = raw.map(
  ([name, slug, city, country, countrySlug, citySlug, continent, enrollment, grades, type, curriculum]) => ({
    name, slug, city, country, countrySlug, citySlug, continent, enrollment, grades, type, curriculum,
  })
);

export function getInternationalSchoolBySlug(slug: string): InternationalSchool | undefined {
  return internationalSchools.find((s) => s.slug === slug);
}

export function getAllInternationalSchoolSlugs(): { slug: string }[] {
  return internationalSchools.map((s) => ({ slug: s.slug }));
}

export function getInternationalSchoolsByCountry(countrySlug: string): InternationalSchool[] {
  return internationalSchools.filter((s) => s.countrySlug === countrySlug);
}

export function getInternationalSchoolsByCity(citySlug: string): InternationalSchool[] {
  return internationalSchools.filter((s) => s.citySlug === citySlug);
}
