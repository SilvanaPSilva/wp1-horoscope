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
  constructor(private membersService: Members) { }

  //CHATGPT
  isValidDate(dateString: string): boolean {
    const parts = dateString.split('/');

    if (parts.length !== 3) {
      return false;
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const year = Number(parts[2]);

    const date = new Date(year, month, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    );
  }

  //Function to call the addMembers method from service/members/members. 
  addMember() {
    //ChatGPT
    if (!this.isValidDate(this.member.birthday)) {
      alert('Invalid birthday. Please use a real date in DD/MM/YYYY format.');
      return;
    }

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
