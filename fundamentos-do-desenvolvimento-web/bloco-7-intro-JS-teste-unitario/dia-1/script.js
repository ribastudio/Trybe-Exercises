const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryName = order.order.delivery.deliveryPerson;
  const nome = order.name;
  const phoneNumber = order.phoneNumber;
  const address = Object.values(order.address);

  return `Olá ${deliveryName}, entrega para: ${nome}, Telefone ${phoneNumber}, ${address[0]}, Nº ${address}.`
}

console.log(customerInfo(order));


customerInfo(order);

const orderModifier = (order) => {
  let newOrderName = order.name = "Luiz Silva";
  const discount = 10;
  const disc = (order.pizza);
  const payment = order.payment;
  const pizza = order.order.pizza;
  const drinks = order.order.drinks;
  const listPizza = Object.keys(pizza);
  const listDrink = Object.keys(drinks);
  const paymentTotal = (payment.total = (pizza.marguerita.price + pizza.pepperoni.price + drinks.coke.price + order.order.delivery.price - discount));

  return `Olá ${newOrderName}, o total do seu pedido de ${listPizza[0]}, ${listPizza[1]} e ${drinks.coke.type} é R$ ${paymentTotal}.`;
}

console.log(orderModifier(order));

orderModifier(order);