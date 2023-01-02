import { environment } from './environment/environment';

export const getTasks = async () => {
    const response = await fetch(`${environment.apiUrl}/tasks`);
    const data = await response.json();
    return data;
};

export const saveTask = async (task) => {
    const response = await fetch(`${environment.apiUrl}/task`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    return await response.json();
}

export const deleteTask = async (id) => {
    await fetch(`${environment.apiUrl}/task/${id}`, {
        method: 'DELETE'
    });
}