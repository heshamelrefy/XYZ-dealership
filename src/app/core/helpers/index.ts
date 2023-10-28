import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { UserInterceptor } from "./user.interceptor";
import { ErrorInterceptor } from "./error.interceptor";

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UserInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
];
