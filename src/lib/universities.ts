export interface University {
  name: string;
  slug: string;
  city: string;
  state: string;
  stateSlug: string;
  type: 'university' | 'college' | 'community-college';
}

export const universities: University[] = [
  // Alabama
  { name: 'University of Alabama', slug: 'university-of-alabama', city: 'Tuscaloosa', state: 'Alabama', stateSlug: 'alabama', type: 'university' },
  { name: 'Auburn University', slug: 'auburn-university', city: 'Auburn', state: 'Alabama', stateSlug: 'alabama', type: 'university' },
  { name: 'University of Alabama at Birmingham', slug: 'university-of-alabama-at-birmingham', city: 'Birmingham', state: 'Alabama', stateSlug: 'alabama', type: 'university' },
  { name: 'Tuskegee University', slug: 'tuskegee-university', city: 'Tuskegee', state: 'Alabama', stateSlug: 'alabama', type: 'university' },

  // Alaska
  { name: 'University of Alaska Fairbanks', slug: 'university-of-alaska-fairbanks', city: 'Fairbanks', state: 'Alaska', stateSlug: 'alaska', type: 'university' },
  { name: 'University of Alaska Anchorage', slug: 'university-of-alaska-anchorage', city: 'Anchorage', state: 'Alaska', stateSlug: 'alaska', type: 'university' },

  // Arizona
  { name: 'University of Arizona', slug: 'university-of-arizona', city: 'Tucson', state: 'Arizona', stateSlug: 'arizona', type: 'university' },
  { name: 'Arizona State University', slug: 'arizona-state-university', city: 'Tempe', state: 'Arizona', stateSlug: 'arizona', type: 'university' },
  { name: 'Northern Arizona University', slug: 'northern-arizona-university', city: 'Flagstaff', state: 'Arizona', stateSlug: 'arizona', type: 'university' },
  { name: 'Maricopa Community Colleges', slug: 'maricopa-community-colleges', city: 'Phoenix', state: 'Arizona', stateSlug: 'arizona', type: 'community-college' },

  // Arkansas
  { name: 'University of Arkansas', slug: 'university-of-arkansas', city: 'Fayetteville', state: 'Arkansas', stateSlug: 'arkansas', type: 'university' },
  { name: 'Arkansas State University', slug: 'arkansas-state-university', city: 'Jonesboro', state: 'Arkansas', stateSlug: 'arkansas', type: 'university' },

  // California
  { name: 'UCLA', slug: 'ucla', city: 'Los Angeles', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'UC Berkeley', slug: 'uc-berkeley', city: 'Berkeley', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'University of Southern California', slug: 'university-of-southern-california', city: 'Los Angeles', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Stanford University', slug: 'stanford-university', city: 'Stanford', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'UC San Diego', slug: 'uc-san-diego', city: 'La Jolla', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'UC Davis', slug: 'uc-davis', city: 'Davis', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'UC Santa Barbara', slug: 'uc-santa-barbara', city: 'Santa Barbara', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'UC Irvine', slug: 'uc-irvine', city: 'Irvine', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'California State University Fullerton', slug: 'california-state-university-fullerton', city: 'Fullerton', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'San Diego State University', slug: 'san-diego-state-university', city: 'San Diego', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Cal Poly San Luis Obispo', slug: 'cal-poly-san-luis-obispo', city: 'San Luis Obispo', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Cal Poly Pomona', slug: 'cal-poly-pomona', city: 'Pomona', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'San Francisco State University', slug: 'san-francisco-state-university', city: 'San Francisco', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'San José State University', slug: 'san-jose-state-university', city: 'San Jose', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Fresno State University', slug: 'fresno-state-university', city: 'Fresno', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'California State University Long Beach', slug: 'california-state-university-long-beach', city: 'Long Beach', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Chico State University', slug: 'chico-state-university', city: 'Chico', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Sacramento State University', slug: 'sacramento-state-university', city: 'Sacramento', state: 'California', stateSlug: 'california', type: 'university' },
  { name: 'Santa Monica College', slug: 'santa-monica-college', city: 'Santa Monica', state: 'California', stateSlug: 'california', type: 'community-college' },
  { name: 'Los Angeles City College', slug: 'los-angeles-city-college', city: 'Los Angeles', state: 'California', stateSlug: 'california', type: 'community-college' },
  { name: 'De Anza College', slug: 'de-anza-college', city: 'Cupertino', state: 'California', stateSlug: 'california', type: 'community-college' },
  { name: 'Pasadena City College', slug: 'pasadena-city-college', city: 'Pasadena', state: 'California', stateSlug: 'california', type: 'community-college' },

  // Colorado
  { name: 'University of Colorado Boulder', slug: 'university-of-colorado-boulder', city: 'Boulder', state: 'Colorado', stateSlug: 'colorado', type: 'university' },
  { name: 'Colorado State University', slug: 'colorado-state-university', city: 'Fort Collins', state: 'Colorado', stateSlug: 'colorado', type: 'university' },
  { name: 'University of Denver', slug: 'university-of-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', type: 'university' },
  { name: 'University of Colorado Denver', slug: 'university-of-colorado-denver', city: 'Denver', state: 'Colorado', stateSlug: 'colorado', type: 'university' },

  // Connecticut
  { name: 'Yale University', slug: 'yale-university', city: 'New Haven', state: 'Connecticut', stateSlug: 'connecticut', type: 'university' },
  { name: 'University of Connecticut', slug: 'university-of-connecticut', city: 'Storrs', state: 'Connecticut', stateSlug: 'connecticut', type: 'university' },
  { name: 'University of Hartford', slug: 'university-of-hartford', city: 'West Hartford', state: 'Connecticut', stateSlug: 'connecticut', type: 'university' },
  { name: 'Fairfield University', slug: 'fairfield-university', city: 'Fairfield', state: 'Connecticut', stateSlug: 'connecticut', type: 'university' },

  // Delaware
  { name: 'University of Delaware', slug: 'university-of-delaware', city: 'Newark', state: 'Delaware', stateSlug: 'delaware', type: 'university' },
  { name: 'Delaware State University', slug: 'delaware-state-university', city: 'Dover', state: 'Delaware', stateSlug: 'delaware', type: 'university' },

  // Florida
  { name: 'University of Florida', slug: 'university-of-florida', city: 'Gainesville', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'Florida State University', slug: 'florida-state-university', city: 'Tallahassee', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'University of Central Florida', slug: 'university-of-central-florida', city: 'Orlando', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'University of Miami', slug: 'university-of-miami', city: 'Coral Gables', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'Florida Atlantic University', slug: 'florida-atlantic-university', city: 'Boca Raton', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'Florida International University', slug: 'florida-international-university', city: 'Miami', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'University of South Florida', slug: 'university-of-south-florida', city: 'Tampa', state: 'Florida', stateSlug: 'florida', type: 'university' },
  { name: 'Rollins College', slug: 'rollins-college', city: 'Winter Park', state: 'Florida', stateSlug: 'florida', type: 'college' },
  { name: 'Miami Dade College', slug: 'miami-dade-college', city: 'Miami', state: 'Florida', stateSlug: 'florida', type: 'community-college' },

  // Georgia
  { name: 'University of Georgia', slug: 'university-of-georgia', city: 'Athens', state: 'Georgia', stateSlug: 'georgia', type: 'university' },
  { name: 'Georgia Institute of Technology', slug: 'georgia-institute-of-technology', city: 'Atlanta', state: 'Georgia', stateSlug: 'georgia', type: 'university' },
  { name: 'Georgia State University', slug: 'georgia-state-university', city: 'Atlanta', state: 'Georgia', stateSlug: 'georgia', type: 'university' },
  { name: 'Morehouse College', slug: 'morehouse-college', city: 'Atlanta', state: 'Georgia', stateSlug: 'georgia', type: 'college' },
  { name: 'Spelman College', slug: 'spelman-college', city: 'Atlanta', state: 'Georgia', stateSlug: 'georgia', type: 'college' },
  { name: 'Savannah College of Art and Design', slug: 'savannah-college-of-art-and-design', city: 'Savannah', state: 'Georgia', stateSlug: 'georgia', type: 'college' },

  // Hawaii
  { name: 'University of Hawaii at Manoa', slug: 'university-of-hawaii-at-manoa', city: 'Honolulu', state: 'Hawaii', stateSlug: 'hawaii', type: 'university' },

  // Idaho
  { name: 'University of Idaho', slug: 'university-of-idaho', city: 'Moscow', state: 'Idaho', stateSlug: 'idaho', type: 'university' },
  { name: 'Boise State University', slug: 'boise-state-university', city: 'Boise', state: 'Idaho', stateSlug: 'idaho', type: 'university' },

  // Illinois
  { name: 'Northwestern University', slug: 'northwestern-university', city: 'Evanston', state: 'Illinois', stateSlug: 'illinois', type: 'university' },
  { name: 'University of Chicago', slug: 'university-of-chicago', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', type: 'university' },
  { name: 'University of Illinois Urbana-Champaign', slug: 'university-of-illinois-urbana-champaign', city: 'Champaign', state: 'Illinois', stateSlug: 'illinois', type: 'university' },
  { name: 'Illinois State University', slug: 'illinois-state-university', city: 'Normal', state: 'Illinois', stateSlug: 'illinois', type: 'university' },
  { name: 'DePaul University', slug: 'depaul-university', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', type: 'university' },
  { name: 'Loyola University Chicago', slug: 'loyola-university-chicago', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', type: 'university' },
  { name: 'Chicago State University', slug: 'chicago-state-university', city: 'Chicago', state: 'Illinois', stateSlug: 'illinois', type: 'university' },

  // Indiana
  { name: 'Purdue University', slug: 'purdue-university', city: 'West Lafayette', state: 'Indiana', stateSlug: 'indiana', type: 'university' },
  { name: 'Indiana University Bloomington', slug: 'indiana-university-bloomington', city: 'Bloomington', state: 'Indiana', stateSlug: 'indiana', type: 'university' },
  { name: 'University of Notre Dame', slug: 'university-of-notre-dame', city: 'Notre Dame', state: 'Indiana', stateSlug: 'indiana', type: 'university' },
  { name: 'Butler University', slug: 'butler-university', city: 'Indianapolis', state: 'Indiana', stateSlug: 'indiana', type: 'university' },
  { name: 'Ball State University', slug: 'ball-state-university', city: 'Muncie', state: 'Indiana', stateSlug: 'indiana', type: 'university' },

  // Iowa
  { name: 'University of Iowa', slug: 'university-of-iowa', city: 'Iowa City', state: 'Iowa', stateSlug: 'iowa', type: 'university' },
  { name: 'Iowa State University', slug: 'iowa-state-university', city: 'Ames', state: 'Iowa', stateSlug: 'iowa', type: 'university' },
  { name: 'Drake University', slug: 'drake-university', city: 'Des Moines', state: 'Iowa', stateSlug: 'iowa', type: 'university' },

  // Kansas
  { name: 'University of Kansas', slug: 'university-of-kansas', city: 'Lawrence', state: 'Kansas', stateSlug: 'kansas', type: 'university' },
  { name: 'Kansas State University', slug: 'kansas-state-university', city: 'Manhattan', state: 'Kansas', stateSlug: 'kansas', type: 'university' },

  // Kentucky
  { name: 'University of Kentucky', slug: 'university-of-kentucky', city: 'Lexington', state: 'Kentucky', stateSlug: 'kentucky', type: 'university' },
  { name: 'University of Louisville', slug: 'university-of-louisville', city: 'Louisville', state: 'Kentucky', stateSlug: 'kentucky', type: 'university' },
  { name: 'Morehead State University', slug: 'morehead-state-university', city: 'Morehead', state: 'Kentucky', stateSlug: 'kentucky', type: 'university' },

  // Louisiana
  { name: 'Louisiana State University', slug: 'louisiana-state-university', city: 'Baton Rouge', state: 'Louisiana', stateSlug: 'louisiana', type: 'university' },
  { name: 'Tulane University', slug: 'tulane-university', city: 'New Orleans', state: 'Louisiana', stateSlug: 'louisiana', type: 'university' },
  { name: 'Loyola University New Orleans', slug: 'loyola-university-new-orleans', city: 'New Orleans', state: 'Louisiana', stateSlug: 'louisiana', type: 'university' },
  { name: 'Southern University and A&M College', slug: 'southern-university-and-am-college', city: 'Baton Rouge', state: 'Louisiana', stateSlug: 'louisiana', type: 'university' },

  // Maine
  { name: 'University of Maine', slug: 'university-of-maine', city: 'Orono', state: 'Maine', stateSlug: 'maine', type: 'university' },
  { name: 'Bowdoin College', slug: 'bowdoin-college', city: 'Brunswick', state: 'Maine', stateSlug: 'maine', type: 'college' },
  { name: 'Colby College', slug: 'colby-college', city: 'Waterville', state: 'Maine', stateSlug: 'maine', type: 'college' },

  // Maryland
  { name: 'University of Maryland', slug: 'university-of-maryland', city: 'College Park', state: 'Maryland', stateSlug: 'maryland', type: 'university' },
  { name: 'Johns Hopkins University', slug: 'johns-hopkins-university', city: 'Baltimore', state: 'Maryland', stateSlug: 'maryland', type: 'university' },
  { name: 'Towson University', slug: 'towson-university', city: 'Towson', state: 'Maryland', stateSlug: 'maryland', type: 'university' },
  { name: 'Morgan State University', slug: 'morgan-state-university', city: 'Baltimore', state: 'Maryland', stateSlug: 'maryland', type: 'university' },

  // Massachusetts
  { name: 'Massachusetts Institute of Technology', slug: 'massachusetts-institute-of-technology', city: 'Cambridge', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },
  { name: 'Harvard University', slug: 'harvard-university', city: 'Cambridge', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },
  { name: 'Boston University', slug: 'boston-university', city: 'Boston', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },
  { name: 'Northeastern University', slug: 'northeastern-university', city: 'Boston', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },
  { name: 'Tufts University', slug: 'tufts-university', city: 'Medford', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },
  { name: 'University of Massachusetts Amherst', slug: 'university-of-massachusetts-amherst', city: 'Amherst', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },
  { name: 'Wellesley College', slug: 'wellesley-college', city: 'Wellesley', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'college' },
  { name: 'Boston College', slug: 'boston-college', city: 'Chestnut Hill', state: 'Massachusetts', stateSlug: 'massachusetts', type: 'university' },

  // Michigan
  { name: 'University of Michigan', slug: 'university-of-michigan', city: 'Ann Arbor', state: 'Michigan', stateSlug: 'michigan', type: 'university' },
  { name: 'Michigan State University', slug: 'michigan-state-university', city: 'East Lansing', state: 'Michigan', stateSlug: 'michigan', type: 'university' },
  { name: 'Wayne State University', slug: 'wayne-state-university', city: 'Detroit', state: 'Michigan', stateSlug: 'michigan', type: 'university' },
  { name: 'Western Michigan University', slug: 'western-michigan-university', city: 'Kalamazoo', state: 'Michigan', stateSlug: 'michigan', type: 'university' },
  { name: 'Oakland University', slug: 'oakland-university', city: 'Rochester', state: 'Michigan', stateSlug: 'michigan', type: 'university' },

  // Minnesota
  { name: 'University of Minnesota', slug: 'university-of-minnesota', city: 'Minneapolis', state: 'Minnesota', stateSlug: 'minnesota', type: 'university' },
  { name: 'Carleton College', slug: 'carleton-college', city: 'Northfield', state: 'Minnesota', stateSlug: 'minnesota', type: 'college' },
  { name: 'Macalester College', slug: 'macalester-college', city: 'Saint Paul', state: 'Minnesota', stateSlug: 'minnesota', type: 'college' },
  { name: 'University of St. Thomas', slug: 'university-of-st-thomas', city: 'Saint Paul', state: 'Minnesota', stateSlug: 'minnesota', type: 'university' },

  // Mississippi
  { name: 'University of Mississippi', slug: 'university-of-mississippi', city: 'Oxford', state: 'Mississippi', stateSlug: 'mississippi', type: 'university' },
  { name: 'Mississippi State University', slug: 'mississippi-state-university', city: 'Starkville', state: 'Mississippi', stateSlug: 'mississippi', type: 'university' },
  { name: 'Jackson State University', slug: 'jackson-state-university', city: 'Jackson', state: 'Mississippi', stateSlug: 'mississippi', type: 'university' },

  // Missouri
  { name: 'Washington University in St. Louis', slug: 'washington-university-in-st-louis', city: 'St. Louis', state: 'Missouri', stateSlug: 'missouri', type: 'university' },
  { name: 'University of Missouri', slug: 'university-of-missouri', city: 'Columbia', state: 'Missouri', stateSlug: 'missouri', type: 'university' },
  { name: 'Saint Louis University', slug: 'saint-louis-university', city: 'St. Louis', state: 'Missouri', stateSlug: 'missouri', type: 'university' },
  { name: 'Truman State University', slug: 'truman-state-university', city: 'Kirksville', state: 'Missouri', stateSlug: 'missouri', type: 'university' },

  // Montana
  { name: 'University of Montana', slug: 'university-of-montana', city: 'Missoula', state: 'Montana', stateSlug: 'montana', type: 'university' },
  { name: 'Montana State University', slug: 'montana-state-university', city: 'Bozeman', state: 'Montana', stateSlug: 'montana', type: 'university' },

  // Nebraska
  { name: 'University of Nebraska-Lincoln', slug: 'university-of-nebraska-lincoln', city: 'Lincoln', state: 'Nebraska', stateSlug: 'nebraska', type: 'university' },
  { name: 'Creighton University', slug: 'creighton-university', city: 'Omaha', state: 'Nebraska', stateSlug: 'nebraska', type: 'university' },

  // Nevada
  { name: 'University of Nevada Las Vegas', slug: 'university-of-nevada-las-vegas', city: 'Las Vegas', state: 'Nevada', stateSlug: 'nevada', type: 'university' },
  { name: 'University of Nevada Reno', slug: 'university-of-nevada-reno', city: 'Reno', state: 'Nevada', stateSlug: 'nevada', type: 'university' },

  // New Hampshire
  { name: 'Dartmouth College', slug: 'dartmouth-college', city: 'Hanover', state: 'New Hampshire', stateSlug: 'new-hampshire', type: 'college' },
  { name: 'University of New Hampshire', slug: 'university-of-new-hampshire', city: 'Durham', state: 'New Hampshire', stateSlug: 'new-hampshire', type: 'university' },
  { name: 'Plymouth State University', slug: 'plymouth-state-university', city: 'Plymouth', state: 'New Hampshire', stateSlug: 'new-hampshire', type: 'university' },

  // New Jersey
  { name: 'Princeton University', slug: 'princeton-university', city: 'Princeton', state: 'New Jersey', stateSlug: 'new-jersey', type: 'university' },
  { name: 'Rutgers University', slug: 'rutgers-university', city: 'New Brunswick', state: 'New Jersey', stateSlug: 'new-jersey', type: 'university' },
  { name: 'Seton Hall University', slug: 'seton-hall-university', city: 'South Orange', state: 'New Jersey', stateSlug: 'new-jersey', type: 'university' },
  { name: 'Montclair State University', slug: 'montclair-state-university', city: 'Montclair', state: 'New Jersey', stateSlug: 'new-jersey', type: 'university' },
  { name: 'New Jersey Institute of Technology', slug: 'new-jersey-institute-of-technology', city: 'Newark', state: 'New Jersey', stateSlug: 'new-jersey', type: 'university' },

  // New Mexico
  { name: 'University of New Mexico', slug: 'university-of-new-mexico', city: 'Albuquerque', state: 'New Mexico', stateSlug: 'new-mexico', type: 'university' },
  { name: 'New Mexico State University', slug: 'new-mexico-state-university', city: 'Las Cruces', state: 'New Mexico', stateSlug: 'new-mexico', type: 'university' },
  { name: 'New Mexico Tech', slug: 'new-mexico-tech', city: 'Socorro', state: 'New Mexico', stateSlug: 'new-mexico', type: 'university' },

  // New York
  { name: 'Columbia University', slug: 'columbia-university', city: 'New York', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Cornell University', slug: 'cornell-university', city: 'Ithaca', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'New York University', slug: 'new-york-university', city: 'New York', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Fordham University', slug: 'fordham-university', city: 'Bronx', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Syracuse University', slug: 'syracuse-university', city: 'Syracuse', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'SUNY Buffalo', slug: 'suny-buffalo', city: 'Buffalo', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Stony Brook University', slug: 'stony-brook-university', city: 'Stony Brook', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'City College of New York', slug: 'city-college-of-new-york', city: 'New York', state: 'New York', stateSlug: 'new-york', type: 'college' },
  { name: 'Hofstra University', slug: 'hofstra-university', city: 'Hempstead', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Rensselaer Polytechnic Institute', slug: 'rensselaer-polytechnic-institute', city: 'Troy', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Binghamton University', slug: 'binghamton-university', city: 'Binghamton', state: 'New York', stateSlug: 'new-york', type: 'university' },
  { name: 'Purchase College', slug: 'purchase-college', city: 'Purchase', state: 'New York', stateSlug: 'new-york', type: 'college' },

  // North Carolina
  { name: 'University of North Carolina at Chapel Hill', slug: 'university-of-north-carolina-at-chapel-hill', city: 'Chapel Hill', state: 'North Carolina', stateSlug: 'north-carolina', type: 'university' },
  { name: 'North Carolina State University', slug: 'north-carolina-state-university', city: 'Raleigh', state: 'North Carolina', stateSlug: 'north-carolina', type: 'university' },
  { name: 'Duke University', slug: 'duke-university', city: 'Durham', state: 'North Carolina', stateSlug: 'north-carolina', type: 'university' },
  { name: 'Wake Forest University', slug: 'wake-forest-university', city: 'Winston-Salem', state: 'North Carolina', stateSlug: 'north-carolina', type: 'university' },
  { name: 'Davidson College', slug: 'davidson-college', city: 'Davidson', state: 'North Carolina', stateSlug: 'north-carolina', type: 'college' },
  { name: 'Elon University', slug: 'elon-university', city: 'Elon', state: 'North Carolina', stateSlug: 'north-carolina', type: 'university' },
  { name: 'North Carolina A&T State University', slug: 'north-carolina-at-state-university', city: 'Greensboro', state: 'North Carolina', stateSlug: 'north-carolina', type: 'university' },

  // North Dakota
  { name: 'University of North Dakota', slug: 'university-of-north-dakota', city: 'Grand Forks', state: 'North Dakota', stateSlug: 'north-dakota', type: 'university' },
  { name: 'North Dakota State University', slug: 'north-dakota-state-university', city: 'Fargo', state: 'North Dakota', stateSlug: 'north-dakota', type: 'university' },

  // Ohio
  { name: 'Ohio State University', slug: 'ohio-state-university', city: 'Columbus', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Case Western Reserve University', slug: 'case-western-reserve-university', city: 'Cleveland', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'University of Cincinnati', slug: 'university-of-cincinnati', city: 'Cincinnati', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Miami University', slug: 'miami-university', city: 'Oxford', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Ohio University', slug: 'ohio-university', city: 'Athens', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Bowling Green State University', slug: 'bowling-green-state-university', city: 'Bowling Green', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Kent State University', slug: 'kent-state-university', city: 'Kent', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Xavier University', slug: 'xavier-university', city: 'Cincinnati', state: 'Ohio', stateSlug: 'ohio', type: 'university' },
  { name: 'Columbus State Community College', slug: 'columbus-state-community-college', city: 'Columbus', state: 'Ohio', stateSlug: 'ohio', type: 'community-college' },
  { name: 'Cuyahoga Community College', slug: 'cuyahoga-community-college', city: 'Cleveland', state: 'Ohio', stateSlug: 'ohio', type: 'community-college' },

  // Oklahoma
  { name: 'University of Oklahoma', slug: 'university-of-oklahoma', city: 'Norman', state: 'Oklahoma', stateSlug: 'oklahoma', type: 'university' },
  { name: 'Oklahoma State University', slug: 'oklahoma-state-university', city: 'Stillwater', state: 'Oklahoma', stateSlug: 'oklahoma', type: 'university' },
  { name: 'Oral Roberts University', slug: 'oral-roberts-university', city: 'Tulsa', state: 'Oklahoma', stateSlug: 'oklahoma', type: 'university' },

  // Oregon
  { name: 'University of Oregon', slug: 'university-of-oregon', city: 'Eugene', state: 'Oregon', stateSlug: 'oregon', type: 'university' },
  { name: 'Oregon State University', slug: 'oregon-state-university', city: 'Corvallis', state: 'Oregon', stateSlug: 'oregon', type: 'university' },
  { name: 'Portland State University', slug: 'portland-state-university', city: 'Portland', state: 'Oregon', stateSlug: 'oregon', type: 'university' },
  { name: 'Reed College', slug: 'reed-college', city: 'Portland', state: 'Oregon', stateSlug: 'oregon', type: 'college' },

  // Pennsylvania
  { name: 'University of Pennsylvania', slug: 'university-of-pennsylvania', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'University of Pittsburgh', slug: 'university-of-pittsburgh', city: 'Pittsburgh', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Temple University', slug: 'temple-university', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Carnegie Mellon University', slug: 'carnegie-mellon-university', city: 'Pittsburgh', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Penn State University', slug: 'penn-state-university', city: 'University Park', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Drexel University', slug: 'drexel-university', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Villanova University', slug: 'villanova-university', city: 'Villanova', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Lehigh University', slug: 'lehigh-university', city: 'Bethlehem', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'university' },
  { name: 'Swarthmore College', slug: 'swarthmore-college', city: 'Swarthmore', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'college' },
  { name: 'Haverford College', slug: 'haverford-college', city: 'Haverford', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'college' },
  { name: 'Community College of Philadelphia', slug: 'community-college-of-philadelphia', city: 'Philadelphia', state: 'Pennsylvania', stateSlug: 'pennsylvania', type: 'community-college' },

  // Rhode Island
  { name: 'Brown University', slug: 'brown-university', city: 'Providence', state: 'Rhode Island', stateSlug: 'rhode-island', type: 'university' },
  { name: 'University of Rhode Island', slug: 'university-of-rhode-island', city: 'Kingston', state: 'Rhode Island', stateSlug: 'rhode-island', type: 'university' },
  { name: 'Providence College', slug: 'providence-college', city: 'Providence', state: 'Rhode Island', stateSlug: 'rhode-island', type: 'college' },
  { name: 'Rhode Island School of Design', slug: 'rhode-island-school-of-design', city: 'Providence', state: 'Rhode Island', stateSlug: 'rhode-island', type: 'college' },

  // South Carolina
  { name: 'University of South Carolina', slug: 'university-of-south-carolina', city: 'Columbia', state: 'South Carolina', stateSlug: 'south-carolina', type: 'university' },
  { name: 'Clemson University', slug: 'clemson-university', city: 'Clemson', state: 'South Carolina', stateSlug: 'south-carolina', type: 'university' },
  { name: 'The Citadel', slug: 'the-citadel', city: 'Charleston', state: 'South Carolina', stateSlug: 'south-carolina', type: 'college' },
  { name: 'Furman University', slug: 'furman-university', city: 'Greenville', state: 'South Carolina', stateSlug: 'south-carolina', type: 'university' },

  // South Dakota
  { name: 'University of South Dakota', slug: 'university-of-south-dakota', city: 'Vermillion', state: 'South Dakota', stateSlug: 'south-dakota', type: 'university' },
  { name: 'South Dakota State University', slug: 'south-dakota-state-university', city: 'Brookings', state: 'South Dakota', stateSlug: 'south-dakota', type: 'university' },

  // Tennessee
  { name: 'Vanderbilt University', slug: 'vanderbilt-university', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', type: 'university' },
  { name: 'University of Tennessee', slug: 'university-of-tennessee', city: 'Knoxville', state: 'Tennessee', stateSlug: 'tennessee', type: 'university' },
  { name: 'Tennessee State University', slug: 'tennessee-state-university', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', type: 'university' },
  { name: 'Rhodes College', slug: 'rhodes-college', city: 'Memphis', state: 'Tennessee', stateSlug: 'tennessee', type: 'college' },
  { name: 'Belmont University', slug: 'belmont-university', city: 'Nashville', state: 'Tennessee', stateSlug: 'tennessee', type: 'university' },

  // Texas
  { name: 'University of Texas at Austin', slug: 'university-of-texas-at-austin', city: 'Austin', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Texas A&M University', slug: 'texas-am-university', city: 'College Station', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Rice University', slug: 'rice-university', city: 'Houston', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Southern Methodist University', slug: 'southern-methodist-university', city: 'Dallas', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Texas Christian University', slug: 'texas-christian-university', city: 'Fort Worth', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Baylor University', slug: 'baylor-university', city: 'Waco', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Texas Tech University', slug: 'texas-tech-university', city: 'Lubbock', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'University of Texas at San Antonio', slug: 'university-of-texas-at-san-antonio', city: 'San Antonio', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'University of Texas at Dallas', slug: 'university-of-texas-at-dallas', city: 'Richardson', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'University of Houston', slug: 'university-of-houston', city: 'Houston', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Prairie View A&M University', slug: 'prairie-view-am-university', city: 'Prairie View', state: 'Texas', stateSlug: 'texas', type: 'university' },
  { name: 'Houston Community College', slug: 'houston-community-college', city: 'Houston', state: 'Texas', stateSlug: 'texas', type: 'community-college' },
  { name: 'Lone Star College', slug: 'lone-star-college', city: 'The Woodlands', state: 'Texas', stateSlug: 'texas', type: 'community-college' },

  // Utah
  { name: 'University of Utah', slug: 'university-of-utah', city: 'Salt Lake City', state: 'Utah', stateSlug: 'utah', type: 'university' },
  { name: 'Utah State University', slug: 'utah-state-university', city: 'Logan', state: 'Utah', stateSlug: 'utah', type: 'university' },
  { name: 'Brigham Young University', slug: 'brigham-young-university', city: 'Provo', state: 'Utah', stateSlug: 'utah', type: 'university' },
  { name: 'Weber State University', slug: 'weber-state-university', city: 'Ogden', state: 'Utah', stateSlug: 'utah', type: 'university' },

  // Vermont
  { name: 'University of Vermont', slug: 'university-of-vermont', city: 'Burlington', state: 'Vermont', stateSlug: 'vermont', type: 'university' },
  { name: 'Middlebury College', slug: 'middlebury-college', city: 'Middlebury', state: 'Vermont', stateSlug: 'vermont', type: 'college' },

  // Virginia
  { name: 'University of Virginia', slug: 'university-of-virginia', city: 'Charlottesville', state: 'Virginia', stateSlug: 'virginia', type: 'university' },
  { name: 'Virginia Tech', slug: 'virginia-tech', city: 'Blacksburg', state: 'Virginia', stateSlug: 'virginia', type: 'university' },
  { name: 'George Mason University', slug: 'george-mason-university', city: 'Fairfax', state: 'Virginia', stateSlug: 'virginia', type: 'university' },
  { name: 'College of William and Mary', slug: 'college-of-william-and-mary', city: 'Williamsburg', state: 'Virginia', stateSlug: 'virginia', type: 'college' },
  { name: 'Virginia Commonwealth University', slug: 'virginia-commonwealth-university', city: 'Richmond', state: 'Virginia', stateSlug: 'virginia', type: 'university' },
  { name: 'Hampton University', slug: 'hampton-university', city: 'Hampton', state: 'Virginia', stateSlug: 'virginia', type: 'university' },
  { name: 'Northern Virginia Community College', slug: 'northern-virginia-community-college', city: 'Annandale', state: 'Virginia', stateSlug: 'virginia', type: 'community-college' },

  // District of Columbia
  { name: 'Howard University', slug: 'howard-university', city: 'Washington', state: 'District of Columbia', stateSlug: 'district-of-columbia', type: 'university' },

  // Washington
  { name: 'University of Washington', slug: 'university-of-washington', city: 'Seattle', state: 'Washington', stateSlug: 'washington', type: 'university' },
  { name: 'Washington State University', slug: 'washington-state-university', city: 'Pullman', state: 'Washington', stateSlug: 'washington', type: 'university' },
  { name: 'Seattle University', slug: 'seattle-university', city: 'Seattle', state: 'Washington', stateSlug: 'washington', type: 'university' },
  { name: 'Gonzaga University', slug: 'gonzaga-university', city: 'Spokane', state: 'Washington', stateSlug: 'washington', type: 'university' },

  // West Virginia
  { name: 'West Virginia University', slug: 'west-virginia-university', city: 'Morgantown', state: 'West Virginia', stateSlug: 'west-virginia', type: 'university' },
  { name: 'Marshall University', slug: 'marshall-university', city: 'Huntington', state: 'West Virginia', stateSlug: 'west-virginia', type: 'university' },

  // Wisconsin
  { name: 'University of Wisconsin-Madison', slug: 'university-of-wisconsin-madison', city: 'Madison', state: 'Wisconsin', stateSlug: 'wisconsin', type: 'university' },
  { name: 'Marquette University', slug: 'marquette-university', city: 'Milwaukee', state: 'Wisconsin', stateSlug: 'wisconsin', type: 'university' },
  { name: 'University of Wisconsin-Milwaukee', slug: 'university-of-wisconsin-milwaukee', city: 'Milwaukee', state: 'Wisconsin', stateSlug: 'wisconsin', type: 'university' },

  // Wyoming
  { name: 'University of Wyoming', slug: 'university-of-wyoming', city: 'Laramie', state: 'Wyoming', stateSlug: 'wyoming', type: 'university' },

  // ── INTERNATIONAL ──────────────────────────────────────────────────────────

  // United Kingdom
  { name: 'University of Oxford', slug: 'university-of-oxford', city: 'Oxford', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Cambridge', slug: 'university-of-cambridge', city: 'Cambridge', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Imperial College London', slug: 'imperial-college-london', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University College London', slug: 'university-college-london', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'London School of Economics', slug: 'london-school-of-economics', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: "King's College London", slug: 'kings-college-london', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Edinburgh', slug: 'university-of-edinburgh', city: 'Edinburgh', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Manchester', slug: 'university-of-manchester', city: 'Manchester', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Bristol', slug: 'university-of-bristol', city: 'Bristol', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Warwick', slug: 'university-of-warwick', city: 'Coventry', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Durham University', slug: 'durham-university', city: 'Durham', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Birmingham', slug: 'university-of-birmingham', city: 'Birmingham', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Nottingham', slug: 'university-of-nottingham', city: 'Nottingham', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Sheffield', slug: 'university-of-sheffield', city: 'Sheffield', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Leeds', slug: 'university-of-leeds', city: 'Leeds', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Southampton', slug: 'university-of-southampton', city: 'Southampton', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Glasgow', slug: 'university-of-glasgow', city: 'Glasgow', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of St Andrews', slug: 'university-of-st-andrews', city: 'St Andrews', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Exeter', slug: 'university-of-exeter', city: 'Exeter', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Bath', slug: 'university-of-bath', city: 'Bath', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of York', slug: 'university-of-york', city: 'York', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Cardiff University', slug: 'cardiff-university', city: 'Cardiff', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Queen Mary University of London', slug: 'queen-mary-university-of-london', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Royal Holloway University of London', slug: 'royal-holloway-university-of-london', city: 'Egham', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Reading', slug: 'university-of-reading', city: 'Reading', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Surrey', slug: 'university-of-surrey', city: 'Guildford', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Sussex', slug: 'university-of-sussex', city: 'Brighton', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Aberdeen', slug: 'university-of-aberdeen', city: 'Aberdeen', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Newcastle University', slug: 'newcastle-university', city: 'Newcastle', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Liverpool', slug: 'university-of-liverpool', city: 'Liverpool', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Leicester', slug: 'university-of-leicester', city: 'Leicester', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Lancaster University', slug: 'lancaster-university', city: 'Lancaster', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Loughborough University', slug: 'loughborough-university', city: 'Loughborough', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Aston University', slug: 'aston-university', city: 'Birmingham', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Brunel University London', slug: 'brunel-university-london', city: 'Uxbridge', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Coventry University', slug: 'coventry-university', city: 'Coventry', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Heriot-Watt University', slug: 'heriot-watt-university', city: 'Edinburgh', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Hull', slug: 'university-of-hull', city: 'Hull', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Keele University', slug: 'keele-university', city: 'Keele', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Kent', slug: 'university-of-kent', city: 'Canterbury', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Middlesex University', slug: 'middlesex-university', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Northumbria University', slug: 'northumbria-university', city: 'Newcastle', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Plymouth', slug: 'university-of-plymouth', city: 'Plymouth', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Portsmouth', slug: 'university-of-portsmouth', city: 'Portsmouth', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: "Queen's University Belfast", slug: 'queens-university-belfast', city: 'Belfast', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Robert Gordon University', slug: 'robert-gordon-university', city: 'Aberdeen', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Stirling', slug: 'university-of-stirling', city: 'Stirling', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Strathclyde', slug: 'university-of-strathclyde', city: 'Glasgow', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Ulster University', slug: 'ulster-university', city: 'Coleraine', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'University of Westminster', slug: 'university-of-westminster', city: 'London', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Swansea University', slug: 'swansea-university', city: 'Swansea', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },
  { name: 'Bangor University', slug: 'bangor-university', city: 'Bangor', state: 'United Kingdom', stateSlug: 'united-kingdom', type: 'university' },

  // Germany
  { name: 'Technical University of Munich', slug: 'technical-university-of-munich', city: 'Munich', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'LMU Munich', slug: 'lmu-munich', city: 'Munich', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Heidelberg University', slug: 'heidelberg-university', city: 'Heidelberg', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Humboldt University of Berlin', slug: 'humboldt-university-of-berlin', city: 'Berlin', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Free University of Berlin', slug: 'free-university-of-berlin', city: 'Berlin', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Technical University of Berlin', slug: 'technical-university-of-berlin', city: 'Berlin', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Hamburg', slug: 'university-of-hamburg', city: 'Hamburg', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Goethe University Frankfurt', slug: 'goethe-university-frankfurt', city: 'Frankfurt', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Freiburg', slug: 'university-of-freiburg', city: 'Freiburg', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Tubingen', slug: 'university-of-tubingen', city: 'Tubingen', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Gottingen', slug: 'university-of-gottingen', city: 'Gottingen', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Bonn', slug: 'university-of-bonn', city: 'Bonn', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Cologne', slug: 'university-of-cologne', city: 'Cologne', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Stuttgart', slug: 'university-of-stuttgart', city: 'Stuttgart', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Karlsruhe Institute of Technology', slug: 'karlsruhe-institute-of-technology', city: 'Karlsruhe', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'RWTH Aachen University', slug: 'rwth-aachen-university', city: 'Aachen', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Mannheim', slug: 'university-of-mannheim', city: 'Mannheim', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Munster', slug: 'university-of-munster', city: 'Munster', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Johannes Gutenberg University Mainz', slug: 'johannes-gutenberg-university-mainz', city: 'Mainz', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Kiel University', slug: 'kiel-university', city: 'Kiel', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Bremen', slug: 'university-of-bremen', city: 'Bremen', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Ruhr University Bochum', slug: 'ruhr-university-bochum', city: 'Bochum', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Friedrich-Alexander University Erlangen-Nuremberg', slug: 'friedrich-alexander-university-erlangen-nuremberg', city: 'Erlangen', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'TU Dresden', slug: 'tu-dresden', city: 'Dresden', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Friedrich Schiller University Jena', slug: 'friedrich-schiller-university-jena', city: 'Jena', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Philipps University Marburg', slug: 'philipps-university-marburg', city: 'Marburg', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Wurzburg', slug: 'university-of-wurzburg', city: 'Wurzburg', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'University of Konstanz', slug: 'university-of-konstanz', city: 'Konstanz', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Ulm University', slug: 'ulm-university', city: 'Ulm', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Bielefeld University', slug: 'bielefeld-university', city: 'Bielefeld', state: 'Germany', stateSlug: 'germany', type: 'university' },
  { name: 'Heinrich Heine University Dusseldorf', slug: 'heinrich-heine-university-dusseldorf', city: 'Dusseldorf', state: 'Germany', stateSlug: 'germany', type: 'university' },

  // France
  { name: 'Sciences Po Paris', slug: 'sciences-po-paris', city: 'Paris', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'HEC Paris', slug: 'hec-paris', city: 'Jouy-en-Josas', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'INSEAD', slug: 'insead', city: 'Fontainebleau', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Ecole Polytechnique', slug: 'ecole-polytechnique', city: 'Palaiseau', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Sorbonne University', slug: 'sorbonne-university', city: 'Paris', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Sorbonne Nouvelle', slug: 'sorbonne-nouvelle', city: 'Paris', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Paris-Sorbonne', slug: 'paris-sorbonne', city: 'Paris', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Universite Paris-Saclay', slug: 'universite-paris-saclay', city: 'Gif-sur-Yvette', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Universite Paris Cite', slug: 'universite-paris-cite', city: 'Paris', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Ecole Normale Superieure Paris', slug: 'ecole-normale-superieure-paris', city: 'Paris', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'ESSEC Business School', slug: 'essec-business-school', city: 'Cergy', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'EDHEC Business School', slug: 'edhec-business-school', city: 'Lille', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Grenoble INP', slug: 'grenoble-inp', city: 'Grenoble', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Universite Claude Bernard Lyon 1', slug: 'universite-claude-bernard-lyon-1', city: 'Lyon', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Universite Lumiere Lyon 2', slug: 'universite-lumiere-lyon-2', city: 'Lyon', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Bordeaux', slug: 'university-of-bordeaux', city: 'Bordeaux', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Strasbourg', slug: 'university-of-strasbourg', city: 'Strasbourg', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Lille', slug: 'university-of-lille', city: 'Lille', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Aix-Marseille University', slug: 'aix-marseille-university', city: 'Marseille', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'Universite Cote d Azur', slug: 'universite-cote-dazur', city: 'Nice', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Nantes', slug: 'university-of-nantes', city: 'Nantes', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Toulouse 1 Capitole', slug: 'university-of-toulouse-1-capitole', city: 'Toulouse', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Rennes 1', slug: 'university-of-rennes-1', city: 'Rennes', state: 'France', stateSlug: 'france', type: 'university' },
  { name: 'University of Montpellier', slug: 'university-of-montpellier', city: 'Montpellier', state: 'France', stateSlug: 'france', type: 'university' },

  // Netherlands
  { name: 'Delft University of Technology', slug: 'delft-university-of-technology', city: 'Delft', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Leiden University', slug: 'leiden-university', city: 'Leiden', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'University of Amsterdam', slug: 'university-of-amsterdam', city: 'Amsterdam', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Utrecht University', slug: 'utrecht-university', city: 'Utrecht', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Erasmus University Rotterdam', slug: 'erasmus-university-rotterdam', city: 'Rotterdam', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'University of Groningen', slug: 'university-of-groningen', city: 'Groningen', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Eindhoven University of Technology', slug: 'eindhoven-university-of-technology', city: 'Eindhoven', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Tilburg University', slug: 'tilburg-university', city: 'Tilburg', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Maastricht University', slug: 'maastricht-university', city: 'Maastricht', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'VU Amsterdam', slug: 'vu-amsterdam', city: 'Amsterdam', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Wageningen University', slug: 'wageningen-university', city: 'Wageningen', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'University of Twente', slug: 'university-of-twente', city: 'Enschede', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },
  { name: 'Radboud University', slug: 'radboud-university', city: 'Nijmegen', state: 'Netherlands', stateSlug: 'netherlands', type: 'university' },

  // Italy
  { name: 'University of Bologna', slug: 'university-of-bologna', city: 'Bologna', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'Sapienza University of Rome', slug: 'sapienza-university-of-rome', city: 'Rome', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'Politecnico di Milano', slug: 'politecnico-di-milano', city: 'Milan', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'Bocconi University', slug: 'bocconi-university', city: 'Milan', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'University of Padua', slug: 'university-of-padua', city: 'Padua', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'University of Florence', slug: 'university-of-florence', city: 'Florence', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'Politecnico di Torino', slug: 'politecnico-di-torino', city: 'Turin', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'University of Turin', slug: 'university-of-turin', city: 'Turin', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'University of Naples Federico II', slug: 'university-of-naples-federico-ii', city: 'Naples', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'University of Pisa', slug: 'university-of-pisa', city: 'Pisa', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'Ca Foscari University of Venice', slug: 'ca-foscari-university-of-venice', city: 'Venice', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'University of Trento', slug: 'university-of-trento', city: 'Trento', state: 'Italy', stateSlug: 'italy', type: 'university' },
  { name: 'LUISS University Rome', slug: 'luiss-university-rome', city: 'Rome', state: 'Italy', stateSlug: 'italy', type: 'university' },

  // Spain
  { name: 'Complutense University of Madrid', slug: 'complutense-university-of-madrid', city: 'Madrid', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'Autonomous University of Madrid', slug: 'autonomous-university-of-madrid', city: 'Madrid', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of Barcelona', slug: 'university-of-barcelona', city: 'Barcelona', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'Autonomous University of Barcelona', slug: 'autonomous-university-of-barcelona', city: 'Barcelona', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of Valencia', slug: 'university-of-valencia', city: 'Valencia', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of Seville', slug: 'university-of-seville', city: 'Seville', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of the Basque Country', slug: 'university-of-the-basque-country', city: 'Bilbao', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of Granada', slug: 'university-of-granada', city: 'Granada', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of Navarra', slug: 'university-of-navarra', city: 'Pamplona', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'IE University Madrid', slug: 'ie-university-madrid', city: 'Madrid', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'ESADE Business School', slug: 'esade-business-school', city: 'Barcelona', state: 'Spain', stateSlug: 'spain', type: 'university' },
  { name: 'University of Salamanca', slug: 'university-of-salamanca', city: 'Salamanca', state: 'Spain', stateSlug: 'spain', type: 'university' },

  // Switzerland
  { name: 'ETH Zurich', slug: 'eth-zurich', city: 'Zurich', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'EPFL', slug: 'epfl', city: 'Lausanne', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'University of Zurich', slug: 'university-of-zurich', city: 'Zurich', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'University of Basel', slug: 'university-of-basel', city: 'Basel', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'University of Bern', slug: 'university-of-bern', city: 'Bern', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'University of Geneva', slug: 'university-of-geneva', city: 'Geneva', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'University of St Gallen', slug: 'university-of-st-gallen', city: 'St Gallen', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },
  { name: 'University of Lausanne', slug: 'university-of-lausanne', city: 'Lausanne', state: 'Switzerland', stateSlug: 'switzerland', type: 'university' },

  // Austria
  { name: 'University of Vienna', slug: 'university-of-vienna', city: 'Vienna', state: 'Austria', stateSlug: 'austria', type: 'university' },
  { name: 'TU Wien', slug: 'tu-wien', city: 'Vienna', state: 'Austria', stateSlug: 'austria', type: 'university' },
  { name: 'University of Graz', slug: 'university-of-graz', city: 'Graz', state: 'Austria', stateSlug: 'austria', type: 'university' },
  { name: 'University of Innsbruck', slug: 'university-of-innsbruck', city: 'Innsbruck', state: 'Austria', stateSlug: 'austria', type: 'university' },

  // Belgium
  { name: 'KU Leuven', slug: 'ku-leuven', city: 'Leuven', state: 'Belgium', stateSlug: 'belgium', type: 'university' },
  { name: 'Vrije Universiteit Brussel', slug: 'vrije-universiteit-brussel', city: 'Brussels', state: 'Belgium', stateSlug: 'belgium', type: 'university' },
  { name: 'Ghent University', slug: 'ghent-university', city: 'Ghent', state: 'Belgium', stateSlug: 'belgium', type: 'university' },
  { name: 'University of Antwerp', slug: 'university-of-antwerp', city: 'Antwerp', state: 'Belgium', stateSlug: 'belgium', type: 'university' },
  { name: 'University of Liege', slug: 'university-of-liege', city: 'Liege', state: 'Belgium', stateSlug: 'belgium', type: 'university' },

  // Portugal
  { name: 'University of Lisbon', slug: 'university-of-lisbon', city: 'Lisbon', state: 'Portugal', stateSlug: 'portugal', type: 'university' },
  { name: 'University of Porto', slug: 'university-of-porto', city: 'Porto', state: 'Portugal', stateSlug: 'portugal', type: 'university' },
  { name: 'Nova School of Business and Economics', slug: 'nova-school-of-business-and-economics', city: 'Lisbon', state: 'Portugal', stateSlug: 'portugal', type: 'university' },
  { name: 'University of Minho', slug: 'university-of-minho', city: 'Braga', state: 'Portugal', stateSlug: 'portugal', type: 'university' },
  { name: 'University of Coimbra', slug: 'university-of-coimbra', city: 'Coimbra', state: 'Portugal', stateSlug: 'portugal', type: 'university' },

  // Sweden
  { name: 'KTH Royal Institute of Technology', slug: 'kth-royal-institute-of-technology', city: 'Stockholm', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Stockholm University', slug: 'stockholm-university', city: 'Stockholm', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Lund University', slug: 'lund-university', city: 'Lund', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Chalmers University of Technology', slug: 'chalmers-university-of-technology', city: 'Gothenburg', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Uppsala University', slug: 'uppsala-university', city: 'Uppsala', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'University of Gothenburg', slug: 'university-of-gothenburg', city: 'Gothenburg', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Linkoping University', slug: 'linkoping-university', city: 'Linkoping', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Umea University', slug: 'umea-university', city: 'Umea', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Orebro University', slug: 'orebro-university', city: 'Orebro', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Malmo University', slug: 'malmo-university', city: 'Malmo', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Karlstad University', slug: 'karlstad-university', city: 'Karlstad', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Malardalen University', slug: 'malardalen-university', city: 'Vasteras', state: 'Sweden', stateSlug: 'sweden', type: 'university' },
  { name: 'Sodertorn University', slug: 'sodertorn-university', city: 'Huddinge', state: 'Sweden', stateSlug: 'sweden', type: 'university' },

  // Norway
  { name: 'Norwegian University of Science and Technology', slug: 'norwegian-university-of-science-and-technology', city: 'Trondheim', state: 'Norway', stateSlug: 'norway', type: 'university' },
  { name: 'University of Oslo', slug: 'university-of-oslo', city: 'Oslo', state: 'Norway', stateSlug: 'norway', type: 'university' },
  { name: 'University of Bergen', slug: 'university-of-bergen', city: 'Bergen', state: 'Norway', stateSlug: 'norway', type: 'university' },
  { name: 'UiT The Arctic University of Norway', slug: 'uit-the-arctic-university-of-norway', city: 'Tromso', state: 'Norway', stateSlug: 'norway', type: 'university' },
  { name: 'University of Stavanger', slug: 'university-of-stavanger', city: 'Stavanger', state: 'Norway', stateSlug: 'norway', type: 'university' },

  // Denmark
  { name: 'University of Copenhagen', slug: 'university-of-copenhagen', city: 'Copenhagen', state: 'Denmark', stateSlug: 'denmark', type: 'university' },
  { name: 'Aarhus University', slug: 'aarhus-university', city: 'Aarhus', state: 'Denmark', stateSlug: 'denmark', type: 'university' },
  { name: 'Technical University of Denmark', slug: 'technical-university-of-denmark', city: 'Kongens Lyngby', state: 'Denmark', stateSlug: 'denmark', type: 'university' },
  { name: 'Aalborg University', slug: 'aalborg-university', city: 'Aalborg', state: 'Denmark', stateSlug: 'denmark', type: 'university' },
  { name: 'University of Southern Denmark', slug: 'university-of-southern-denmark', city: 'Odense', state: 'Denmark', stateSlug: 'denmark', type: 'university' },

  // Finland
  { name: 'University of Helsinki', slug: 'university-of-helsinki', city: 'Helsinki', state: 'Finland', stateSlug: 'finland', type: 'university' },
  { name: 'Aalto University', slug: 'aalto-university', city: 'Espoo', state: 'Finland', stateSlug: 'finland', type: 'university' },
  { name: 'Tampere University', slug: 'tampere-university', city: 'Tampere', state: 'Finland', stateSlug: 'finland', type: 'university' },
  { name: 'University of Turku', slug: 'university-of-turku', city: 'Turku', state: 'Finland', stateSlug: 'finland', type: 'university' },
  { name: 'University of Oulu', slug: 'university-of-oulu', city: 'Oulu', state: 'Finland', stateSlug: 'finland', type: 'university' },
  { name: 'University of Jyvaskyla', slug: 'university-of-jyvaskyla', city: 'Jyvaskyla', state: 'Finland', stateSlug: 'finland', type: 'university' },

  // Canada
  { name: 'University of Toronto', slug: 'university-of-toronto', city: 'Toronto', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of British Columbia', slug: 'university-of-british-columbia', city: 'Vancouver', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'McGill University', slug: 'mcgill-university', city: 'Montreal', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Universite de Montreal', slug: 'universite-de-montreal', city: 'Montreal', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Alberta', slug: 'university-of-alberta', city: 'Edmonton', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'McMaster University', slug: 'mcmaster-university', city: 'Hamilton', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Ottawa', slug: 'university-of-ottawa', city: 'Ottawa', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: "Queen's University Canada", slug: 'queens-university-canada', city: 'Kingston', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Waterloo', slug: 'university-of-waterloo', city: 'Waterloo', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Western University', slug: 'western-university', city: 'London', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Calgary', slug: 'university-of-calgary', city: 'Calgary', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Simon Fraser University', slug: 'simon-fraser-university', city: 'Burnaby', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Dalhousie University', slug: 'dalhousie-university', city: 'Halifax', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Victoria', slug: 'university-of-victoria', city: 'Victoria', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Concordia University', slug: 'concordia-university', city: 'Montreal', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Universite Laval', slug: 'universite-laval', city: 'Quebec City', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Toronto Metropolitan University', slug: 'toronto-metropolitan-university', city: 'Toronto', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'York University Canada', slug: 'york-university-canada', city: 'Toronto', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Manitoba', slug: 'university-of-manitoba', city: 'Winnipeg', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Regina', slug: 'university-of-regina', city: 'Regina', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Saskatchewan', slug: 'university-of-saskatchewan', city: 'Saskatoon', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Windsor', slug: 'university-of-windsor', city: 'Windsor', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of New Brunswick', slug: 'university-of-new-brunswick', city: 'Fredericton', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Acadia University', slug: 'acadia-university', city: 'Wolfville', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Carleton University', slug: 'carleton-university', city: 'Ottawa', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Guelph', slug: 'university-of-guelph', city: 'Guelph', state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'Memorial University of Newfoundland', slug: 'memorial-university-of-newfoundland', city: "St. John's", state: 'Canada', stateSlug: 'canada', type: 'university' },
  { name: 'University of Prince Edward Island', slug: 'university-of-prince-edward-island', city: 'Charlottetown', state: 'Canada', stateSlug: 'canada', type: 'university' },

  // Australia
  { name: 'University of Melbourne', slug: 'university-of-melbourne', city: 'Melbourne', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Sydney', slug: 'university-of-sydney', city: 'Sydney', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'UNSW Sydney', slug: 'unsw-sydney', city: 'Sydney', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Australian National University', slug: 'australian-national-university', city: 'Canberra', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Queensland', slug: 'university-of-queensland', city: 'Brisbane', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Monash University', slug: 'monash-university', city: 'Melbourne', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Western Australia', slug: 'university-of-western-australia', city: 'Perth', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Adelaide', slug: 'university-of-adelaide', city: 'Adelaide', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Macquarie University', slug: 'macquarie-university', city: 'Sydney', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Technology Sydney', slug: 'university-of-technology-sydney', city: 'Sydney', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Queensland University of Technology', slug: 'queensland-university-of-technology', city: 'Brisbane', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'RMIT University', slug: 'rmit-university', city: 'Melbourne', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Curtin University', slug: 'curtin-university', city: 'Perth', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Griffith University', slug: 'griffith-university', city: 'Brisbane', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Deakin University', slug: 'deakin-university', city: 'Geelong', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'La Trobe University', slug: 'la-trobe-university', city: 'Melbourne', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Newcastle Australia', slug: 'university-of-newcastle-australia', city: 'Newcastle', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Wollongong', slug: 'university-of-wollongong', city: 'Wollongong', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Flinders University', slug: 'flinders-university', city: 'Adelaide', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Charles Darwin University', slug: 'charles-darwin-university', city: 'Darwin', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Bond University', slug: 'bond-university', city: 'Gold Coast', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Swinburne University of Technology', slug: 'swinburne-university-of-technology', city: 'Melbourne', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'James Cook University', slug: 'james-cook-university', city: 'Townsville', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Southern Cross University', slug: 'southern-cross-university', city: 'Lismore', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Victoria University Australia', slug: 'victoria-university-australia', city: 'Melbourne', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'University of Tasmania', slug: 'university-of-tasmania', city: 'Hobart', state: 'Australia', stateSlug: 'australia', type: 'university' },
  { name: 'Western Sydney University', slug: 'western-sydney-university', city: 'Penrith', state: 'Australia', stateSlug: 'australia', type: 'university' },

  // New Zealand
  { name: 'University of Auckland', slug: 'university-of-auckland', city: 'Auckland', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'Victoria University of Wellington', slug: 'victoria-university-of-wellington', city: 'Wellington', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'University of Canterbury', slug: 'university-of-canterbury', city: 'Christchurch', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'University of Otago', slug: 'university-of-otago', city: 'Dunedin', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'University of Waikato', slug: 'university-of-waikato', city: 'Hamilton', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'Massey University', slug: 'massey-university', city: 'Palmerston North', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'Auckland University of Technology', slug: 'auckland-university-of-technology', city: 'Auckland', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'Lincoln University New Zealand', slug: 'lincoln-university-new-zealand', city: 'Lincoln', state: 'New Zealand', stateSlug: 'new-zealand', type: 'university' },
  { name: 'Unitec Institute of Technology', slug: 'unitec-institute-of-technology', city: 'Auckland', state: 'New Zealand', stateSlug: 'new-zealand', type: 'college' },

  // Ireland
  { name: 'Trinity College Dublin', slug: 'trinity-college-dublin', city: 'Dublin', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'University College Dublin', slug: 'university-college-dublin', city: 'Dublin', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'University College Cork', slug: 'university-college-cork', city: 'Cork', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'NUI Galway', slug: 'nui-galway', city: 'Galway', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'Dublin City University', slug: 'dublin-city-university', city: 'Dublin', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'Maynooth University', slug: 'maynooth-university', city: 'Maynooth', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'University of Limerick', slug: 'university-of-limerick', city: 'Limerick', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'Waterford Institute of Technology', slug: 'waterford-institute-of-technology', city: 'Waterford', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'Technological University Dublin', slug: 'technological-university-dublin', city: 'Dublin', state: 'Ireland', stateSlug: 'ireland', type: 'university' },
  { name: 'Royal College of Surgeons in Ireland', slug: 'royal-college-of-surgeons-in-ireland', city: 'Dublin', state: 'Ireland', stateSlug: 'ireland', type: 'university' },

  // Singapore
  { name: 'National University of Singapore', slug: 'national-university-of-singapore', city: 'Singapore', state: 'Singapore', stateSlug: 'singapore', type: 'university' },
  { name: 'Nanyang Technological University', slug: 'nanyang-technological-university', city: 'Singapore', state: 'Singapore', stateSlug: 'singapore', type: 'university' },
  { name: 'Singapore Management University', slug: 'singapore-management-university', city: 'Singapore', state: 'Singapore', stateSlug: 'singapore', type: 'university' },

  // Hong Kong
  { name: 'University of Hong Kong', slug: 'university-of-hong-kong', city: 'Hong Kong', state: 'Hong Kong', stateSlug: 'hong-kong', type: 'university' },
  { name: 'Hong Kong University of Science and Technology', slug: 'hong-kong-university-of-science-and-technology', city: 'Hong Kong', state: 'Hong Kong', stateSlug: 'hong-kong', type: 'university' },
  { name: 'Chinese University of Hong Kong', slug: 'chinese-university-of-hong-kong', city: 'Hong Kong', state: 'Hong Kong', stateSlug: 'hong-kong', type: 'university' },
  { name: 'City University of Hong Kong', slug: 'city-university-of-hong-kong', city: 'Hong Kong', state: 'Hong Kong', stateSlug: 'hong-kong', type: 'university' },

  // Japan
  { name: 'University of Tokyo', slug: 'university-of-tokyo', city: 'Tokyo', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Kyoto University', slug: 'kyoto-university', city: 'Kyoto', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Osaka University', slug: 'osaka-university', city: 'Osaka', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Tohoku University', slug: 'tohoku-university', city: 'Sendai', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Nagoya University', slug: 'nagoya-university', city: 'Nagoya', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Keio University', slug: 'keio-university', city: 'Tokyo', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Waseda University', slug: 'waseda-university', city: 'Tokyo', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Kyushu University', slug: 'kyushu-university', city: 'Fukuoka', state: 'Japan', stateSlug: 'japan', type: 'university' },
  { name: 'Hokkaido University', slug: 'hokkaido-university', city: 'Sapporo', state: 'Japan', stateSlug: 'japan', type: 'university' },

  // India
  { name: 'IIT Bombay', slug: 'iit-bombay', city: 'Mumbai', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'IIT Delhi', slug: 'iit-delhi', city: 'New Delhi', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'IIT Madras', slug: 'iit-madras', city: 'Chennai', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'IIM Ahmedabad', slug: 'iim-ahmedabad', city: 'Ahmedabad', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'University of Delhi', slug: 'university-of-delhi', city: 'New Delhi', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'Jawaharlal Nehru University', slug: 'jawaharlal-nehru-university', city: 'New Delhi', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'IIT Kanpur', slug: 'iit-kanpur', city: 'Kanpur', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'IIT Kharagpur', slug: 'iit-kharagpur', city: 'Kharagpur', state: 'India', stateSlug: 'india', type: 'university' },
  { name: 'IIT Roorkee', slug: 'iit-roorkee', city: 'Roorkee', state: 'India', stateSlug: 'india', type: 'university' },

  // South Korea
  { name: 'Seoul National University', slug: 'seoul-national-university', city: 'Seoul', state: 'South Korea', stateSlug: 'south-korea', type: 'university' },
  { name: 'KAIST', slug: 'kaist', city: 'Daejeon', state: 'South Korea', stateSlug: 'south-korea', type: 'university' },
  { name: 'Yonsei University', slug: 'yonsei-university', city: 'Seoul', state: 'South Korea', stateSlug: 'south-korea', type: 'university' },
  { name: 'Korea University', slug: 'korea-university', city: 'Seoul', state: 'South Korea', stateSlug: 'south-korea', type: 'university' },
  { name: 'POSTECH', slug: 'postech', city: 'Pohang', state: 'South Korea', stateSlug: 'south-korea', type: 'university' },
  { name: 'Sungkyunkwan University', slug: 'sungkyunkwan-university', city: 'Seoul', state: 'South Korea', stateSlug: 'south-korea', type: 'university' },

  // China
  { name: 'Peking University', slug: 'peking-university', city: 'Beijing', state: 'China', stateSlug: 'china', type: 'university' },
  { name: 'Tsinghua University', slug: 'tsinghua-university', city: 'Beijing', state: 'China', stateSlug: 'china', type: 'university' },
  { name: 'Fudan University', slug: 'fudan-university', city: 'Shanghai', state: 'China', stateSlug: 'china', type: 'university' },
  { name: 'Zhejiang University', slug: 'zhejiang-university', city: 'Hangzhou', state: 'China', stateSlug: 'china', type: 'university' },
  { name: 'Shanghai Jiao Tong University', slug: 'shanghai-jiao-tong-university', city: 'Shanghai', state: 'China', stateSlug: 'china', type: 'university' },
  { name: 'University of Science and Technology of China', slug: 'university-of-science-and-technology-of-china', city: 'Hefei', state: 'China', stateSlug: 'china', type: 'university' },
  { name: 'Nanjing University', slug: 'nanjing-university', city: 'Nanjing', state: 'China', stateSlug: 'china', type: 'university' },

  // Taiwan
  { name: 'National Taiwan University', slug: 'national-taiwan-university', city: 'Taipei', state: 'Taiwan', stateSlug: 'taiwan', type: 'university' },
  { name: 'National Tsing Hua University', slug: 'national-tsing-hua-university', city: 'Hsinchu', state: 'Taiwan', stateSlug: 'taiwan', type: 'university' },
  { name: 'National Chiao Tung University', slug: 'national-chiao-tung-university', city: 'Hsinchu', state: 'Taiwan', stateSlug: 'taiwan', type: 'university' },

  // Brazil
  { name: 'University of Sao Paulo', slug: 'university-of-sao-paulo', city: 'Sao Paulo', state: 'Brazil', stateSlug: 'brazil', type: 'university' },
  { name: 'University of Campinas', slug: 'university-of-campinas', city: 'Campinas', state: 'Brazil', stateSlug: 'brazil', type: 'university' },
  { name: 'Federal University of Rio de Janeiro', slug: 'federal-university-of-rio-de-janeiro', city: 'Rio de Janeiro', state: 'Brazil', stateSlug: 'brazil', type: 'university' },
  { name: 'Federal University of Minas Gerais', slug: 'federal-university-of-minas-gerais', city: 'Belo Horizonte', state: 'Brazil', stateSlug: 'brazil', type: 'university' },

  // Chile
  { name: 'Pontificia Universidad Catolica de Chile', slug: 'pontificia-universidad-catolica-de-chile', city: 'Santiago', state: 'Chile', stateSlug: 'chile', type: 'university' },
  { name: 'University of Chile', slug: 'university-of-chile', city: 'Santiago', state: 'Chile', stateSlug: 'chile', type: 'university' },

  // Mexico
  { name: 'UNAM', slug: 'unam', city: 'Mexico City', state: 'Mexico', stateSlug: 'mexico', type: 'university' },
  { name: 'Tecnologico de Monterrey', slug: 'tecnologico-de-monterrey', city: 'Monterrey', state: 'Mexico', stateSlug: 'mexico', type: 'university' },
  { name: 'Universidad Autonoma Metropolitana', slug: 'universidad-autonoma-metropolitana', city: 'Mexico City', state: 'Mexico', stateSlug: 'mexico', type: 'university' },

  // Colombia
  { name: 'Pontificia Universidad Javeriana', slug: 'pontificia-universidad-javeriana', city: 'Bogota', state: 'Colombia', stateSlug: 'colombia', type: 'university' },
  { name: 'Universidad de los Andes Colombia', slug: 'universidad-de-los-andes-colombia', city: 'Bogota', state: 'Colombia', stateSlug: 'colombia', type: 'university' },
  { name: 'Universidad Nacional de Colombia', slug: 'universidad-nacional-de-colombia', city: 'Bogota', state: 'Colombia', stateSlug: 'colombia', type: 'university' },

  // Argentina
  { name: 'University of Buenos Aires', slug: 'university-of-buenos-aires', city: 'Buenos Aires', state: 'Argentina', stateSlug: 'argentina', type: 'university' },
  { name: 'Universidad Austral', slug: 'universidad-austral', city: 'Buenos Aires', state: 'Argentina', stateSlug: 'argentina', type: 'university' },

  // Middle East
  { name: 'American University of Beirut', slug: 'american-university-of-beirut', city: 'Beirut', state: 'Lebanon', stateSlug: 'lebanon', type: 'university' },
  { name: 'American University in Cairo', slug: 'american-university-in-cairo', city: 'Cairo', state: 'Egypt', stateSlug: 'egypt', type: 'university' },
  { name: 'King Abdullah University of Science and Technology', slug: 'king-abdullah-university-of-science-and-technology', city: 'Thuwal', state: 'Saudi Arabia', stateSlug: 'saudi-arabia', type: 'university' },
  { name: 'American University of Sharjah', slug: 'american-university-of-sharjah', city: 'Sharjah', state: 'UAE', stateSlug: 'uae', type: 'university' },
  { name: 'Tel Aviv University', slug: 'tel-aviv-university', city: 'Tel Aviv', state: 'Israel', stateSlug: 'israel', type: 'university' },
  { name: 'Hebrew University of Jerusalem', slug: 'hebrew-university-of-jerusalem', city: 'Jerusalem', state: 'Israel', stateSlug: 'israel', type: 'university' },
  { name: 'Technion Israel Institute of Technology', slug: 'technion-israel-institute-of-technology', city: 'Haifa', state: 'Israel', stateSlug: 'israel', type: 'university' },

  // Africa
  { name: 'University of Cape Town', slug: 'university-of-cape-town', city: 'Cape Town', state: 'South Africa', stateSlug: 'south-africa', type: 'university' },
  { name: 'University of the Witwatersrand', slug: 'university-of-the-witwatersrand', city: 'Johannesburg', state: 'South Africa', stateSlug: 'south-africa', type: 'university' },
  { name: 'Stellenbosch University', slug: 'stellenbosch-university', city: 'Stellenbosch', state: 'South Africa', stateSlug: 'south-africa', type: 'university' },
  { name: 'University of Pretoria', slug: 'university-of-pretoria', city: 'Pretoria', state: 'South Africa', stateSlug: 'south-africa', type: 'university' },
  { name: 'University of Nairobi', slug: 'university-of-nairobi', city: 'Nairobi', state: 'Kenya', stateSlug: 'kenya', type: 'university' },
  { name: 'University of Ghana', slug: 'university-of-ghana', city: 'Accra', state: 'Ghana', stateSlug: 'ghana', type: 'university' },
  { name: 'University of Lagos', slug: 'university-of-lagos', city: 'Lagos', state: 'Nigeria', stateSlug: 'nigeria', type: 'university' },
  { name: 'University of Ibadan', slug: 'university-of-ibadan', city: 'Ibadan', state: 'Nigeria', stateSlug: 'nigeria', type: 'university' },
];

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function getAllUniversitySlugs(): { slug: string }[] {
  return universities.map((u) => ({ slug: u.slug }));
}

export function getUniversitiesByState(stateSlug: string): University[] {
  return universities.filter((u) => u.stateSlug === stateSlug);
}
