export interface K12School {
  name: string;
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  stateAbbr: string;
  districtSlug: string;
  enrollment: number;
  /** 'high-school' | 'middle-school' | 'k-8' | 'k-12' */
  type: 'high-school' | 'middle-school' | 'k-8' | 'k-12';
}

export const k12schools: K12School[] = [
  // ── CALIFORNIA – Los Angeles Unified ──
  { name: 'Los Angeles High School', slug: 'los-angeles-high-school', city: 'Los Angeles', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'los-angeles-unified-school-district', enrollment: 2200, type: 'high-school' },
  { name: 'Garfield High School', slug: 'garfield-high-school', city: 'East Los Angeles', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'los-angeles-unified-school-district', enrollment: 2800, type: 'high-school' },
  { name: 'Crenshaw High School', slug: 'crenshaw-high-school', city: 'Los Angeles', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'los-angeles-unified-school-district', enrollment: 1600, type: 'high-school' },
  { name: 'Franklin High School', slug: 'franklin-high-school-la', city: 'Los Angeles', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'los-angeles-unified-school-district', enrollment: 2100, type: 'high-school' },
  { name: 'Westchester High School', slug: 'westchester-high-school', city: 'Los Angeles', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'los-angeles-unified-school-district', enrollment: 1900, type: 'high-school' },
  { name: 'Venice High School', slug: 'venice-high-school', city: 'Venice', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'los-angeles-unified-school-district', enrollment: 2300, type: 'high-school' },

  // ── CALIFORNIA – San Diego Unified ──
  { name: 'San Diego High School', slug: 'san-diego-high-school', city: 'San Diego', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'san-diego-unified-school-district', enrollment: 2100, type: 'high-school' },
  { name: 'Point Loma High School', slug: 'point-loma-high-school', city: 'San Diego', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'san-diego-unified-school-district', enrollment: 1800, type: 'high-school' },
  { name: 'Hoover High School', slug: 'hoover-high-school-sd', city: 'San Diego', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'san-diego-unified-school-district', enrollment: 2400, type: 'high-school' },
  { name: 'Lincoln High School', slug: 'lincoln-high-school-sd', city: 'San Diego', state: 'California', stateSlug: 'california', stateAbbr: 'CA', districtSlug: 'san-diego-unified-school-district', enrollment: 1700, type: 'high-school' },

  // ── TEXAS – Houston ISD ──
  { name: 'Bellaire High School', slug: 'bellaire-high-school', city: 'Bellaire', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'houston-independent-school-district', enrollment: 2900, type: 'high-school' },
  { name: 'Carnegie Vanguard High School', slug: 'carnegie-vanguard-high-school', city: 'Houston', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'houston-independent-school-district', enrollment: 950, type: 'high-school' },
  { name: 'Lamar High School', slug: 'lamar-high-school-houston', city: 'Houston', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'houston-independent-school-district', enrollment: 3200, type: 'high-school' },
  { name: 'Milby High School', slug: 'milby-high-school', city: 'Houston', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'houston-independent-school-district', enrollment: 2000, type: 'high-school' },
  { name: 'Wheatley High School', slug: 'wheatley-high-school', city: 'Houston', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'houston-independent-school-district', enrollment: 1500, type: 'high-school' },

  // ── TEXAS – Dallas ISD ──
  { name: 'Skyline High School', slug: 'skyline-high-school', city: 'Dallas', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'dallas-independent-school-district', enrollment: 3600, type: 'high-school' },
  { name: 'W.H. Adamson High School', slug: 'wh-adamson-high-school', city: 'Dallas', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'dallas-independent-school-district', enrollment: 1900, type: 'high-school' },
  { name: 'South Oak Cliff High School', slug: 'south-oak-cliff-high-school', city: 'Dallas', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'dallas-independent-school-district', enrollment: 1600, type: 'high-school' },
  { name: 'Hillcrest High School', slug: 'hillcrest-high-school-dallas', city: 'Dallas', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'dallas-independent-school-district', enrollment: 1700, type: 'high-school' },

  // ── TEXAS – Austin ISD ──
  { name: 'Austin High School', slug: 'austin-high-school', city: 'Austin', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'austin-independent-school-district', enrollment: 2100, type: 'high-school' },
  { name: 'McCallum High School', slug: 'mccallum-high-school', city: 'Austin', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'austin-independent-school-district', enrollment: 1900, type: 'high-school' },
  { name: 'LBJ Early College High School', slug: 'lbj-early-college-high-school', city: 'Austin', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'austin-independent-school-district', enrollment: 1500, type: 'high-school' },
  { name: 'Eastside Early College High School', slug: 'eastside-early-college-high-school', city: 'Austin', state: 'Texas', stateSlug: 'texas', stateAbbr: 'TX', districtSlug: 'austin-independent-school-district', enrollment: 1200, type: 'high-school' },

  // ── FLORIDA – Miami-Dade County ──
  { name: 'Coral Gables Senior High School', slug: 'coral-gables-senior-high-school', city: 'Coral Gables', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'miami-dade-county-public-schools', enrollment: 3500, type: 'high-school' },
  { name: 'Miami Senior High School', slug: 'miami-senior-high-school', city: 'Miami', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'miami-dade-county-public-schools', enrollment: 2800, type: 'high-school' },
  { name: 'Hialeah Miami Lakes High School', slug: 'hialeah-miami-lakes-high-school', city: 'Hialeah', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'miami-dade-county-public-schools', enrollment: 3200, type: 'high-school' },
  { name: 'Southwest Miami Senior High School', slug: 'southwest-miami-senior-high-school', city: 'Miami', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'miami-dade-county-public-schools', enrollment: 2600, type: 'high-school' },
  { name: 'Homestead Senior High School', slug: 'homestead-senior-high-school', city: 'Homestead', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'miami-dade-county-public-schools', enrollment: 2400, type: 'high-school' },

  // ── FLORIDA – Broward County ──
  { name: 'Fort Lauderdale High School', slug: 'fort-lauderdale-high-school', city: 'Fort Lauderdale', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'broward-county-public-schools', enrollment: 2200, type: 'high-school' },
  { name: 'Deerfield Beach High School', slug: 'deerfield-beach-high-school', city: 'Deerfield Beach', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'broward-county-public-schools', enrollment: 2700, type: 'high-school' },
  { name: 'Pompano Beach High School', slug: 'pompano-beach-high-school', city: 'Pompano Beach', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'broward-county-public-schools', enrollment: 1900, type: 'high-school' },
  { name: 'Plantation High School', slug: 'plantation-high-school', city: 'Plantation', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'broward-county-public-schools', enrollment: 2400, type: 'high-school' },
  { name: 'Nova High School', slug: 'nova-high-school', city: 'Davie', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'broward-county-public-schools', enrollment: 2100, type: 'high-school' },
  { name: 'South Broward High School', slug: 'south-broward-high-school', city: 'Hollywood', state: 'Florida', stateSlug: 'florida', stateAbbr: 'FL', districtSlug: 'broward-county-public-schools', enrollment: 2300, type: 'high-school' },

  // ── NEW YORK – NYC DOE ──
  { name: 'Stuyvesant High School', slug: 'stuyvesant-high-school', city: 'New York', state: 'New York', stateSlug: 'new-york', stateAbbr: 'NY', districtSlug: 'new-york-city-department-of-education', enrollment: 3300, type: 'high-school' },
  { name: 'Bronx Science High School', slug: 'bronx-science-high-school', city: 'Bronx', state: 'New York', stateSlug: 'new-york', stateAbbr: 'NY', districtSlug: 'new-york-city-department-of-education', enrollment: 2900, type: 'high-school' },
  { name: 'Brooklyn Technical High School', slug: 'brooklyn-technical-high-school', city: 'Brooklyn', state: 'New York', stateSlug: 'new-york', stateAbbr: 'NY', districtSlug: 'new-york-city-department-of-education', enrollment: 5900, type: 'high-school' },
  { name: 'Flushing High School', slug: 'flushing-high-school', city: 'Flushing', state: 'New York', stateSlug: 'new-york', stateAbbr: 'NY', districtSlug: 'new-york-city-department-of-education', enrollment: 2200, type: 'high-school' },
  { name: 'Jamaica High School', slug: 'jamaica-high-school', city: 'Jamaica', state: 'New York', stateSlug: 'new-york', stateAbbr: 'NY', districtSlug: 'new-york-city-department-of-education', enrollment: 1800, type: 'high-school' },
  { name: 'DeWitt Clinton High School', slug: 'dewitt-clinton-high-school', city: 'Bronx', state: 'New York', stateSlug: 'new-york', stateAbbr: 'NY', districtSlug: 'new-york-city-department-of-education', enrollment: 2600, type: 'high-school' },

  // ── ILLINOIS – Chicago Public Schools ──
  { name: 'Walter Payton College Prep', slug: 'walter-payton-college-prep', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', stateAbbr: 'IL', districtSlug: 'chicago-public-schools', enrollment: 1000, type: 'high-school' },
  { name: 'Northside College Preparatory High School', slug: 'northside-college-preparatory-high-school', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', stateAbbr: 'IL', districtSlug: 'chicago-public-schools', enrollment: 1000, type: 'high-school' },
  { name: 'Lincoln Park High School', slug: 'lincoln-park-high-school', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', stateAbbr: 'IL', districtSlug: 'chicago-public-schools', enrollment: 2200, type: 'high-school' },
  { name: 'Whitney M. Young Magnet High School', slug: 'whitney-m-young-magnet-high-school', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', stateAbbr: 'IL', districtSlug: 'chicago-public-schools', enrollment: 2200, type: 'high-school' },
  { name: 'Jones College Prep', slug: 'jones-college-prep', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', stateAbbr: 'IL', districtSlug: 'chicago-public-schools', enrollment: 1100, type: 'high-school' },
  { name: 'Curie Metropolitan High School', slug: 'curie-metropolitan-high-school', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', stateAbbr: 'IL', districtSlug: 'chicago-public-schools', enrollment: 2600, type: 'high-school' },

  // ── GEORGIA – Gwinnett County ──
  { name: 'Norcross High School', slug: 'norcross-high-school', city: 'Norcross', state: 'Georgia', stateSlug: 'georgia', stateAbbr: 'GA', districtSlug: 'gwinnett-county-public-schools', enrollment: 3200, type: 'high-school' },
  { name: 'Brookwood High School', slug: 'brookwood-high-school', city: 'Snellville', state: 'Georgia', stateSlug: 'georgia', stateAbbr: 'GA', districtSlug: 'gwinnett-county-public-schools', enrollment: 3500, type: 'high-school' },
  { name: 'Peachtree Ridge High School', slug: 'peachtree-ridge-high-school', city: 'Suwanee', state: 'Georgia', stateSlug: 'georgia', stateAbbr: 'GA', districtSlug: 'gwinnett-county-public-schools', enrollment: 3100, type: 'high-school' },
  { name: 'Duluth High School', slug: 'duluth-high-school', city: 'Duluth', state: 'Georgia', stateSlug: 'georgia', stateAbbr: 'GA', districtSlug: 'gwinnett-county-public-schools', enrollment: 2400, type: 'high-school' },
  { name: 'Mill Creek High School', slug: 'mill-creek-high-school', city: 'Hoschton', state: 'Georgia', stateSlug: 'georgia', stateAbbr: 'GA', districtSlug: 'gwinnett-county-public-schools', enrollment: 3800, type: 'high-school' },
  { name: 'South Gwinnett High School', slug: 'south-gwinnett-high-school', city: 'Snellville', state: 'Georgia', stateSlug: 'georgia', stateAbbr: 'GA', districtSlug: 'gwinnett-county-public-schools', enrollment: 2700, type: 'high-school' },

  // ── NORTH CAROLINA – Charlotte-Mecklenburg ──
  { name: 'Myers Park High School', slug: 'myers-park-high-school', city: 'Charlotte', state: 'North Carolina', stateSlug: 'north-carolina', stateAbbr: 'NC', districtSlug: 'charlotte-mecklenburg-schools', enrollment: 3300, type: 'high-school' },
  { name: 'South Mecklenburg High School', slug: 'south-mecklenburg-high-school', city: 'Charlotte', state: 'North Carolina', stateSlug: 'north-carolina', stateAbbr: 'NC', districtSlug: 'charlotte-mecklenburg-schools', enrollment: 3100, type: 'high-school' },
  { name: 'North Mecklenburg High School', slug: 'north-mecklenburg-high-school', city: 'Huntersville', state: 'North Carolina', stateSlug: 'north-carolina', stateAbbr: 'NC', districtSlug: 'charlotte-mecklenburg-schools', enrollment: 2700, type: 'high-school' },
  { name: 'Harding University High School', slug: 'harding-university-high-school', city: 'Charlotte', state: 'North Carolina', stateSlug: 'north-carolina', stateAbbr: 'NC', districtSlug: 'charlotte-mecklenburg-schools', enrollment: 1600, type: 'high-school' },

  // ── VIRGINIA – Fairfax County ──
  { name: 'Thomas Jefferson High School for Science & Technology', slug: 'thomas-jefferson-high-school-for-science-and-technology', city: 'Alexandria', state: 'Virginia', stateSlug: 'virginia', stateAbbr: 'VA', districtSlug: 'fairfax-county-public-schools', enrollment: 1800, type: 'high-school' },
  { name: 'Langley High School', slug: 'langley-high-school', city: 'McLean', state: 'Virginia', stateSlug: 'virginia', stateAbbr: 'VA', districtSlug: 'fairfax-county-public-schools', enrollment: 2300, type: 'high-school' },
  { name: 'Robinson Secondary School', slug: 'robinson-secondary-school', city: 'Fairfax', state: 'Virginia', stateSlug: 'virginia', stateAbbr: 'VA', districtSlug: 'fairfax-county-public-schools', enrollment: 3700, type: 'high-school' },
  { name: 'South Lakes High School', slug: 'south-lakes-high-school', city: 'Reston', state: 'Virginia', stateSlug: 'virginia', stateAbbr: 'VA', districtSlug: 'fairfax-county-public-schools', enrollment: 2400, type: 'high-school' },
  { name: 'Westfield High School', slug: 'westfield-high-school', city: 'Chantilly', state: 'Virginia', stateSlug: 'virginia', stateAbbr: 'VA', districtSlug: 'fairfax-county-public-schools', enrollment: 3200, type: 'high-school' },
  { name: 'McLean High School', slug: 'mclean-high-school', city: 'McLean', state: 'Virginia', stateSlug: 'virginia', stateAbbr: 'VA', districtSlug: 'fairfax-county-public-schools', enrollment: 2100, type: 'high-school' },

  // ── WASHINGTON – Seattle Public Schools ──
  { name: 'Garfield High School', slug: 'garfield-high-school-seattle', city: 'Seattle', state: 'Washington', stateSlug: 'washington', stateAbbr: 'WA', districtSlug: 'seattle-public-schools', enrollment: 1800, type: 'high-school' },
  { name: 'Ballard High School', slug: 'ballard-high-school', city: 'Seattle', state: 'Washington', stateSlug: 'washington', stateAbbr: 'WA', districtSlug: 'seattle-public-schools', enrollment: 1600, type: 'high-school' },
  { name: 'Nathan Hale High School', slug: 'nathan-hale-high-school', city: 'Seattle', state: 'Washington', stateSlug: 'washington', stateAbbr: 'WA', districtSlug: 'seattle-public-schools', enrollment: 1500, type: 'high-school' },
  { name: 'Franklin High School', slug: 'franklin-high-school-seattle', city: 'Seattle', state: 'Washington', stateSlug: 'washington', stateAbbr: 'WA', districtSlug: 'seattle-public-schools', enrollment: 1700, type: 'high-school' },
  { name: 'Chief Sealth International High School', slug: 'chief-sealth-international-high-school', city: 'Seattle', state: 'Washington', stateSlug: 'washington', stateAbbr: 'WA', districtSlug: 'seattle-public-schools', enrollment: 1300, type: 'high-school' },
  { name: 'Rainier Beach High School', slug: 'rainier-beach-high-school', city: 'Seattle', state: 'Washington', stateSlug: 'washington', stateAbbr: 'WA', districtSlug: 'seattle-public-schools', enrollment: 900, type: 'high-school' },

  // ── OHIO – Columbus City Schools ──
  { name: 'Columbus Alternative High School', slug: 'columbus-alternative-high-school', city: 'Columbus', state: 'Ohio', stateSlug: 'ohio', stateAbbr: 'OH', districtSlug: 'columbus-city-schools', enrollment: 500, type: 'high-school' },
  { name: 'Eastmoor Academy', slug: 'eastmoor-academy', city: 'Columbus', state: 'Ohio', stateSlug: 'ohio', stateAbbr: 'OH', districtSlug: 'columbus-city-schools', enrollment: 1100, type: 'high-school' },
  { name: 'Independence High School', slug: 'independence-high-school-columbus', city: 'Columbus', state: 'Ohio', stateSlug: 'ohio', stateAbbr: 'OH', districtSlug: 'columbus-city-schools', enrollment: 1400, type: 'high-school' },
  { name: 'Northland High School', slug: 'northland-high-school', city: 'Columbus', state: 'Ohio', stateSlug: 'ohio', stateAbbr: 'OH', districtSlug: 'columbus-city-schools', enrollment: 1700, type: 'high-school' },

  // ── COLORADO – Denver Public Schools ──
  { name: 'East High School', slug: 'east-high-school-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', stateAbbr: 'CO', districtSlug: 'denver-public-schools', enrollment: 2500, type: 'high-school' },
  { name: 'George Washington High School', slug: 'george-washington-high-school-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', stateAbbr: 'CO', districtSlug: 'denver-public-schools', enrollment: 2200, type: 'high-school' },
  { name: 'South High School', slug: 'south-high-school-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', stateAbbr: 'CO', districtSlug: 'denver-public-schools', enrollment: 1900, type: 'high-school' },
  { name: 'North High School', slug: 'north-high-school-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', stateAbbr: 'CO', districtSlug: 'denver-public-schools', enrollment: 1800, type: 'high-school' },
  { name: 'West High School', slug: 'west-high-school-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', stateAbbr: 'CO', districtSlug: 'denver-public-schools', enrollment: 1700, type: 'high-school' },
  { name: 'Manual High School', slug: 'manual-high-school-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', stateAbbr: 'CO', districtSlug: 'denver-public-schools', enrollment: 1200, type: 'high-school' },

  // ── MARYLAND – Montgomery County ──
  { name: 'Thomas S. Wootton High School', slug: 'thomas-s-wootton-high-school', city: 'Rockville', state: 'Maryland', stateSlug: 'maryland', stateAbbr: 'MD', districtSlug: 'montgomery-county-public-schools', enrollment: 2600, type: 'high-school' },
  { name: 'Walt Whitman High School', slug: 'walt-whitman-high-school', city: 'Bethesda', state: 'Maryland', stateSlug: 'maryland', stateAbbr: 'MD', districtSlug: 'montgomery-county-public-schools', enrollment: 2300, type: 'high-school' },
  { name: 'Montgomery Blair High School', slug: 'montgomery-blair-high-school', city: 'Silver Spring', state: 'Maryland', stateSlug: 'maryland', stateAbbr: 'MD', districtSlug: 'montgomery-county-public-schools', enrollment: 3100, type: 'high-school' },
  { name: 'Poolesville High School', slug: 'poolesville-high-school', city: 'Poolesville', state: 'Maryland', stateSlug: 'maryland', stateAbbr: 'MD', districtSlug: 'montgomery-county-public-schools', enrollment: 1100, type: 'high-school' },
  { name: 'Richard Montgomery High School', slug: 'richard-montgomery-high-school', city: 'Rockville', state: 'Maryland', stateSlug: 'maryland', stateAbbr: 'MD', districtSlug: 'montgomery-county-public-schools', enrollment: 2500, type: 'high-school' },
  { name: 'Walter Johnson High School', slug: 'walter-johnson-high-school', city: 'Bethesda', state: 'Maryland', stateSlug: 'maryland', stateAbbr: 'MD', districtSlug: 'montgomery-county-public-schools', enrollment: 2700, type: 'high-school' },

  // ── ARIZONA – Mesa USD ──
  { name: 'Mesa High School', slug: 'mesa-high-school', city: 'Mesa', state: 'Arizona', stateSlug: 'arizona', stateAbbr: 'AZ', districtSlug: 'mesa-unified-school-district', enrollment: 2800, type: 'high-school' },
  { name: 'Westwood High School', slug: 'westwood-high-school', city: 'Mesa', state: 'Arizona', stateSlug: 'arizona', stateAbbr: 'AZ', districtSlug: 'mesa-unified-school-district', enrollment: 3100, type: 'high-school' },
  { name: 'Red Mountain High School', slug: 'red-mountain-high-school', city: 'Mesa', state: 'Arizona', stateSlug: 'arizona', stateAbbr: 'AZ', districtSlug: 'mesa-unified-school-district', enrollment: 3400, type: 'high-school' },
  { name: 'Mountain View High School', slug: 'mountain-view-high-school-mesa', city: 'Mesa', state: 'Arizona', stateSlug: 'arizona', stateAbbr: 'AZ', districtSlug: 'mesa-unified-school-district', enrollment: 3200, type: 'high-school' },
  { name: 'Dobson High School', slug: 'dobson-high-school', city: 'Mesa', state: 'Arizona', stateSlug: 'arizona', stateAbbr: 'AZ', districtSlug: 'mesa-unified-school-district', enrollment: 2500, type: 'high-school' },
  { name: 'Skyline High School', slug: 'skyline-high-school-mesa', city: 'Mesa', state: 'Arizona', stateSlug: 'arizona', stateAbbr: 'AZ', districtSlug: 'mesa-unified-school-district', enrollment: 2900, type: 'high-school' },

  // ── NEVADA – Clark County ──
  { name: 'Clark High School', slug: 'clark-high-school-las-vegas', city: 'Las Vegas', state: 'Nevada', stateSlug: 'nevada', stateAbbr: 'NV', districtSlug: 'clark-county-school-district', enrollment: 2800, type: 'high-school' },
  { name: 'Valley High School', slug: 'valley-high-school-las-vegas', city: 'Las Vegas', state: 'Nevada', stateSlug: 'nevada', stateAbbr: 'NV', districtSlug: 'clark-county-school-district', enrollment: 2300, type: 'high-school' },
  { name: 'Desert Pines High School', slug: 'desert-pines-high-school', city: 'Las Vegas', state: 'Nevada', stateSlug: 'nevada', stateAbbr: 'NV', districtSlug: 'clark-county-school-district', enrollment: 1800, type: 'high-school' },
  { name: 'Liberty High School', slug: 'liberty-high-school-las-vegas', city: 'Henderson', state: 'Nevada', stateSlug: 'nevada', stateAbbr: 'NV', districtSlug: 'clark-county-school-district', enrollment: 3700, type: 'high-school' },
  { name: 'Shadow Ridge High School', slug: 'shadow-ridge-high-school', city: 'Las Vegas', state: 'Nevada', stateSlug: 'nevada', stateAbbr: 'NV', districtSlug: 'clark-county-school-district', enrollment: 3200, type: 'high-school' },
  { name: 'Coronado High School', slug: 'coronado-high-school-henderson', city: 'Henderson', state: 'Nevada', stateSlug: 'nevada', stateAbbr: 'NV', districtSlug: 'clark-county-school-district', enrollment: 3000, type: 'high-school' },

  // ── MICHIGAN – Detroit Public Schools ──
  { name: 'Cass Technical High School', slug: 'cass-technical-high-school', city: 'Detroit', state: 'Michigan', stateSlug: 'michigan', stateAbbr: 'MI', districtSlug: 'detroit-public-schools-community-district', enrollment: 1600, type: 'high-school' },
  { name: 'Renaissance High School', slug: 'renaissance-high-school-detroit', city: 'Detroit', state: 'Michigan', stateSlug: 'michigan', stateAbbr: 'MI', districtSlug: 'detroit-public-schools-community-district', enrollment: 1100, type: 'high-school' },
  { name: 'Communication & Media Arts High School', slug: 'communication-and-media-arts-high-school', city: 'Detroit', state: 'Michigan', stateSlug: 'michigan', stateAbbr: 'MI', districtSlug: 'detroit-public-schools-community-district', enrollment: 900, type: 'high-school' },
  { name: 'Murray-Wright High School', slug: 'murray-wright-high-school', city: 'Detroit', state: 'Michigan', stateSlug: 'michigan', stateAbbr: 'MI', districtSlug: 'detroit-public-schools-community-district', enrollment: 1300, type: 'high-school' },

  // ── PENNSYLVANIA – Philadelphia School District ──
  { name: 'Central High School', slug: 'central-high-school-philadelphia', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', stateAbbr: 'PA', districtSlug: 'philadelphia-school-district', enrollment: 2200, type: 'high-school' },
  { name: 'Masterman High School', slug: 'masterman-high-school', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', stateAbbr: 'PA', districtSlug: 'philadelphia-school-district', enrollment: 1600, type: 'high-school' },
  { name: 'Northeast High School', slug: 'northeast-high-school-philadelphia', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', stateAbbr: 'PA', districtSlug: 'philadelphia-school-district', enrollment: 3100, type: 'high-school' },
  { name: 'Philadelphia High School for Girls', slug: 'philadelphia-high-school-for-girls', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', stateAbbr: 'PA', districtSlug: 'philadelphia-school-district', enrollment: 1500, type: 'high-school' },
  { name: 'South Philadelphia High School', slug: 'south-philadelphia-high-school', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', stateAbbr: 'PA', districtSlug: 'philadelphia-school-district', enrollment: 1400, type: 'high-school' },
  { name: 'Overbrook High School', slug: 'overbrook-high-school', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', stateAbbr: 'PA', districtSlug: 'philadelphia-school-district', enrollment: 1200, type: 'high-school' },

  // ── TENNESSEE – Nashville-Davidson ──
  { name: 'Hillsboro High School', slug: 'hillsboro-high-school-nashville', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', stateAbbr: 'TN', districtSlug: 'nashville-davidson-county-schools', enrollment: 1900, type: 'high-school' },
  { name: 'Stratford STEM Magnet School', slug: 'stratford-stem-magnet-school', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', stateAbbr: 'TN', districtSlug: 'nashville-davidson-county-schools', enrollment: 1200, type: 'high-school' },
  { name: 'Glencliff High School', slug: 'glencliff-high-school', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', stateAbbr: 'TN', districtSlug: 'nashville-davidson-county-schools', enrollment: 1700, type: 'high-school' },
  { name: 'McGavock High School', slug: 'mcgavock-high-school', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', stateAbbr: 'TN', districtSlug: 'nashville-davidson-county-schools', enrollment: 2700, type: 'high-school' },
];

export function getSchoolBySlug(slug: string): K12School | undefined {
  return k12schools.find((s) => s.slug === slug);
}

export function getAllSchoolSlugs(): { slug: string }[] {
  return k12schools.map((s) => ({ slug: s.slug }));
}

export function getSchoolsByState(stateSlug: string): K12School[] {
  return k12schools.filter((s) => s.stateSlug === stateSlug);
}

export function getSchoolsByDistrict(districtSlug: string): K12School[] {
  return k12schools.filter((s) => s.districtSlug === districtSlug);
}
