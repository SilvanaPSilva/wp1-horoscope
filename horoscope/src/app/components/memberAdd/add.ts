import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MembersService } from '../../services/members/members';
import { InterfaceMember } from '../../models/interfaceMember';


@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})

export class AddComponent {

  //Reset the member data after adding a member to the backend API  
  resetMember(): InterfaceMember {
    return{
    name: '',
    birthday: '',
    sign: ''
    };
  }

  member: InterfaceMember = this.resetMember();   

  //Inject the Members service to use its methods for adding members to the backend API
  constructor(private membersService: MembersService) {}

  //CHATGPT
  isValidDate(dateString: string): boolean {
    const parts = dateString.split('/');

    if (parts.length !== 2) {
      return false;
    }

    const day = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    
    const date = new Date(2026, month, day);

    return (      
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

      //window.location.reload();

    })

    //this.member = this.resetMember();

  }
}
