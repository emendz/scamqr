import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'qr-reader';
  public cameras: MediaDeviceInfo[] = [];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled = false;
  public results: string[] = [];
  ngOnInit(): void {}

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    this.cameras = cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event: string) {
    console.log(event);
    this.results.unshift(event);
  }
  selectCamera(cameraLabel: string) {
    // this.cameras.forEach((camera) => {
    //   if (camera.label.includes(cameraLabel)) {
    //     this.myDevice = camera;
    //     console.log(camera.label);
    //     this.scannerEnabled = true;
    //   }
    // });

    navigator.mediaDevices.enumerateDevices().then((devices) => {
      for (var i = 0; i < devices.length; i++) {
        var device = devices[i];
        if (device.kind === 'videoinput') {
          console.log(device);
          this.myDevice = devices[1];
          this.scannerEnabled = true;
        }
      }
      console.log(this.myDevice);
    });
  }
}
