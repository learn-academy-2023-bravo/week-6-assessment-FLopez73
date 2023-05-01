# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In this case you would have to generate a new migration file that will add a cohort column to the sudents table. The foreign key is going to be cohort_id since the students are going to have association with the Cohort model. The foreign key only has to be designated to the Student model since the student table will be referencing the cohort table.

Researched answer:
First you run the rail g migration AddCohortRefToStudents cohort:references to establish the realationship between the two tables and add the foreign key. The foreign key will belong to the students table. Once the migration is generates you will need to run a raild db:migrate command to update the database schema. Once that is complete we check that the Cohort model has an association of has_many and the Student model has belongs_to that will use the foreing key to associate.

Used class notes.

2. Which RESTful routes must always be passed params? Why?

Your answer: There are 4 RESTful routes that must be passed params. Those would be show, update, and destroy in the case of these it would be because there is a request to show, update or delete a specific entry which would requre an :id to be passed to locate the exact part of the model. The last one which is create that is passed the private params that can only be called by the helper methods and not the user this would be the case for when and entry to the model is going to be created we want to make sure that the data entry is going to be a valid one so it has the system check against the paramaters that are set to deem the entry valid.

Researched answer: Altough there us no RESTful route that requires parameters there are some that are commonly used. Depending what your app is trying to accomplish the rotues that require parameters may vary. The most commonly used would be Query parameters(GET), Path parameters (GET/DELETE) and Body query(POST/PUT). In all of these three cases the user would be requesting either a single peice of data to view, update or create which would make the most sense to passa a paramter which is typically the id or a unique identifier of some sort.

https://stackoverflow.com/questions/4024271/rest-api-best-practices-where-to-put-parameters

3. Name three rails generator commands. What is created by each?

Your answer:
rails g model (ModelName): This will create a new model file and a migration file that defines the table schema.

rails g migration: This will allow you to make any changes to the database schema such as adding or removing columns. This file will contain the database schema changes that will be applied after the rails db:mnigrate commans is ran.

rails g controller: This command is used to create a new controller file. Controllers are used to respond to the incoming request from the user and how to interact with the model.

Researched answer:
railg g model: When running this command we are creating a sort of template for us to structure of the database and establishing a connection with each field in the database so the user can interact form the front end and be able to access the correct information that is being requested through the HTTP requests. When we generate the model we are able to designate how the names of the fields and the type of data that we will be reciving for that specific field.

rails g migration: This command can help alter an existing table this is known as a standalone migration. Thesew migrations will keep all the changes in your schema with your code for your app and do not change the database directly it is specific to your app only. This is an advatage since the things you need to preform or information you are taking in change rails migrations makes it easy to make these changes.

rails g controller: This command create the controller which is the logical center of the application. It is the coordinator of interaction of the user, the views and the model. In this controller live the helper methods that indicate what is to be done with each of the request from the user it has to have CRUD capabilities in order for it to be a fully functioning app. Controllers also manage caching that can give the app orders-of-magnitude preformance boost.

https://stackify.com/rails-migration-a-complete-guide/
https://www.tutorialspoint.com/ruby-on-rails/rails-controllers.htm#:~:text=The%20Rails%20controller%20is%20the,external%20requests%20to%20internal%20actions.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This route would call the index method which would return a list of all the students in the Student model. This would be possible by the index method calling an instance variable of @students that would be defined by Student.all therefore generating a list of all the entries.

ex:
def index
@students = Student.all
end

action: "POST" location: /students
This route would call the create method which would have redirected the user to the students list after succesful new entry was made. in the example below the method checks if the newly created student meets the criteria to become valid data to be added to the table by using the strong params if it meets the critirea that entry is posted to the table and the user is shown a list of all the students that includes the new entry.

ex:
def create
@student = Student.create(student_params)
if @student valid?
redirect_to students_path
end

strong params:
private
def student_params
params.require(:student).permit(:name, :cohort)
end

action: "GET" location: /students/new
This route would call the the new method that will display a form to the user to interact with and enter a new student. This will gather the information of the form that the user entered to generate a new entry to the table.

ex:
def new
@student = Student.new
end

action: "GET" location: /students/2
This route will call the show method will display the student with the id of 2. This specific action requires a param to be passed since the user is requesting to see the information of a specific student.

ex:
def show
@student = Student.find(params[:id])
end

action: "GET" location: /students/2/edit
This route will call the edit method. This method will display a form that belongs to a specific entry for student and the user is able to edit the information beloning to it. This is a method that requires params be passed to it since the user is requesting to make changes to a single specific entry.

ex:
def edit
@student = Student.find(params[:id])
end

action: "PATCH" location: /students/2
This route will be calling on the update method. This method is checking that the edited entry meets the requirements of student params to be passed as valid data. If the data is valid the user shoudl she the student with the updated information reflected.

ex:
def update
@student = Student.find(params[:id])
@student.update(student_params)
if @student.valid?
redirect_to student_path
end
end

private
def student_params
params.require(:student).permit(:name, :cohort)
end

action: "DELETE" location: /students/2
This route will be calling on the destroy method. THe action ir will preform is find the student by :id and delete that entry from the table if succesful it will display redirect the user to the lading page with a list of all the students that will not display the deleted entry.

ex:
def destroy
@student = Student.find(params[:id])
if @student.destroy
redirect_to students_path
end
end

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can create a new task in my to-do list so I can keep track.
1. As a user, I can edit an existing task on my to-do list.
1. As a user, I can add a due date to my created tasks.
1. As a user, I can delete a task from my to-do list.
1. As a user, I can mark a task as completed.
1. As a user, I can see a list of all my to-do's.
1. As a user, I can add notes to a specific task.
1. As a user, I can recive reminders about tasks that are due soon.
1. As a user, I can filter my list by completed and in progress.
1. As a user, I can create multiple to-do lists.
