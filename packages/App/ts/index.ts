import { AsyncRequiredFile, RegularRequiredFile, Stable } from "Lib";

console.log(RegularRequiredFile);
console.log(require("Lib")["DynamicallyRequiredFile"]);
console.log(Stable);
AsyncRequiredFile().then(r => console.log(r.AsyncRequiredFile));
