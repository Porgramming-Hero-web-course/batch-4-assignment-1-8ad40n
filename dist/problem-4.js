"use strict";
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.width * shape.height;
    }
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(circleArea);
console.log(rectangleArea);
