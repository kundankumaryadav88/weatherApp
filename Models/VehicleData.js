//Adding Data Model For GET Operation Only Data Field To Fetch.

class VehicleData {
    constructor(id, make, year, chassis, ownerid) {
        {
            this.Id = id;
            this.Make = make;
            this.Year = year;
            this.Chassis = chassis;
            this.OwnerID = ownerid;
        }
    }
}

export default VehicleData;

// ID
// Make
// Year
// Chassis #
// Owner ID