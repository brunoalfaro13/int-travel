class Accommodation {
 #name!: string;
 #cost!: number;

 constructor(name : string, cost: number){
 this.setName(name);
 this.setCost(cost);
}

getName(){
  return this.#name;
}

getCost(){
  return this.#cost;
}

setName(name: string): void {
  if (typeof name !== "string" || name.trim() === "") {
      throw new Error("El alojamiento debe tener nombre");
    }
    this.#name = name.trim();
}

 setCost(cost: number): void {
    if (!Number.isFinite(cost) || cost < 0) {
      throw new Error("El costo debe ser un número mayor o igual a 0");
    }
    this.#cost = cost;
  }
}
export default Accommodation;
