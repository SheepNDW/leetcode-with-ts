import { Queue } from '@datastructures-js/queue';

function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  const ingredientToRecipes = new Map<string, string[]>();
  const indegree = new Map<string, number>();

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < ingredients[i].length; j++) {
      if (!ingredientToRecipes.has(ingredients[i][j])) {
        ingredientToRecipes.set(ingredients[i][j], []);
      }
      ingredientToRecipes.get(ingredients[i][j])!.push(recipes[i]);
      indegree.set(recipes[i], (indegree.get(recipes[i]) || 0) + 1);
    }
  }

  const recipeSet = new Set(recipes);
  const queue = new Queue(supplies);
  const res: string[] = [];

  while (!queue.isEmpty()) {
    const cur = queue.dequeue();
    if (recipeSet.has(cur)) res.push(cur);

    for (const recipe of ingredientToRecipes.get(cur) || []) {
      indegree.set(recipe, indegree.get(recipe)! - 1);

      if (indegree.get(recipe) === 0) {
        queue.enqueue(recipe);
      }
    }
  }

  return res;
}

export { findAllRecipes };
