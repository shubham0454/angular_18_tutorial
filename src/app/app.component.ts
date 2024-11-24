import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'angular_18_tutorial';

  @HostListener('window:scroll')
  onScroll() {
    console.log("Scrolling")
  }
  @HostListener('contextmenu')
  orRightClick(event: any) {
   // event.preventDefault();
  }
  ngAfterViewInit() {
    // You can manipulate the DOM here after view initialization
    const element = document.querySelector('.dynamic-element');
    if (element) {
      element.textContent = 'DOM manipulated using document.querySelector!';
    }
  }
  changeElement(){

    const element = document.querySelector('.dynamic-elements');
    if(element){
      element.setAttribute('style','color:red; font-size:25px;');
    }
  }


}
