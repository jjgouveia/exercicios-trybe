const order = {
	name: "Rafael Andrade",
	phoneNumber: "11-98763-1416",
	address: {
		street: "Rua das Flores",
		number: "389",
		apartment: "701",
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
			},
		},
		drinks: {
			coke: {
				type: "Coca-Cola Zero",
				price: 10,
				amount: 1,
			},
		},
		delivery: {
			deliveryPerson: "Ana Silveira",
			price: 5,
		},
	},
	payment: {
		total: 60,
	},
};

const customerInfo = (order) => {
	// Adicione abaixo as informações necessárias.
	return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP ${order.address.apartment}.`;
};

customerInfo(order);

const orderModifier = (order) => {
	// Adicione abaixo as informações necessárias.
	order.name = "Luiz Silva";
	const pizzas = Object.keys(order.order.pizza);
	order.payment.total = 50;
	return `Olá, ${order.name}. O total do seu pedido de: ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`;
};

console.log(orderModifier(order));
