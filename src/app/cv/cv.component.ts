import { Component, OnInit } from '@angular/core'

import FileSaver from 'file-saver'

import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  
  faCoffe = faCoffee
  faAddressCard = faAddressCard
  faUniversity = faUniversity
  faPhone = faPhone
  faEnvelope = faEnvelope
  faCompass = faCompass
  faLaptopCode = faLaptopCode
  faFile = faFile
  faFilePdf = faFilePdf


  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(){
    const pdfUrl = './assets/cv.pdf';
    const pdfName = 'cv';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
