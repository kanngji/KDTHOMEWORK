//Shape 클래스

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shape = new Shape(4, 3);
console.log(shape.getArea());

//Rectangle 클래스

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(4, 3);
console.log(rectangle.getArea());

//Triangle 클래스

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const triangle = new Triangle(4, 3);
console.log(triangle.getArea());

// Circle 클래스

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

const circle = new Circle(2, 2, 4);
console.log(circle.getArea());
