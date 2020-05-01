import React from 'react';
import Coffee from './Coffee/Coffee';
import NewCoffeeForm from './NewCoffeeForm/NewCoffeeForm';
import BrewDetails from './BrewDetails/BrewDetails';
import { connect } from 'react-redux';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Coffees: [
        {
          id: "1ce6c951-a2c4-4dac-863a-a6a2de0e02fb",
          name: "Chai Cinnamon Latte",
          description: "Creamy blend of Chai with suttle hints of cinnamon churned to perfection.",
          image: "https://www.ohhowcivilized.com/wp-content/uploads/2013/01/0918-cha-tea-latte-16.jpg",
          quantity: 20
        },
        {
          id: "558bae53-5d09-458c-b1a4-cbea0ba3bf01",
          name: "Noggaccino",
          description: "Smooth eggnog with hints of nutmeg and cinammon scattered throughout.",
          image: "https://www.laweekly.com/wp-content/uploads/2019/05/xmascoffee_menottis.jpg",
          quantity: 20
        },
        {
          id: "a2d348d3-7c3d-40c6-b0e1-b6248a885f99",
          name: "Columbian Black",
          description: "Earthy and hearty with a crispt taste of raw coffee.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuyUYEfmi1zTzuT3huhXyHdh9Qnz0b0bIdvPI0TnfrTdi-KO6J&usqp=CAU",
          quantity: 20
        },
        {
          id: "f38ade84-2035-4e91-90e0-7e0cccafb848",
          name: "Iced Dark Roast",
          description: "Cold and crisp with chocolatey undertones mixed with rich coffee.",
          image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps9452_SA1754024B03_22_1bC_WEB-1-696x696.jpg",
          quantity: 20
        },
        {
          id: "c80f4400-0f81-4c57-a088-7147f64cb302",
          name: "Caramel Vanilla frappuccino",
          description: "Sticky Caramel mixed with a strong vanilla cream blended into medium roast.",
          image: "https://www.happyfoodstube.com/wp-content/uploads/2019/07/iced-caramel-latte-picture-500x500.jpg",
          quantity: 20
        },
        {
          id: "9de52891-05a6-4027-b555-78763b443cf8",
          name: "Peppermint Hot Cocoa",
          description: "Strong peppermint infused with a deep chocolate flavor.",
          image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/18/0/FNK_Peppermint-Hot-Cocoa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383787064560.jpeg",
          quantity: 20
        }
      ],
      ShowDetailsPage: false,
      CurrentBrew: {}
    }
  }

  handleShowCoffeeDetails = (id) => {
    let currentBrew = this.state.Coffees.filter(coffee => coffee.id === id)[0];
    this.setState({
      ShowDetailsPage: true,
      CurrentBrew: {...currentBrew}
    })
  }

  handleBackToMainPage = () => {
    this.setState({
      ShowDetailsPage: false
    });
  }

  handleNewBrewCreation = (newBrew) => {
    this.setState({
      Coffees: [...this.state.Coffees, newBrew]
    });
  }

  handleDecrementingCoffeeQuantity = (id) => {
    const coffeeToDecrement = this.state.Coffees.filter(coffee => coffee.id === id)[0];
    const updatedCoffee = {...coffeeToDecrement, quantity: coffeeToDecrement.quantity-1};
    const coffeeList = this.state.Coffees.filter(coffee => coffee.id !== id);
    this.setState({
      Coffees: [...coffeeList, updatedCoffee]
    })
  }

  handleRefillingCoffeeQuantity = (id) => {
    const coffeeToDecrement = this.state.Coffees.filter(coffee => coffee.id === id)[0];
    const updatedCoffee = {...coffeeToDecrement, quantity: 20};
    const coffeeList = this.state.Coffees.filter(coffee => coffee.id !== id);
    this.setState({
      Coffees: [...coffeeList, updatedCoffee]
    })
  }

  renderBody() {
    if(this.state.ShowDetailsPage) {
      return (
        <React.Fragment>
          <BrewDetails 
            image={this.state.CurrentBrew.image}
            name={this.state.CurrentBrew.name}
            description={this.state.CurrentBrew.description}
            handleBackToMainPage={this.handleBackToMainPage}/>
        </React.Fragment>
      )
    } else {
      const sortedCoffees = this.state.Coffees.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      return (
        <React.Fragment>
          <div className="Coffees">
            {sortedCoffees.map((coffee, index) => (
              <Coffee 
                id={coffee.id}
                name={coffee.name}
                image={coffee.image}
                quantity={coffee.quantity}
                handleShowCoffeeDetails={this.handleShowCoffeeDetails}
                handleDecrementingCoffeeQuantity={this.handleDecrementingCoffeeQuantity}
                handleRefillingCoffeeQuantity={this.handleRefillingCoffeeQuantity}
                key={index} />
            ))}
          </div>
          <NewCoffeeForm onNewBrewCreation={this.handleNewBrewCreation}/>
        </React.Fragment>
      )
    }
  }
  
  render() {
    return (
      <div className="Body">
        {this.renderBody()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterCoffeeList: state.masterCoffeeList,
    showDetailsPage: state.showDetailsPage,
    currentCoffee: state.currentCoffee
  }
}

Body = connect(mapStateToProps)(Body);

export default Body;