export interface VehiclesData extends Array<VehicleData>{}

export interface VehicleData {
    id?: string | number;
    vinCode: string;
    odometer: string;
    tirePressure: string;
    vehicleStatus: string;
    batteryStatus: string;
    fuelLevel: string;
    lat: string;
    lon: string;
}
