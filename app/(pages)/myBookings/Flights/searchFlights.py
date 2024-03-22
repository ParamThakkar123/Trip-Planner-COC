import http.client

# Get user inputs
sourceAirportCode = input("Enter source airport code: ")
destinationAirportCode = input("Enter destination airport code: ")
date = input("Enter date (YYYY-MM-DD): ")
itineraryType = input("Enter itinerary type (ONE_WAY or ROUND_TRIP): ")
classOfService = input("Enter class of service (ECONOMY, PREMIUM_ECONOMY, BUSINESS, FIRST): ")
sortOrder = input("Enter sort order (DURATION, PRICE, ML_BEST_API): ")
numAdults = input("Enter number of adults: ")
numSeniors = input("Enter number of seniors: ")

conn = http.client.HTTPSConnection("tripadvisor16.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "5a150e53afmsh2c79a63d07c885fp13a612jsne80043866a64",
    'X-RapidAPI-Host': "tripadvisor16.p.rapidapi.com"
}

# Construct the request URL with user inputs
url = f"/api/v1/flights/searchFlights?sourceAirportCode={sourceAirportCode}&destinationAirportCode={destinationAirportCode}&date={date}&itineraryType={itineraryType}&sortOrder={sortOrder}&numAdults={numAdults}&numSeniors={numSeniors}&classOfService={classOfService}&pageNumber=1&currencyCode=USD"

conn.request("GET", url, headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
