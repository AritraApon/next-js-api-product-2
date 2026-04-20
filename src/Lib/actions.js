export const createATask = async (formData)=>{
   'use server'

   // const name = formData.get('name');
   const newTask = Object.fromEntries(formData.entries())
   console.log('adding task ' , newTask , )
}