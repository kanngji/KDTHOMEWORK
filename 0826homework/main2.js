class Car {
  //생성자 전달
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  } // 메소드 선언

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  }
}

//상속 선언
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  drive() {
    console.log(
      `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행중입니다`
    );
  }
}

const hyundai = new Car("hyundai", "white");
hyundai.drive();
const tesla = new ElecCar("tesla", "red", "electricity");
tesla.drive();
