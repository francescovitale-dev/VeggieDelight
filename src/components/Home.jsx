import pizzaImage from "./pizza.jpg"

const Home = () => {
  return (
    <div className="container home">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card home-card">
          <img src={pizzaImage} className="card-img-top" alt="Vegetarian Recipes" />
            <div className="card-body">
              <h5 className="card-title">Welcome to Our Veggie Wonderland!</h5>
              <p className="card-text">
                Dive into the green goodness of our vegetarian recipes collection. From crispy salads to mouthwatering veggie burgers, we've got you covered for a delicious and sustainable culinary journey!
              </p>
              <p className="card-text">
                And remember, as Julia Child once said, "The only time to eat diet food is while you're waiting for the steak to cook." Well, with our recipes, you won't miss the steak at all!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

