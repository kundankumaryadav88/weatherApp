//Adding Data Model For GET Operation Only Data Field To Fetch.

class WeatherData {
    constructor(id, name, region, country, lat, lon, tz_id,localtime) {
        this.Id = id;
        this.Name = name;
        this.Region = region;
        this.Country = country;
        this.Lat = lat;
        this.Lon = lon;
        this.Tz_ID = tz_id;
        this.Localtime = localtime
    }
}


export default WeatherData;

// ID
// First Name
// Last Name
// Email
// Phone
// Address
// Vehicle ID