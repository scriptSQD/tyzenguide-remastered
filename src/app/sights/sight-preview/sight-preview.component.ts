import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sight-preview',
  templateUrl: './sight-preview.component.html',
  styleUrls: ['./sight-preview.component.scss']
})
export class SightPreviewComponent implements OnInit {

  constructor (private route: ActivatedRoute,
              private router: Router) {};

  @Input('tyzen-title') title!: string;

  @Input('tyzen-description') desc!: string;

  @Input('tyzen-thumbnail-list') thumbList!: string[];

  @Input('tyzen-router-link') routerLink!: string;

  @Input('tyzen-router-sight-param') routerParam!: string;

  ngOnInit(): void {};

}
