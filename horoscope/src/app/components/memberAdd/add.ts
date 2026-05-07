import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Members } from '../../services/members/members';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})

export class Add {

  //Object to hold the member data from the form
  member = {
    name: '',
    birthday: '',
    sign: ''
  }

  //Inject the Members service to use its methods for adding members to the backend API
  constructor(private membersService: Members) {}

  //Function to call the addMembers method from service/members/members. 
  addMember() {
    //Send the member data to the backend API using the addMembers. | Subscribe wait for the response from the backend API.
    this.membersService.addMember(this.member).subscribe((response) => {
      
      console.log(response);

      alert('Member added successfully!');

      window.location.reload();

    })

    //Reset the member data after adding a member to the backend API
    this.member = {
      name: '',
      birthday: '',
      sign: ''
    };
  }
}
