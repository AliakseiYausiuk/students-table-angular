import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

import { SideBarComponent } from "./side-bar/side-bar.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "students-details-root",
	standalone: true,
	imports: [
		RouterOutlet,
		FormsModule,
		ReactiveFormsModule,
		SideBarComponent,
		CommonModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "students-details";

	sidebarExpanded: boolean = true;

	constructor() {}
}
