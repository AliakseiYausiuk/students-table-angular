import { Routes } from "@angular/router";
import { StudentRecordsComponent } from "./student-records/student-records.component";
import { LandingComponent } from "./landing/landing.component";

export const routes: Routes = [
	{ path: "landing", component: LandingComponent },
	{ path: "students", component: StudentRecordsComponent },
];
