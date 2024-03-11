export interface IDataProduct {
    products: IProduct[];
}


export interface IProduct  {
    "id": number,
    "produkt": string,
    "pris": number,
    "beskrivning": string,
    "lagerSaldo": number,
}
