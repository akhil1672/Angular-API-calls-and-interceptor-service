import { HttpRequest, HttpInterceptor, HttpHandler } from "@angular/common/http";
import { Photo } from "./photo";
import 'rxjs/add/operator/do';

export class PhotosInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<Photo>,next:HttpHandler)
    {
        const newrequest=req.clone({
            headers:req.headers.set('Name','Akhil')
        });
        console.log(newrequest.headers);
        return next.handle(newrequest);
    }
}