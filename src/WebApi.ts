declare var shell: any;
declare var validateLoginSession: (data: any, status: string, jqXHR: JQuery.jqXHR, resolve: (args: any) => void) => void;

import { PromiseLike } from './Helpers/PromiseLike';

export class WebApi implements Xrm.WebApi, Xrm.WebApiOnline {
    online = this as Xrm.WebApiOnline;
    offline = this as Xrm.WebApiOffline;

    createRecord<T>(entityLogicalName: string, record: T): Xrm.Async.PromiseLike<Xrm.CreateResponse> {
        const url = `/_api/${entityLogicalName}s`;
        const deferred = new PromiseLike<Xrm.CreateResponse>();

        this.safeAjax({
            url: url,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: JSON.stringify(record)
        })
        .done((data: any, textStatus: string, jqXHR: JQuery.jqXHR) => {
            const createResponse: Xrm.CreateResponse = {
                id: jqXHR.getResponseHeader('entityid') || '',
                entityType: entityLogicalName
            };
            deferred.resolve(createResponse);
        })
        .fail((error: any) => {
            deferred.reject(error);
        });

        return deferred.promise();
    }

    deleteRecord(entityLogicalName: string, id: string): Xrm.Async.PromiseLike<string> {
        const url = `/_api/${entityLogicalName}s(${id})`;
        const deferred = new PromiseLike<string>();

        this.safeAjax({
            url: url,
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        }).done((data: any) => {
            deferred.resolve(data as string);
        }).fail((error: any) => {
            deferred.reject(error);
        });

        return deferred.promise();
    }

    retrieveRecord<T = any>(entityLogicalName: string, id: string, options?: string): Xrm.Async.PromiseLike<T> {
        let url = `/_api/${entityLogicalName}s(${id})`;
        if (options) {
            url += options.startsWith('?') ? options : `?${options}`;
        }

        const deferred = new PromiseLike<T>();

        this.safeAjax({
            url: url,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).done((data: any) => {
            deferred.resolve(data as T);
        }).fail((error: any) => {
            deferred.reject(error);
        });

        return deferred.promise();
    }

    retrieveMultipleRecords<T = any>(
        entityLogicalName: string,
        options?: string,
        maxPageSize?: number
    ): Xrm.Async.PromiseLike<Xrm.RetrieveMultipleResult<T>> {
        let url = `/_api/${entityLogicalName}s`;
        if (options) {
            url += options.startsWith('?') ? options : `?${options}`;
        }

        if (maxPageSize) {
            url += (url.includes('?') ? '&' : '?') + `$top=${maxPageSize}`;
        }

        const deferredResult = new PromiseLike<Xrm.RetrieveMultipleResult<T>>();

        this.safeAjax({
            url: url,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }).done((data: any) => {
            deferredResult.resolve({
                entities: data.value as T[],
            } as Xrm.RetrieveMultipleResult<T>);
        }).fail((error: any) => {
            deferredResult.reject(error);
        });

        return deferredResult.promise();
    }

    updateRecord<T>(entityLogicalName: string, id: string, data: T): Xrm.Async.PromiseLike<T> {
        const url = `/_api/${entityLogicalName}s(${id})`;
        const deferred = new PromiseLike<T>();

        this.safeAjax({
            url: url,
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: JSON.stringify(data)
        }).done((result: any) => {
            deferred.resolve(data);
        }).fail((err: any) => {
            deferred.reject(err);
        });

        return deferred.promise();
    }

    execute(request: any): Xrm.Async.PromiseLike<Xrm.ExecuteResponse> {
        throw new Error('Method not implemented.');
    }

    executeMultiple(request: any[]): Xrm.Async.PromiseLike<Xrm.ExecuteResponse[]> {
        throw new Error('Method not implemented.');
    }

    isAvailableOffline(entityLogicalName: string): boolean {
        return false;
    }

    private safeAjax(ajaxOptions: any) {
        var deferredAjax = $.Deferred();

        shell.getTokenDeferred().done(function (token: string) {
            if (!ajaxOptions.headers) {
                $.extend(ajaxOptions, {
                    headers: {
                        "__RequestVerificationToken": token
                    }
                });
            } else {
                ajaxOptions.headers["__RequestVerificationToken"] = token;
            }
            $.ajax(ajaxOptions)
                .done(function (data, textStatus, jqXHR) {
                    validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
                }).fail(deferredAjax.reject);
        }).fail(function (this: any) {
            deferredAjax.rejectWith(this, arguments);
        });

        return deferredAjax.promise();
    }
}