// **Challenge**

// 1. Write a function to find the perimeter of a rectangle

const calculatePerimeter = (width, height) => {
    return (width*2)+(height*2); 
}

// 2. Write a function to find the area of a circle. When given a radius, print the area to console.

const calculateAreaOfCircle = (radius) => {
    const area = (Math.PI * radius * radius);
    return area;
}

// 3. Now do the same to find the circumference of a circle...

const calculateCircumferenceOfCircle = (diameter) => {
    const circumference = (Math.PI * diameter);
    return circumference;
}