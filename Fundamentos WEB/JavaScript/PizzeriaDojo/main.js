const pizzaOven = (estilo, tipo, ingredientes) => {
  const pizza = {
    estilo,
    tipo,
    ingredientes,
  };

  return pizza;
};

const pizzaTradicional = pizzaOven("Estilo Chicago", "Tradicional", [
  "mozzarella",
  "pepperoni",
  "salchica",
]);

const pizzaMarinara = pizzaOven("Lanzada a Mano", "Marinara", [
  "champiñones",
  "aceitunas",
  "cebollas",
]);

const pizzaAlexis = pizzaOven("Al Horno", "Extra Queso", [
  "queso cheddar",
  "aceitunas",
  "pepperoni",
  "muzarella"
]);