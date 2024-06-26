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


  // Generate new page content
  let newPageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Meal Plan for ${name}</title>
      <style>
        body { font-family: Arial, sans-serif; }
        h1 { color: #333; }
        p { margin-bottom: 10px; }
      </style>
    </head>
    <body>
      <h1>Meal Plan for ${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Goal for the Week:</strong> ${goal}</p>
      <h2>Weekly Meal Plan</h2>
      <p><strong>Monday:</strong> Breakfast - ${breakfast}, Snack 1 - ${snack1}, Lunch - ${lunch}, Snack 2 - ${snack2}, Dinner - ${dinner}</p>
      <p><strong>Tuesday:</strong> Breakfast - ${breakfast}, Snack 1  - ${snack1}, Lunch - ${lunch}, Snack 2  - ${snack2}, Dinner - ${dinner}</p>
      <p><strong>Wednesday:</strong> Breakfast - ${breakfast}, Snack 1  - ${snack1}, Lunch - ${lunch}, Snack 2  - ${snack2}, Dinner - ${dinner}</p>
      <p><strong>Thuresday:</strong> Breakfast - ${breakfast}, Snack 1  - ${snack1}, Lunch - ${lunch},Snack 2  - ${snack2}, Dinner - ${dinner}</p>
      <p><strong>Friday:</strong> Breakfast - ${breakfast}, Snack 1  - ${snack1}, Lunch - ${lunch}, Snack 2  - ${snack2}, Dinner - ${dinner}</p>
      <p><strong>Saturday:</strong> Breakfast - ${breakfast}, Snack 1  - ${snack1}, Lunch - ${lunch}, Snack 2  - ${snack2}, Dinner - ${dinner}</p>
      <p><strong>Sunday:</strong> Breakfast - ${breakfast}, Snack 1  - ${snack1}, Lunch - ${lunch}, Snack 2  - ${snack2}, Dinner - ${dinner}</p>
    
    </body>
    </html>
  `;




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
  
  





  




  
  

