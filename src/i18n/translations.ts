// Base translations structure
const baseTranslations = {
  app: {
    title: "",
    weeklyPlan: "",
    shoppingList: "",
    selectRecipe: "",
    viewRecipeDetails: "",
    showAllDays: "",
    meals: {
      lunch: "",
      dinner: ""
    },
    days: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    },
    servingsSelector: {
      label: "",
      people: ""
    },
  },
  recipe: {
    prepTime: "",
    cookTime: "",
    servings: "",
    ingredients: "",
    instructions: "",
    minutes: "",
    units: {
      // Unités de mesure
      "g": "g",
      "ml": "ml",
      "L": "L",
      "cups": "cups",
      "tbsp": "tbsp",
      "tsp": "tsp",
      "pounds": "pounds",
      "ounces": "ounces",
      
      // Unités de compte
      "pieces": "pieces",
      "cloves": "cloves",
      "slices": "slices",
      "head": "head",
      "sprigs": "sprigs",
      "pinch": "pinch",
      "handful": "handful",
      "bunch": "bunch",
      
      // Contenants
      "can": "can",
      "jar": "jar",
      "pack": "pack",
      
      // Formes
      "stick": "stick",
      "sheet": "sheet",
      "strip": "strip",
      "cube": "cube",
      "dash": "dash",
      "drop": "drop",
      
      // Fractions
      "whole": "whole",
      "half": "half",
      "quarter": "quarter",
      "third": "third",
      
      // Préparation
      "diced": "diced",
      "chopped": "chopped",
      "minced": "minced",
      "grated": "grated",
      "crushed": "crushed",
      
      // État
      "fresh": "fresh",
      "dried": "dried",
      "frozen": "frozen",
      "canned": "canned",
      "jarred": "jarred",
      "packed": "packed",
      
      // Préparation préalable
      "peeled": "peeled",
      "seeded": "seeded",
      "cored": "cored",
      "stemmed": "stemmed",
      "trimmed": "trimmed",
      "washed": "washed",
      "drained": "drained",
      "patted": "patted",
      
      // Température
      "room-temperature": "room-temperature",
      "cold": "cold",
      "warm": "warm",
      "hot": "hot",
      "boiling": "boiling",
      "simmering": "simmering"
    },
    recipes: {}
  },
  language: {
    en: "English",
    fr: "French",
  },
};

// English translations
const enTranslations = {
  ...baseTranslations,
  app: {
    title: "Meal Planner",
    weeklyPlan: "Weekly Plan",
    shoppingList: "Shopping List",
    selectRecipe: "Select a recipe",
    viewRecipeDetails: "View Recipe Details",
    showAllDays: "Show all days",
    meals: {
      lunch: "Lunch",
      dinner: "Dinner"
    },
    days: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    },
    servingsSelector: {
      label: "Number of servings",
      people: "people"
    },
  },
  recipe: {
    ...baseTranslations.recipe,
    prepTime: "Prep time",
    cookTime: "Cook time",
    servings: "Servings",
    ingredients: "Ingredients",
    instructions: "Instructions",
    minutes: "minutes",
    recipes: {
      "spaghetti-carbonara": {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish with eggs, cheese, and pancetta",
        ingredients: {
          "spaghetti": "Spaghetti",
          "eggs": "Eggs",
          "pecorino-romano": "Pecorino Romano",
          "pancetta": "Pancetta",
          "black-pepper": "Black Pepper",
          "salt": "Salt"
        },
        instructions: [
          "Cook spaghetti according to package instructions",
          "Fry pancetta until crispy",
          "Mix eggs and cheese in a bowl",
          "Combine all ingredients and season with black pepper"
        ]
      },
      "chicken-stir-fry": {
        name: "Chicken Stir-Fry",
        description: "Quick and healthy Asian-inspired stir-fry",
        ingredients: {
          "chicken-breast": "Chicken Breast",
          "mixed-vegetables": "Mixed Vegetables",
          "soy-sauce": "Soy Sauce",
          "garlic": "Garlic",
          "ginger": "Ginger",
          "rice": "Rice"
        },
        instructions: [
          "Cut chicken into bite-sized pieces",
          "Prepare vegetables",
          "Stir-fry chicken until golden",
          "Add vegetables and sauce",
          "Serve with rice"
        ]
      },
      "salmon-en-papillote": {
        name: "Salmon en Papillote",
        description: "French-style baked salmon with vegetables",
        ingredients: {
          "salmon-fillet": "Salmon Fillet",
          "asparagus": "Asparagus",
          "cherry-tomatoes": "Cherry Tomatoes",
          "lemon": "Lemon",
          "olive-oil": "Olive Oil",
          "fresh-herbs": "Fresh Herbs"
        },
        instructions: [
          "Preheat oven to 400°F",
          "Place salmon and vegetables on parchment paper",
          "Season with herbs and olive oil",
          "Fold and seal the packet",
          "Bake for 20 minutes"
        ]
      },
      "vegetarian-buddha-bowl": {
        name: "Vegetarian Buddha Bowl",
        description: "Healthy and filling vegetarian bowl with quinoa",
        ingredients: {
          "quinoa": "Quinoa",
          "chickpeas": "Chickpeas",
          "kale": "Kale",
          "sweet-potato": "Sweet Potato",
          "tahini-sauce": "Tahini Sauce",
          "pumpkin-seeds": "Pumpkin Seeds"
        },
        instructions: [
          "Cook quinoa according to package instructions",
          "Roast sweet potato and chickpeas",
          "Massage kale with olive oil",
          "Assemble bowl with all ingredients",
          "Top with tahini sauce"
        ]
      },
      "beef-bourguignon": {
        name: "Beef Bourguignon",
        description: "Classic French beef stew with red wine",
        ingredients: {
          "beef-chuck": "Beef Chuck",
          "red-wine": "Red Wine",
          "mushrooms": "Mushrooms",
          "pearl-onions": "Pearl Onions",
          "carrots": "Carrots",
          "bacon": "Bacon"
        },
        instructions: [
          "Brown beef in batches",
          "Sauté vegetables",
          "Add wine and stock",
          "Simmer for 2-3 hours",
          "Add mushrooms and onions"
        ]
      },
      "shrimp-scampi": {
        name: "Shrimp Scampi",
        description: "Italian-American shrimp pasta dish",
        ingredients: {
          "shrimp": "Shrimp",
          "linguine": "Linguine",
          "white-wine": "White Wine",
          "butter": "Butter",
          "garlic": "Garlic",
          "red-pepper-flakes": "Red Pepper Flakes"
        },
        instructions: [
          "Cook linguine according to package instructions",
          "Sauté shrimp with garlic",
          "Add white wine and butter",
          "Combine with pasta",
          "Season with red pepper flakes"
        ]
      },
      "vegetable-curry": {
        name: "Vegetable Curry",
        description: "Spicy Indian-style vegetable curry",
        ingredients: {
          "mixed-vegetables": "Mixed Vegetables",
          "coconut-milk": "Coconut Milk",
          "curry-powder": "Curry Powder",
          "onion": "Onion",
          "ginger": "Ginger",
          "rice": "Rice"
        },
        instructions: [
          "Sauté onions and ginger",
          "Add curry powder",
          "Add vegetables and coconut milk",
          "Simmer until vegetables are tender",
          "Serve with rice"
        ]
      },
      "grilled-steak": {
        name: "Grilled Steak",
        description: "Perfectly grilled steak with herbs",
        ingredients: {
          "ribeye-steak": "Ribeye Steak",
          "fresh-rosemary": "Fresh Rosemary",
          "garlic": "Garlic",
          "butter": "Butter",
          "salt": "Salt",
          "black-pepper": "Black Pepper"
        },
        instructions: [
          "Season steak with salt and pepper",
          "Preheat grill to high",
          "Grill steak to desired doneness",
          "Let rest for 5 minutes",
          "Top with herb butter"
        ]
      },
      "mushroom-risotto": {
        name: "Mushroom Risotto",
        description: "Creamy Italian mushroom risotto",
        ingredients: {
          "arborio-rice": "Arborio Rice",
          "mixed-mushrooms": "Mixed Mushrooms",
          "vegetable-stock": "Vegetable Stock",
          "parmesan": "Parmesan",
          "white-wine": "White Wine",
          "butter": "Butter"
        },
        instructions: [
          "Sauté mushrooms",
          "Toast rice",
          "Add stock gradually",
          "Stir until creamy",
          "Finish with parmesan"
        ]
      },
      "taco-bowl": {
        name: "Taco Bowl",
        description: "Mexican-inspired taco bowl with ground beef",
        ingredients: {
          "ground-beef": "Ground Beef",
          "rice": "Rice",
          "black-beans": "Black Beans",
          "corn": "Corn",
          "taco-seasoning": "Taco Seasoning",
          "avocado": "Avocado"
        },
        instructions: [
          "Brown ground beef with taco seasoning",
          "Cook rice",
          "Prepare toppings",
          "Assemble bowl",
          "Top with avocado"
        ]
      },
      "salmon-avocado-verrines": {
        name: "Salmon and Avocado Verrines",
        description: "A fresh and gourmet starter, perfect for appetizers",
        ingredients: {
          "smoked-salmon": "Smoked Salmon",
          "avocado": "Avocado",
          "cream": "Cream",
          "lemon": "Lemon",
          "chives": "Chives",
          "salt": "Salt",
          "pepper": "Pepper"
        },
        instructions: [
          "Mash the avocado with cream, lemon, salt and pepper",
          "Arrange in verrines and add smoked salmon pieces",
          "Sprinkle with chives"
        ]
      },
      "tomato-mozzarella-bruschetta": {
        name: "Tomato and Mozzarella Bruschetta",
        description: "A simple and tasty Italian classic",
        ingredients: {
          "baguette": "Baguette",
          "tomatoes": "Tomatoes",
          "mozzarella": "Mozzarella",
          "basil": "Basil",
          "olive-oil": "Olive Oil",
          "garlic": "Garlic",
          "salt": "Salt"
        },
        instructions: [
          "Toast the bread and rub with garlic",
          "Add tomatoes, mozzarella and basil",
          "Drizzle with olive oil"
        ]
      },
      "roast-chicken": {
        name: "Herb Roasted Chicken",
        description: "A crispy and aromatic chicken",
        ingredients: {
          "whole-chicken": "Whole Chicken",
          "thyme": "Thyme",
          "rosemary": "Rosemary",
          "garlic": "Garlic",
          "butter": "Butter",
          "salt": "Salt",
          "pepper": "Pepper"
        },
        instructions: [
          "Brush the chicken with butter and herbs",
          "Bake at 180°C until cooked"
        ]
      },
      "chocolate-fondant": {
        name: "Chocolate Fondant",
        description: "A soft and intense chocolate dessert",
        ingredients: {
          "dark-chocolate": "Dark Chocolate",
          "butter": "Butter",
          "eggs": "Eggs",
          "sugar": "Sugar",
          "flour": "Flour"
        },
        instructions: [
          "Melt chocolate and butter",
          "Mix with eggs, sugar and flour",
          "Bake for 10-12 minutes"
        ]
      },
      "apple-pie": {
        name: "Apple Pie",
        description: "A classic family dessert",
        ingredients: {
          "pie-crust": "Pie Crust",
          "apples": "Apples",
          "sugar": "Sugar",
          "cinnamon": "Cinnamon",
          "egg": "Egg"
        },
        instructions: [
          "Roll out the dough, arrange apples",
          "Sprinkle with sugar and cinnamon",
          "Bake for 30-40 minutes"
        ]
      },
      "coconut-lentil-curry": {
        name: "Coconut Lentil Curry",
        description: "A comforting and spicy dish",
        ingredients: {
          "lentils": "Lentils",
          "coconut-milk": "Coconut Milk",
          "onions": "Onions",
          "curry-powder": "Curry Powder",
          "tomatoes": "Tomatoes"
        },
        instructions: [
          "Brown onions and spices",
          "Add lentils and coconut milk, simmer"
        ]
      },
      "dauphinoise-gratin": {
        name: "Dauphinoise Gratin",
        description: "Creamy and smooth",
        ingredients: {
          "potatoes": "Potatoes",
          "cream": "Cream",
          "milk": "Milk",
          "garlic": "Garlic",
          "nutmeg": "Nutmeg"
        },
        instructions: [
          "Slice potatoes, arrange in layers",
          "Add cream and milk, bake in oven"
        ]
      },
      "onion-soup": {
        name: "Onion Soup",
        description: "A comforting classic, perfect for winter evenings",
        ingredients: {
          "onions": "Onions",
          "butter": "Butter",
          "beef-broth": "Beef Broth",
          "white-wine": "White Wine",
          "bread": "Bread",
          "gruyere": "Gruyere"
        },
        instructions: [
          "Caramelize onions in butter",
          "Add wine and broth, simmer",
          "Pour into bowls, add bread and cheese",
          "Broil until cheese is melted"
        ]
      },
      "pumpkin-soup": {
        name: "Pumpkin Soup",
        description: "A smooth and creamy soup, perfect for autumn",
        ingredients: {
          "pumpkin": "Pumpkin",
          "carrots": "Carrots",
          "onion": "Onion",
          "cream": "Cream",
          "chicken-broth": "Chicken Broth",
          "nutmeg": "Nutmeg"
        },
        instructions: [
          "Sauté vegetables",
          "Add broth and cook until tender",
          "Blend and add cream"
        ]
      },
      "caesar-salad": {
        name: "Caesar Salad",
        description: "A crunchy and savory salad with a gourmet touch",
        ingredients: {
          "romaine-lettuce": "Romaine Lettuce",
          "chicken": "Chicken",
          "parmesan": "Parmesan",
          "croutons": "Croutons",
          "anchovies": "Anchovies",
          "garlic": "Garlic",
          "egg-yolk": "Egg Yolk",
          "olive-oil": "Olive Oil"
        },
        instructions: [
          "Mix lettuce, chicken and croutons",
          "Add sauce and sprinkle with parmesan"
        ]
      },
      "quinoa-vegetable-salad": {
        name: "Quinoa Vegetable Salad",
        description: "A complete and healthy salad, rich in protein",
        ingredients: {
          "quinoa": "Quinoa",
          "bell-peppers": "Bell Peppers",
          "cucumber": "Cucumber",
          "tomatoes": "Tomatoes",
          "feta": "Feta",
          "olive-oil": "Olive Oil",
          "lemon": "Lemon"
        },
        instructions: [
          "Cook quinoa and let cool",
          "Add chopped vegetables and feta",
          "Season with olive oil and lemon"
        ]
      },
      "pad-thai": {
        name: "Pad Thai",
        description: "A balanced Thai dish between sweet, salty and sour",
        ingredients: {
          "rice-noodles": "Rice Noodles",
          "shrimp": "Shrimp",
          "tofu": "Tofu",
          "eggs": "Eggs",
          "bean-sprouts": "Bean Sprouts",
          "peanuts": "Peanuts",
          "fish-sauce": "Fish Sauce",
          "sugar": "Sugar",
          "lime": "Lime"
        },
        instructions: [
          "Sauté ingredients in a wok",
          "Add noodles and sauce"
        ]
      },
      "lamb-tagine": {
        name: "Lamb Tagine with Prunes",
        description: "A fragrant and tender Moroccan dish",
        ingredients: {
          "lamb": "Lamb",
          "prunes": "Prunes",
          "onions": "Onions",
          "honey": "Honey",
          "cumin": "Cumin",
          "cinnamon": "Cinnamon",
          "ginger": "Ginger"
        },
        instructions: [
          "Brown meat and onions",
          "Add prunes, honey and spices",
          "Cook on low heat"
        ]
      },
      "pancakes": {
        name: "Fluffy Pancakes",
        description: "Light and golden pancakes, perfect for brunch",
        ingredients: {
          "flour": "Flour",
          "eggs": "Eggs",
          "milk": "Milk",
          "baking-powder": "Baking Powder",
          "sugar": "Sugar",
          "butter": "Butter"
        },
        instructions: [
          "Mix ingredients for a smooth batter",
          "Cook on both sides in a pan"
        ]
      },
      "avocado-toast": {
        name: "Avocado Toast",
        description: "A healthy and gourmet classic",
        ingredients: {
          "whole-grain-bread": "Whole Grain Bread",
          "avocado": "Avocado",
          "eggs": "Eggs",
          "salt": "Salt",
          "pepper": "Pepper",
          "espelette-pepper": "Espelette Pepper"
        },
        instructions: [
          "Mash avocado on toasted bread",
          "Add poached egg and season"
        ]
      },
      "guacamole": {
        name: "Homemade Guacamole",
        description: "A fresh and easy recipe to share",
        ingredients: {
          "avocados": "Avocados",
          "tomato": "Tomato",
          "red-onion": "Red Onion",
          "cilantro": "Cilantro",
          "lime": "Lime",
          "salt": "Salt"
        },
        instructions: [
          "Mash avocados and mix with other ingredients"
        ]
      },
      "ham-croquettes": {
        name: "Ham Croquettes",
        description: "Crispy and creamy croquettes",
        ingredients: {
          "ham": "Ham",
          "béchamel": "Béchamel",
          "breadcrumbs": "Breadcrumbs",
          "eggs": "Eggs",
          "frying-oil": "Frying Oil"
        },
        instructions: [
          "Prepare thick béchamel with ham",
          "Form croquettes, bread and fry"
        ]
      }
    }
  }
};

// French translations
const frTranslations = {
  ...baseTranslations,
  app: {
    title: "Planificateur de Repas",
    weeklyPlan: "Plan Hebdomadaire",
    shoppingList: "Liste de Courses",
    selectRecipe: "Sélectionner une recette",
    viewRecipeDetails: "Voir les détails de la recette",
    showAllDays: "Voir tous les jours",
    meals: {
      lunch: "Déjeuner",
      dinner: "Dîner"
    },
    days: {
      monday: "Lundi",
      tuesday: "Mardi",
      wednesday: "Mercredi",
      thursday: "Jeudi",
      friday: "Vendredi",
      saturday: "Samedi",
      sunday: "Dimanche",
    },
    servingsSelector: {
      label: "Nombre de personnes",
      people: "personnes"
    },
  },
  recipe: {
    ...baseTranslations.recipe,
    prepTime: "Temps de préparation",
    cookTime: "Temps de cuisson",
    servings: "Portions",
    ingredients: "Ingrédients",
    instructions: "Instructions",
    minutes: "minutes",
    units: {
      // Unités de mesure
      "g": "g",
      "ml": "ml",
      "L": "L",
      "cups": "tasses",
      "tbsp": "c. à s.",
      "tsp": "c. à c.",
      "pounds": "livres",
      "ounces": "onces",
      
      // Unités de compte
      "pieces": "pièces",
      "cloves": "gousses",
      "slices": "tranches",
      "head": "pièce",
      "sprigs": "brins",
      "pinch": "pincée",
      "handful": "poignée",
      "bunch": "botte",
      
      // Contenants
      "can": "boîte",
      "jar": "bocal",
      "pack": "paquet",
      
      // Formes
      "stick": "bâton",
      "sheet": "feuille",
      "strip": "bande",
      "cube": "cube",
      "dash": "filet",
      "drop": "goutte",
      
      // Fractions
      "whole": "entier",
      "half": "demi",
      "quarter": "quart",
      "third": "tiers",
      
      // Préparation
      "diced": "coupé en dés",
      "chopped": "haché",
      "minced": "émincé",
      "grated": "râpé",
      "crushed": "écrasé",
      
      // État
      "fresh": "frais",
      "dried": "séché",
      "frozen": "congelé",
      "canned": "en conserve",
      "jarred": "en bocal",
      "packed": "emballé",
      
      // Préparation préalable
      "peeled": "pelé",
      "seeded": "épépiné",
      "cored": "évidé",
      "stemmed": "équeuté",
      "trimmed": "paré",
      "washed": "lavé",
      "drained": "égoutté",
      "patted": "essuyé",
      
      // Température
      "room-temperature": "température ambiante",
      "cold": "froid",
      "warm": "tiède",
      "hot": "chaud",
      "boiling": "bouillant",
      "simmering": "frémir"
    },
    recipes: {
      "spaghetti-carbonara": {
        name: "Spaghetti à la Carbonara",
        description: "Plat de pâtes italien classique aux œufs, fromage et pancetta",
        ingredients: {
          "spaghetti": "Spaghetti",
          "eggs": "Œufs",
          "pecorino-romano": "Pecorino Romano",
          "pancetta": "Pancetta",
          "black-pepper": "Poivre Noir",
          "salt": "Sel"
        },
        instructions: [
          "Cuire les spaghettis selon les instructions du paquet",
          "Faire revenir la pancetta jusqu'à ce qu'elle soit croustillante",
          "Mélanger les œufs et le fromage dans un bol",
          "Combiner tous les ingrédients et assaisonner de poivre noir"
        ]
      },
      "chicken-stir-fry": {
        name: "Poulet Sauté aux Légumes",
        description: "Sauté asiatique rapide et sain",
        ingredients: {
          "chicken-breast": "Blanc de Poulet",
          "mixed-vegetables": "Légumes Variés",
          "soy-sauce": "Sauce Soja",
          "garlic": "Ail",
          "ginger": "Gingembre",
          "rice": "Riz"
        },
        instructions: [
          "Couper le poulet en morceaux",
          "Préparer les légumes",
          "Faire revenir le poulet jusqu'à ce qu'il soit doré",
          "Ajouter les légumes et la sauce",
          "Servir avec du riz"
        ]
      },
      "salmon-en-papillote": {
        name: "Saumon en Papillote",
        description: "Saumon cuit au four à la française avec légumes",
        ingredients: {
          "salmon-fillet": "Filet de Saumon",
          "asparagus": "Asperges",
          "cherry-tomatoes": "Tomates Cerises",
          "lemon": "Citron",
          "olive-oil": "Huile d'Olive",
          "fresh-herbs": "Herbes Fraîches"
        },
        instructions: [
          "Préchauffer le four à 200°C",
          "Placer le saumon et les légumes sur du papier sulfurisé",
          "Assaisonner d'herbes et d'huile d'olive",
          "Plier et sceller le papier",
          "Cuire pendant 20 minutes"
        ]
      },
      "vegetarian-buddha-bowl": {
        name: "Buddha Bowl Végétarien",
        description: "Bol végétarien sain et nourrissant au quinoa",
        ingredients: {
          "quinoa": "Quinoa",
          "chickpeas": "Pois Chiches",
          "kale": "Chou Frisé",
          "sweet-potato": "Patate Douce",
          "tahini-sauce": "Sauce Tahini",
          "pumpkin-seeds": "Graines de Citrouille"
        },
        instructions: [
          "Cuire le quinoa selon les instructions du paquet",
          "Rôtir la patate douce et les pois chiches",
          "Massager le chou frisé avec de l'huile d'olive",
          "Assembler le bol avec tous les ingrédients",
          "Arroser de sauce tahini"
        ]
      },
      "beef-bourguignon": {
        name: "Bœuf Bourguignon",
        description: "Ragoût de bœuf français classique au vin rouge",
        ingredients: {
          "beef-chuck": "Paleron de Bœuf",
          "red-wine": "Vin Rouge",
          "mushrooms": "Champignons",
          "pearl-onions": "Oignons Grelots",
          "carrots": "Carottes",
          "bacon": "Lardons"
        },
        instructions: [
          "Faire revenir le bœuf par lots",
          "Faire revenir les légumes",
          "Ajouter le vin et le bouillon",
          "Laisser mijoter 2-3 heures",
          "Ajouter les champignons et les oignons"
        ]
      },
      "shrimp-scampi": {
        name: "Scampi aux Crevettes",
        description: "Plat de pâtes italo-américain aux crevettes",
        ingredients: {
          "shrimp": "Crevettes",
          "linguine": "Linguine",
          "white-wine": "Vin Blanc",
          "butter": "Beurre",
          "garlic": "Ail",
          "red-pepper-flakes": "Flocons de Piment Rouge"
        },
        instructions: [
          "Cuire les linguine selon les instructions du paquet",
          "Faire revenir les crevettes avec l'ail",
          "Ajouter le vin blanc et le beurre",
          "Combiner avec les pâtes",
          "Assaisonner de flocons de piment rouge"
        ]
      },
      "vegetable-curry": {
        name: "Curry de Légumes",
        description: "Curry de légumes épicé à l'indienne",
        ingredients: {
          "mixed-vegetables": "Légumes Variés",
          "coconut-milk": "Lait de Coco",
          "curry-powder": "Poudre de Curry",
          "onion": "Oignon",
          "ginger": "Gingembre",
          "rice": "Riz"
        },
        instructions: [
          "Faire revenir les oignons et le gingembre",
          "Ajouter la poudre de curry",
          "Ajouter les légumes et le lait de coco",
          "Laisser mijoter jusqu'à ce que les légumes soient tendres",
          "Servir avec du riz"
        ]
      },
      "grilled-steak": {
        name: "Steak Grillé",
        description: "Steak parfaitement grillé aux herbes",
        ingredients: {
          "ribeye-steak": "Entrecôte",
          "fresh-rosemary": "Romarin Frais",
          "garlic": "Ail",
          "butter": "Beurre",
          "salt": "Sel",
          "black-pepper": "Poivre Noir"
        },
        instructions: [
          "Assaisonner le steak de sel et poivre",
          "Préchauffer le grill à température maximale",
          "Griller le steak selon la cuisson souhaitée",
          "Laisser reposer 5 minutes",
          "Napper de beurre aux herbes"
        ]
      },
      "mushroom-risotto": {
        name: "Risotto aux Champignons",
        description: "Risotto italien crémeux aux champignons",
        ingredients: {
          "arborio-rice": "Riz Arborio",
          "mixed-mushrooms": "Champignons Variés",
          "vegetable-stock": "Bouillon de Légumes",
          "parmesan": "Parmesan",
          "white-wine": "Vin Blanc",
          "butter": "Beurre"
        },
        instructions: [
          "Faire revenir les champignons",
          "Faire revenir le riz",
          "Ajouter le bouillon progressivement",
          "Remuer jusqu'à ce que ce soit crémeux",
          "Finir avec du parmesan"
        ]
      },
      "taco-bowl": {
        name: "Bol de Tacos",
        description: "Bol de tacos mexicain au bœuf haché",
        ingredients: {
          "ground-beef": "Bœuf Haché",
          "rice": "Riz",
          "black-beans": "Haricots Noirs",
          "corn": "Maïs",
          "taco-seasoning": "Épices à Tacos",
          "avocado": "Avocat"
        },
        instructions: [
          "Faire revenir le bœuf haché avec les épices à tacos",
          "Cuire le riz",
          "Préparer les garnitures",
          "Assembler le bol",
          "Garnir d'avocat"
        ]
      },
      "salmon-avocado-verrines": {
        name: "Verrines de Saumon Fumé à l'Avocat",
        description: "Une entrée fraîche et gourmande, parfaite pour les apéritifs",
        ingredients: {
          "smoked-salmon": "Saumon Fumé",
          "avocado": "Avocat",
          "cream": "Crème Fraîche",
          "lemon": "Citron",
          "chives": "Ciboulette",
          "salt": "Sel",
          "pepper": "Poivre"
        },
        instructions: [
          "Écraser l'avocat avec la crème fraîche, citron, sel et poivre",
          "Disposer dans des verrines et ajouter des morceaux de saumon fumé",
          "Parsemer de ciboulette"
        ]
      },
      "tomato-mozzarella-bruschetta": {
        name: "Bruschetta Tomate-Mozzarella",
        description: "Un classique italien simple et savoureux",
        ingredients: {
          "baguette": "Pain Baguette",
          "tomatoes": "Tomates",
          "mozzarella": "Mozzarella",
          "basil": "Basilic",
          "olive-oil": "Huile d'Olive",
          "garlic": "Ail",
          "salt": "Sel"
        },
        instructions: [
          "Griller le pain, frotter d'ail",
          "Ajouter tomates, mozzarella et basilic",
          "Arroser d'huile d'olive"
        ]
      },
      "roast-chicken": {
        name: "Poulet Rôti aux Herbes",
        description: "Un poulet croustillant et parfumé",
        ingredients: {
          "whole-chicken": "Poulet Entier",
          "thyme": "Thym",
          "rosemary": "Romarin",
          "garlic": "Ail",
          "butter": "Beurre",
          "salt": "Sel",
          "pepper": "Poivre"
        },
        instructions: [
          "Badigeonner le poulet de beurre et herbes",
          "Enfourner à 180°C jusqu'à cuisson"
        ]
      },
      "chocolate-fondant": {
        name: "Fondant au Chocolat",
        description: "Un dessert moelleux et intense en chocolat",
        ingredients: {
          "dark-chocolate": "Chocolat Noir",
          "butter": "Beurre",
          "eggs": "Œufs",
          "sugar": "Sucre",
          "flour": "Farine"
        },
        instructions: [
          "Faire fondre chocolat et beurre",
          "Mélanger avec les œufs, sucre et farine",
          "Cuire 10-12 minutes"
        ]
      },
      "apple-pie": {
        name: "Tarte aux Pommes",
        description: "Un grand classique familial",
        ingredients: {
          "pie-crust": "Pâte Brisée",
          "apples": "Pommes",
          "sugar": "Sucre",
          "cinnamon": "Cannelle",
          "egg": "Œuf"
        },
        instructions: [
          "Étaler la pâte, disposer les pommes",
          "Saupoudrer de sucre et cannelle",
          "Cuire 30-40 minutes"
        ]
      },
      "coconut-lentil-curry": {
        name: "Curry de Lentilles Coco",
        description: "Un plat réconfortant et épicé",
        ingredients: {
          "lentils": "Lentilles",
          "coconut-milk": "Lait de Coco",
          "onions": "Oignons",
          "curry-powder": "Curry",
          "tomatoes": "Tomates"
        },
        instructions: [
          "Faire revenir oignons et épices",
          "Ajouter lentilles et lait de coco, mijoter"
        ]
      },
      "dauphinoise-gratin": {
        name: "Gratin Dauphinois",
        description: "Crémeux et doux",
        ingredients: {
          "potatoes": "Pommes de terre",
          "cream": "Crème",
          "milk": "Lait",
          "garlic": "Ail",
          "nutmeg": "Noix de muscade"
        },
        instructions: [
          "Trancher les pommes de terre, les disposer en couches",
          "Ajouter la crème et le lait, cuire au four"
        ]
      },
      "onion-soup": {
        name: "Soupe à l'oignon gratinée",
        description: "Un classique réconfortant, idéal pour les soirées d'hiver",
        ingredients: {
          "onions": "Oignons",
          "butter": "Beurre",
          "beef-broth": "Bouillon de bœuf",
          "white-wine": "Vin blanc",
          "bread": "Pain",
          "gruyere": "Gruyère"
        },
        instructions: [
          "Faire caraméliser les oignons dans du beurre",
          "Ajouter le vin et le bouillon, mijoter",
          "Verser dans des bols, ajouter du pain et du fromage",
          "Gratiner"
        ]
      },
      "pumpkin-soup": {
        name: "Velouté de potiron",
        description: "Une soupe douce et onctueuse, parfaite en automne",
        ingredients: {
          "pumpkin": "Potiron",
          "carrots": "Carottes",
          "onion": "Oignon",
          "cream": "Crème",
          "chicken-broth": "Bouillon de volaille",
          "nutmeg": "Noix de muscade"
        },
        instructions: [
          "Faire revenir les légumes",
          "Ajouter le bouillon et cuire jusqu'à tendreté",
          "Mixer et ajouter la crème"
        ]
      },
      "caesar-salad": {
        name: "Salade César",
        description: "Une salade croquante et savoureuse avec une touche gourmande",
        ingredients: {
          "romaine-lettuce": "Laitue romaine",
          "chicken": "Poulet",
          "parmesan": "Parmesan",
          "croutons": "Croûtons",
          "anchovies": "Anchois",
          "garlic": "Ail",
          "egg-yolk": "Jaune d'œuf",
          "olive-oil": "Huile d'olive"
        },
        instructions: [
          "Mélanger la laitue, le poulet et les croûtons",
          "Ajouter la sauce et saupoudrer de parmesan"
        ]
      },
      "quinoa-vegetable-salad": {
        name: "Salade de quinoa aux légumes",
        description: "Une salade complète et healthy, riche en protéines",
        ingredients: {
          "quinoa": "Quinoa",
          "bell-peppers": "Poivrons",
          "cucumber": "Concombre",
          "tomatoes": "Tomates",
          "feta": "Feta",
          "olive-oil": "Huile d'olive",
          "lemon": "Citron"
        },
        instructions: [
          "Cuire le quinoa et laisser refroidir",
          "Ajouter les légumes coupés et la feta",
          "Assaisonner avec huile d'olive et citron"
        ]
      },
      "pad-thai": {
        name: "Pad Thaï",
        description: "Un plat thaïlandais équilibré entre sucré, salé et acidulé",
        ingredients: {
          "rice-noodles": "Nouilles de riz",
          "shrimp": "Crevettes",
          "tofu": "Tofu",
          "eggs": "Œufs",
          "bean-sprouts": "Pousses de soja",
          "peanuts": "Cacahuètes",
          "fish-sauce": "Sauce nuoc-mâm",
          "sugar": "Sucre",
          "lime": "Citron vert"
        },
        instructions: [
          "Faire sauter les ingrédients dans un wok",
          "Ajouter les nouilles et la sauce"
        ]
      },
      "lamb-tagine": {
        name: "Tajine d'agneau aux pruneaux",
        description: "Un plat marocain parfumé et fondant",
        ingredients: {
          "lamb": "Agneau",
          "prunes": "Pruneaux",
          "onions": "Oignons",
          "honey": "Miel",
          "cumin": "Cumin",
          "cinnamon": "Cannelle",
          "ginger": "Gingembre"
        },
        instructions: [
          "Faire revenir la viande et les oignons",
          "Ajouter les pruneaux, le miel et les épices",
          "Cuire à feu doux"
        ]
      },
      "pancakes": {
        name: "Pancakes moelleux",
        description: "Des pancakes légers et dorés, parfaits pour un brunch",
        ingredients: {
          "flour": "Farine",
          "eggs": "Œufs",
          "milk": "Lait",
          "baking-powder": "Levure chimique",
          "sugar": "Sucre",
          "butter": "Beurre"
        },
        instructions: [
          "Mélanger les ingrédients pour obtenir une pâte lisse",
          "Cuire à la poêle des deux côtés"
        ]
      },
      "avocado-toast": {
        name: "Avocado toast",
        description: "Un incontournable healthy et gourmand",
        ingredients: {
          "whole-grain-bread": "Pain complet",
          "avocado": "Avocat",
          "eggs": "Œufs",
          "salt": "Sel",
          "pepper": "Poivre",
          "espelette-pepper": "Piment d'Espelette"
        },
        instructions: [
          "Écraser l'avocat sur le pain grillé",
          "Ajouter un œuf poché et assaisonner"
        ]
      },
      "guacamole": {
        name: "Guacamole maison",
        description: "Une recette fraîche et facile à partager",
        ingredients: {
          "avocados": "Avocats",
          "tomato": "Tomate",
          "red-onion": "Oignon rouge",
          "cilantro": "Coriandre",
          "lime": "Citron vert",
          "salt": "Sel"
        },
        instructions: [
          "Écraser les avocats et mélanger avec les autres ingrédients"
        ]
      },
      "ham-croquettes": {
        name: "Croquettes de jambon",
        description: "Des croquettes croustillantes et fondantes",
        ingredients: {
          "ham": "Jambon",
          "béchamel": "Béchamel",
          "breadcrumbs": "Chapelure",
          "eggs": "Œufs",
          "frying-oil": "Huile de friture"
        },
        instructions: [
          "Préparer une béchamel épaisse avec du jambon",
          "Former des croquettes, paner et frire"
        ]
      }
    }
  }
};

export const translations = {
  en: enTranslations,
  fr: frTranslations,
} as const;

export type Language = keyof typeof translations;
export type Translation = typeof translations[Language]; 