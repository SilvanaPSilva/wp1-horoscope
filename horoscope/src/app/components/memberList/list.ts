import { Component, OnInit, signal } from '@angular/core';
import { Members } from '../../services/members/members';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})

export class List implements OnInit {

  // Array to store the list of members
  members = signal<any[]>([]);

  // Inject the Members service to fetch member data
  constructor(private membersService: Members) {}

  //Initialize the component and fetch the members when the component is loaded
  ngOnInit(): void {
    this.getMembers();
  };

  //Method (from Service/Members) to fetch the list of members and store it in the members array
  getMembers() {
    this.membersService.getMembers().subscribe((data: any) => {
      this.members.set(data);
      console.log(this.members());
    });
  }

  deleteMember(id: string){
    this.membersService.deleteMember(id).subscribe((response) => {
      
      window.location.reload();

      console.log(response);

      alert('Member deleted successfully!');

      this.getMembers();
    });
  }
}
