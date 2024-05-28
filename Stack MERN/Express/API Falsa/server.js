const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Usuario {
  constructor() {
    this.idUser = faker.string.uuid();
    this.name = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.tel = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this.idEmpresa = faker.string.uuid();
    this.name = faker.company.name();
    this.direccion = {
      calle: faker.location.direction(),
      ciudad: faker.location.city(),
      codigoPostal: faker.location.zipCode(),
      pais: faker.location.country(),
    };
  }
}

app.get("/api/users/new", (req, res) => {
  const user = new Usuario();

  return res.status(200).json(user);
});

app.get("/api/companies/new", (req, res) => {
  const company = new Empresa();

  return res.status(200).json(company);
});

app.get("/api/user/company", (req, res) => {
  const user = new Usuario();
  const company = new Empresa();

  const userCompany = {
    user,
    company,
  };

  return res.status(200).json(userCompany);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listen ${PORT} port`);
});
