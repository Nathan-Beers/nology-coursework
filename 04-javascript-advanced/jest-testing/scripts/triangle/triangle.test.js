import { Triangle } from './triangle.js';

describe('Tests to determine whether or not a shape entered is a triangle', () => {
    describe('Equilateral triangle', () => {
        test('all sides are equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true);
        })

        test('all sides are not equal', () => {
            const triangle = new Triangle(2, 3, 4);
            expect(triangle.isEquilateral).toBe(false);
        })
    })

    describe('Isoceles triangle', () => {
        test('Two sides are equal', () => {
            const triangle = new Triangle(5, 5, 4);
            expect(triangle.isIsoceles).toBe(true);
        })
        test('No sides are equal', () => {
            const triangle = new Triangle(5, 8, 4);
            expect(triangle.isIsoceles).toBe(false);
        });
    });

    describe('Scalene Triangle', () => {
        test('All sides are not equal', () => {
            const triangle = new Triangle(5, 8, 4);
            expect(triangle.isScalene).toBe(true);
        });
        test('Some sides are equal', () => {
            const triangle = new Triangle(5, 5, 4);
            expect(triangle.isScalene).toBe(false);
        });
    })
})