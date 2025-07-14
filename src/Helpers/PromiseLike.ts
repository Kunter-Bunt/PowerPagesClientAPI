export class PromiseLike<T> implements Xrm.Async.PromiseLike<T> {
    jqDeferred: JQuery.Deferred<T>;

    constructor(deferred?: JQuery.Deferred<T>){
        this.jqDeferred = deferred || $.Deferred<T>();
    }
    
    then<U>(onFulfilled?: (value: T) => U | Xrm.Async.PromiseLike<U>, onRejected?: (error: any) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        const newPromise = new PromiseLike<U>();
        
        this.jqDeferred.done((value: T) => {
            try {
                if (onFulfilled) {
                    const result = onFulfilled(value);
                    if (result && typeof (result as any).then === 'function') {
                        (result as Xrm.Async.PromiseLike<U>).then(
                            (val: U) => newPromise.resolve(val),
                            (err: any) => newPromise.reject(err)
                        );
                    } else {
                        newPromise.resolve(result as U);
                    }
                } else {
                    newPromise.resolve(value as unknown as U);
                }
            } catch (error) {
                newPromise.reject(error);
            }
        });
        
        this.jqDeferred.fail((error: any) => {
            try {
                if (onRejected) {
                    const result = onRejected(error);
                    if (result && typeof (result as any).then === 'function') {
                        (result as Xrm.Async.PromiseLike<U>).then(
                            (val: U) => newPromise.resolve(val),
                            (err: any) => newPromise.reject(err)
                        );
                    } else {
                        newPromise.resolve(result as U);
                    }
                } else {
                    newPromise.reject(error);
                }
            } catch (catchError) {
                newPromise.reject(catchError);
            }
        });
        
        return newPromise;
    }

    fail<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        const newDeferred = $.Deferred<any>();
        const newPromise = new PromiseLike<any>(newDeferred);
        this.jqDeferred.done((v: T) => newDeferred.resolve(v));
        this.jqDeferred.fail((error: any) => {
            try {
                if (onRejected) {
                    const res = onRejected(error);
                    if (res && typeof (res as any).then === 'function') {
                        (res as Xrm.Async.PromiseLike<any>).then(
                            val => newDeferred.resolve(val),
                            err => newDeferred.reject(err)
                        );
                    } else {
                        newDeferred.resolve(res);
                    }
                } else {
                    newDeferred.reject(error);
                }
            } catch (e) {
                newDeferred.reject(e);
            }
        });
        return newPromise;
    }

    always<U>(alwaysCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        const newDeferred = $.Deferred<any>();
        const newPromise = new PromiseLike<any>(newDeferred);
        this.jqDeferred.done((v: T) => newDeferred.resolve(v));
        this.jqDeferred.fail((e: any) => newDeferred.reject(e));
        this.jqDeferred.always(() => {
            try { if (alwaysCallback) alwaysCallback(); } catch {};
        });
        return newPromise;
    }

    catch<U>(onRejected?: (reason: Xrm.ErrorResponse) => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        return this.fail(onRejected);
    }
    
    finally<U>(finallyCallback: () => U | Xrm.Async.PromiseLike<U>): Xrm.Async.PromiseLike<U> {
        return this.always(finallyCallback);
    }

    promise(): Xrm.Async.PromiseLike<T> {
        this.jqDeferred.promise();
        return this;
    }

    resolve(val: T): Xrm.Async.PromiseLike<T> {
        this.jqDeferred.resolve(val);
        return this;
    }

    reject(val: any): Xrm.Async.PromiseLike<T> {
        this.jqDeferred.reject(val);
        return this;
    }
}
