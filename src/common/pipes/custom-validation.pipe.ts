import { ValidationPipe, ValidationPipeOptions } from "@nestjs/common";

export class CustomValidationPipe extends ValidationPipe {
    constructor(option?: ValidationPipeOptions) {
        super({
            whitelist: true,
            
            ...option,
        })
    }
}