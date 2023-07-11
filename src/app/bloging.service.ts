import { Injectable } from '@angular/core';

import { BlogBrief } from './blogbrief';

@Injectable({
    providedIn: 'root'
})
export class BlogingService {

    blogBriefList: BlogBrief[] = [
    ];

    url = 'http://localhost:3000/locations';

    async getAllBlogBriefs(): Promise<BlogBrief[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
    }

    async getBlogBriefById(id: number): Promise<BlogBrief | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        return await data.json() ?? {};
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
    }
}
