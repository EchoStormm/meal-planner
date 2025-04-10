"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { recipes } from "@/data/recipes";
import { DayOfWeek, MealType, MealPlan, DayMeals } from "@/types";
import { RecipeCard } from "@/components/RecipeCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [mealPlan, setMealPlan] = useState<MealPlan>({});
  const [selectedDay, setSelectedDay] = useState<DayOfWeek | null>(null);
  const { t, language, setLanguage } = useLanguage();

  const hasMealsForDay = (day: DayOfWeek): { hasMeals: boolean; isComplete: boolean } => {
    const dayMeals = mealPlan[day];
    if (!dayMeals) return { hasMeals: false, isComplete: false };
    
    const hasLunch = Boolean(dayMeals.lunch);
    const hasDinner = Boolean(dayMeals.dinner);
    
    return {
      hasMeals: hasLunch || hasDinner,
      isComplete: hasLunch && hasDinner
    };
  };

  const handleDaySelect = (day: DayOfWeek) => {
    setSelectedDay(day);
    const element = document.getElementById(`day-${day}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleRecipeSelect = (day: DayOfWeek, mealType: MealType, recipeId: string) => {
    const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    if (selectedRecipe) {
      setMealPlan((prev) => ({
        ...prev,
        [day]: {
          ...prev[day],
          [mealType]: {
            recipe: selectedRecipe,
            servings: 2, // Default servings
          },
        },
      }));
    }
  };

  const handleServingsChange = (day: DayOfWeek, mealType: MealType, servings: number) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: {
          ...prev[day]?.[mealType]!,
          servings,
        },
      },
    }));
  };

  const adjustQuantity = (quantity: number, servings: number): number => {
    return (quantity / 4) * servings;
  };

  const getShoppingList = () => {
    const ingredients: { [key: string]: { quantity: number; unit: string } } = {};
    
    Object.entries(mealPlan).forEach(([day, dayMeals]) => {
      if (!dayMeals || typeof dayMeals !== 'object') return;
      
      const meals = dayMeals as DayMeals;
      if (meals.lunch) {
        meals.lunch.recipe.ingredients.forEach((ingredient: { name: string; quantity: number; unit: string }) => {
          const recipeTranslations = t.recipe.recipes[meals.lunch?.recipe.id as keyof typeof t.recipe.recipes];
          const translatedName = recipeTranslations?.ingredients[ingredient.name as keyof typeof recipeTranslations.ingredients] || ingredient.name;
          if (!ingredients[translatedName]) {
            ingredients[translatedName] = {
              quantity: 0,
              unit: ingredient.unit,
            };
          }
          ingredients[translatedName].quantity += adjustQuantity(ingredient.quantity, meals.lunch?.servings ?? 0);
        });
      }
      
      if (meals.dinner) {
        meals.dinner.recipe.ingredients.forEach((ingredient: { name: string; quantity: number; unit: string }) => {
          const recipeTranslations = t.recipe.recipes[meals.dinner!.recipe.id as keyof typeof t.recipe.recipes];
          const translatedName = recipeTranslations?.ingredients[ingredient.name as keyof typeof recipeTranslations.ingredients] || ingredient.name;
          if (!ingredients[translatedName]) {
            ingredients[translatedName] = {
              quantity: 0,
              unit: ingredient.unit,
            };
          }
          ingredients[translatedName].quantity += adjustQuantity(ingredient.quantity, meals.dinner!.servings);
        });
      }
    });

    return ingredients;
  };

  const days: DayOfWeek[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const mealTypes: MealType[] = ["lunch", "dinner"];

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t.app.title}</h1>
        <Select value={language} onValueChange={(value: "en" | "fr") => setLanguage(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language">
              {language === "en" ? "🇬🇧 " : "🇫🇷 "}
              {t.language[language]}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <span className="flex items-center gap-2">
                <span>🇬🇧</span>
                {t.language.en}
              </span>
            </SelectItem>
            <SelectItem value="fr">
              <span className="flex items-center gap-2">
                <span>🇫🇷</span>
                {t.language.fr}
              </span>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t.app.weeklyPlan}</h2>
          <div className="flex justify-between items-center mb-4">
            <div className="grid grid-cols-7 gap-2 flex-1">
              {days.map((day) => {
                const { hasMeals, isComplete } = hasMealsForDay(day);
                return (
                  <Card
                    key={day}
                    className={`cursor-pointer transition-all duration-200 text-center p-2 ${
                      selectedDay === day
                        ? 'bg-primary text-primary-foreground'
                        : isComplete
                        ? 'bg-green-500 text-white'
                        : hasMeals
                        ? 'bg-muted text-muted-foreground'
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => handleDaySelect(day)}
                  >
                    <div className="text-sm font-medium">
                      {t.app.days[day].slice(0, 3)}
                    </div>
                  </Card>
                );
              })}
            </div>
            {selectedDay && (
              <Button 
                variant="outline" 
                className="ml-4"
                onClick={() => setSelectedDay(null)}
              >
                {t.app.showAllDays || "Voir tous les jours"}
              </Button>
            )}
          </div>
          <div className="space-y-4 max-w-[400px]">
            {days.map((day) => {
              const { hasMeals, isComplete } = hasMealsForDay(day);
              return (
                <Card 
                  key={day} 
                  id={`day-${day}`}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedDay === day 
                      ? 'border-primary shadow-lg scale-[1.02]' 
                      : selectedDay === null
                      ? isComplete
                        ? 'border-green-500'
                        : hasMeals
                        ? 'border-muted'
                        : 'border-black'
                      : 'hidden'
                  }`} 
                  onClick={() => handleDaySelect(day)}
                >
                  <CardHeader className="py-3">
                    <CardTitle className="capitalize text-lg">{t.app.days[day]}</CardTitle>
                  </CardHeader>
                  <CardContent className="py-3 space-y-4">
                    {mealTypes.map((mealType) => (
                      <div key={mealType}>
                        <h3 className="font-medium mb-2">{t.app.meals[mealType]}</h3>
                        <div className="space-y-2">
                          <Select
                            value={mealPlan[day]?.[mealType]?.recipe.id}
                            onValueChange={(value: string) => handleRecipeSelect(day, mealType, value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={t.app.selectRecipe} />
                            </SelectTrigger>
                            <SelectContent>
                              {recipes.map((recipe) => (
                                <SelectItem key={recipe.id} value={recipe.id}>
                                  {t.recipe.recipes[recipe.id as keyof typeof t.recipe.recipes]?.name || recipe.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {mealPlan[day]?.[mealType] && (
                            <>
                              <div className="flex items-center gap-2">
                                <label className="text-sm">{t.app.servingsSelector.label}:</label>
                                <Select 
                                  value={mealPlan[day]![mealType]!.servings.toString()} 
                                  onValueChange={(value) => handleServingsChange(day, mealType, parseInt(value))}
                                >
                                  <SelectTrigger className="w-[60px]">
                                    {mealPlan[day]![mealType]!.servings}
                                  </SelectTrigger>
                                  <SelectContent>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                      <SelectItem key={num} value={num.toString()}>
                                        {num} {t.app.servingsSelector.people}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="w-full">
                                    {t.app.viewRecipeDetails}
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>{t.recipe.recipes[mealPlan[day]![mealType]!.recipe.id as keyof typeof t.recipe.recipes]?.name || mealPlan[day]![mealType]?.recipe.name}</DialogTitle>
                                  </DialogHeader>
                                  <RecipeCard recipe={mealPlan[day]![mealType]!.recipe} />
                                </DialogContent>
                              </Dialog>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">{t.app.shoppingList}</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {Object.entries(getShoppingList()).map(([name, details]) => (
                  <li key={name} className="flex justify-between">
                    <span className="capitalize">{name}</span>
                    <span>
                      {details.quantity} {t.recipe.units[details.unit as keyof typeof t.recipe.units] || details.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
