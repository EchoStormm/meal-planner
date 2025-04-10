import { Recipe } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const { t } = useLanguage();
  const recipeTranslations = t.recipe.recipes[recipe.id as keyof typeof t.recipe.recipes];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{recipeTranslations?.name || recipe.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {recipeTranslations?.description || recipe.description}
        </p>
        <div>
          <h3 className="font-medium mb-2">{t.recipe.ingredients}:</h3>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {recipeTranslations?.ingredients[ingredient.name as keyof typeof recipeTranslations.ingredients] || ingredient.name} - {ingredient.quantity} {t.recipe.units[ingredient.unit as keyof typeof t.recipe.units] || ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">{t.recipe.instructions}:</h3>
          <ol className="list-decimal list-inside space-y-1">
            {(recipeTranslations?.instructions || recipe.instructions).map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{t.recipe.prepTime}: {recipe.prepTime} {t.recipe.minutes}</span>
          <span>{t.recipe.cookTime}: {recipe.cookTime} {t.recipe.minutes}</span>
          <span>{t.recipe.servings}: {recipe.servings}</span>
        </div>
      </CardContent>
    </Card>
  );
} 