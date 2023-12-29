const form = document.querySelector('form')
console.log(form);

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)  
   const result = document.querySelector('#result')

   console.log(height);
   console.log(weight);


   if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
   } else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
   }else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)

    //Category
    let category = ''
    if(bmi < 18.6){
        category = 'Underweight'
    }else if(bmi >=18.6 && bmi <= 24.9){
        category = 'Normal Range'
    }else {
        category = Overweight
    }
    //show the result
    result.innerHTML = `<span>BMI: ${bmi}</span> <br> <span>Categary: ${category}</span>`
   }

})

