import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
selector: 'app-authors-detail-modal',
templateUrl: './authors-detail-modal.page.html',
styleUrls: ['./authors-detail-modal.page.scss'],
})
export class AuthorsDetailModalPage implements OnInit {

filterAuthors: any;

constructor(
  private navParams: NavParams,
  private modalController: ModalController,
  private libraryService: LibraryService ) { }

ngOnInit() {
  this.getAuthorsData();
}
getAuthorsData(){
  this.filterAuthors = this.navParams.get("authors")
  console.log(this.filterAuthors)

}
closeModal(){
  this.modalController.dismiss();
 }
}

