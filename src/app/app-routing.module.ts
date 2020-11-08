import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guard/auth-guard.service';

import { HomeComponent } from './pages/home/home.component';
//Staff
import { ProfileComponent } from './pages/staff/profile/profile.component';
import { AddstaffComponent } from './pages/staff/addstaff/addstaff.component';
import { DocumentsComponent } from './pages/staff/documents/documents.component';
import { EmailComponent } from './pages/staff/email/email.component';
import { PhotoComponent } from './pages/staff/photo/photo.component';
import { CommunicationlogComponent } from './pages/staff/communicationlog/communicationlog.component';
import { ManagementhomeComponent } from './pages/staff/managementhome/managementhome.component';
import { ProfessionaldevelopmentComponent } from './pages/staff/professionaldevelopment/professionaldevelopment.component';
//Admin
import { StudentcreateComponent } from './pages/admin/studentcreate/studentcreate.component';
import { StudentListComponent } from './pages/admin/student-list/student-list.component';
import { StudentupdateComponent } from './pages/admin/studentupdate/studentupdate.component';
import { StudentviewComponent } from './pages/admin/studentview/studentview.component';
import { AgentdocumentchecklistComponent } from './pages/admin/agentdocumentchecklist/agentdocumentchecklist.component';
import { EditagentstatusComponent } from './pages/admin/editagentstatus/editagentstatus.component';
import { AdditionalemailsetupComponent } from './pages/admin/additionalemailsetup/additionalemailsetup.component';
import { AssessmentduedateComponent } from './pages/admin/assessmentduedate/assessmentduedate.component';
import { AddcontactComponent } from './pages/admin/addcontact/addcontact.component';
import { CertificateidformatComponent } from './pages/admin/certificateidformat/certificateidformat.component';
import { ChecklistsetupComponent } from './pages/admin/checklistsetup/checklistsetup.component';
import { OfferdocumentchecklistComponent } from './pages/admin/offerdocumentchecklist/offerdocumentchecklist.component';
import { OverseasstudenthealthComponent } from './pages/admin/overseasstudenthealth/overseasstudenthealth.component';
import { CoursecalendertypeComponent } from './pages/admin/coursecalendertype/coursecalendertype.component';
import { CoursesiteComponent } from './pages/admin/coursesite/coursesite.component';
import { CreatepermissiongroupComponent } from './pages/admin/createpermissiongroup/createpermissiongroup.component';
import { CustomfieldsComponent } from './pages/admin/customfields/customfields.component';
import { EditlanguageinfoComponent } from './pages/admin/editlanguageinfo/editlanguageinfo.component';
import { CollegeinfoComponent } from './pages/admin/collegeinfo/collegeinfo.component';
import { EditcountryNationalityinfoComponent } from './pages/admin/editcountry-nationalityinfo/editcountry-nationalityinfo.component';
import { InventionstrategyComponent } from './pages/admin/inventionstrategy/inventionstrategy.component';
import { ManagecontractscheduleComponent } from './pages/admin/managecontractschedule/managecontractschedule.component';
import { ManageemployeeComponent } from './pages/admin/manageemployee/manageemployee.component';
import { ManagesemesterdivisionComponent } from './pages/admin/managesemesterdivision/managesemesterdivision.component';
import { ManagestudyperiodsComponent } from './pages/admin/managestudyperiods/managestudyperiods.component';
import { ManagesystemreportComponent } from './pages/admin/managesystemreport/managesystemreport.component';
import { PagepermissionsetupComponent } from './pages/admin/pagepermissionsetup/pagepermissionsetup.component';
import { ViewdatabaseComponent } from './pages/admin/viewdatabase/viewdatabase.component';
import { SystemfieldsetupComponent } from './pages/admin/systemfieldsetup/systemfieldsetup.component';
import { SetuserpermissionComponent } from './pages/admin/setuserpermission/setuserpermission.component';
import { ViewfielsfolderComponent } from './pages/admin/viewfielsfolder/viewfielsfolder.component';
import { PrismsdatavalidationComponent } from './pages/admin/prismsdatavalidation/prismsdatavalidation.component';
import { RegisteractivitydetailComponent } from './pages/admin/registeractivitydetail/registeractivitydetail.component';
import { ResultgradeComponent } from './pages/admin/resultgrade/resultgrade.component';
import { ServicedetailsComponent } from './pages/admin/servicedetails/servicedetails.component';
import { ServicefacilitysetupComponent } from './pages/admin/servicefacilitysetup/servicefacilitysetup.component';
import { ServiceproviderComponent } from './pages/admin/serviceprovider/serviceprovider.component';
import { UpdatereportComponent } from './pages/admin/updatereport/updatereport.component';

//StudentEnrolment
import { StudentenrolmentComponent } from './pages/admin/studentenrolment/studentenrolment.component';
import { CreateStudentenrolmentComponent } from './pages/admin/create-studentenrolment/create-studentenrolment.component';
import { ViewStudentenrolmentComponent } from './pages/admin/view-studentenrolment/view-studentenrolment.component';
import { EditStudentenrolmentComponent } from './pages/admin/edit-studentenrolment/edit-studentenrolment.component';


//Venue
import { ManagevenueComponent } from './pages/admin/managevenue/managevenue.component';
import { CreateVenueComponent } from './pages/admin/create-venue/create-venue.component';
import { ViewVenueComponent } from './pages/admin/view-venue/view-venue.component';
import { EditVenueComponent } from './pages/admin/edit-venue/edit-venue.component';


//VenueRoom
import { ManageroomComponent } from './pages/admin/manageroom/manageroom.component';
import { CreateRoomComponent } from './pages/admin/create-room/create-room.component';
import { ViewRoomComponent } from './pages/admin/view-room/view-room.component';
import { EditRoomComponent } from './pages/admin/edit-room/edit-room.component';


//Role
import { RolesComponent } from './pages/admin/roles/roles.component';
import { CreateRoleComponent } from './pages/admin/create-role/create-role.component';
import { ViewRoleComponent } from './pages/admin/view-role/view-role.component';
import { EditRoleComponent } from './pages/admin/edit-role/edit-role.component';

//Course-Unit
import { CourseUnitComponent } from './pages/course/course-unit/course-unit.component';
import { CreateCourseUnitComponent } from './pages/course/create-course-unit/create-course-unit.component';
import { EditCourseUnitComponent } from './pages/course/edit-course-unit/edit-course-unit.component';
import { ViewCourseUnitComponent } from './pages/course/view-course-unit/view-course-unit.component';




//Compliance
import { AddupdatestudentComponent } from './pages/compliance/addupdatestudent/addupdatestudent.component';
import { AttendancesummaryComponent } from './pages/compliance/attendancesummary/attendancesummary.component';
import { BulkaddupdateComponent } from './pages/compliance/bulkaddupdate/bulkaddupdate.component';
import { DailyattendancerollComponent } from './pages/compliance/dailyattendanceroll/dailyattendanceroll.component';
//Teacher
import { ManageteacherComponent } from './pages/teacher/manageteacher/manageteacher.component';
import { TeachermatricComponent } from './pages/teacher/teachermatric/teachermatric.component';
import { AddteacherComponent } from './pages/teacher/addteacher/addteacher.component';
//Course
import { AddcoursetemplateComponent } from './pages/course/addcoursetemplate/addcoursetemplate.component';
import { AddholidaysComponent } from './pages/course/addholidays/addholidays.component';
import { AddnewsubjectComponent } from './pages/course/addnewsubject/addnewsubject.component';
import { AddsubjectComponent } from './pages/course/addsubject/addsubject.component';
import { CoursesComponent } from './pages/course/courses/courses.component';
import { IntakedatesComponent } from './pages/course/intakedates/intakedates.component';
import { ManagecoursestructureComponent } from './pages/course/managecoursestructure/managecoursestructure.component';
import { PromotionsetComponent } from './pages/course/promotionset/promotionset.component';
import { UpdatesubjectComponent } from './pages/course/updatesubject/updatesubject.component';
import { PromotionactivationComponent } from './pages/course/promotionactivation/promotionactivation.component';
import { NationalitygroupComponent } from './pages/course/nationalitygroup/nationalitygroup.component';
import { ManageunitComponent } from './pages/course/manageunit/manageunit.component';
import { ManagesubjectComponent } from './pages/course/managesubject/managesubject.component';
import { ManageComponent } from './pages/course/manage/manage.component';
import { ManagecourseinitialComponent } from './pages/course/managecourseinitial/managecourseinitial.component';
import { CreateCourseComponent } from './pages/course/create-course/create-course.component';
import { ViewCourseComponent } from './pages/course/view-course/view-course.component';
import { EditCourseComponent } from './pages/course/edit-course/edit-course.component';



//student-agent
import { StudentapplicationComponent } from './pages/studentapplication/studentapplication.component';
import { AgentregistrationComponent } from './pages/agentregistration/agentregistration.component';
import { AgentregComponent } from './pages/agentreg/agentreg.component';



//timetable
import { ViewtemplateComponent } from './pages/timetable/viewtemplate/viewtemplate.component';
import { PrintattendlistComponent } from './pages/timetable/printattendlist/printattendlist.component';
import { AsignreplaceteacherComponent } from './pages/timetable/asignreplaceteacher/asignreplaceteacher.component';
import { ClasscapacityreportComponent } from './pages/timetable/classcapacityreport/classcapacityreport.component';
import { CreateclasstimetableComponent } from './pages/timetable/createclasstimetable/createclasstimetable.component';
import { GenerateclassattendanceComponent } from './pages/timetable/generateclassattendance/generateclassattendance.component';
import { ManageclasstimetableComponent } from './pages/timetable/manageclasstimetable/manageclasstimetable.component';
import { TimetablereportsComponent } from './pages/timetable/timetablereports/timetablereports.component';

import { ScheduleComponent } from './pages/timetable/schedule/schedule.component';
import { CreateScheduleComponent } from './pages/timetable/create-schedule/create-schedule.component';
import { ViewScheduleComponent } from './pages/timetable/view-schedule/view-schedule.component';
import { EditScheduleComponent } from './pages/timetable/edit-schedule/edit-schedule.component';


//profile
import { EditprofileComponent } from './pages/profile/editprofile/editprofile.component';
import { ChangepasswordComponent } from './pages/profile/changepassword/changepassword.component';
import { LeaveinfoComponent } from './pages/profile/leaveinfo/leaveinfo.component';
//users
import { ManageuseraccountComponent } from './pages/users/manageuseraccount/manageuseraccount.component';
import { UseractivityComponent } from './pages/users/useractivity/useractivity.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ViewUsersComponent } from './pages/users/view-users/view-users.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
import { LoginComponent } from './pages/login/login.component';






const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //Staff
  { path: 'staff/profile', component: ProfileComponent, canActivate:[AuthGuardService] },
  { path: 'staff/add-staff', component: AddstaffComponent },
  { path: 'staff/documents', component: DocumentsComponent },
  { path: 'staff/email', component: EmailComponent },
  { path: 'staff/photo', component: PhotoComponent },
  { path: 'staff/communication-log', component: CommunicationlogComponent },
  { path: 'staff/management-home', component: ManagementhomeComponent },
  { path: 'staff/professional-development', component: ProfessionaldevelopmentComponent },
  //Admin
  { path: 'admin/create-student', component: StudentcreateComponent },
  { path: 'admin/student-list', component: StudentListComponent },
  { path: 'admin/edit-student/:id', component: StudentupdateComponent },
  { path: 'admin/view-student/:id', component: StudentviewComponent },
  { path: 'admin/agent-document', component: AgentdocumentchecklistComponent },
  { path: 'admin/edit-agent-status', component: EditagentstatusComponent },
  { path: 'admin/additional-email', component: AdditionalemailsetupComponent },
  { path: 'admin/assessment-due-date', component: AssessmentduedateComponent },
  { path: 'admin/add-contact', component: AddcontactComponent },
  { path: 'admin/certificateid-format', component: CertificateidformatComponent },
  { path: 'admin/checklist-setup', component: ChecklistsetupComponent },
  { path: 'admin/offer-document-checklist', component: OfferdocumentchecklistComponent },
  { path: 'admin/overseas-student-health', component: OverseasstudenthealthComponent },
  { path: 'admin/course-calender-type', component: CoursecalendertypeComponent },
  { path: 'admin/course-site', component: CoursesiteComponent },
  { path: 'admin/create-permission-group', component: CreatepermissiongroupComponent },
  { path: 'admin/custom-fields', component: CustomfieldsComponent },
  { path: 'admin/edit-language-info', component: EditlanguageinfoComponent },
  { path: 'admin/college-info', component: CollegeinfoComponent },
  { path: 'admin/country-nationality-info', component: EditcountryNationalityinfoComponent },
  { path: 'admin/invention-strategy', component: InventionstrategyComponent },
  { path: 'admin/manage-contract-schedule', component: ManagecontractscheduleComponent },
  { path: 'admin/manage-employee', component: ManageemployeeComponent },
  { path: 'admin/manage-semester-division', component: ManagesemesterdivisionComponent },
  { path: 'admin/manage-study-periods', component: ManagestudyperiodsComponent },
  { path: 'admin/manage-system-reports', component: ManagesystemreportComponent },
  { path: 'admin/page-permission-setup', component: PagepermissionsetupComponent },
  { path: 'admin/view-database', component: ViewdatabaseComponent },
  { path: 'admin/system-field-setup', component: SystemfieldsetupComponent },
  { path: 'admin/set-user-permission', component: SetuserpermissionComponent },
  { path: 'admin/view-files-folder', component: ViewfielsfolderComponent },
  { path: 'admin/prisms-data-validation', component: PrismsdatavalidationComponent },
  { path: 'admin/register-activity-detail', component: RegisteractivitydetailComponent },
  { path: 'admin/result-grade', component: ResultgradeComponent },
  { path: 'admin/service-details', component: ServicedetailsComponent },
  { path: 'admin/service-facility-setup', component: ServicefacilitysetupComponent },
  { path: 'admin/service-provider', component: ServiceproviderComponent },
  { path: 'admin/update-report', component: UpdatereportComponent },

  //StudentEnrolment
  { path: 'admin/list-student-enrolment', component: StudentenrolmentComponent },
  { path: 'admin/create-student-enrolment', component: CreateStudentenrolmentComponent },
  { path: 'admin/view-student-enrolment/:id', component: ViewStudentenrolmentComponent },
  { path: 'admin/edit-student-enrolment/:id', component: EditStudentenrolmentComponent },


  //Venue
  { path: 'admin/list-venue', component: ManagevenueComponent },
  { path: 'admin/create-venue', component: CreateVenueComponent },
  { path: 'admin/view-venue/:id', component: ViewVenueComponent },
  { path: 'admin/edit-venue/:id', component: EditVenueComponent },

  
  //VenueRoom
  { path: 'admin/list-venueroom', component: ManageroomComponent },
  { path: 'admin/create-venueroom', component: CreateRoomComponent },
  { path: 'admin/view-venueroom/:id', component: ViewRoomComponent },
  { path: 'admin/edit-venueroom/:id', component: EditRoomComponent },

  
  //Roles
  { path: 'admin/list-roles', component: RolesComponent },
  { path: 'admin/create-role', component: CreateRoleComponent },
  { path: 'admin/view-role/:id', component: ViewRoleComponent },
  { path: 'admin/edit-role/:id', component: EditRoleComponent },

  //Course-Unit
  { path: 'course/list-course-units', component: CourseUnitComponent },
  { path: 'course/create-course-unit', component: CreateCourseUnitComponent },
  { path: 'course/view-course-unit/:id', component: ViewCourseUnitComponent },
  { path: 'course/edit-course-unit/:id', component: EditCourseUnitComponent },


  //Compliance
  { path: 'compliance/add-update-student', component: AddupdatestudentComponent },
  { path: 'compliance/attendance-summary', component: AttendancesummaryComponent },
  { path: 'compliance/bulk-update', component: BulkaddupdateComponent },
  { path: 'compliance/daily-attendance-roll', component: DailyattendancerollComponent },
  //Teacher
  { path: 'teacher/manage-teacher', component: ManageteacherComponent },
  { path: 'teacher/teacher-matric', component: TeachermatricComponent },
  { path: 'teacher/add-teacher', component: AddteacherComponent },
  //Course
  { path: 'course/add-course-template', component: AddcoursetemplateComponent },
  { path: 'course/add-holidays', component: AddholidaysComponent },
  { path: 'course/add-new-subject', component: AddnewsubjectComponent },
  { path: 'course/add-subject', component: AddsubjectComponent },
  { path: 'course/list-courses', component: CoursesComponent },
  { path: 'course/intake-dates', component: IntakedatesComponent },
  { path: 'course/manage-course-structure', component: ManagecoursestructureComponent },
  { path: 'course/promotion-set', component: PromotionsetComponent },
  { path: 'course/update-subject', component: UpdatesubjectComponent },
  { path: 'course/promotion-activation', component: PromotionactivationComponent },
  { path: 'course/nationality-group', component: NationalitygroupComponent },
  { path: 'course/manage-unit', component: ManageunitComponent },
  { path: 'course/manage-subject', component: ManagesubjectComponent },
  { path: 'course/manage', component: ManageComponent },
  { path: 'course/manage-course-initial', component: ManagecourseinitialComponent },
  { path: 'course/create-course', component: CreateCourseComponent },
  { path: 'course/view-course/:id', component: ViewCourseComponent },
  { path: 'course/edit-course/:id', component: EditCourseComponent },


  //student-agent
  { path: 'student-application', component: StudentapplicationComponent },
  { path: 'agent-registration', component: AgentregistrationComponent },
  { path: 'agent-reg', component: AgentregComponent },

  //timetable
  { path: 'timetable/view-template', component: ViewtemplateComponent },
  { path: 'timetable/print-attendance', component: PrintattendlistComponent },
  { path: 'timetable/asign-replace-teacher', component: AsignreplaceteacherComponent },
  { path: 'timetable/class-capacity-report', component: ClasscapacityreportComponent },
  { path: 'timetable/create-class-timetable', component: CreateclasstimetableComponent },
  { path: 'timetable/generate-class-attendance', component: GenerateclassattendanceComponent },
  { path: 'timetable/manage-class-timetable', component: ManageclasstimetableComponent },
  { path: 'timetable/timetable-reports', component: TimetablereportsComponent },

  { path: 'timetable/list-schedule', component: ScheduleComponent },
  { path: 'timetable/create-schedule', component: CreateScheduleComponent },
  { path: 'timetable/view-schedule/:id', component: ViewScheduleComponent },
  { path: 'timetable/edit-schedule/:id', component: EditScheduleComponent },

//profile 
  { path: 'profile/edit-profile', component: EditprofileComponent },
  { path: 'profile/change-password', component: ChangepasswordComponent },
  { path: 'profile/leave-info', component: LeaveinfoComponent },
//users
{ path: 'users/manage-user-account', component: ManageuseraccountComponent },
{ path: 'users/user-activity', component: UseractivityComponent },
{ path: 'users/create-user', component: CreateUserComponent },
{ path: 'users/view-user/:id', component: ViewUsersComponent },
{ path: 'users/edit-user/:id', component: EditUsersComponent },

{ path: 'login', component: LoginComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
