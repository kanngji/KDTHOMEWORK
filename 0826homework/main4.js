class Car {
  // 생성자 전달
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  } // 메소드 선언

  showSpec() {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고 색상은 ${this.color} 입니다.`
    );
  }
}

class HydroCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyundai", "white");
// const tesla = new ElecCar("tesla", "red", "electricity");
const nexxo = new HydroCar("nexxo", "skyblue", "hydrogen");

hyundai.showSpec();
// tesla.showSpec();
nexxo.showSpec();
