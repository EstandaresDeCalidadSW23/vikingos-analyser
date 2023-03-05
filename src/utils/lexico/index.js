import { PALABRAS_RESERVADAS, PALABRAS_RESERVADAS_CONDICION } from "../index";

const lexico = () => {
  const var1 = () => {
    let condicion = "";
    for (let a of text) {
      condicion += a;
      if (PALABRAS_RESERVADAS_CONDICION[condicion]) {
        return palabras_reservadas_condicion[condicion];
      }
    }
  };

  const var2 = () => {
    let condicion = "";
    let condicion2 = "";
    let context = false;
    for (let a of text) {
      if (a === "(") {
        count++;
        context = true;
      }
      if (context) {
        if (a === "(") continue;
        if (a === ")") continue;
        condicion += a;
        if (a === ")") {
          break;
        }
      }
    }
    for (let e in Object.keys(palabras_reservadas)) {
      console.log(condicion);
      console.log(palabras_reservadas[e]);
      if (condicion.includes(palabras_reservadas[e])) {
        condicion2 = palabras_reservadas[e];
      }
    }
    console.log(condicion2);
    return condicion2;
  };
};

export default lexico;
