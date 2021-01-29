import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mydata = [];
  onSelectFile(event) {
    console.log(event);
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type.indexOf("image") > -1) {
            this.mydata.push({
              url: e.target.result,
              type: "img"
            });
          } else if (file.type.indexOf("video") > -1) {
            this.mydata.push({
              url: e.target.result,
              type: "video"
            });
          }
        };
        reader.readAsDataURL(file);
      }
    }
    event.target.value = "";
  }
}
