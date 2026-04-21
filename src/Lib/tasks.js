import fs from 'fs/promises';
import path from 'path';

// ফাইলের লোকেশন সেট করা
const filePath = path.join(process.cwd(), 'src/data/task.json');

export const getTasks = async () => {
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    return data.posts;
}

export const postTask = async (newTask) => {
    // ১. ফাইল থেকে বর্তমান ডাটা পড়া
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // ২. নতুন আইডি সেট করা
    newTask.id = data.posts.length + 1;

    // ৩. ডাটা পুশ করা
    data.posts.push(newTask);

    // ৪. ফাইলটি আবার লিখে সেভ করা
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return { ok: true, massage: "Task added successfully" };
}