import React from "react";
import { generateChars, GENERATOR_LEVELS } from "./charsGenerator";

describe("char generator test", () => {
    test("return 10 chars", () => {
        var result = generateChars(GENERATOR_LEVELS.EASY);

        expect(result.length).toBe(10);
    });

    test("return 10 chars on any levels", () => {
        var result = generateChars(GENERATOR_LEVELS.EASY);

        expect(result.length).toBe(10);

        result = generateChars(GENERATOR_LEVELS.HARD);
        expect(result.length).toBe(10);
    });
});
