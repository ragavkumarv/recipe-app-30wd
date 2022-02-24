import { Link, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/recipe-list">Recipe List </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/recipe-list">
          <RecipeList />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

// /recipe-list -> <RecipeList />
// / ->  <Welcome />

function Welcome() {
  const message = "Welcome to recipe app 😊👨‍🍳";
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

function RecipeList() {
  const message = "Awesome recipe list 🍗🍟";
  const recipe = {
    name: "Biryani",
    picture:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
  };

  const recipeList = [
    {
      picture:
        "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11.jpg",
      name: "Chicken tandoori",
    },
    {
      picture:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
      name: "Panner butter masala",
    },
    {
      picture:
        "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
      name: "Briyani",
    },
    {
      picture:
        "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
      name: "Parotta shawarma",
    },
  ];

  return (
    <div>
      <h1>{message}</h1>
      <div className="recipe-list-container">
        {recipeList.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

function Recipe({ recipe }) {
  return (
    <div className="recipe-container">
      <img src={recipe.picture} alt={recipe.name} className="recipe-picture" />
      <p className="recipe-name">{recipe.name}</p>
    </div>
  );
}

// win + . -> emoji

export default App;
