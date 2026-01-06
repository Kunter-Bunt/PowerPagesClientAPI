import { FormContext } from "../FormContext";
import { PromiseLike } from "../Helpers/PromiseLike";

export class Navigation implements Xrm.Navigation {

    constructor() {
    }

    navigateTo(pageInput: Xrm.Navigation.PageInputEntityRecord | Xrm.Navigation.PageInputEntityList | Xrm.Navigation.CustomPage | Xrm.Navigation.PageInputHtmlWebResource | Xrm.Navigation.Dashboard, navigationOptions?: Xrm.Navigation.NavigationOptions): Xrm.Async.PromiseLike<any> {
        throw new Error("Method not implemented.");
    }

    openAlertDialog(alertStrings: Xrm.Navigation.AlertStrings, alertOptions?: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<any> {
        return this.createDialog({
            title: alertStrings.title || "Alert",
            text: alertStrings.text,
            confirmButtonLabel: alertStrings.confirmButtonLabel || "OK",
            icon: "info",
            dialogType: "alert"
        });
    }

    openConfirmDialog(confirmStrings: Xrm.Navigation.ConfirmStrings, confirmOptions?: Xrm.Navigation.DialogSizeOptions): Xrm.Async.PromiseLike<Xrm.Navigation.ConfirmResult> {
        return this.createDialog({
            title: confirmStrings.title || "Confirm",
            text: confirmStrings.text,
            subtitle: confirmStrings.subtitle,
            confirmButtonLabel: confirmStrings.confirmButtonLabel || "OK",
            cancelButtonLabel: confirmStrings.cancelButtonLabel || "Cancel",
            icon: "question",
            dialogType: "confirm"
        });
    }

    openErrorDialog(errorOptions: Xrm.Navigation.ErrorDialogOptions): Xrm.Async.PromiseLike<any> {
        return this.createDialog({
            title: "Error: " + errorOptions.errorCode,
            text: errorOptions.message,
            details: errorOptions.details,
            confirmButtonLabel: "OK",
            icon: "error",
            dialogType: "error"
        });
    }

    openFile(file: Xrm.Navigation.FileDetails, openFileOptions?: Xrm.Navigation.OpenFileOptions): void {
        const byteCharacters = atob(file.fileContent);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: file.mimeType });
        
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        
        if (openFileOptions?.openMode === XrmEnum.OpenFileOptions.Open) {
            link.target = '_blank';
        } else {
            link.download = file.fileName;
        }
        
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 100);
    }

    openForm(entityFormOptions: Xrm.Navigation.EntityFormOptions, formParameters?: Xrm.Utility.OpenParameters): Xrm.Async.PromiseLike<Xrm.Navigation.OpenFormResult> {
        throw new Error("Method not implemented.");
    }

    openUrl(url: string, openUrlOptions?: Xrm.Navigation.DialogSizeOptions): void {
        if (openUrlOptions) {
            this.openInNewWindow(openUrlOptions, url);
        } else {
            window.location.href = url;
        }
    }

    openWebResource(webResourceName: string, windowOptions?: Xrm.Navigation.OpenWebresourceOptions, data?: string): void {
        let url = webResourceName;
        
        if (data) {
            const separator = url.includes('?') ? '&' : '?';
            url += `${separator}data=${encodeURIComponent(data)}`;
        }

        this.openUrl(url, windowOptions);
    }

    private openInNewWindow(windowOptions: Xrm.Navigation.DialogSizeOptions, url: string) {
        const features: string[] = [];
        if (windowOptions.height) features.push(`height=${windowOptions.height}`);
        if (windowOptions.width) features.push(`width=${windowOptions.width}`);

        const featuresString = features.length > 0 ? features.join(',') : undefined;
        window.open(url, '_blank', featuresString);
    }

    private createDialog(options: {
        title: string;
        text: string | undefined;
        subtitle?: string;
        details?: string;
        confirmButtonLabel: string;
        cancelButtonLabel?: string;
        icon: "info" | "question" | "error";
        dialogType: "alert" | "confirm" | "error";
    }): Xrm.Async.PromiseLike<any> {
        const promiseLike = new PromiseLike<any>();

        const overlay = document.createElement("div");
        overlay.className = "modal fade in show ppca_modal";
        overlay.setAttribute("tabindex", "-1");

            const modalDialog = document.createElement("div");
            modalDialog.className = "modal-dialog modal-dialog-centered ppca_modal-dialog";

            const modal = document.createElement("div");
            modal.className = `modal-content ppca_modal-content ppca_modal-${options.dialogType}`;

            const header = document.createElement("div");
            header.className = "modal-header ppca_modal-header";
            header.style.cssText = "display: flex";

            const titleElement = document.createElement("h5");
            titleElement.className = "modal-title ppca_modal-title";
            titleElement.style.cssText = "margin: 0";
            titleElement.textContent = options.title;
            header.appendChild(titleElement);

            const closeButton = document.createElement("button");
            closeButton.className = "close ppca_modal-close";
            closeButton.style.cssText = "margin-left: auto";
            closeButton.setAttribute("type", "button");
            closeButton.setAttribute("aria-label", "Close");
            closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
            closeButton.onclick = () => {
                this.closeDialog(overlay);
                if (options.dialogType === "confirm") {
                    promiseLike.resolve({ confirmed: false });
                } else {
                    promiseLike.resolve(undefined);
                }
            };
            header.appendChild(closeButton);

            modal.appendChild(header);

            const body = document.createElement("div");
            body.className = "modal-body ppca_modal-body";

            if (options.subtitle) {
                const subtitleElement = document.createElement("h6");
                subtitleElement.className = "mb-2 ppca_modal-subtitle";
                subtitleElement.textContent = options.subtitle;
                body.appendChild(subtitleElement);
            }

            const textElement = document.createElement("p");
            textElement.className = "mb-0 ppca_modal-text";
            textElement.textContent = options.text || "";
            body.appendChild(textElement);

            if (options.details) {
                const detailsElement = document.createElement("div");
                detailsElement.className = "mt-2 small text-muted ppca_modal-details";
                detailsElement.textContent = options.details;
                body.appendChild(detailsElement);
            }
            modal.appendChild(body);

            const footer = document.createElement("div");
            footer.className = "modal-footer ppca_modal-footer";

            const confirmButton = document.createElement("button");
            confirmButton.className = "btn btn-primary ppca_modal-button ppca_modal-button-confirm";
            confirmButton.setAttribute("type", "button");
            confirmButton.textContent = options.confirmButtonLabel;
            confirmButton.onclick = () => {
                this.closeDialog(overlay);
                if (options.dialogType === "confirm") {
                    promiseLike.resolve({ confirmed: true });
                } else {
                    promiseLike.resolve(undefined);
                }
            };
            footer.appendChild(confirmButton);

            if (options.cancelButtonLabel) {
                const cancelButton = document.createElement("button");
                cancelButton.className = "btn btn-secondary ppca_modal-button ppca_modal-button-cancel";
                cancelButton.setAttribute("type", "button");
                cancelButton.textContent = options.cancelButtonLabel;
                cancelButton.onclick = () => {
                    this.closeDialog(overlay);
                    promiseLike.resolve({ confirmed: false });
                };
                footer.appendChild(cancelButton);
            }

            modal.appendChild(footer);

            modalDialog.appendChild(modal);
            overlay.appendChild(modalDialog);

            const backdrop = document.createElement("div");
            backdrop.className = "modal-backdrop fade show";

            document.body.appendChild(overlay);
            document.body.appendChild(backdrop);

            setTimeout(() => confirmButton.focus(), 0);

            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    this.closeDialog(overlay);
                    document.removeEventListener("keydown", handleEscape);
                    if (options.dialogType === "confirm") {
                        promiseLike.resolve({ confirmed: false });
                    } else {
                        promiseLike.resolve(undefined);
                    }
                }
            };
            document.addEventListener("keydown", handleEscape);

        return promiseLike;
    }

    private getIconSymbol(icon: "info" | "question" | "error"): string {
        switch (icon) {
            case "info":
                return "i";
            case "question":
                return "?";
            case "error":
                return "X";
            default:
                return "";
        }
    }

    private closeDialog(overlay: HTMLElement): void {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop && backdrop.parentNode) {
            backdrop.parentNode.removeChild(backdrop);
        }
    }
}