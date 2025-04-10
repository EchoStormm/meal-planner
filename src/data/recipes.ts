import { Recipe } from "@/types";

export const recipes: Recipe[] = [
  {
    id: "spaghetti-carbonara",
    name: "Spaghetti Carbonara",
    nameFr: "Spaghetti à la Carbonara",
    description: "Classic Italian pasta dish with eggs, cheese, and pancetta",
    descriptionFr: "Plat de pâtes italien classique aux œufs, fromage et pancetta",
    ingredients: [
      { id: "spaghetti", name: "spaghetti", nameFr: "spaghetti", quantity: 400, unit: "g" },
      { id: "eggs", name: "eggs", nameFr: "œufs", quantity: 4, unit: "pieces" },
      { id: "pecorino-romano", name: "pecorino-romano", nameFr: "pecorino romano", quantity: 100, unit: "g" },
      { id: "pancetta", name: "pancetta", nameFr: "pancetta", quantity: 200, unit: "g" },
      { id: "black-pepper", name: "black-pepper", nameFr: "poivre noir", quantity: 1, unit: "tsp" },
      { id: "salt", name: "salt", nameFr: "sel", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Cook spaghetti according to package instructions",
      "Fry pancetta until crispy",
      "Mix eggs and cheese in a bowl",
      "Combine all ingredients and season with black pepper"
    ],
    instructionsFr: [
      "Cuire les spaghettis selon les instructions du paquet",
      "Faire revenir la pancetta jusqu'à ce qu'elle soit croustillante",
      "Mélanger les œufs et le fromage dans un bol",
      "Combiner tous les ingrédients et assaisonner de poivre noir"
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4
  },
  {
    id: "chicken-stir-fry",
    name: "Chicken Stir-Fry",
    description: "Quick and healthy Asian-inspired stir-fry",
    ingredients: [
      { id: "chicken-breast", name: "chicken-breast", quantity: 500, unit: "g" },
      { id: "mixed-vegetables", name: "mixed-vegetables", quantity: 400, unit: "g" },
      { id: "soy-sauce", name: "soy-sauce", quantity: 2, unit: "tbsp" },
      { id: "garlic", name: "garlic", quantity: 3, unit: "cloves" },
      { id: "ginger", name: "ginger", quantity: 2, unit: "tbsp" },
      { id: "rice", name: "rice", quantity: 300, unit: "g" }
    ],
    instructions: [
      "Cut chicken into bite-sized pieces",
      "Prepare vegetables",
      "Stir-fry chicken until golden",
      "Add vegetables and sauce",
      "Serve with rice"
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "salmon-en-papillote",
    name: "Salmon en Papillote",
    description: "French-style baked salmon with vegetables",
    ingredients: [
      { id: "salmon-fillet", name: "salmon-fillet", quantity: 4, unit: "pieces" },
      { id: "asparagus", name: "asparagus", quantity: 400, unit: "g" },
      { id: "cherry-tomatoes", name: "cherry-tomatoes", quantity: 200, unit: "g" },
      { id: "lemon", name: "lemon", quantity: 2, unit: "pieces" },
      { id: "olive-oil", name: "olive-oil", quantity: 2, unit: "tbsp" },
      { id: "fresh-herbs", name: "fresh-herbs", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Preheat oven to 400°F",
      "Place salmon and vegetables on parchment paper",
      "Season with herbs and olive oil",
      "Fold and seal the packet",
      "Bake for 20 minutes"
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "vegetarian-buddha-bowl",
    name: "Vegetarian Buddha Bowl",
    description: "Healthy and filling vegetarian bowl with quinoa",
    ingredients: [
      { id: "quinoa", name: "quinoa", quantity: 200, unit: "g" },
      { id: "chickpeas", name: "chickpeas", quantity: 400, unit: "g" },
      { id: "kale", name: "kale", quantity: 200, unit: "g" },
      { id: "sweet-potato", name: "sweet-potato", quantity: 400, unit: "g" },
      { id: "tahini-sauce", name: "tahini-sauce", quantity: 4, unit: "tbsp" },
      { id: "pumpkin-seeds", name: "pumpkin-seeds", quantity: 2, unit: "tbsp" }
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Roast sweet potato and chickpeas",
      "Massage kale with olive oil",
      "Assemble bowl with all ingredients",
      "Top with tahini sauce"
    ],
    prepTime: 20,
    cookTime: 30,
    servings: 4
  },
  {
    id: "beef-bourguignon",
    name: "Beef Bourguignon",
    description: "Classic French beef stew with red wine",
    ingredients: [
      { id: "beef-chuck", name: "beef-chuck", quantity: 800, unit: "g" },
      { id: "red-wine", name: "red-wine", quantity: 500, unit: "ml" },
      { id: "mushrooms", name: "mushrooms", quantity: 200, unit: "g" },
      { id: "pearl-onions", name: "pearl-onions", quantity: 200, unit: "g" },
      { id: "carrots", name: "carrots", quantity: 4, unit: "pieces" },
      { id: "bacon", name: "bacon", quantity: 200, unit: "g" }
    ],
    instructions: [
      "Brown beef in batches",
      "Sauté vegetables",
      "Add wine and stock",
      "Simmer for 2-3 hours",
      "Add mushrooms and onions"
    ],
    prepTime: 30,
    cookTime: 180,
    servings: 6
  },
  {
    id: "shrimp-scampi",
    name: "Shrimp Scampi",
    description: "Italian-American shrimp pasta dish",
    ingredients: [
      { id: "shrimp", name: "shrimp", quantity: 500, unit: "g" },
      { id: "linguine", name: "linguine", quantity: 400, unit: "g" },
      { id: "white-wine", name: "white-wine", quantity: 200, unit: "ml" },
      { id: "butter", name: "butter", quantity: 100, unit: "g" },
      { id: "garlic", name: "garlic", quantity: 4, unit: "cloves" },
      { id: "red-pepper-flakes", name: "red-pepper-flakes", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Cook linguine according to package instructions",
      "Sauté shrimp with garlic",
      "Add white wine and butter",
      "Combine with pasta",
      "Season with red pepper flakes"
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "vegetable-curry",
    name: "Vegetable Curry",
    description: "Spicy Indian-style vegetable curry",
    ingredients: [
      { id: "mixed-vegetables", name: "mixed-vegetables", quantity: 600, unit: "g" },
      { id: "coconut-milk", name: "coconut-milk", quantity: 400, unit: "ml" },
      { id: "curry-powder", name: "curry-powder", quantity: 2, unit: "tbsp" },
      { id: "onion", name: "onion", quantity: 2, unit: "pieces" },
      { id: "ginger", name: "ginger", quantity: 2, unit: "tbsp" },
      { id: "rice", name: "rice", quantity: 300, unit: "g" }
    ],
    instructions: [
      "Sauté onions and ginger",
      "Add curry powder",
      "Add vegetables and coconut milk",
      "Simmer until vegetables are tender",
      "Serve with rice"
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: "grilled-steak",
    name: "Grilled Steak",
    description: "Perfectly grilled steak with herbs",
    ingredients: [
      { id: "ribeye-steak", name: "ribeye-steak", quantity: 4, unit: "pieces" },
      { id: "fresh-rosemary", name: "fresh-rosemary", quantity: 2, unit: "tbsp" },
      { id: "garlic", name: "garlic", quantity: 4, unit: "cloves" },
      { id: "butter", name: "butter", quantity: 50, unit: "g" },
      { id: "salt", name: "salt", quantity: 1, unit: "tsp" },
      { id: "black-pepper", name: "black-pepper", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Season steak with salt and pepper",
      "Preheat grill to high",
      "Grill steak to desired doneness",
      "Let rest for 5 minutes",
      "Top with herb butter"
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4
  },
  {
    id: "mushroom-risotto",
    name: "Mushroom Risotto",
    description: "Creamy Italian mushroom risotto",
    ingredients: [
      { id: "arborio-rice", name: "arborio-rice", quantity: 400, unit: "g" },
      { id: "mixed-mushrooms", name: "mixed-mushrooms", quantity: 400, unit: "g" },
      { id: "vegetable-stock", name: "vegetable-stock", quantity: 1, unit: "L" },
      { id: "parmesan", name: "parmesan", quantity: 100, unit: "g" },
      { id: "white-wine", name: "white-wine", quantity: 200, unit: "ml" },
      { id: "butter", name: "butter", quantity: 50, unit: "g" }
    ],
    instructions: [
      "Sauté mushrooms",
      "Toast rice",
      "Add stock gradually",
      "Stir until creamy",
      "Finish with parmesan"
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 4
  },
  {
    id: "taco-bowl",
    name: "Taco Bowl",
    description: "Mexican-inspired taco bowl with ground beef",
    ingredients: [
      { id: "ground-beef", name: "ground-beef", quantity: 500, unit: "g" },
      { id: "rice", name: "rice", quantity: 300, unit: "g" },
      { id: "black-beans", name: "black-beans", quantity: 400, unit: "g" },
      { id: "corn", name: "corn", quantity: 200, unit: "g" },
      { id: "taco-seasoning", name: "taco-seasoning", quantity: 2, unit: "tbsp" },
      { id: "avocado", name: "avocado", quantity: 2, unit: "pieces" }
    ],
    instructions: [
      "Brown ground beef with taco seasoning",
      "Cook rice",
      "Prepare toppings",
      "Assemble bowl",
      "Top with avocado"
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: "salmon-avocado-verrines",
    name: "Salmon and Avocado Verrines",
    description: "A fresh and gourmet starter, perfect for appetizers",
    ingredients: [
      { id: "smoked-salmon", name: "smoked-salmon", quantity: 200, unit: "g" },
      { id: "avocado", name: "avocado", quantity: 2, unit: "pieces" },
      { id: "cream", name: "cream", quantity: 100, unit: "ml" },
      { id: "lemon", name: "lemon", quantity: 1, unit: "piece" },
      { id: "chives", name: "chives", quantity: 10, unit: "g" },
      { id: "salt", name: "salt", quantity: 0.5, unit: "tsp" },
      { id: "pepper", name: "pepper", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Mash the avocado with cream, lemon, salt and pepper",
      "Arrange in verrines and add smoked salmon pieces",
      "Sprinkle with chives"
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4
  },
  {
    id: "tomato-mozzarella-bruschetta",
    name: "Tomato and Mozzarella Bruschetta",
    description: "A simple and tasty Italian classic",
    ingredients: [
      { id: "baguette", name: "baguette", quantity: 1, unit: "piece" },
      { id: "tomatoes", name: "tomatoes", quantity: 4, unit: "pieces" },
      { id: "mozzarella", name: "mozzarella", quantity: 200, unit: "g" },
      { id: "basil", name: "basil", quantity: 10, unit: "g" },
      { id: "olive-oil", name: "olive-oil", quantity: 2, unit: "tbsp" },
      { id: "garlic", name: "garlic", quantity: 2, unit: "cloves" },
      { id: "salt", name: "salt", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Toast the bread and rub with garlic",
      "Add tomatoes, mozzarella and basil",
      "Drizzle with olive oil"
    ],
    prepTime: 10,
    cookTime: 5,
    servings: 6
  },
  {
    id: "roast-chicken",
    name: "Herb Roasted Chicken",
    description: "A crispy and aromatic chicken",
    ingredients: [
      { id: "whole-chicken", name: "whole-chicken", quantity: 1, unit: "piece" },
      { id: "thyme", name: "thyme", quantity: 2, unit: "sprigs" },
      { id: "rosemary", name: "rosemary", quantity: 2, unit: "sprigs" },
      { id: "garlic", name: "garlic", quantity: 4, unit: "cloves" },
      { id: "butter", name: "butter", quantity: 50, unit: "g" },
      { id: "salt", name: "salt", quantity: 1, unit: "tsp" },
      { id: "pepper", name: "pepper", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Brush the chicken with butter and herbs",
      "Bake at 180°C until cooked"
    ],
    prepTime: 15,
    cookTime: 75,
    servings: 4
  },
  {
    id: "chocolate-fondant",
    name: "Chocolate Fondant",
    description: "A soft and intense chocolate dessert",
    ingredients: [
      { id: "dark-chocolate", name: "dark-chocolate", quantity: 200, unit: "g" },
      { id: "butter", name: "butter", quantity: 150, unit: "g" },
      { id: "eggs", name: "eggs", quantity: 4, unit: "pieces" },
      { id: "sugar", name: "sugar", quantity: 150, unit: "g" },
      { id: "flour", name: "flour", quantity: 50, unit: "g" }
    ],
    instructions: [
      "Melt chocolate and butter",
      "Mix with eggs, sugar and flour",
      "Bake for 10-12 minutes"
    ],
    prepTime: 10,
    cookTime: 12,
    servings: 6
  },
  {
    id: "apple-pie",
    name: "Apple Pie",
    description: "A classic family dessert",
    ingredients: [
      { id: "pie-crust", name: "pie-crust", quantity: 1, unit: "piece" },
      { id: "apples", name: "apples", quantity: 6, unit: "pieces" },
      { id: "sugar", name: "sugar", quantity: 100, unit: "g" },
      { id: "cinnamon", name: "cinnamon", quantity: 1, unit: "tsp" },
      { id: "egg", name: "egg", quantity: 1, unit: "piece" }
    ],
    instructions: [
      "Roll out the dough, arrange apples",
      "Sprinkle with sugar and cinnamon",
      "Bake for 30-40 minutes"
    ],
    prepTime: 20,
    cookTime: 35,
    servings: 8
  },
  {
    id: "coconut-lentil-curry",
    name: "Coconut Lentil Curry",
    description: "A comforting and spicy dish",
    ingredients: [
      { id: "lentils", name: "lentils", quantity: 400, unit: "g" },
      { id: "coconut-milk", name: "coconut-milk", quantity: 400, unit: "ml" },
      { id: "onions", name: "onions", quantity: 2, unit: "pieces" },
      { id: "curry-powder", name: "curry-powder", quantity: 2, unit: "tbsp" },
      { id: "tomatoes", name: "tomatoes", quantity: 2, unit: "pieces" }
    ],
    instructions: [
      "Brown onions and spices",
      "Add lentils and coconut milk, simmer"
    ],
    prepTime: 10,
    cookTime: 25,
    servings: 4
  },
  {
    id: "dauphinoise-gratin",
    name: "Dauphinoise Gratin",
    description: "Creamy and smooth",
    ingredients: [
      { id: "potatoes", name: "potatoes", quantity: 1, unit: "kg" },
      { id: "cream", name: "cream", quantity: 200, unit: "ml" },
      { id: "milk", name: "milk", quantity: 200, unit: "ml" },
      { id: "garlic", name: "garlic", quantity: 2, unit: "cloves" },
      { id: "nutmeg", name: "nutmeg", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Slice potatoes, arrange in layers",
      "Add cream and milk, bake in oven"
    ],
    prepTime: 20,
    cookTime: 60,
    servings: 6
  },
  {
    id: "onion-soup",
    name: "Onion Soup",
    nameFr: "Soupe à l'oignon gratinée",
    description: "A comforting classic, perfect for winter evenings",
    descriptionFr: "Un classique réconfortant, idéal pour les soirées d'hiver",
    ingredients: [
      { id: "onions", name: "onions", quantity: 6, unit: "pieces" },
      { id: "butter", name: "butter", quantity: 100, unit: "g" },
      { id: "beef-broth", name: "beef-broth", quantity: 1, unit: "L" },
      { id: "white-wine", name: "white-wine", quantity: 200, unit: "ml" },
      { id: "bread", name: "bread", quantity: 4, unit: "slices" },
      { id: "gruyere", name: "gruyere", quantity: 200, unit: "g" }
    ],
    instructions: [
      "Caramelize onions in butter",
      "Add wine and broth, simmer",
      "Pour into bowls, add bread and cheese",
      "Broil until cheese is melted"
    ],
    instructionsFr: [
      "Faire caraméliser les oignons dans du beurre",
      "Ajouter le vin et le bouillon, mijoter",
      "Verser dans des bols, ajouter du pain et du fromage",
      "Gratiner"
    ],
    prepTime: 15,
    cookTime: 45,
    servings: 4
  },
  {
    id: "pumpkin-soup",
    name: "Pumpkin Soup",
    nameFr: "Velouté de potiron",
    description: "A smooth and creamy soup, perfect for autumn",
    descriptionFr: "Une soupe douce et onctueuse, parfaite en automne",
    ingredients: [
      { id: "pumpkin", name: "pumpkin", quantity: 1, unit: "kg" },
      { id: "carrots", name: "carrots", quantity: 2, unit: "pieces" },
      { id: "onion", name: "onion", quantity: 1, unit: "piece" },
      { id: "cream", name: "cream", quantity: 200, unit: "ml" },
      { id: "chicken-broth", name: "chicken-broth", quantity: 1, unit: "L" },
      { id: "nutmeg", name: "nutmeg", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Sauté vegetables",
      "Add broth and cook until tender",
      "Blend and add cream"
    ],
    instructionsFr: [
      "Faire revenir les légumes",
      "Ajouter le bouillon et cuire jusqu'à tendreté",
      "Mixer et ajouter la crème"
    ],
    prepTime: 15,
    cookTime: 25,
    servings: 6
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    nameFr: "Salade César",
    description: "A crunchy and savory salad with a gourmet touch",
    descriptionFr: "Une salade croquante et savoureuse avec une touche gourmande",
    ingredients: [
      { id: "romaine-lettuce", name: "romaine-lettuce", quantity: 1, unit: "head" },
      { id: "chicken", name: "chicken", quantity: 400, unit: "g" },
      { id: "parmesan", name: "parmesan", quantity: 100, unit: "g" },
      { id: "croutons", name: "croutons", quantity: 100, unit: "g" },
      { id: "anchovies", name: "anchovies", quantity: 4, unit: "pieces" },
      { id: "garlic", name: "garlic", quantity: 2, unit: "cloves" },
      { id: "egg-yolk", name: "egg-yolk", quantity: 1, unit: "piece" },
      { id: "olive-oil", name: "olive-oil", quantity: 100, unit: "ml" }
    ],
    instructions: [
      "Mix lettuce, chicken and croutons",
      "Add sauce and sprinkle with parmesan"
    ],
    instructionsFr: [
      "Mélanger la laitue, le poulet et les croûtons",
      "Ajouter la sauce et saupoudrer de parmesan"
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 4
  },
  {
    id: "quinoa-vegetable-salad",
    name: "Quinoa Vegetable Salad",
    nameFr: "Salade de quinoa aux légumes",
    description: "A complete and healthy salad, rich in protein",
    descriptionFr: "Une salade complète et healthy, riche en protéines",
    ingredients: [
      { id: "quinoa", name: "quinoa", quantity: 200, unit: "g" },
      { id: "bell-peppers", name: "bell-peppers", quantity: 2, unit: "pieces" },
      { id: "cucumber", name: "cucumber", quantity: 1, unit: "piece" },
      { id: "tomatoes", name: "tomatoes", quantity: 2, unit: "pieces" },
      { id: "feta", name: "feta", quantity: 100, unit: "g" },
      { id: "olive-oil", name: "olive-oil", quantity: 2, unit: "tbsp" },
      { id: "lemon", name: "lemon", quantity: 1, unit: "piece" }
    ],
    instructions: [
      "Cook quinoa and let cool",
      "Add chopped vegetables and feta",
      "Season with olive oil and lemon"
    ],
    instructionsFr: [
      "Cuire le quinoa et laisser refroidir",
      "Ajouter les légumes coupés et la feta",
      "Assaisonner avec huile d'olive et citron"
    ],
    prepTime: 15,
    cookTime: 15,
    servings: 4
  },
  {
    id: "pad-thai",
    name: "Pad Thai",
    nameFr: "Pad Thaï",
    description: "A balanced Thai dish between sweet, salty and sour",
    descriptionFr: "Un plat thaïlandais équilibré entre sucré, salé et acidulé",
    ingredients: [
      { id: "rice-noodles", name: "rice-noodles", quantity: 400, unit: "g" },
      { id: "shrimp", name: "shrimp", quantity: 300, unit: "g" },
      { id: "tofu", name: "tofu", quantity: 200, unit: "g" },
      { id: "eggs", name: "eggs", quantity: 2, unit: "pieces" },
      { id: "bean-sprouts", name: "bean-sprouts", quantity: 200, unit: "g" },
      { id: "peanuts", name: "peanuts", quantity: 50, unit: "g" },
      { id: "fish-sauce", name: "fish-sauce", quantity: 2, unit: "tbsp" },
      { id: "sugar", name: "sugar", quantity: 2, unit: "tbsp" },
      { id: "lime", name: "lime", quantity: 1, unit: "piece" }
    ],
    instructions: [
      "Sauté ingredients in a wok",
      "Add noodles and sauce"
    ],
    instructionsFr: [
      "Faire sauter les ingrédients dans un wok",
      "Ajouter les nouilles et la sauce"
    ],
    prepTime: 20,
    cookTime: 10,
    servings: 4
  },
  {
    id: "lamb-tagine",
    name: "Lamb Tagine with Prunes",
    nameFr: "Tajine d'agneau aux pruneaux",
    description: "A fragrant and tender Moroccan dish",
    descriptionFr: "Un plat marocain parfumé et fondant",
    ingredients: [
      { id: "lamb", name: "lamb", quantity: 1, unit: "kg" },
      { id: "prunes", name: "prunes", quantity: 200, unit: "g" },
      { id: "onions", name: "onions", quantity: 2, unit: "pieces" },
      { id: "honey", name: "honey", quantity: 2, unit: "tbsp" },
      { id: "cumin", name: "cumin", quantity: 1, unit: "tsp" },
      { id: "cinnamon", name: "cinnamon", quantity: 1, unit: "tsp" },
      { id: "ginger", name: "ginger", quantity: 1, unit: "tsp" }
    ],
    instructions: [
      "Brown meat and onions",
      "Add prunes, honey and spices",
      "Cook on low heat"
    ],
    instructionsFr: [
      "Faire revenir la viande et les oignons",
      "Ajouter les pruneaux, le miel et les épices",
      "Cuire à feu doux"
    ],
    prepTime: 20,
    cookTime: 120,
    servings: 6
  },
  {
    id: "pancakes",
    name: "Fluffy Pancakes",
    nameFr: "Pancakes moelleux",
    description: "Light and golden pancakes, perfect for brunch",
    descriptionFr: "Des pancakes légers et dorés, parfaits pour un brunch",
    ingredients: [
      { id: "flour", name: "flour", quantity: 250, unit: "g" },
      { id: "eggs", name: "eggs", quantity: 2, unit: "pieces" },
      { id: "milk", name: "milk", quantity: 300, unit: "ml" },
      { id: "baking-powder", name: "baking-powder", quantity: 2, unit: "tsp" },
      { id: "sugar", name: "sugar", quantity: 2, unit: "tbsp" },
      { id: "butter", name: "butter", quantity: 50, unit: "g" }
    ],
    instructions: [
      "Mix ingredients for a smooth batter",
      "Cook on both sides in a pan"
    ],
    instructionsFr: [
      "Mélanger les ingrédients pour obtenir une pâte lisse",
      "Cuire à la poêle des deux côtés"
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    nameFr: "Avocado toast",
    description: "A healthy and gourmet classic",
    descriptionFr: "Un incontournable healthy et gourmand",
    ingredients: [
      { id: "whole-grain-bread", name: "whole-grain-bread", quantity: 2, unit: "slices" },
      { id: "avocado", name: "avocado", quantity: 1, unit: "piece" },
      { id: "eggs", name: "eggs", quantity: 2, unit: "pieces" },
      { id: "salt", name: "salt", quantity: 0.5, unit: "tsp" },
      { id: "pepper", name: "pepper", quantity: 0.5, unit: "tsp" },
      { id: "espelette-pepper", name: "espelette-pepper", quantity: 0.25, unit: "tsp" }
    ],
    instructions: [
      "Mash avocado on toasted bread",
      "Add poached egg and season"
    ],
    instructionsFr: [
      "Écraser l'avocat sur le pain grillé",
      "Ajouter un œuf poché et assaisonner"
    ],
    prepTime: 5,
    cookTime: 5,
    servings: 2
  },
  {
    id: "guacamole",
    name: "Homemade Guacamole",
    nameFr: "Guacamole maison",
    description: "A fresh and easy recipe to share",
    descriptionFr: "Une recette fraîche et facile à partager",
    ingredients: [
      { id: "avocados", name: "avocados", quantity: 3, unit: "pieces" },
      { id: "tomato", name: "tomato", quantity: 1, unit: "piece" },
      { id: "red-onion", name: "red-onion", quantity: 0.5, unit: "piece" },
      { id: "cilantro", name: "cilantro", quantity: 10, unit: "g" },
      { id: "lime", name: "lime", quantity: 1, unit: "piece" },
      { id: "salt", name: "salt", quantity: 0.5, unit: "tsp" }
    ],
    instructions: [
      "Mash avocados and mix with other ingredients"
    ],
    instructionsFr: [
      "Écraser les avocats et mélanger avec les autres ingrédients"
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 6
  },
  {
    id: "ham-croquettes",
    name: "Ham Croquettes",
    nameFr: "Croquettes de jambon",
    description: "Crispy and creamy croquettes",
    descriptionFr: "Des croquettes croustillantes et fondantes",
    ingredients: [
      { id: "ham", name: "ham", quantity: 200, unit: "g" },
      { id: "béchamel", name: "béchamel", quantity: 500, unit: "ml" },
      { id: "breadcrumbs", name: "breadcrumbs", quantity: 200, unit: "g" },
      { id: "eggs", name: "eggs", quantity: 2, unit: "pieces" },
      { id: "frying-oil", name: "frying-oil", quantity: 500, unit: "ml" }
    ],
    instructions: [
      "Prepare thick béchamel with ham",
      "Form croquettes, bread and fry"
    ],
    instructionsFr: [
      "Préparer une béchamel épaisse avec du jambon",
      "Former des croquettes, paner et frire"
    ],
    prepTime: 30,
    cookTime: 10,
    servings: 8
  }
]; 