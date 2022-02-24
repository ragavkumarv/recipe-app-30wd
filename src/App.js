import { useEffect, useState } from "react";
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
// import { useEffect, useState } from "react";
function RecipeList() {
  const message = "Awesome recipe list 🍗🍟";
  const [recipeList, setRecipeList] = useState([]);

  // useEffect -> runs only once -> when component is mounted
  useEffect(() => {
    fetch("<Your api>/recipes")
      .then((data) => data.json())
      .then((recipes) => setRecipeList(recipes));
  }, []);

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
