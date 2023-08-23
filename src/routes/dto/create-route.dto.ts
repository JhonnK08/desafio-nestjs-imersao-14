export class LatLngDto {
  lat: number;
  lng: number;
}

export class CreateRouteDto {
  name: string;
  source: LatLngDto;
  destination: LatLngDto;
}
