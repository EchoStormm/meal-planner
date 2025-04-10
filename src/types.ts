export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type MealType = "lunch" | "dinner";

export interface Ingredient {
  id: string;
  name: string;
  nameFr?: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  id: string;
  name: string;
  nameFr?: string;
  description: string;
  descriptionFr?: string;
  ingredients: Ingredient[];
  instructions: string[];
  instructionsFr?: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
}

export interface MealPlanItem {
  recipe: Recipe;
  servings: number;
}

export interface DayMeals {
  lunch?: MealPlanItem;
  dinner?: MealPlanItem;
}

export interface MealPlan {
  id?: string;
  weekStart?: Date;
  monday?: DayMeals;
  tuesday?: DayMeals;
  wednesday?: DayMeals;
  thursday?: DayMeals;
  friday?: DayMeals;
  saturday?: DayMeals;
  sunday?: DayMeals;
} 