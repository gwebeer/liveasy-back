const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'LivEasy API Documentation',
    description: 'This is the API documentation about LivEasy-BackEnd',
  },
  host: 'localhost:4000',
  schemes: ['http'],
  definitions: {
    CalendarItemSchema: {
      $user: 'ObjectId()',
      $service: 'ObjectId()',
      $initialDate: "2023-07-21",
      finalDate: "2023-08-21",
      $repeat: true,
      repeatEvery: 30 
    },
    DashboardSchema: {
      $process: 'ObjectId()',
      $user: 'ObjectId()'
    },
    DefaultListSchema: {
      $option: "Item",
      $title: "Sofá",
      category: "Móveis",
      convenient: "Sala"
    },
    ItemSchema: {
      $title: "Sofá",
      $priority: "Média",
      $category: "Móveis",
      $convenient: "Sala",
      $value: 2500.00,
      $bought: false,
      $process: 'ObjectId()'
    },
    OpinionAboutPlaceSchema: {
      $place: 'ObjectId()',
      $user: 'ObjectId()',
      $pros: ["Lugar muito bom de morar", "Tem posto de combustível perto"],
      $cons: ["Pega pouco sol", "Cheiro de mofo"]
    },
    PlaceSchema: {
      $name: "Edifício Non Facile",
      $address: "Rua dos Desafios, 352",
      $zipCode: "70000-600",
      $neighborhood: "Promessas",
      $condominiumValue: 1200.00
    },
    PlanningCostItemSchema: {
      $process: 'ObjectId()',
      $title: "Aluguel",
      $value: 850.00
    },
    ProcessSchema: {
      $user: 'ObjectId()',
      $step: "Planejamento",
      $status: "Em progresso",
      monthly_income: 2652.85,
      special_budget: 8500.00,
      moving_date: "2024-02-25"
    },
    ServiceSchema: {
      $process: 'ObjectId()',
      $title: "Instalação de Internet",
      $value: 120.00
    },
    UserSchema: {
      $name: "Irineu de Souza",
      $email: "irineu@naosabe.com",
      $birthDate: "2001-01-14",
      $password: "Minh@S3nh4",
      $type: "customer",
      $phone: "41999999999"
    }
  }
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = ['./src/routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);