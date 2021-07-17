import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
//import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NbThemeModule, NbLayoutModule, NbCardModule,
  NbSidebarModule, NbUserModule, NbActionsModule,
  NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbDatepickerModule,  } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NivelNewComponent } from './nivel/components/forms/nivel-new/nivel-new.component';
import { NivelEditComponent } from './nivel/components/forms/nivel-edit/nivel-edit.component';
import { NivelListComponent } from './nivel/components/list/nivel-list/nivel-list.component';
import { NivelComponent } from './nivel/container/nivel/nivel.component';
import { NivelService } from '../../providers/nivel/nivel.service';
import { NivelGradosComponent } from './nivel/components/forms/nivel-grados/nivel-grados.component';
import { GradoNewComponent } from './grado/components/forms/grado-new/grado-new.component';
import { GradoEditComponent } from './grado/components/forms/grado-edit/grado-edit.component';
import { GradoListComponent } from './grado/components/list/grado-list/grado-list.component';
import { GradoComponent } from './grado/container/grado/grado.component';
import { SeccionNewComponent } from './seccion/components/forms/seccion-new/seccion-new.component';
import { SeccionEditComponent } from './seccion/components/forms/seccion-edit/seccion-edit.component';
import { SeccionListComponent } from './seccion/components/list/seccion-list/seccion-list.component';
import { SeccionComponent } from './seccion/container/seccion/seccion.component';
import { AreaNewComponent } from './area/components/forms/area-new/area-new.component';
import { AreaEditComponent } from './area/components/forms/area-edit/area-edit.component';
import { AreaListComponent } from './area/components/list/area-list/area-list.component';
import { AreaComponent } from './area/container/area/area.component';
import { CursoNewComponent } from './curso/components/forms/curso-new/curso-new.component';
import { CursoEditComponent } from './curso/components/forms/curso-edit/curso-edit.component';
import { CursoListComponent } from './curso/components/list/curso-list/curso-list.component';
import { CursoComponent } from './curso/container/curso/curso.component';
import { AreaCursosComponent } from './area/components/forms/area-cursos/area-cursos.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    //RouterModule.forChild(PagesRoutingModule),
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
       
    ECommerceModule,
    MiscellaneousModule,
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot({ closeOnEsc: false, closeOnBackdropClick: false }),
    NbUserModule,
    NbActionsModule,
    NbContextMenuModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbSpinnerModule,
    NbDatepickerModule.forRoot(),
    

  ],
  declarations: [
    PagesComponent,
    NivelNewComponent,
    NivelEditComponent,
    NivelListComponent,
    NivelComponent,
    NivelGradosComponent,
    GradoNewComponent,
    GradoEditComponent,
    GradoListComponent,
    GradoComponent,
    SeccionNewComponent,
    SeccionEditComponent,
    SeccionListComponent,
    SeccionComponent,
    AreaNewComponent,
    AreaEditComponent,
    AreaListComponent,
    AreaComponent,
    CursoNewComponent,
    CursoEditComponent,
    CursoListComponent,
    CursoComponent,
    AreaCursosComponent,
    

    //LoginComponent,
  ], providers: [NivelService,]
})
export class PagesModule {
}


