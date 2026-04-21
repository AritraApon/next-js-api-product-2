'use server'

import { revalidatePath } from "next/cache"
import { postTask } from "./tasks"

export const createATask = async (formData)=>{
   'use server'

   // const name = formData.get('name');
   const newTask = Object.fromEntries(formData.entries())
   // console.log('adding task ' , newTask , )

   const res = await postTask(newTask);
   if(res.ok){
      revalidatePath('/post')
   }
   return res
}