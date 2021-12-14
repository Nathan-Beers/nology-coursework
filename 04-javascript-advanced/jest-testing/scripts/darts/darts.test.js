import { findScore } from './darts.js';

describe('Darts', () => {
    test('missed the target', () => {
        expect(findScore(-9, 9)).toEqual(0);
    });

    test('hit the outer circle', () => {
        expect(findScore(0, 10)).toEqual(1);
    });

    test('hit the middle cirlce', () => {
        expect(findScore(2, 3)).toEqual(5);
    });

    test('hit the inner circle', () => {
        expect(findScore(0, -1)).toEqual(10);
    });

    test('hit the center', () => {
        expect(findScore(0, 0)).toEqual(10);
    });

    test('Invalid input', () => {
        expect(findScore('a', 0)).toEqual(null);
    });
});