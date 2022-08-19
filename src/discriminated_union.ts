// change the Shape interface
interface Shape {
  kind: "circle" | "square";
  radius?: number; // exists only when kind = 'circle'
  sideLength?: number; // exists only when kind = 'square'
}

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2; // Object is possibly 'undefined'.
  }
}

// testing
