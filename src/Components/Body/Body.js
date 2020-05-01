import React, { useEffect } from 'react';
import Coffee from './Coffee/Coffee';
import NewCoffeeForm from './NewCoffeeForm/NewCoffeeForm';
import BrewDetails from './BrewDetails/BrewDetails';
import defaultCoffees from '../../data/defaultCoffees';
import { connect } from 'react-redux';
import * as a from '../../actions/index';

let Body = props => {
  const { dispatch } = props;
  useEffect(() => {
    const defaultCoffeeList = Object.values(defaultCoffees);
    defaultCoffeeList.forEach(coffee => {
      dispatch(a.addCoffee(coffee));
    });
  }, []);
  const handleShowCoffeeDetails = (id) => {
    let currentBrew = props.masterCoffeeList[id];
    dispatch(a.changeCurrentCoffee(currentBrew));
    dispatch(a.toggleDetails());
  }

  const handleBackToMainPage = () => {
    dispatch(a.toggleDetails());
  }

  const handleNewBrewCreation = (newBrew) => {
    dispatch(a.addCoffee(newBrew));
  }

  const handleDecrementingCoffeeQuantity = (id) => {
    const coffeeToDecrement = props.masterCoffeeList[id];
    const updatedCoffee = {...coffeeToDecrement, quantity: coffeeToDecrement.quantity-1};
    dispatch(a.addCoffee(updatedCoffee));
  }

  const handleRefillingCoffeeQuantity = (id) => {
    const coffeeToDecrement = props.masterCoffeeList[id];
    const updatedCoffee = {...coffeeToDecrement, quantity: 20};
    dispatch(a.addCoffee(updatedCoffee));
  }

  function renderBody() {
    if(props.showDetailsPage) {
      return (
        <React.Fragment>
          <BrewDetails 
            image={props.currentCoffee.image}
            name={props.currentCoffee.name}
            description={props.currentCoffee.description}
            handleBackToMainPage={handleBackToMainPage}/>
        </React.Fragment>
      )
    } else {
      const sortedCoffees = Object.values(props.masterCoffeeList).sort(function(a, b) {
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
                handleShowCoffeeDetails={handleShowCoffeeDetails}
                handleDecrementingCoffeeQuantity={handleDecrementingCoffeeQuantity}
                handleRefillingCoffeeQuantity={handleRefillingCoffeeQuantity}
                key={index} />
            ))}
          </div>
          <NewCoffeeForm onNewBrewCreation={handleNewBrewCreation}/>
        </React.Fragment>
      )
    }
  }

  return (
    <div className="Body">
      {renderBody()}
    </div>
  )
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