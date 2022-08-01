import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: ['./donut-graph.component.scss']
})
export class DonutGraphComponent implements AfterViewInit, OnChanges {

  @Input() title !: string;
  @Input() value !: number;

  @ViewChild("donutContainer") div !: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeGraphPercentage();
  }

  ngAfterViewInit(): void {
    this.changeGraphPercentage();
  }

  private changeGraphPercentage() : void {

    const finishedPart = this.percentageToDegrees(this.value);

    const styleValue = `conic-gradient( #00095b 0deg ${finishedPart}deg, #ababab ${finishedPart}deg 0deg)`;
    
    this.renderer.setStyle(this.div.nativeElement, 'background', styleValue);
  }

  private percentageToDegrees(percentage: number): number {
    return (360 * percentage / 100);
  }
}
