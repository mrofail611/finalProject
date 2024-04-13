function generateMealPlan() {
  //Retrieve user inputs
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let goal = document.getElementById('goal').value.trim();
  let breakfast = document.getElementById('breakfast').value.trim();
  let snack1 = document.getElementById('snack1').value.trim();
  let lunch = document.getElementById('lunch').value.trim();
  let snack2 = document.getElementById('snack2').value.trim();
  let dinner = document.getElementById('dinner').value.trim();

  // validate email
  if (!isValidEmail(email)) {
    alert ('Please enter a valid email address.');
    return;
  }


  


  // Open new window with generated content
 let newWindow = window.open();
 newWindow.document.write(newPageContent);
}

function clearForm() {
  document.getElementById('mealPlanForm').request();
}
// Validate email
function isValidEmail(email) {
  let emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

//Print the meal planner
function printPlanner(){
  window.print();
}
  
  

