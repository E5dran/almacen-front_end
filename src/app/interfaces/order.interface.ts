export interface Order {

    Id: number,
    Warehouse_Id: number,
    Status: boolean,
    Addressee: string,
    Description: string,
    N_Items: number,
    Destination_Address: string,
    Creation_Date: Date,
    Departure_Date: Date,
    Arrival_Date: Date,
    Truck_Plate: string,
    Category: string


}
