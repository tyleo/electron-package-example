import { AsyncRequiredFile, RegularRequiredFile, Stable } from "Lib";
import { DynamicRequirePath } from "./DynamicRequirePath";
import { Req } from "Req";

console.log(RegularRequiredFile);
console.log(Req(DynamicRequirePath.moduleName)[DynamicRequirePath.exportName]);
console.log(Stable);
AsyncRequiredFile().then(r => console.log(r.AsyncRequiredFile));
