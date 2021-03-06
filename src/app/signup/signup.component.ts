import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UserRepository } from '../model/user.repository';
import { User } from '../model/user.model';
import {ImageuploadService} from '../imageUpload.service';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { DialogService } from '../dialog.service';

@Component({
  	selector: 'app-signup',
  	templateUrl: './signup.component.html',
  	styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
	  private user: User;
	  private imageURL = null;
	  isLoading=false;
   

	  public dropped(event: UploadEvent) {
		  this.isLoading = true;
		  for (const file of event.files) {
			  file.fileEntry.file(info => {
				console.log(info);
				this.imageService.sendFile(info).subscribe(res => {
				  console.log(res);
				  this.imageURL=res;
				  this.isLoading = false;	
				  this.cdRef.detectChanges();				   
			  });;
		  });
		  }    
	} 
	  constructor(private userRepository: UserRepository,  private imageService: ImageuploadService, private dialog: DialogService,
		private cdRef:ChangeDetectorRef) { }
 	onSubmit(form: NgForm){
		var data = form.form.controls;
		this.user = new User(data.email.value, data.password.value, data.name.value);
		this.user.image = this.imageURL;
    	this.userRepository.createUser(this.user).subscribe(data=> {
			this.dialog.openNotificationDialog(data["text"], data["status"]);
    	});
  	}
}
