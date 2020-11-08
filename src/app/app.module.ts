import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/staff/profile/profile.component';
import { AddstaffComponent } from './pages/staff/addstaff/addstaff.component';
import { DocumentsComponent } from './pages/staff/documents/documents.component';
import { EmailComponent } from './pages/staff/email/email.component';
import { PhotoComponent } from './pages/staff/photo/photo.component';
import { CommunicationlogComponent } from './pages/staff/communicationlog/communicationlog.component';
import { ManagementhomeComponent } from './pages/staff/managementhome/managementhome.component';
import { ProfessionaldevelopmentComponent } from './pages/staff/professionaldevelopment/professionaldevelopment.component';
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
import { ManageroomComponent } from './pages/admin/manageroom/manageroom.component';
import { ManagesemesterdivisionComponent } from './pages/admin/managesemesterdivision/managesemesterdivision.component';
import { ManagestudyperiodsComponent } from './pages/admin/managestudyperiods/managestudyperiods.component';
import { ManagesystemreportComponent } from './pages/admin/managesystemreport/managesystemreport.component';
import { ManagevenueComponent } from './pages/admin/managevenue/managevenue.component';
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
import { AddupdatestudentComponent } from './pages/compliance/addupdatestudent/addupdatestudent.component';
import { AttendancesummaryComponent } from './pages/compliance/attendancesummary/attendancesummary.component';
import { BulkaddupdateComponent } from './pages/compliance/bulkaddupdate/bulkaddupdate.component';
import { DailyattendancerollComponent } from './pages/compliance/dailyattendanceroll/dailyattendanceroll.component';
import { ManageteacherComponent } from './pages/teacher/manageteacher/manageteacher.component';
import { TeachermatricComponent } from './pages/teacher/teachermatric/teachermatric.component';
import { AddteacherComponent } from './pages/teacher/addteacher/addteacher.component';
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
import { StudentapplicationComponent } from './pages/studentapplication/studentapplication.component';
import { ViewtemplateComponent } from './pages/timetable/viewtemplate/viewtemplate.component';
import { PrintattendlistComponent } from './pages/timetable/printattendlist/printattendlist.component';
import { AsignreplaceteacherComponent } from './pages/timetable/asignreplaceteacher/asignreplaceteacher.component';
import { ClasscapacityreportComponent } from './pages/timetable/classcapacityreport/classcapacityreport.component';
import { CreateclasstimetableComponent } from './pages/timetable/createclasstimetable/createclasstimetable.component';
import { GenerateclassattendanceComponent } from './pages/timetable/generateclassattendance/generateclassattendance.component';
import { ManageclasstimetableComponent } from './pages/timetable/manageclasstimetable/manageclasstimetable.component';
import { TimetablereportsComponent } from './pages/timetable/timetablereports/timetablereports.component';
import { EditprofileComponent } from './pages/profile/editprofile/editprofile.component';
import { ChangepasswordComponent } from './pages/profile/changepassword/changepassword.component';
import { LeaveinfoComponent } from './pages/profile/leaveinfo/leaveinfo.component';
import { ManageuseraccountComponent } from './pages/users/manageuseraccount/manageuseraccount.component';
import { UseractivityComponent } from './pages/users/useractivity/useractivity.component';
import { AgentregistrationComponent } from './pages/agentregistration/agentregistration.component';
import { AgentregComponent } from './pages/agentreg/agentreg.component';

import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './pages/admin/student-list/student-list.component';
import { StudentupdateComponent } from './pages/admin/studentupdate/studentupdate.component';
import { StudentviewComponent } from './pages/admin/studentview/studentview.component';
import { StudentcreateComponent } from './pages/admin/studentcreate/studentcreate.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ViewUsersComponent } from './pages/users/view-users/view-users.component';
import { EditUsersComponent } from './pages/users/edit-users/edit-users.component';
import { ViewCourseComponent } from './pages/course/view-course/view-course.component';
import { EditCourseComponent } from './pages/course/edit-course/edit-course.component';
import { CreateCourseComponent } from './pages/course/create-course/create-course.component';
import { CreateVenueComponent } from './pages/admin/create-venue/create-venue.component';
import { CreateRoomComponent } from './pages/admin/create-room/create-room.component';
import { ViewRoomComponent } from './pages/admin/view-room/view-room.component';
import { RolesComponent } from './pages/admin/roles/roles.component';
import { ViewRoleComponent } from './pages/admin/view-role/view-role.component';
import { CreateRoleComponent } from './pages/admin/create-role/create-role.component';
import { EditRoleComponent } from './pages/admin/edit-role/edit-role.component';
import { ScheduleComponent } from './pages/timetable/schedule/schedule.component';
import { CreateScheduleComponent } from './pages/timetable/create-schedule/create-schedule.component';
import { EditScheduleComponent } from './pages/timetable/edit-schedule/edit-schedule.component';
import { ViewScheduleComponent } from './pages/timetable/view-schedule/view-schedule.component';
import { EditRoomComponent } from './pages/admin/edit-room/edit-room.component';
import { ViewVenueComponent } from './pages/admin/view-venue/view-venue.component';
import { EditVenueComponent } from './pages/admin/edit-venue/edit-venue.component';
import { StudentenrolmentComponent } from './pages/admin/studentenrolment/studentenrolment.component';
import { CreateStudentenrolmentComponent } from './pages/admin/create-studentenrolment/create-studentenrolment.component';
import { EditStudentenrolmentComponent } from './pages/admin/edit-studentenrolment/edit-studentenrolment.component';
import { ViewStudentenrolmentComponent } from './pages/admin/view-studentenrolment/view-studentenrolment.component';
import { CourseUnitComponent } from './pages/course/course-unit/course-unit.component';
import { CreateCourseUnitComponent } from './pages/course/create-course-unit/create-course-unit.component';
import { EditCourseUnitComponent } from './pages/course/edit-course-unit/edit-course-unit.component';
import { ViewCourseUnitComponent } from './pages/course/view-course-unit/view-course-unit.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent,
    AddstaffComponent,
    DocumentsComponent,
    EmailComponent,
    PhotoComponent,
    CommunicationlogComponent,
    ManagementhomeComponent,
    ProfessionaldevelopmentComponent,
    AgentdocumentchecklistComponent,
    EditagentstatusComponent,
    AdditionalemailsetupComponent,
    AssessmentduedateComponent,
    AddcontactComponent,
    CertificateidformatComponent,
    ChecklistsetupComponent,
    OfferdocumentchecklistComponent,
    OverseasstudenthealthComponent,
    CoursecalendertypeComponent,
    CoursesiteComponent,
    CreatepermissiongroupComponent,
    CustomfieldsComponent,
    EditlanguageinfoComponent,
    CollegeinfoComponent,
    EditcountryNationalityinfoComponent,
    InventionstrategyComponent,
    ManagecontractscheduleComponent,
    ManageemployeeComponent,
    ManageroomComponent,
    ManagesemesterdivisionComponent,
    ManagestudyperiodsComponent,
    ManagesystemreportComponent,
    ManagevenueComponent,
    PagepermissionsetupComponent,
    ViewdatabaseComponent,
    SystemfieldsetupComponent,
    SetuserpermissionComponent,
    ViewfielsfolderComponent,
    PrismsdatavalidationComponent,
    RegisteractivitydetailComponent,
    ResultgradeComponent,
    ServicedetailsComponent,
    ServicefacilitysetupComponent,
    ServiceproviderComponent,
    UpdatereportComponent,
    AddupdatestudentComponent,
    AttendancesummaryComponent,
    BulkaddupdateComponent,
    DailyattendancerollComponent,
    ManageteacherComponent,
    TeachermatricComponent,
    AddteacherComponent,
    AddcoursetemplateComponent,
    AddholidaysComponent,
    AddnewsubjectComponent,
    AddsubjectComponent,
    CoursesComponent,
    IntakedatesComponent,
    ManagecoursestructureComponent,
    PromotionsetComponent,
    UpdatesubjectComponent,
    PromotionactivationComponent,
    NationalitygroupComponent,
    ManageunitComponent,
    ManagesubjectComponent,
    ManageComponent,
    ManagecourseinitialComponent,
    StudentapplicationComponent,
    ViewtemplateComponent,
    PrintattendlistComponent,
    AsignreplaceteacherComponent,
    ClasscapacityreportComponent,
    CreateclasstimetableComponent,
    GenerateclassattendanceComponent,
    ManageclasstimetableComponent,
    TimetablereportsComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    LeaveinfoComponent,
    ManageuseraccountComponent,
    UseractivityComponent,
    AgentregistrationComponent,
    AgentregComponent,
    StudentListComponent,
    StudentupdateComponent,
    StudentviewComponent,
    StudentcreateComponent,
    CreateUserComponent,
    ViewUsersComponent,
    EditUsersComponent,
    ViewCourseComponent,
    EditCourseComponent,
    CreateCourseComponent,
    CreateVenueComponent,
    CreateRoomComponent,
    ViewRoomComponent,
    RolesComponent,
    ViewRoleComponent,
    CreateRoleComponent,
    EditRoleComponent,
    ScheduleComponent,
    CreateScheduleComponent,
    EditScheduleComponent,
    ViewScheduleComponent,
    EditRoomComponent,
    ViewVenueComponent,
    EditVenueComponent,
    StudentenrolmentComponent,
    CreateStudentenrolmentComponent,
    EditStudentenrolmentComponent,
    ViewStudentenrolmentComponent,
    CourseUnitComponent,
    CreateCourseUnitComponent,
    EditCourseUnitComponent,
    ViewCourseUnitComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
