export abstract class AttributeBase implements Xrm.Attributes.Attribute {
    logicalName: string;
    element: HTMLInputElement;
    changeHandlers: Xrm.Events.Attribute.ChangeEventHandler[] = [];
    private isObserving: boolean = false;
    formContext: Xrm.FormContext;

    constructor(logicalName: string, formContext: Xrm.FormContext) {
        this.logicalName = logicalName;
        this.formContext = formContext;
        
        this.element = document.getElementById(logicalName) as HTMLInputElement;

        if (!this.element)
            throw new Error(`Attribute ${this.logicalName} not found`);
    }

    addOnChange(handler: Xrm.Events.Attribute.ChangeEventHandler): void {
        this.changeHandlers.push(handler);
        
        if (!this.isObserving) {
            if (this.getAttributeType() === 'lookup' 
                || this.getAttributeType() === 'datetime') {
                const originalDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
                const self = this; 

                if (originalDescriptor && originalDescriptor.set) {
                    Object.defineProperty(this.element, 'value', {
                        set: function(val) {
                            const result = originalDescriptor.set!.call(this, val);
                            self.fireOnChange();
                            return result;
                        },
                        get: function() {
                            return originalDescriptor.get?.call(this);
                        }
                    });
                }
            }
            
            this.element.addEventListener('change', () => this.fireOnChange());
            this.isObserving = true; 
        }        
    }

    fireOnChange(): void {
        const context = {
            getEventSource: () => this,
            getDepth: () => 1,
            getContext: () => null as unknown as Xrm.GlobalContext,
            preventDefault: () => {},
            stopPropagation: () => {},
            getSharedVariable: (_name: string) => null,
            setSharedVariable: (_name: string, _value: any) => {},
            getFormContext: () => this.formContext,
        } as Xrm.Events.Attribute.ChangeEventContext;

        this.changeHandlers.forEach(handler => {
            try {
                handler(context);
            } catch (error) {
                console.error(`Error in change handler ${handler.name} for attribute ${this.logicalName}:`, error);
            }
        });
    }

    abstract getAttributeType(): Xrm.Attributes.AttributeType;

    getFormat(): Xrm.Attributes.AttributeFormat {
        throw new Error("Method not implemented.");
    }

    getIsDirty(): boolean {
        return this.element.classList.contains('dirty');
    }

    getName(): string {
        return this.logicalName;
    }

    getParent(): Xrm.Entity {
        throw new Error("Method not implemented.");
    }

    getRequiredLevel(): Xrm.Attributes.RequirementLevel {
        throw new Error("Method not implemented.");
    }

    getSubmitMode(): Xrm.SubmitMode {
        throw new Error("Method not implemented.");
    }

    getUserPrivilege(): Xrm.Privilege {
        throw new Error("Method not implemented.");
    }

    removeOnChange(handler: Xrm.Events.Attribute.ChangeEventHandler): void {
        const handlerIndex = this.changeHandlers.indexOf(handler);
        if (handlerIndex !== -1) {
            this.changeHandlers.splice(handlerIndex, 1);
        }
    }

    setRequiredLevel(requirementLevel: Xrm.Attributes.RequirementLevel): void {
        throw new Error("Method not implemented.");
    }

    setSubmitMode(submitMode: Xrm.SubmitMode): void {
        throw new Error("Method not implemented.");
    }

    controls: Xrm.Collection.ItemCollection<Xrm.Controls.StandardControl> = null as unknown as Xrm.Collection.ItemCollection<Xrm.Controls.StandardControl>;

    abstract getValue(): any;

    abstract setValue(value: any): void;

    setIsValid(isValid: boolean, message?: string): void {
        throw new Error("Method not implemented.");
    }
}