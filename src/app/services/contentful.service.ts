import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class ContentfulService {
    private client = contentful.createClient({
        space: environment.contentful.spaceId,
        accessToken: environment.contentful.token
    })

    constructor() { }

    logContent(contentId) {
        this.client.getEntries({
            content_type: contentId
        })
        //this.client.getEntry(contentId)
            .then((entry) => console.log(entry))
    }
    getMultipleContent(contentType) {
       const promise = this.client.getEntries({
            content_type: contentType
        });
        //return Observable.fromPromise(promise).map(entry => entry.fields);
    }

}
