import { expect } from 'vitest';
import lexical from '../utils/lexical/index'

describe("Range0to1000000", () => {
    test("inRange", () => {
      const input = lexical("if ( num > 7 )");
      console.log("lg",input)
      expect(input.isError).toBe(false);
    });
    test("inRange2", () => {
      const input = lexical("if (num >230000) {");
      expect(input.isError).toBe(false);
    });
    test("Morethan1million", () => {
      const input = lexical("if(10>  10000000) {");
      expect(input.isError).toBe(true);
    });    
    test("negative", () => {
        const input = lexical("if (num < -7 ) {");
        expect(input.isError).toBe(true);
    })
  })