import React from 'react';
import Coffee from './Coffee/Coffee';
import NewCoffeeForm from './NewCoffeeForm/NewCoffeeForm';
import BrewDetails from './BrewDetails/BrewDetails';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Coffees: [
        {
          id: "1ce6c951-a2c4-4dac-863a-a6a2de0e02fb",
          name: "Blended Chai Cinnamon Latte",
          description: "Creamy blend of Chai with suttle hints of cinnamon churned to perfection.",
          image: "https://www.ohhowcivilized.com/wp-content/uploads/2013/01/0918-cha-tea-latte-16.jpg",
          quantity: 20
        },
        {
          id: "558bae53-5d09-458c-b1a4-cbea0ba3bf01",
          name: "Almond Choco",
          description: "A dark mix or nutty almond flavor and deep dark chocolate undertones.",
          image: "https://marich.com/wp-content/uploads/2018/08/830-dc-almonds-bulk.jpg",
          quantity: 20
        },
        {
          id: "a2d348d3-7c3d-40c6-b0e1-b6248a885f99",
          name: "Almond Choco",
          description: "A dark mix or nutty almond flavor and deep dark chocolate undertones.",
          image: "https://marich.com/wp-content/uploads/2018/08/830-dc-almonds-bulk.jpg",
          quantity: 20
        },
        {
          id: "f38ade84-2035-4e91-90e0-7e0cccafb848",
          name: "Almond Choco",
          description: "A dark mix or nutty almond flavor and deep dark chocolate undertones.",
          image: "https://marich.com/wp-content/uploads/2018/08/830-dc-almonds-bulk.jpg",
          quantity: 20
        },
        {
          id: "c80f4400-0f81-4c57-a088-7147f64cb302",
          name: "Almond Choco",
          description: "A dark mix or nutty almond flavor and deep dark chocolate undertones.",
          image: "https://marich.com/wp-content/uploads/2018/08/830-dc-almonds-bulk.jpg",
          quantity: 20
        },
        {
          id: "9de52891-05a6-4027-b555-78763b443cf8",
          name: "Almond Choco",
          description: "A dark mix or nutty almond flavor and deep dark chocolate undertones.",
          image: "https://marich.com/wp-content/uploads/2018/08/830-dc-almonds-bulk.jpg",
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
      return (
        <React.Fragment>
          {this.state.Coffees.map((coffee, index) => (
            <Coffee 
              id={coffee.id}
              name={coffee.name}
              image={coffee.image}
              quantity={coffee.quantity}
              handleShowCoffeeDetails={this.handleShowCoffeeDetails}
              key={index} />
          ))}
          <NewCoffeeForm onNewBrewCreation={this.handleNewBrewCreation}/>
        </React.Fragment>
      )
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}

export default Body;