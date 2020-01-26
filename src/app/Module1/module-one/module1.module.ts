import { NgModule } from "@angular/core";
import { ModuleOneComponent } from "./module-one.component";


@NgModule({
    declarations: [ModuleOneComponent],
    exports:[ModuleOneComponent] // Deixe esse modulo exportavel para quem quiser pega
                                // Ex. neste caso para o App.Module importar  ModuleOne 
})
export class ModuleModule{

}