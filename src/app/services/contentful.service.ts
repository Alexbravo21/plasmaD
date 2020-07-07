import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';

import * as marked from 'marked';

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {
    private client = contentful.createClient({
        space: environment.contentful.spaceId,
        accessToken: environment.contentful.token
    })

    constructor() { }

    getEntryById(contentId): Observable<any> {
        return from(this.client.getEntry(contentId));
        // this.client.getEntries({
        //     content_type: contentId
        // })
        //     .then((entry) => console.log(entry))
    }
    getMultipleContent(contentType: string, limit: number): Observable<any> {
        return from(this.client.getEntries({
            content_type: contentType,
            limit: limit
        }));
    }
    markdownToHtml(md: string) {
        return marked(md);
    }

}
