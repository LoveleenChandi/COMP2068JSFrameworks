import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  studentForm: any = {};
  editing: boolean = false;
  showForm: boolean = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((data: any) => {
      this.students = data;
    });
  }

  createStudent() {
    this.showForm = true;
    this.editing = false;
    this.studentForm = {};
  }

  editStudent(student: any) {
    this.showForm = true;
    this.editing = true;
    this.studentForm = { ...student };
  }

  submitForm() {
    if (this.editing) {
      this.studentService.updateStudent(this.studentForm).subscribe(() => {
        this.getStudents();
        this.resetForm();
      });
    } else {
      this.studentService.createStudent(this.studentForm).subscribe(() => {
        this.getStudents();
        this.resetForm();
      });
    }
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }

  resetForm() {
    this.showForm = false;
    this.studentForm = {};
    this.editing = false;
  }
}
