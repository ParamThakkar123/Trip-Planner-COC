import http.client

def get_flight_data():
    source_airport = input("Enter source airport code: ")
    destination_airport = input("Enter destination airport code: ")
    date = input("Enter date (YYYY-MM-DD): ")
    itinerary_type = input("Enter itinerary type (ONE_WAY or ROUND_TRIP): ")
    class_of_service = input("Enter class of service (ECONOMY, PREMIUM_ECONOMY, BUSINESS, or FIRST): ")
    return source_airport, destination_airport, date, itinerary_type, class_of_service

def main():
    source_airport, destination_airport, date, itinerary_type, class_of_service = get_flight_data()

    conn = http.client.HTTPSConnection("tripadvisor16.p.rapidapi.com")

    headers = {
        'X-RapidAPI-Key': "5a150e53afmsh2c79a63d07c885fp13a612jsne80043866a64",
        'X-RapidAPI-Host': "tripadvisor16.p.rapidapi.com"
    }

    endpoint = f"/api/v1/flights/getFilters?sourceAirportCode={source_airport}&destinationAirportCode={destination_airport}&date={date}&itineraryType={itinerary_type}&classOfService={class_of_service}"
    conn.request("GET", endpoint, headers=headers)

    res = conn.getresponse()
    data = res.read()

    print(data.decode("utf-8"))

if __name__ == "__main__":
    main()
