// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CONSULTAR_CONDUCTORES: 'http://localhost:2004/Cidenet/conductor/consultar',

  REGISTRAR_CARRO: 'http://localhost:2004/Cidenet/carro/registrar',
  CONSULTAR_CARROS: 'http://localhost:2004/Cidenet/carro/consultar',
  CONSULTAR_CARROS_PLACAMARCA: 'http://localhost:2004/Cidenet/carro/consultarPlacaMarca/',
  ELIMINAR_CARRO: 'http://localhost:2004/Cidenet/carro/eliminar/',

  REGISTRAR_DESPLAZAMIENTO: 'http://localhost:2004/Cidenet/desplazamiento/registrar',
  CONSULTAR_DESPLAZAMIENTO: 'http://localhost:2004/Cidenet/desplazamiento/consultar',
  ELIMINAR_DESPLAZAMIENTO: 'http://localhost:2004/Cidenet/desplazamiento/eliminar/',
  CONSULTAR_DESPLAZAMIENTO_PLACA: 'http://localhost:2004/Cidenet/desplazamiento/consultarPlaca/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
