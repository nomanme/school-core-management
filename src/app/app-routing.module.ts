import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard.service';
import { AddcontactComponent } from './pages/admin/addcontact/addcontact.component';
import { AdditionalemailsetupComponent } from './pages/admin/additionalemailsetup/additionalemailsetup.component';
import { AgentdocumentchecklistComponent } from './pages/admin/agentdocumentchecklist/agentdocumentchecklist.component';
import { AssessmentduedateComponent } from './pages/admin/assessmentduedate/assessmentduedate.component';
import { CertificateidformatComponent } from './pages/admin/certificateidformat/certificateidformat.component';
import { ChecklistsetupComponent } from './pages/admin/checklistsetup/checklistsetup.component';
import { CollegeinfoComponent } from './pages/admin/collegeinfo/collegeinfo.component';
import { CoursecalendertypeComponent } from './pages/admin/coursecalendertype/coursecalendertype.component';
import { CoursesiteComponent } from './pages/admin/coursesite/coursesite.component';
import { CreateRoleComponent } from './pages/admin/create-role/create-role.component';
import { CreateRoomComponent } from './pages/admin/create-room/create-room.component';
import { CreateStudentenrolmentComponent } from './pages/admin/create-studentenrolment/create-studentenrolment.component';
import { CreateTrainingOrganizationComponent } from './pages/admin/create-training-organization/create-training-organization.component';
import { CreateUnitComponent } from './pages/admin/create-unit/create-unit.component';
import { CreateVenueComponent } from './pages/admin/create-venue/create-venue.component';
import { CreatepermissiongroupComponent } from './pages/admin/createpermissiongroup/createpermissiongroup.component';
import { CustomfieldsComponent } from './pages/admin/customfields/customfields.component';
import { EditRoleComponent } from './pages/admin/edit-role/edit-role.component';
import { EditRoomComponent } from './pages/admin/edit-room/edit-room.component';
import { EditStudentenrolmentComponent } from './pages/admin/edit-studentenrolment/edit-studentenrolment.component';



import { EditTrainingOrganizationComponent } from './pages/admin/edit-training-organization/edit-training-organization.component';

import { EditUnitComponent } from './pages/admin/edit-unit/edit-unit.component';
import { EditVenueComponent } from './pages/admin/edit-venue/edit-venue.component';
import { EditagentstatusComponent } from './pages/admin/editagentstatus/editagentstatus.component';
import { EditcountryNationalityinfoComponent } from './pages/admin/editcountry-nationalityinfo/editcountry-nationalityinfo.component';
import { EditlanguageinfoComponent } from './pages/admin/editlanguageinfo/editlanguageinfo.component';
import { InventionstrategyComponent } from './pages/admin/inventionstrategy/inventionstrategy.component';
import { ManagecontractscheduleComponent } from './pages/admin/managecontractschedule/managecontractschedule.component';
import { ManageemployeeComponent } from './pages/admin/manageemployee/manageemployee.component';
//VenueRoom
import { ManageroomComponent } from './pages/admin/manageroom/manageroom.component';
import { ManagesemesterdivisionComponent } from './pages/admin/managesemesterdivision/managesemesterdivision.component';
import { ManagestudyperiodsComponent } from './pages/admin/managestudyperiods/managestudyperiods.component';
import { ManagesystemreportComponent } from './pages/admin/managesystemreport/managesystemreport.component';
//Venue
import { ManagevenueComponent } from './pages/admin/managevenue/managevenue.component';
import { OfferdocumentchecklistComponent } from './pages/admin/offerdocumentchecklist/offerdocumentchecklist.component';
import { OverseasstudenthealthComponent } from './pages/admin/overseasstudenthealth/overseasstudenthealth.component';
import { PagepermissionsetupComponent } from './pages/admin/pagepermissionsetup/pagepermissionsetup.component';
import { PrismsdatavalidationComponent } from './pages/admin/prismsdatavalidation/prismsdatavalidation.component';
import { RegisteractivitydetailComponent } from './pages/admin/registeractivitydetail/registeractivitydetail.component';
import { ResultgradeComponent } from './pages/admin/resultgrade/resultgrade.component';
//Role
import { RolesComponent } from './pages/admin/roles/roles.component';
import { ServicedetailsComponent } from './pages/admin/servicedetails/servicedetails.component';
import { ServicefacilitysetupComponent } from './pages/admin/servicefacilitysetup/servicefacilitysetup.component';
import { ServiceproviderComponent } from './pages/admin/serviceprovider/serviceprovider.component';
import { SetuserpermissionComponent } from './pages/admin/setuserpermission/setuserpermission.component';
import { StudentListComponent } from './pages/admin/student-list/student-list.component';
//Admin
import { StudentcreateComponent } from './pages/admin/studentcreate/studentcreate.component';
//StudentEnrolment
import { StudentenrolmentComponent } from './pages/admin/studentenrolment/studentenrolment.component';
import { StudentupdateComponent } from './pages/admin/studentupdate/studentupdate.component';
import { StudentviewComponent } from './pages/admin/studentview/studentview.component';
import { SystemfieldsetupComponent } from './pages/admin/systemfieldsetup/systemfieldsetup.component';
//Unit
import { UnitsComponent } from './pages/admin/units/units.component';
import { UpdatereportComponent } from './pages/admin/updatereport/updatereport.component';
import { ViewRoleComponent } from './pages/admin/view-role/view-role.component';
import { ViewRoomComponent } from './pages/admin/view-room/view-room.component';
import { ViewStudentenrolmentComponent } from './pages/admin/view-studentenrolment/view-studentenrolment.component';
import { ViewTrainingOrganizationComponent } from './pages/admin/view-training-organization/view-training-organization.component';
import { TrainingOrganizationsComponent } from './pages/admin/training-organizations/training-organizations.component';
import { ViewUnitComponent } from './pages/admin/view-unit/view-unit.component';
import { ViewVenueComponent } from './pages/admin/view-venue/view-venue.component';
import { ViewdatabaseComponent } from './pages/admin/viewdatabase/viewdatabase.component';
import { ViewfielsfolderComponent } from './pages/admin/viewfielsfolder/viewfielsfolder.component';
import { AgentregComponent } from './pages/agentreg/agentreg.component';
import { AgentregistrationComponent } from './pages/agentregistration/agentregistration.component';
//Compliance
import { AddupdatestudentComponent } from './pages/compliance/addupdatestudent/addupdatestudent.component';
import { AttendancesummaryComponent } from './pages/compliance/attendancesummary/attendancesummary.component';
import { BulkaddupdateComponent } from './pages/compliance/bulkaddupdate/bulkaddupdate.component';
import { DailyattendancerollComponent } from './pages/compliance/dailyattendanceroll/dailyattendanceroll.component';
//Course
import { AddcoursetemplateComponent } from './pages/course/addcoursetemplate/addcoursetemplate.component';
import { AddholidaysComponent } from './pages/course/addholidays/addholidays.component';
import { AddnewsubjectComponent } from './pages/course/addnewsubject/addnewsubject.component';
import { AddsubjectComponent } from './pages/course/addsubject/addsubject.component';


// // StudentPostalDetails 
// import { StudentpostaldetailsComponent } from './pages/admin/studentpostaldetails/studentpostaldetails.component';
// import { CreateStudentpostaldetailsComponent } from './pages/admin/create-studentpostaldetails/create-studentpostaldetails.component';
// import { ViewStudentpostaldetailsComponent } from './pages/admin/view-studentpostaldetails/view-studentpostaldetails.component';
// import { EditStudentpostaldetailsComponent } from './pages/admin/edit-studentpostaldetails/edit-studentpostaldetails.component';



// //StudentDisability
// import { StudentDisabilityComponent } from './pages/admin/student-disability/student-disability.component';
// import { CreateStudentDisabilityComponent } from './pages/admin/create-student-disability/create-student-disability.component';
// import { EditStudentDisabilityComponent } from './pages/admin/edit-student-disability/edit-student-disability.component';
// import { ViewStudentDisabilityComponent } from './pages/admin/view-student-disability/view-student-disability.component';

//CourseIntakeDate
import { CourseIntakeDateComponent } from './pages/course/course-intake-date/course-intake-date.component';
import { CreateCourseIntakeDateComponent } from './pages/course/create-course-intake-date/create-course-intake-date.component';
import { EditCourseIntakeDateComponent } from './pages/course/edit-course-intake-date/edit-course-intake-date.component';
import { ViewCourseIntakeDateComponent } from './pages/course/view-course-intake-date/view-course-intake-date.component';

// //PriorEducationalAchievement
// import { PriorEducationalAchievementComponent } from './pages/admin/prior-educational-achievement/prior-educational-achievement.component';
// import { CreatePriorEducationalAchievementComponent } from './pages/admin/create-prior-educational-achievement/create-prior-educational-achievement.component';
// import { EditPriorEducationalAchievementComponent } from './pages/admin/edit-prior-educational-achievement/edit-prior-educational-achievement.component';
// import { ViewPriorEducationalAchievementComponent } from './pages/admin/view-prior-educational-achievement/view-prior-educational-achievement.component';


//Course-Unit
import { CourseUnitComponent } from './pages/course/course-unit/course-unit.component';
import { CoursesComponent } from './pages/course/courses/courses.component';
import { CreateCourseUnitComponent } from './pages/course/create-course-unit/create-course-unit.component';
import { CreateCourseComponent } from './pages/course/create-course/create-course.component';
import { EditCourseUnitComponent } from './pages/course/edit-course-unit/edit-course-unit.component';
import { EditCourseComponent } from './pages/course/edit-course/edit-course.component';
import { IntakedatesComponent } from './pages/course/intakedates/intakedates.component';
import { ManageComponent } from './pages/course/manage/manage.component';
import { ManagecourseinitialComponent } from './pages/course/managecourseinitial/managecourseinitial.component';
import { ManagecoursestructureComponent } from './pages/course/managecoursestructure/managecoursestructure.component';
import { ManagesubjectComponent } from './pages/course/managesubject/managesubject.component';
import { ManageunitComponent } from './pages/course/manageunit/manageunit.component';
import { NationalitygroupComponent } from './pages/course/nationalitygroup/nationalitygroup.component';
import { PromotionactivationComponent } from './pages/course/promotionactivation/promotionactivation.component';
import { PromotionsetComponent } from './pages/course/promotionset/promotionset.component';
import { UpdatesubjectComponent } from './pages/course/updatesubject/updatesubject.component';
import { ViewCourseUnitComponent } from './pages/course/view-course-unit/view-course-unit.component';
import { ViewCourseComponent } from './pages/course/view-course/view-course.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ChangepasswordComponent } from './pages/profile/changepassword/changepassword.component';
//profile
import { EditprofileComponent } from './pages/profile/editprofile/editprofile.component';
import { LeaveinfoComponent } from './pages/profile/leaveinfo/leaveinfo.component';
import { AddstaffComponent } from './pages/staff/addstaff/addstaff.component';
import { CommunicationlogComponent } from './pages/staff/communicationlog/communicationlog.component';
import { DocumentsComponent } from './pages/staff/documents/documents.component';
import { EmailComponent } from './pages/staff/email/email.component';
import { ManagementhomeComponent } from './pages/staff/managementhome/managementhome.component';
import { PhotoComponent } from './pages/staff/photo/photo.component';
import { ProfessionaldevelopmentComponent } from './pages/staff/professionaldevelopment/professionaldevelopment.component';
//Staff
import { ProfileComponent } from './pages/staff/profile/profile.component';
//student-agent
import { StudentapplicationComponent } from './pages/studentapplication/studentapplication.component';
import { AddteacherComponent } from './pages/teacher/addteacher/addteacher.component';
//Teacher
import { ManageteacherComponent } from './pages/teacher/manageteacher/manageteacher.component';
import { TeachermatricComponent } from './pages/teacher/teachermatric/teachermatric.component';
import { AsignreplaceteacherComponent } from './pages/timetable/asignreplaceteacher/asignreplaceteacher.component';
import { ClasscapacityreportComponent } from './pages/timetable/classcapacityreport/classcapacityreport.component';
import { CreateScheduleComponent } from './pages/timetable/create-schedule/create-schedule.component';
import { CreateclasstimetableComponent } from './pages/timetable/createclasstimetable/createclasstimetable.component';
import { EditScheduleComponent } from './pages/timetable/edit-schedule/edit-schedule.component';
import { GenerateclassattendanceComponent } from './pages/timetable/generateclassattendance/generateclassattendance.component';
import { ManageclasstimetableComponent } from './pages/timetable/manageclasstimetable/manageclasstimetable.component';
import { PrintattendlistComponent } from './pages/timetable/printattendlist/printattendlist.component';
import { ScheduleComponent } from './pages/timetable/schedule/schedule.component';
import { TimetablereportsComponent } from './pages/timetable/timetablereports/timetablereports.component';
import { ViewScheduleComponent } from './pages/timetable/view-schedule/view-schedule.component';
//timetable
import { ViewtemplateComponent } from './pages/timetable/viewtemplate/viewtemplate.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
//users
import { ManageuseraccountComponent } from './pages/users/manageuseraccount/manageuseraccount.component';
import { UseractivityComponent } from './pages/users/useractivity/useractivity.component';
import { ViewUsersComponent } from './pages/users/view-users/view-users.component';

import { TestComponent } from './pages/test/test.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService], },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService], },
  //Staff
  {
    path: 'staff/profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'staff/add-staff', component: AddstaffComponent, canActivate: [AuthGuardService], },
  { path: 'staff/documents', component: DocumentsComponent, canActivate: [AuthGuardService], },
  { path: 'staff/email', component: EmailComponent, canActivate: [AuthGuardService], },
  { path: 'staff/photo', component: PhotoComponent, canActivate: [AuthGuardService], },
  { path: 'staff/communication-log', component: CommunicationlogComponent, canActivate: [AuthGuardService], },
  { path: 'staff/management-home', component: ManagementhomeComponent, canActivate: [AuthGuardService], },
  {
    path: 'staff/professional-development',
    component: ProfessionaldevelopmentComponent,
    canActivate: [AuthGuardService],
  },

  //Admin

  { path: 'admin/list-training-organization', component: TrainingOrganizationsComponent, canActivate: [AuthGuardService], },

  { path: 'admin/create-training-organization', component: CreateTrainingOrganizationComponent, canActivate: [AuthGuardService], },

  // { path: 'admin/edit-training-organization-type', component: EditTrainingOrganizationTypeComponent, canActivate: [AuthGuardService], },

  { path: 'admin/edit-training-organization/:id', component: EditTrainingOrganizationComponent, canActivate: [AuthGuardService], },

  // // StudentPostalDetails 
  // { path: 'admin/student-postal-details-list', component: StudentpostaldetailsComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/create-student-postal-details', component: CreateStudentpostaldetailsComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/view-student-postal-details/:id', component: ViewStudentpostaldetailsComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/edit-student-postal-details/:id', component: EditStudentpostaldetailsComponent, canActivate: [AuthGuardService], },


  // // StudentDisability 
  // { path: 'admin/student-disability-list', component: StudentDisabilityComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/create-student-disability', component: CreateStudentDisabilityComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/view-student-disability/:id', component: ViewStudentDisabilityComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/edit-student-disability/:id', component: EditStudentDisabilityComponent, canActivate: [AuthGuardService], },

  // CourseIntakeDate 
  { path: 'course/course-intake-date-list', component: CourseIntakeDateComponent, canActivate: [AuthGuardService], },
  { path: 'course/create-course-intake-date', component: CreateCourseIntakeDateComponent, canActivate: [AuthGuardService], },
  { path: 'course/view-course-intake-date/:id', component: ViewCourseIntakeDateComponent, canActivate: [AuthGuardService], },
  { path: 'course/edit-course-intake-date/:id', component: EditCourseIntakeDateComponent, canActivate: [AuthGuardService], },

  // // PriorEducationalAchievement 
  // { path: 'admin/prior-educational-achievement-list', component: PriorEducationalAchievementComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/create-prior-educational-achievement', component: CreatePriorEducationalAchievementComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/view-prior-educational-achievement/:id', component: ViewPriorEducationalAchievementComponent, canActivate: [AuthGuardService], },
  // { path: 'admin/edit-prior-educational-achievement/:id', component: EditPriorEducationalAchievementComponent, canActivate: [AuthGuardService], },




  { path: 'admin/view-training-organization/:id', component: ViewTrainingOrganizationComponent, canActivate: [AuthGuardService] },

  { path: 'admin/create-student', component: StudentcreateComponent, canActivate: [AuthGuardService], },
  { path: 'admin/student-list', component: StudentListComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-student/:id', component: StudentupdateComponent, canActivate: [AuthGuardService], },
  { path: 'admin/view-student/:id', component: StudentviewComponent, canActivate: [AuthGuardService], },
  { path: 'admin/agent-document', component: AgentdocumentchecklistComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-agent-status', component: EditagentstatusComponent, canActivate: [AuthGuardService], },
  { path: 'admin/additional-email', component: AdditionalemailsetupComponent, canActivate: [AuthGuardService], },
  { path: 'admin/assessment-due-date', component: AssessmentduedateComponent, canActivate: [AuthGuardService], },
  { path: 'admin/add-contact', component: AddcontactComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/certificateid-format',
    component: CertificateidformatComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/checklist-setup', component: ChecklistsetupComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/offer-document-checklist',
    component: OfferdocumentchecklistComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/overseas-student-health',
    component: OverseasstudenthealthComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/course-calender-type',
    component: CoursecalendertypeComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/course-site', component: CoursesiteComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/create-permission-group',
    component: CreatepermissiongroupComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/custom-fields', component: CustomfieldsComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-language-info', component: EditlanguageinfoComponent, canActivate: [AuthGuardService], },
  { path: 'admin/college-info', component: CollegeinfoComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/country-nationality-info',
    component: EditcountryNationalityinfoComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/invention-strategy', component: InventionstrategyComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/manage-contract-schedule',
    component: ManagecontractscheduleComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/manage-employee', component: ManageemployeeComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/manage-semester-division',
    component: ManagesemesterdivisionComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/manage-study-periods',
    component: ManagestudyperiodsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/manage-system-reports',
    component: ManagesystemreportComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/page-permission-setup',
    component: PagepermissionsetupComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/view-database', component: ViewdatabaseComponent, canActivate: [AuthGuardService], },
  { path: 'admin/system-field-setup', component: SystemfieldsetupComponent, canActivate: [AuthGuardService], },
  { path: 'admin/set-user-permission', component: SetuserpermissionComponent, canActivate: [AuthGuardService], },
  { path: 'admin/view-files-folder', component: ViewfielsfolderComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/prisms-data-validation',
    component: PrismsdatavalidationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/register-activity-detail',
    component: RegisteractivitydetailComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/result-grade', component: ResultgradeComponent, canActivate: [AuthGuardService], },
  { path: 'admin/service-details', component: ServicedetailsComponent, canActivate: [AuthGuardService], },
  {
    path: 'admin/service-facility-setup',
    component: ServicefacilitysetupComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'admin/service-provider', component: ServiceproviderComponent, canActivate: [AuthGuardService], },
  { path: 'admin/update-report', component: UpdatereportComponent, canActivate: [AuthGuardService], },

  //UNIT
  { path: 'admin/unit-list', component: UnitsComponent, canActivate: [AuthGuardService], },
  { path: 'admin/create-unit', component: CreateUnitComponent, canActivate: [AuthGuardService], },
  { path: 'admin/view-unit/:id', component: ViewUnitComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-unit/:id', component: EditUnitComponent, canActivate: [AuthGuardService], },

  //StudentEnrolment
  {
    path: 'admin/list-student-enrolment',
    component: StudentenrolmentComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/create-student-enrolment/:prioreducation',
    component: CreateStudentenrolmentComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/view-student-enrolment/:id',
    component: ViewStudentenrolmentComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/edit-student-enrolment/:id',
    component: EditStudentenrolmentComponent,
    canActivate: [AuthGuardService],
  },

  //Venue
  { path: 'admin/list-venue', component: ManagevenueComponent, canActivate: [AuthGuardService], },
  { path: 'admin/create-venue', component: CreateVenueComponent, canActivate: [AuthGuardService], },
  { path: 'admin/view-venue/:id', component: ViewVenueComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-venue/:id', component: EditVenueComponent, canActivate: [AuthGuardService], },

  //VenueRoom
  { path: 'admin/list-venueroom', component: ManageroomComponent, canActivate: [AuthGuardService], },
  { path: 'admin/create-venueroom', component: CreateRoomComponent, canActivate: [AuthGuardService], },
  { path: 'admin/view-venueroom/:id', component: ViewRoomComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-venueroom/:id', component: EditRoomComponent, canActivate: [AuthGuardService], },

  //Roles
  { path: 'admin/list-roles', component: RolesComponent, canActivate: [AuthGuardService], },
  { path: 'admin/create-role', component: CreateRoleComponent, canActivate: [AuthGuardService], },
  { path: 'admin/view-role/:id', component: ViewRoleComponent, canActivate: [AuthGuardService], },
  { path: 'admin/edit-role/:id', component: EditRoleComponent, canActivate: [AuthGuardService], },

  //Course-Unit
  { path: 'course/list-course-units', component: CourseUnitComponent, canActivate: [AuthGuardService], },
  { path: 'course/create-course-unit', component: CreateCourseUnitComponent, canActivate: [AuthGuardService], },
  { path: 'course/view-course-unit/:id', component: ViewCourseUnitComponent, canActivate: [AuthGuardService], },
  { path: 'course/edit-course-unit/:id', component: EditCourseUnitComponent, canActivate: [AuthGuardService], },

  //Compliance
  {
    path: 'compliance/add-update-student',
    component: AddupdatestudentComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'compliance/attendance-summary',
    component: AttendancesummaryComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'compliance/bulk-update', component: BulkaddupdateComponent, canActivate: [AuthGuardService], },
  {
    path: 'compliance/daily-attendance-roll',
    component: DailyattendancerollComponent,
    canActivate: [AuthGuardService],
  },
  //Teacher
  { path: 'teacher/manage-teacher', component: ManageteacherComponent, canActivate: [AuthGuardService], },
  { path: 'teacher/teacher-matric', component: TeachermatricComponent, canActivate: [AuthGuardService], },
  { path: 'teacher/add-teacher', component: AddteacherComponent, canActivate: [AuthGuardService], },
  //Course
  { path: 'course/add-course-template', component: AddcoursetemplateComponent, canActivate: [AuthGuardService], },
  { path: 'course/add-holidays', component: AddholidaysComponent, canActivate: [AuthGuardService], },
  { path: 'course/add-new-subject', component: AddnewsubjectComponent, canActivate: [AuthGuardService], },
  { path: 'course/add-subject', component: AddsubjectComponent, canActivate: [AuthGuardService], },
  { path: 'course/list-courses', component: CoursesComponent, canActivate: [AuthGuardService], },
  { path: 'course/intake-dates', component: IntakedatesComponent, canActivate: [AuthGuardService], },
  {
    path: 'course/manage-course-structure',
    component: ManagecoursestructureComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'course/promotion-set', component: PromotionsetComponent, canActivate: [AuthGuardService], },
  { path: 'course/update-subject', component: UpdatesubjectComponent, canActivate: [AuthGuardService], },
  {
    path: 'course/promotion-activation',
    component: PromotionactivationComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'course/nationality-group', component: NationalitygroupComponent, canActivate: [AuthGuardService], },
  { path: 'course/manage-unit', component: ManageunitComponent, canActivate: [AuthGuardService], },
  { path: 'course/manage-subject', component: ManagesubjectComponent, canActivate: [AuthGuardService], },
  { path: 'course/manage', component: ManageComponent, canActivate: [AuthGuardService], },
  {
    path: 'course/manage-course-initial',
    component: ManagecourseinitialComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'course/create-course', component: CreateCourseComponent, canActivate: [AuthGuardService], },
  { path: 'course/view-course/:id', component: ViewCourseComponent, canActivate: [AuthGuardService], },
  { path: 'course/edit-course/:id', component: EditCourseComponent, canActivate: [AuthGuardService], },

  //student-agent
  { path: 'student-application', component: StudentapplicationComponent, canActivate: [AuthGuardService], },
  { path: 'agent-registration', component: AgentregistrationComponent, canActivate: [AuthGuardService], },
  { path: 'agent-reg', component: AgentregComponent, canActivate: [AuthGuardService], },

  //timetable
  { path: 'timetable/view-template', component: ViewtemplateComponent, canActivate: [AuthGuardService], },
  { path: 'timetable/print-attendance', component: PrintattendlistComponent, canActivate: [AuthGuardService], },
  {
    path: 'timetable/asign-replace-teacher',
    component: AsignreplaceteacherComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'timetable/class-capacity-report',
    component: ClasscapacityreportComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'timetable/create-class-timetable',
    component: CreateclasstimetableComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'timetable/generate-class-attendance',
    component: GenerateclassattendanceComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'timetable/manage-class-timetable',
    component: ManageclasstimetableComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'timetable/timetable-reports', component: TimetablereportsComponent, canActivate: [AuthGuardService], },


  //Schedule
  { path: 'timetable/list-schedule', component: ScheduleComponent, canActivate: [AuthGuardService], },
  { path: 'timetable/create-schedule', component: CreateScheduleComponent, canActivate: [AuthGuardService], },
  { path: 'timetable/view-schedule/:id', component: ViewScheduleComponent, canActivate: [AuthGuardService], },
  { path: 'timetable/edit-schedule/:id', component: EditScheduleComponent, canActivate: [AuthGuardService], },

  //profile
  { path: 'profile/edit-profile', component: EditprofileComponent, canActivate: [AuthGuardService], },
  { path: 'profile/change-password', component: ChangepasswordComponent, canActivate: [AuthGuardService], },
  { path: 'profile/leave-info', component: LeaveinfoComponent, canActivate: [AuthGuardService], },
  //users
  { path: 'users/manage-user-account', component: ManageuseraccountComponent, canActivate: [AuthGuardService], },
  { path: 'users/user-activity', component: UseractivityComponent, canActivate: [AuthGuardService], },
  { path: 'users/create-user', component: CreateUserComponent, canActivate: [AuthGuardService], },
  { path: 'users/view-user/:id', component: ViewUsersComponent, canActivate: [AuthGuardService], },
  { path: 'users/edit-user/:id', component: EditUsersComponent, canActivate: [AuthGuardService], },


  { path: 'test', component: TestComponent, canActivate: [AuthGuardService], },


  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
