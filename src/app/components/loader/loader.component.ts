import { Component } from "@angular/core";

@Component({
  selector: "ts-loader",
  template: `<div class="spin"></div>
    <span>Loading...</span>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        margin: 0.75rem;
      }

      .spin {
        display: inline-block;
        width: 65px;
        aspect-ratio: 1;
        border: 3px solid #eee;
        border-top-color: #212121;
        border-radius: 50%;
        animation: spin 1s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        -webkit-animation: spin 1s cubic-bezier(0.76, 0, 0.24, 1) infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @-webkit-keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `
  ]
})
export class LoaderComponent {
  constructor() {}
}
