import { describe, expect, it } from 'vitest';
import { findAllRecipes } from '.';

describe.skip('findAllRecipes', () => {
  it('example 1', () => {
    const recipes = ['bread'];
    const ingredients = [['yeast', 'flour']];
    const supplies = ['yeast', 'flour', 'corn'];

    const result = findAllRecipes(recipes, ingredients, supplies);

    expect(result).toEqual(['bread']);
  });

  it('example 2', () => {
    const recipes = ['bread', 'sandwich'];
    const ingredients = [
      ['yeast', 'flour'],
      ['bread', 'meat'],
    ];
    const supplies = ['yeast', 'flour', 'meat'];

    const result = findAllRecipes(recipes, ingredients, supplies);

    expect(result).toEqual(['bread', 'sandwich']);
  });

  it('example 3', () => {
    const recipes = ['bread', 'sandwich', 'burger'];
    const ingredients = [
      ['yeast', 'flour'],
      ['bread', 'meat'],
      ['sandwich', 'meat', 'bread'],
    ];
    const supplies = ['yeast', 'flour', 'meat'];

    const result = findAllRecipes(recipes, ingredients, supplies);

    expect(result).toEqual(['bread', 'sandwich', 'burger']);
  });
});
