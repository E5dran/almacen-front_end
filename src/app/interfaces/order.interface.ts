export interface Order {

    id: number,
    warehouse_id: number,
    status: boolean,
    addressee: string,
    description: string,
    n_items: number,
    destination_address: string,
    creation_date: Date,
    departure_date: Date,
    arrival_date: Date,
    truck_plate: string,
    category: string,
    user_id: string

}
