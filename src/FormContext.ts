import { Attribute } from './Attribute';

export namespace PowerPagesClientAPI {
    export class FormContext {
        constructor() {
        }

        public getAttribute(attributeName: string): Attribute {
            return new Attribute(attributeName);
        }
    }
}