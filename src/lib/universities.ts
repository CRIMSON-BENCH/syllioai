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
