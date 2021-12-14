import { getName } from "./index";

it("Should return the string  'Nathan, 25 years old.'", () => {
    const output = getName('Nathan', 25);
    expect(output).toBe('Nathan, 25 years old.');
});

it("Should return the string  'Sam, 22 years old.'", () => {
    const output = getName('Sam', 22);
    expect(output).toBe('Sam, 22 years old.');
});
