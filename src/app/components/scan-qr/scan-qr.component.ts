import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.css'],
})
export class ScanQrComponent implements OnInit {
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string;
  showButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event: string) {
    this.showButton = true;
    this.results = event;
  }

  selectCamera(cameraLabel: string) {
    this.cameras.forEach((camera) => {
      if (camera.label.includes(cameraLabel)) {
        this.myDevice = camera;
        this.scannerEnabled = true;
      }
    });
  }
  reset() {
    this.results = null;
    this.showButton = false;
  }
}
