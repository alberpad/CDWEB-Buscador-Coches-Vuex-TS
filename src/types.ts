export interface Cars {
  id: number;
  car_model: string;
  car_model_year: number;
  price: string;
  available: boolean;
}
export interface RootState {
  appName: string;
  appVersion: string;
  cars: Cars[];
  filter: {
    query: string;
    from: number;
    to: number;
    min_price: number;
    max_price: number;
    available: boolean;
  };
}

export interface OptionsSearchForm {
  text: string;
  value: boolean;
}
