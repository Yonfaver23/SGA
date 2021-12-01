import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  fecha: string;
  constructor() {
    var f = new Date();
    var _fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    this.fecha = _fecha;
  }

  ngOnInit(): void {}
}
