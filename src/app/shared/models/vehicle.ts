export interface Vehicles extends Array<Vehicle>{}

export interface Vehicle {

    id?: number | string;
    model: string;
    totalVolume: string;
    connected: string;
    softwareUpdates: string;
}
