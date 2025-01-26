export interface Mentor {
  id: string;
  name: string;
  department: string;
  email: string;
  designation: string;
  specialization: string;
  assignedStudents: number;
}

export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  department: string;
  year: number;
  semester: number;
  email: string;
  mentorId: string;
}

export interface MeetingRecord {
  id: string;
  date: string;
  studentId: string;
  mentorId: string;
  topics: string[];
  notes: string;
  actionItems: string[];
  nextMeetingDate?: string;
}

export interface AcademicProgress {
  id: string;
  studentId: string;
  semester: number;
  cgpa: number;
  attendance: number;
  subjects: {
    name: string;
    grade: string;
    attendance: number;
  }[];
}