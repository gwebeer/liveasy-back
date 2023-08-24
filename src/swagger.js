const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'LivEasy API Documentation',
    description: 'This is the API documentation about LivEasy-BackEnd',
  },
  host: 'localhost:4000',
  schemes: ['http'],
  definitions: {
    CalendarReminderSchema: {
      $user: 'ObjectId()',
      $planningCostItem: 'ObjectId()',
      $initialDate: "2023-07-21",
      finalDate: "2023-08-21",
      $repeat: true,
      repeatEvery: 30 
    },
    ChoosedPropertySchema: {
      $user: 'ObjectId()',
      $property: 'ObjectId()',
      $reason: 'Perfeito para mim, pois moro sozinho.'
    },
    CustomItemSchema: {
      $process: 'ObjectId()',
      $convenient: "Sala",
      $title: "Sofá",
      $priority: "Média",
      $value: 2500.00,
      $bought: false,
      valuePaid: 2490.90,
      boughtDate: '2022-09-12'
    },
    GiveUpPropertySchema: {
      $user: 'ObjectId()',
      $property: 'ObjectId()',
      $reason: 'Muito caro para alugar'
    },
    IdealPropertySchema: {
      $user: 'ObjectId()',
      $peopleLiving: 1,
      $type: 'Apartamento',
      $rooms: 2,
      $bathrooms: 2,
      $parkingSpaces: 1,
      $infraestructure: true,
      $furnished: true,
      $priceRange: 1000.00,
      $isForRent: true
    },
    PlanningCostItemSchema: {
      $process: 'ObjectId()',
      $title: "Aluguel",
      $value: 850.00
    },
    ProcessSchema: {
      $user: 'ObjectId()',
      $step: "Planejamento",
      $status: "Iniciando"
    },
    PropertyItemSchema: {
      $property: 'ObjectId()',
      $title: "Mesa de Jantar",
      $convenient: "Sala de Jantar" 
    },
    PropertySchema: {
      $name: "Edifício Non Facile",
      $address: "Rua dos Desafios, 352",
      $zipCode: "70000-600",
      $neighborhood: "Promessas",
      $type: "Apartamento",
      $rooms: 3,
      $bathrooms: 2,
      $parkingSpaces: 1,
      $infraestructure: true,
      $furnished: false,
      $isForRent: true,
      $value: 1200.00
    },
    SuggestionItemSchema: {
      $type: "Item",
      $title: "Sofá",
      convenient: "Sala"
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